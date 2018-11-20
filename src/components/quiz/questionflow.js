import React, { Component } from 'react';


class QuestionFlow extends Component {

  onNextBtn(){
    const {setCurrent,btnEnableDisable } = this.props;

    setCurrent(this.props.current+1);

    btnEnableDisable(true);

    
  }

  onFinishBtn(){
    let score = 0;
    this.props.questions.map(q => {
          let sel = q.selected;
          if(sel === q.correct){
              score += 1;
          }
          return ""; 
    })

    const {setScore} = this.props;
   
    setScore(score);
  }

             
  
  render() {
    let btnNextClass, btnFinishClass;
    let count = (this.props.current === this.props.questions.length) ? true : false;
    if(count){
      btnNextClass = "btn btn-primary  hide";
      btnFinishClass  = "btn btn-primary";
    }else{
      btnNextClass = "btn btn-primary "
      btnFinishClass  = "btn btn-primary  hide";
    }

    return (
      <div>
          <button className={btnNextClass} disabled={this.props.disabledbtn} onClick={this.onNextBtn.bind(this)} >Next ></button>
          <button className={btnFinishClass} disabled={this.props.disabledbtn}  onClick={this.onFinishBtn.bind(this)} >Finish & See Result</button>
      </div>      
    );
  }
}

export default QuestionFlow;