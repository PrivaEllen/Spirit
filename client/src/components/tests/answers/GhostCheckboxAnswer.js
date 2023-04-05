import React from "react";
import TextOnLine from "../TextOnLine";
import {
  FormControlLabel,
  Checkbox
} from '@mui/material';
import sq from "../../../store/SectionsQuestions";

class CheckboxAnswer extends React.Component {
  render() {
    return (
    <div className="radio-field radio-field__ghost" onClick={() => sq.addAnswer(this.props.Sindex, this.props.Qindex)}>
      <FormControlLabel 
        value={this.props.value} 
        sx={{ margin: 0 }}
        control={
          <Checkbox
            disabled
            sx={{
              color:"#ffffff56", 
              '&.Mui-checked': {
                color: "#90CAF9",
              }, 
              '&.Mui-disabled': {
                color: "#ffffff36",
              }
            }}
          />
        }
      />
      <TextOnLine text={this.props.value} placeholder={this.props.placeholder}/>
    </div>
    )
  }
}

export default CheckboxAnswer