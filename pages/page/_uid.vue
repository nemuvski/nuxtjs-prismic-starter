<template>
  <div class="page-detail">
    <h1>{{ title }}</h1>

    <div class="page-detail__meta">
      <time :datetime="publicationDate.first" class="page-detail__datetime">
        {{ publicationDate.first | formatPrismicDate }}
      </time>
    </div>

    <div class="page-detail__body js-body">
      <div v-for="(slice, idx) in slices" :key="`slice-${idx}`">
        <!-- スライス: Rich Text -->
        <template v-if="slice.slice_type == 'rich_text'">
          <prismic-rich-text :field="slice.primary.text" />
        </template>
        <!-- スライス: Preformatted Text -->
        <template v-else-if="slice.slice_type == 'preformatted_text'">
          <pre>
            <code :class="`${slice.primary.lang}`">{{ $prismic.asText(slice.primary.text) }}</code>
          </pre>
        </template>
      </div>
    </div>

    <div class="page-detail__link-top">
      <link-button label="トップページへ" destination="/" />
    </div>
  </div>
</template>

<script>
import hljs from 'highlight.js'
import 'highlight.js/styles/railscasts.css'
import LinkButton from '@/components/LinkButton.vue'

export default {
  components: {
    LinkButton,
  },
  async asyncData({ $prismic, params, error }) {
    try {
      const content = await $prismic.api.getByUID('page', params.uid)
      return {
        title: $prismic.asText(content.data.title),
        publicationDate: {
          first: content.first_publication_date,
          last: content.last_publication_date,
        },
        slices: content.data.body,
      }
    } catch(e) {
      error({ statusCode: 404 })
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  mounted() {
    const preformattedNodeList = this.$el.querySelectorAll('.js-body pre code')
    for (let i = 0; i < preformattedNodeList.length; i++) {
      hljs.highlightBlock(preformattedNodeList[i])
    }

    // Note: https://github.com/nuxt-community/prismic-module/issues/60
    this.$nextTick(this.addRouterPushEvents)
  },
  methods: {
    routeTo(e) {
      e.preventDefault()
      this.$router.push(e.target.getAttribute('href'))
    },
    addRouterPushEvents() {
      const anchorNodeList = this.$el.querySelectorAll('.js-rich-text a[data-nuxt-link]')
      for (let i = 0; i < anchorNodeList.length; i++) {
        anchorNodeList[i].addEventListener('click', this.routeTo, false)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.page-detail {
  &__meta,
  &__link-top {
    text-align: center;
  }

  &__body {
    margin: 3rem 0;
  }

  &__datetime {
    &::before,
    &::after {
      content: '〜';
      color: $color-mystic;
      font-size: 1rem;
      font-weight: bold;
    }
  }
}
</style>
