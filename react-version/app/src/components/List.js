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
    if(a.title < b.title) return -1;
    if(a.title > b.title) return 1;
    return 0;
})
  }

  removeItem(i) {
    let array = this.state.data
    array.splice(i, 1)
    this.setState({data: array})
  }

  replaceString(string){
    let array = string.split('_')
    if(array.length !== 1) {
      return this.removeUnderScore(array)
    } else {
      var uppercaseFirstLetter = string.charAt(0).toUpperCase()
      return uppercaseFirstLetter + string.slice(1)
    }
  }

  removeUnderScore(array) {
    let phoneNumberArray = []
    phoneNumberArray.push(array[0].charAt(0).toUpperCase() + array[0].slice(1))
    phoneNumberArray.push(array[1].charAt(0).toUpperCase() + array[1].slice(1))
    return phoneNumberArray.join(' ')
  }

  render() {

    return (
      <div>
      <h2 className="centered"> Data List with Types and Titles </h2>
        {this.sortTheData(this.state.data).map((item, i) => {
          return (<div key={i} className="list-item">
            <h3>{item.title}</h3>
            <span>{this.replaceString(item.type)}</span>
            <button onClick={() => this.removeItem(i)} className="remove-button">REMOVE</button>
          </div>)
        })}
      </div>
    )
  }
}

export default ListComponent
