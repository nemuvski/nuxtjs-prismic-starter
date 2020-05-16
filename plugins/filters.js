/**
 * フィルターを定義
 */

import Vue from 'vue'

export default ({ app }) => {
  /**
   * APIで取得した記事で扱う日付をフォーマットするフィルター.
   */
  Vue.filter('formatPrismicDate', (value) => {
    if (!value || typeof value !== 'string') {
      return ''
    }
    // Note: moment.js や dayjs を使ってフォーマットしてもよいと思います
    const date = app.$prismic.asDate(value)
    return new Intl.DateTimeFormat().format(date)
  })
}
