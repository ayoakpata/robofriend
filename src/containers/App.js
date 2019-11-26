import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { robots } from '../robots';
import './App.css';


class App extends Component {
   constructor() {
      super()
      this.state = {
         robots: robots,
         searchfield: ''
      }
   }

componentDidMount() {
   fetch('https://jsonplaceholder.typicode.com/')
      .then(response=> response.json())
      .then(users => {});
}   

   onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value })
      console.log(event.target.value);
   }


   render() {
      const { robots, searchfield } = this.state;
      const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  })
    return !robots.length ? 
        <h1>Loading</h1> :
      (
         <div className='tc'>
            <h1 className='f1'>Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
               <ErrorBoundry>
                  <CardList robots={filteredRobots} />
               </ErrorBoundry>   
            </Scroll>
         </div>
      );
   }
}

export default App;