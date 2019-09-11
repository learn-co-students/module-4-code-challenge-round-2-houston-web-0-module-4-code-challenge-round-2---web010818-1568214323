import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions:[], 

      searchData: []

    }

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }
  componentDidMount(){
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(res => res.json())
    .then(data => {
      this.setState({
        transactions: data,
        searchData: data


      })
    })
  }
  

  handleChange = (event) =>{
    // console.log(event.target.value)
    let display = this.state.transactions.filter(transaction => transaction.description.includes(event.target.value))
    this.setState({
      searchData: display
    })

    
    
    
  }

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange} searchData={this.state.searchData}/>
        <TransactionsList transactions={this.state.searchData} />
      </div>
    )
  }
}

export default AccountContainer
