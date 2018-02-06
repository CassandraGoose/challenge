(function () {
  'use strict'

  angular
    .module('app')
    .controller('HomeController', HomeController)

    function HomeController(ListService) {
      var vm = this
      vm.filters = "title"

      vm.$onInit = function() {
        vm.listItems = ListService.getData()
      }

      vm.removeItem = function(item) {
        vm.listItems.splice(vm.listItems.indexOf(item), 1)
      }

      vm.removeUnderscore = function(string){
        var parts = string.split('_')
        return vm.capitalizeAndJoin(parts)
      }

      vm.capitalizeAndJoin = function(array) {
        return array.map(function(word) {
          return word.charAt(0).toUpperCase() + word.slice(1)
        }).join(' ')
        // var combined = []
        // for (var i = 0; i < array.length; i++) {
        //   combined.push(array[i].charAt(0).toUpperCase() + array[i].slice(1))
        // }
        // return combined.join(' ')
      }



    }
})()
