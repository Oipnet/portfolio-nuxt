<template>
  <div class="container">
    <p class="text-red-400">Hello world</p>
    <NuxtLink to="/contact">
      Go to /contact
    </NuxtLink>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  fetch ({ store }) {
    return store.dispatch('todos/fetch')
  },
  async asyncData({ $axios }) {
    
    const ip = await $axios.$get('http://icanhazip.com')
    return { ip }
  }
}
</script>
