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