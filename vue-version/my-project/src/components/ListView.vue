<template>
  <div>
    <h2 class="centered"> Data List with Types and Titles </h2>
    <div v-for="item in orderedItems" class="list-item">
      <h3 class="centered">{{item.title}}</h3>
      <span>{{replaceString(item.type)}}</span>
      <button v-on:click="removeItem(item)" class="remove-button">REMOVE</button>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'ListView',
  data () {
    return {
      items: [
        {
          "type": "case",
          "title": "9th Street",
          "id": "a0445e60-428b-44aa-a1a4-c7a750da9e8d"
        },
        {
          "type": "case",
          "title": "Central Perk Case",
          "id": "f673e7fe-e93f-47ad-9044-9c901455a436"
        },
        {
          "type": "phone_number",
          "title": "John Smith",
          "id": "470ec15f-2dac-417d-815b-52cd621d8437"
        },
        {
          "type": "phone_number",
          "title": "Jane Smith",
          "id": "f4cf5a20-0ef3-4a84-9bee-394f510e1629"
        },
        {
          "type": "case",
          "title": "Local PD",
          "id": "c9828623-f664-47b5-bdea-d6658f287fc5"
        },
          {
          "type": "case",
          "title": "Local TF",
          "id": "876490b5-b23b-4fbd-a9b8-e781406bf7b8"
        },
        {
          "type": "case",
          "title": "MCDA",
          "id": "b3d8a058-b980-4d92-841f-9994a346676d"
        },
        {
          "type": "case",
          "title": "DGTF",
          "id": "42036cb2-2689-4e02-b4bd-c23ca8da72fe"
        },
        {
          "type": "phone_number",
          "title": "Jim Smith",
          "id": "f5abd74d-1a6c-4d0d-a9db-fd516b8d964c"
        },
        {
          "type": "case",
          "title": "Main Street",
          "id": "f631759c-45c7-4ee5-be3a-f52ccee9a920"
        }
      ]
    }
  },
  methods: {
    removeItem: function(item) {
      let array = this.items
      array.splice(array.indexOf(item), 1)
      this.items = array
    },
    sortTheData: function(array) {
      return array.slice().sort(function(a, b){
      if(a.title < b.title) return -1
      if(a.title > b.title) return 1
      return 0
      })
    },
    replaceString: function(string) {
      let array = string.split('_')
      if(array.length !== 1) {
        return this.formatTitle(array)
      } else {
        var uppercaseFirstLetter = string.charAt(0).toUpperCase()
        return uppercaseFirstLetter + string.slice(1)
      }
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
      return _.orderBy(this.items, 'title')
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
