<template>
  <div class="page-front">
    <h1>{{ title }}</h1>

    <div class="page-front__content">
      <ul v-if="posts && posts.length > 0" class="page-front__posts">
        <li v-for="post in posts" :key="post.id" class="page-front__post">
          <nuxt-link :to="`/page/${post.uid}`">
            <time :datetime="post.first_publication_date" class="page-front__post-datetime">
              {{ post.first_publication_date | formatPrismicDate }}
            </time>
            <h2 class="page-front__post-title">{{ $prismic.asText(post.data.title) }}</h2>
          </nuxt-link>
        </li>
      </ul>

      <p v-else class="page-front__empty">記事がありません。</p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, error }) {
    // カスタムタイプpageの記事が対象
    const query = $prismic.predicates.at('document.type', 'page')
    // 取得する記事の順番基準 , 取得する件数を設定
    const queryOptions = {
      // 初回公開日時について降順
      orderings: '[document.first_publication_date desc]',
      // 取得する記事数の上限
      pageSize: 20,
    }

    try {
      const content = await $prismic.api.query(query, queryOptions)
      return {
        posts: content.results
      }
    } catch(e) {
      error({ statusCode: 404 })
    }
  },
  data() {
    return {
      title: process.env.siteName,
    }
  },
  head() {
    return {
      title: this.title,
      titleTemplate: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.page-front {
  &__posts {
    list-style: none;
  }
  &__post {
    position: relative;

    > a {
      display: block;
      padding: 1.5rem 0 1.5rem 2.5rem;
      color: $color-bluewood;

      &:hover {
        text-decoration: none;
      }
    }

    &::before {
      content: '＊';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      color: $color-mystic;
      font-size: 2rem;
      font-weight: bold;
    }

    &:hover {
      opacity: 0.7;
    }
  }
  &__post-title {
    margin: 0.5rem 0 0;
    font-size: 1.5rem;
  }
  &__empty {
    text-align: center;
  }
}
</style>
