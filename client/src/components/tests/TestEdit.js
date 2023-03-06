import React from "react";
import TextOnLine from "./TextOnLine"

class TestEdit extends React.Component {
  render() {
    return (
      <div className="test-body">
        <div className="test-body__container">
          <div className="test-block">
            <h2>Раздел 1 из 2</h2>
            <TextOnLine text={"Первое знакомство"}/>
            <TextOnLine text={"Расскажите подробнее о вас"}/>
          </div>
        </div>
      </div>
    )
    
  }
}
export default TestEdit