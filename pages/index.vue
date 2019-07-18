<template>
  <div>
    <jumbo />
    <metier />
    <chatbox />
  </div>
</template>

<script>
import Jumbo from '~/components/Jumbo'
import Metier from '~/components/Metier'
import Chatbox from '~/components/Chatbox'

export default {
  components: {
    Jumbo, Metier, Chatbox
  }
}
</script>
