<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import RichEditor from 'medium-editor'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'What is happening of the World ...'
    }
  },
  mounted () {
    // const editor = new RichEditor('.hello');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

.hello:focus 
  outline none

</style>
