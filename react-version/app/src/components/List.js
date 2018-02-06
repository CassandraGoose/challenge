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
    let array = this.state.data.slice()
    array.splice(array.indexOf(item), 1)
    this.setState({data: array})
  }

  removeUnderscore(string){
    let part = string.split('_')
    return this.capitalizeAndJoin(part)
  }

  capitalizeAndJoin(array) {
    let combined = []
    for (var i = 0; i < array.length; i++) {
      combined.push(array[i].charAt(0).toUpperCase() + array[i].slice(1))
    }
    return combined.join(' ')
  }

  render() {

    return (
      <div>
      <h2 className="centered"> Data List with Types and Titles </h2>
        {this.sortTheData(this.state.data).map((item, i) => {
          return (<div key={i} className="list-item">
            <h3>{item.title}</h3>
            <span className={item.type}>{this.removeUnderscore(item.type)}</span>
            <button onClick={() => this.removeItem(item)} className="remove-button" id={"item_" + item.id}>REMOVE</button>
          </div>)
        })}
      </div>
    )
  }
}

export default ListComponent
