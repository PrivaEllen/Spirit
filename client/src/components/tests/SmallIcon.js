import React from "react";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

class SmallIcon extends React.Component {
  render() {
    return (
        <div className="small-icon">
          <Tooltip title={this.props.title}>
            <IconButton onClick={this.props.onClick} aria-label="delete" color="inherit">
                {this.props.svg}
            </IconButton>
          </Tooltip>
        </div> 
    )
  }
}

export default SmallIcon