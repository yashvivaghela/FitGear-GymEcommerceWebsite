import React, { Component } from 'react';
import axios from 'axios';


class Post extends Component {
  constructor(props) {
    super(props);
    const { steps } = this.props;
    const { weight, height} = steps;
    console.log(weight);
    const {bmi} = (0);

    this.state =  { weight, height}; 
  }
  componentDidMount() {
    const userObject = {
      weight:this.setState.weight,
      height:this.setState.height,
      
      //  bmi = +weight / (+height) ** 2,
      // // setBmi(bmi)
    };
  
    
   
    axios.post(`/api`, userObject)
    .then(res => {
      console.log(res.status)
    }).catch(function(error) {
      console.log(error);
    });
  }

  render() {
    return (
      <form>
      <div>{`BMI: ${parseInt(this.state.weight.value)/(parseInt(this.state.height.value)*parseInt(this.state.height.value)/10000)}`}</div>
      {/* <p>BMI: {bmi}</p> */}
      </form>
      );
    }
  };
  

export default Post;