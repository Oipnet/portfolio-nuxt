<template>
  <div>
    <navbar />
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<script>
import navbar from '~/components/Navbar'

export default {
  components: {
    navbar
  }
}
</script>

<style lang="scss" scoped>
  .container {
    @apply container mx-auto;
  }
</style>
