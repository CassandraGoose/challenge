(function () {
  'use strict'

  angular
    .module('app')
    .controller('HomeController', HomeController)

    function HomeController(ListService) {
      const vm = this
      vm.filters = "title"

      vm.$onInit = function() {
        vm.listItems = ListService.getData()
      }

      vm.removeItem = function(item) {
        vm.listItems.splice(vm.listItems.indexOf(item), 1)
      }

      vm.replaceString = function(string){
        let array = string.split('_')
        return vm.formatTitle(array)
      }

      vm.formatTitle = function(array) {
        let typeArray = []
        for (var i = 0; i < array.length; i++) {
          typeArray.push(array[i].charAt(0).toUpperCase() + array[0].slice(1))
        }
        return typeArray.join(' ')
      }

    }
})()
