<template>
  <div class="layout-default">
    <nuxt />
    <footer>
      <img src="@/assets/images/logo.png" alt="Nuxt.js + Prismic.io">
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.layout-default {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  > footer {
    margin: 5rem 0;
    text-align: center;

    > img {
      width: 100px;
      height: auto;
      vertical-align: bottom;
    }
  }
}
</style>
