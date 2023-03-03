import React from "react";

class TextOnLine extends React.Component {
  render() {
    return (
        <div className="textfield">
            <p>{this.props.text}</p>
        </div>
    )
  }
}

export default TextOnLine