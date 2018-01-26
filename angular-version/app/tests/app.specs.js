describe('Controllers', function(){
    beforeEach(module('app'))
    describe('HomeController',function(){
        beforeEach(inject(function($controller){
            HomeController = $controller('HomeController')
            HomeController.$onInit()
        }))
        it('Should order items by title', function() {
          expect(HomeController.filters).toBe('title')
        })
        it('should remove an item when the button is clicked', function(){
            expect(HomeController.listItems.length).toBe(10)
            HomeController.removeItem(HomeController.listItems[0])
            expect(HomeController.listItems.length).toEqual(9)
        })
        it('should check for correct type format', function() {
          expect(HomeController.removeUnderscore("phone_number")).toBe("Phone Number")
          expect(HomeController.removeUnderscore("case")).toBe("Case")
        })
    })
})
