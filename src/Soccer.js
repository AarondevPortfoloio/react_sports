import React, { Component } from "react";
import photo3 from './Soccer.jpeg';
class Soccer extends Component {
  render() {
    return (
      <div>
        <h2>Soccer</h2>
        <p>Last but not least Soccer is the 3rd sport in my top three sports list.
           I am not so good at playing this sport but I do like to watch is as much as I can. 
          In the USA soccer is not as big here as it would be overseas but I try to catch the big games or tournaments
           whenever I can. My favourite player is Cristiano Ronaldo and my favorite club is PSG.</p>
           <br>
           </br>
           <br>
           </br>
           <h3>History of Soccer</h3>
           <p>Records trace the history of soccer back more than 2,000 years ago to ancient China. Greece, Rome, and parts of Central America also claim to have started the sport; but it was England that transitioned soccer, or what the British and many 
             other people around the world call “football,” 
             into the game we know today.</p>
           <img src={photo3} alt="Soccer photo" />
      </div>
    );
  }
}
 
export default Soccer;