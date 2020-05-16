<template>
  <div class="error">
    <h1>{{ title }}</h1>
    <p>お探しのページは一時的にアクセスできない状況か、移動もしくは削除された可能性があります。</p>
    <div class="error__link-top">
      <link-button label="トップページへ" destination="/" />
    </div>
  </div>
</template>

<script>
import LinkButton from '@/components/LinkButton.vue'

export default {
  components: {
    LinkButton,
  },
  data() {
    return {
      title: 'お探しのページが見つかりません',
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>

<style lang="scss" scoped>
.error {
  text-align: center;

  &__link-top {
    margin-top: 3rem;
  }
}
</style>
