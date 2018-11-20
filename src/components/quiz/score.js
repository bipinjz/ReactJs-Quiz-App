import React, { Component } from 'react';

class Scorebox extends Component {

  render() {
    return (
      <div className='well'>
        
        <h4>You answered {this.props.score} questions correctly out of {this.props.questions.length}   questions.</h4>

        <a href="/portfolio/wp-content/reactjs/quizapp/">Try Again   </a>
      </div>
    );
  }
}

export default Scorebox;
