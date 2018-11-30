import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      friends: [],
      picture: '',
      name: ''
    }
  }

  updatePicture(value){
    this.setState({
      picture: value
    })
  }

  updateName(value){
    this.setState({
      name: value
    })
  }

  addFriend(){
    let friendsCopy = this.state.friends.slice()
    friendsCopy.push(this.state.friends)
    this.setState({
      friends: friendsCopy,
      picture: '',
      name: ''
    })
  }
  render() {
    const friends = () => this.state.friends.map((friend, index) => (
    <div key={index}>
      <img src={friend.picture}/>
      <span>{friend.name}</span>
    </div>))

    return (
      <div>
        <label>URL to picture:</label>
        <input onChange={(e) => this.updatePicture(e.target.value)}
        value={this.state.picture}/>
        <label>Friends Name:</label>
        <input onChange={(e) => this.updateName(e.target.value)} 
        value={this.state.name}/>
        <button onClick={() => this.addFriend()}>Add Friend</button>
        {friends}
      </div>
    );
  }
}

export default App;
