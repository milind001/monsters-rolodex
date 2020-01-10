import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component{

  constructor(){
    super();

    this.state = {
      monsters : [],
      searchField : ''
    };

    // dont define bind call directly arrowfunction
    // this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters:users }));
  }

  // arrow function bind automatically
  handleChange = e => {
    this.setState({ searchField : e.target.value }); 
  }

  render(){

    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monsters => 
      monsters.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return(
      <div className="App">
        {/* <input type="search" placeholder="search monsters" 
        onChange={e => this.setState({ searchField : e.target.value }) } /> */}
        <h1>Monster Rolodex</h1>
        <SearchBox 
          placeholder="search monsters"
          // handleChange={e => this.setState({ searchField : e.target.value }) }
          handleChange={this.handleChange}
        />

        <CardList monsters={filterMonsters} />

        {/* another way   
        <CardList>
          {this.state.monsters.map(monsters => ( 
                <div>
                  <h1 key={monsters.id}>{monsters.name}</h1>
                </div>
                )
          )}
        </CardList> */}
      </div>
    )

  }
}

export default App;
