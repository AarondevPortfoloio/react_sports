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
        <h3>History of Basketball</h3>
        <p>The history of basketball began with its invention in 1891 in Springfield,
           Massachusetts by Canadian physical education instructor James Naismith as a less injury-prone sport than football. Naismith was a 31-year old graduate student when he created
           the indoor sport to keep athletes indoors during the winters.</p>
        <img src={photo1} alt="basketball photo" />
      </div>
    );
  }
}
 
export default Basketball;