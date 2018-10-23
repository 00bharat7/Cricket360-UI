import React, { Component } from "react";
import axios from 'axios'

export default class Home extends Component{

    constructor () {
        super()
        this.state = {
          players: []
        }
        this.handleClick = this.handleClick.bind(this)
    }
  
    handleClick () {
      axios.get('http://localhost:9000/players', {
        crossorigin: true,
        responseType: 'json',
       })
        .then(response => {   
            //console.log("response = "+response.data)
            const players = response.data.players
            this.setState({ players })})
        .catch(err => console.log(err))
        
    }


    render() {
        return(
            <div className='button__container'>
        <button className='button' onClick={this.handleClick}>Click Me</button>
        <ul>
        { this.state.players.map(player => <li>{player.playerId}</li>)}
      </ul>
      </div>
        );
    }
}