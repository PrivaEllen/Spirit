import React from "react";

class TextOnLine extends React.Component {
  render() {
    return (
        <div className="textfield">
          <input type="text" defaultValue={this.props.text}></input>
        </div>
    )
  }
}

export default TextOnLine