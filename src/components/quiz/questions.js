import React, { Component } from 'react';

class Question extends Component {
 
  onChangeFunc(e){
    
    const { btnEnableDisable, setSelected } = this.props;

    btnEnableDisable(false);

    setSelected(e.target.value, e.target.name);
    

  }
  render() {
    //const {question} = this.props;
    return (
      <div className='well'> 
        <h3>{this.props.question.id}.{this.props.question.text}</h3>
        <ul className="list-group">
            {
                this.props.question.choices.map(choice => {
                    return(
                        <li className="list-group-item" key={choice.id}>
                            <input type="radio" onChange={this.onChangeFunc.bind(this)} name={this.props.question.id} value={choice.id} /> {choice.text}
                        </li>
                    )
                })
            }

        </ul>
      </div>
    );
  }
}

export default Question;
