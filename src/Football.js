import React, { Component } from "react";
import photo2  from './football.jpeg';
class Football extends Component {
  render() {
    return (
      <div>
        <h2>Football</h2>
        <p>Football is the 1st sport in my top 3 sports list.
           I like this sport alot because of its action.
           It is a very intresting sport to watch and is really fun to play. I have compiled my top 5 favorite things about football down below.</p>
        <ol>
          <li>I love the adrenaline rush you get when playing football.</li>
          <li>It is easy to make friends because football appeals to everyone </li>
          <li>I like to watch football games because they are a nice event to relax too.</li>
          <li>The superbowl is a great event for a family and friends gather.</li>
          <li>Football provides a great workout when playing.</li>
          <br></br>
          <h3>History of Football</h3>
          <p>The sport of American football itself was relatively new in 1892. Its roots stemmed from two sports, soccer and rugby, which had enjoyed long-time popularity in many nations of the world. On November 6, 1869, Rutgers
             and Princeton played what 
             was billed as the first college football game.</p>
        </ol>
        <br>
        </br>
        <br>
        </br>
        <img src={photo2} alt="Football photo"/>
      </div>
    );
  }
}
 
export default Football;