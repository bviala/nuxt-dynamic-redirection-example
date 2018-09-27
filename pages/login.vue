<template>
  <div>
    <button @click="signIn">SIGN IN</button>
  </div>
</template>

<script>
export default {
  methods: {
    signIn () {
      this.$store.dispatch('signIn')
    }
  }
}
</script>

