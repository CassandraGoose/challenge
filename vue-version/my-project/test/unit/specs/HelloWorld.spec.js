import Vue from 'vue'
import ListView from '@/components/ListView'

describe('ListView.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(ListView)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
