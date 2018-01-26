<template>
  <div>
    <h2 class="centered">Data List with Types and Titles</h2>
    <div v-for="item in orderedItems" class="list-item">
      <h3 class="centered">{{item.title}}</h3>
      <span :class="item.type">{{replaceString(item.type)}}</span>
      <button :id="'item_' + item.id" v-on:click="removeItem(item)" class="remove-button">REMOVE</button>
    </div>
  </div>
</template>

<script>
import listItems from '../listitems'

export default {
  name: 'ListView',
  data () {
    return {
      items: listItems
    }
  },
  methods: {
    removeItem: function(item) {
      this.items.splice(this.items.indexOf(item), 1)
    },
    replaceString: function(string) {
      let array = string.split('_')
      return this.formatTitle(array)
    },
    formatTitle: function(array) {
      let typeArray = []
      for (var i = 0; i < array.length; i++) {
        typeArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1))
      }
      return typeArray.join(' ')
    }
  },
  computed: {
    orderedItems: function() {
      return this.items.slice().sort(function(a, b){
      if(a.title < b.title) return -1
      if(a.title > b.title) return 1
      return 0
      })
    }
  }
}
</script>

<style scoped>
.list-item {
  background-color: #c6c6c7;
  text-align: center;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin-bottom: 3%;
}

span {
  margin-bottom: 3%;
}

.remove-button {
  float: right;
  border-radius: 3px;
  padding: 1.5%;
}

.centered {
  text-align: center;
}
</style>
