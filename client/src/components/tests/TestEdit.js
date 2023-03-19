import React from "react";
import Sections from "./Sections";

class TestEdit extends React.Component {
  render(){
    return (
      <div className="test-body">
        <div className="test-body__container">
          <Sections sections={this.props.sections}/>
        </div>
      </div>
    )
  }

  addQuestion(sectionId) {
    let questionsLength = this.state.sections[sectionId]['questions'].length
    this.state.sections[sectionId]['questions'].push(
      {id:questionsLength+1, title:"Загаловок вопроса", isImportant: false}
    )
  }
}

export default TestEdit