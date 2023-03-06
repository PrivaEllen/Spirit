import React from "react";
import IconButton from '@mui/material/IconButton';

class SmallIcon extends React.Component {
  render() {
    return (
        <div className="small-icon">
            <IconButton aria-label="delete" color="inherit">
                {this.props.svg}
            </IconButton>
        </div>
    )
  }
}

export default SmallIcon