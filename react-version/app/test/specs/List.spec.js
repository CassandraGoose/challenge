import React from 'React'
import List from '../../src/components/List'
import Data from '../../src/data'

describe("List Component", () => {
  it('Should render the list in order', () => {
    const wrapper = mount(<List />)
    const checkArray = ["9th Street", "Central Perk Case", "DGTF", "Jane Smith", "Jim Smith", "John Smith", "Local PD", "Local TF", "MCDA", "Main Street"]
    wrapper.find('.list-item').forEach((node, i) => {
      expect(node.text().includes(checkArray[i])).toBe(true)
    })
  })
  it('Should remove an item when the button is clicked', () => {
    const wrapper = mount(<List />)
    const button = wrapper.find('#item_470ec15f-2dac-417d-815b-52cd621d8437')
    button.simulate('click')
    expect(wrapper.text()).not.toContain('John Smith')
  })
  it('Should check for correct type format', () => {
    const wrapper = mount(<List />)
    const span = wrapper.find('.phone_number').first()
    const span2 = wrapper.find('.case').first()
    expect(span.text()).toContain("Phone Number")
    expect(span2.text()).toContain("Case")
  })
  it('Should not modify the original array', () => {
    const wrapper = mount(<List />)
    const stateData = wrapper.state().data
    for (var i = 0; i < Data.length; i++) {
      expect(Data[i].title).toBe(stateData[i].title)
    }
  })
})
