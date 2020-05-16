<template>
  <nuxt-link :to="destination" class="link-button">{{ label }}</nuxt-link>
</template>

<script>
export default {
  name: 'LinkButton',
  props: {
    label: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
  }
}
</script>

<style lang="scss" scoped>
.link-button {
  display: inline-block;
  padding: 0.8rem 2rem;
  background-color: $color-mystic;
  border-radius: 0.25rem;
  color: $color-bluewood;
  letter-spacing: 0.1rem;

  &:hover {
    text-decoration: none;
    opacity: 0.7;
  }
}
</style>
