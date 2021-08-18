import React, { Component } from "react";
import photo1  from './basketball.jpeg';
class Basketball extends Component {
  render() {
    return (
      <div>
        <h2>Basketball</h2>
        <p>Basketball is the 2nd sport on my top three sports list. I love Basketball 
          because I love playing it. I find watching basketball to be fun too but playing it is definitely my favorite part of the sport.
          Unlike football basketball is really enjoyable with a group of people or by yourself. I like the duality of the sport in that I can have just as much fun by
          myself or with other people.
          <br>
          </br>
          <br>
          </br>
        </p>
        <img src={photo1} alt="basketball photo" />
      </div>
    );
  }
}
 
export default Basketball;