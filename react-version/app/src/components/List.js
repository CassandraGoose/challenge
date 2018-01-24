import React, { Component } from 'react'
import listItems from '../data'
class ListComponent extends Component {
  constructor(props) {
    super(props)

    this.removeItem = this.removeItem.bind(this)

    this.state = {
      data: listItems
    }
  }

  sortTheData(array) {
    return array.slice().sort(function(a, b){
    if(a.title < b.title) return -1
    if(a.title > b.title) return 1
    return 0
})
  }

  removeItem(item) {
    let array = this.state.data
    array.splice(array.indexOf(item), 1)
    this.setState({data: array})
  }

  replaceString(string){
    let array = string.split('_')
    if(array.length !== 1) {
      return this.formatTitle(array)
    } else {
      var uppercaseFirstLetter = string.charAt(0).toUpperCase()
      return uppercaseFirstLetter + string.slice(1)
    }
  }

  formatTitle(array) {
    let typeArray = []
    for (var i = 0; i < array.length; i++) {
      typeArray.push(array[i].charAt(0).toUpperCase() + array[0].slice(1))
    }
    return typeArray.join(' ')
  }

  render() {

    return (
      <div>
      <h2 className="centered"> Data List with Types and Titles </h2>
        {this.sortTheData(this.state.data).map((item, i) => {
          return (<div key={i} className="list-item">
            <h3>{item.title}</h3>
            <span>{this.replaceString(item.type)}</span>
            <button onClick={() => this.removeItem(item)} className="remove-button">REMOVE</button>
          </div>)
        })}
      </div>
    )
  }
}

export default ListComponent
