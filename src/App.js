import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Child from './components/Child';
import './App.css';
import PersonList from './components/PersonList';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      arrayUsers: [],
    }

    this.fetchRandomUser()

  }

  fetchRandomUser() {
    fetch('https://randomuser.me/api/?results=10')
      .then(response => {
        return response.json();
      })

      .then((json) => {
        this.setState({
          arrayUsers: json.results
        });
      });

  }

  render() {
    return (
      <div className="App">
        <PersonList
          array={this.state.arrayUsers}
        />
        <main>
          <Switch>
            <Route path='/child/:index' component={Child}></Route>
          </Switch>
        </main>
      </div>

    );
  }
}

export default App;
