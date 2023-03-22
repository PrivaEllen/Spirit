import React from "react";

class TextOnLine extends React.Component {
  render() {
    return (
        <div className="textfield">
          <input
            type="text" 
            defaultValue={this.props.text} 
            onChange={(event) => this.props.onChange(event.target.value)}
            placeholder={this.props.placeholder}
          ></input>
        </div>
    )
  }
}

export default TextOnLine