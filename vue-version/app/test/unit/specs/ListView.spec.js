import Vue from 'vue'
import ListView from '@/components/ListView'

describe('ListView Component', () => {
  it('Checks that the list is in order', () => {
    const Constructor = Vue.extend(ListView)
    const vm = new Constructor().$mount()
    const list = vm.$el.querySelectorAll('.list-item')
    let checkArray = ["9th Street", "Central Perk Case", "DGTF", "Jane Smith", "Jim Smith", "John Smith", "Local PD", "Local TF", "MCDA", "Main Street"]
    for (var i = 0; i < checkArray.length; i++) {
      expect(list[i].textContent.includes(checkArray[i])).toBe(true)
    }
  })
  it('Removes an item when the button is clicked', () => {
    const Constructor = Vue.extend(ListView)
    const vm = new Constructor().$mount()
    const button = vm.$el.querySelector('#item_470ec15f-2dac-417d-815b-52cd621d8437')
    const clickEvent = new window.Event('click')
    button.dispatchEvent(clickEvent)
    vm._watcher.run()
    expect(vm.$el.textContent).not.toContain('John Smith')
  })
  it('Checks for correct type format', () => {
    const Constructor = Vue.extend(ListView)
    const vm = new Constructor().$mount()
    const span = vm.$el.querySelector('.phone_number')
    const span2 = vm.$el.querySelector('.case')
    expect(span.textContent).toContain("Phone Number")
    expect(span2.textContent).toContain("Case")
  })
})
