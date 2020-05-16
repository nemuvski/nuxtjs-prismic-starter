# Nuxt.js + Prismic.io Starter

> Nuxt.jsとPrismicを使ったWebサイト開発のスターター用プロジェクトです。

## コマンド

```bash
# モジュールのインストール
npm install

# developmentモードで起動（開発環境用）
npm run dev

# production用ビルド
npm run build

# productionモードで起動
npm run start

# ビルド ＆ 静的ファイルを生成
npm run generate
```

## セットアップ

### エンドポイントを設定

Prismicでリポジトリを作成し、`nuxt.config.js`にて下記に示す部分を変更してください.

```js
export default {
  prismic: {
    // 内容を変更してください
    endpoint: 'https://repository-name.cdn.prismic.io/api/v2',
  },
}
```

### カスタムタイプの作成

Prismicでカスタムタイプを作成してください。

`custom_types/page.json`にある内容をカスタムタイプ作成画面で、コピー＆ペーストしてください。名前はPageとします。

**Note:** 独自で作られる場合はこの手順はスキップでOKです。
