import React, { Component } from 'react';
import QuestionsLists from './quiz/questionslists.js';
import QuestionFlow from './quiz/questionflow.js';
import Scorebox from './quiz/score.js';

class QuizApp extends Component {
  constructor(props){
      super(props);

      this.state = {
          questions: [
            {
              id:1,
              text: 'What is the sum of 1+1?',
              choices: [
                  {
                    id:'a',
                    text:'3'
                  },
                  {
                    id:'b',
                    text:'2'
                  },
                  {
                    id:'c',
                    text:'4'
                  }
              ],
              correct: 'b',
              selected:''
            },
            {
              id:2,
              text: 'What is the capital of Australia?',
              choices: [
                  {
                    id:'a',
                    text:'Sydney'
                  },
                  {
                    id:'b',
                    text:'Melbourn'
                  },
                  {
                    id:'c',
                    text:'Canberra'
                  }
              ],
              correct: 'c',
              selected:''
            },
            {
              id:3,
              text: 'What was the most recent year in which Sydney hosted the Olympics ?',
              choices: [
                  {
                    id:'a',
                    text:'2011'
                  },
                  {
                    id:'b',
                    text:'2005'
                  },
                  {
                    id:'c',
                    text:'2000'
                  }
              ],
              correct: 'c',
              selected:''
            }
          ],
          score:0,
          current:1,
          disabledbtn: true,
          finished:false
      }
  }
  setCurrent(val){
    let count = this.state.questions.length;
    
    //val <= count ? this.setState({current : val}) : "";
    if(val <= count){
        this.setState({current : val});
    }

  }
  btnEnableDisable(state){
    this.setState({disabledbtn : state});
    
  }
  setSelected(answer, question){

    let arr = this.state.questions[question-1]
    arr.selected = answer; 
    this.setState({questions : this.state.questions});
  
    //console.log(arr.selected);

    
    if(arr.selected === arr.correct){
      // alert("correct answer");     
    }
    
  }
  setScore(score){
    this.setState({score : score});

    //set finished
    this.setState({finished : true});
  }

  render() {
    var res;
    if(this.state.finished){
        res = <Scorebox {...this.state} /> ;
    }else{
        res = <div><QuestionsLists {...this.state} setSelected={this.setSelected.bind(this)} btnEnableDisable={this.btnEnableDisable.bind(this)} />

        <QuestionFlow {...this.state} setScore={this.setScore.bind(this)} btnEnableDisable={this.btnEnableDisable.bind(this)} setCurrent={this.setCurrent.bind(this)} />
       </div>;
    }
    return (
      <div className="App">
        
        <h2>Welcome to React Quiz</h2>
        
        {res}

      </div>
    );
  }
}

export default QuizApp;
