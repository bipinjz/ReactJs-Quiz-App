import React, { Component } from 'react';
import Question from './questions.js';

class QuestionLists extends Component {
  render() {
    return (
      <div className='questions'>
          <div><p>Total Questions: {this.props.questions.length} </p></div>
        <div>
            {
                this.props.questions.map(question => {
                    if(this.props.current === question.id){
                        return <Question question={question} key={question.id} setSelected={this.props.setSelected}  btnEnableDisable={this.props.btnEnableDisable} />
                    }else{
                        return "";
                    }
                    
                })
            }
        </div>
      </div>
    );
  }
}

export default QuestionLists;
