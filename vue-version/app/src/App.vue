<template>
  <div id="app" class="container">
    <ListView/>
  </div>
</template>

<script>
import ListView from './components/ListView'

export default {
  name: 'App',
  components: {
    ListView
  }
}
</script>

<style>
.container {
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  font-family: sans-serif;
}
</style>
