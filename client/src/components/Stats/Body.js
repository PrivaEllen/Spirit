import React from "react";
import Sections from "./Sections";

class Body extends React.Component {
  render(){
    return (
      <div className="test-body">
        <div className="test-body__container">
          <Sections
            // title={this.props.testTitle}
            // setTitle={this.props.setTestTitle}
          />
        </div>
      </div>
    )
  }
}

export default Body