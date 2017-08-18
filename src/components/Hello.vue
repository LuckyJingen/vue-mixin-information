<template>
  <div class="hello">
    <h1 v-cloak>{{ msg }}</h1>
  </div>
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {
      msg: 'What is happening of the World ...'
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

.hello:focus 
  outline none

</style>
