import React from "react";
import SmallIcon from "../SmallIcon";
import {
  FormControlLabel,
  Checkbox,
  IconButton
} from '@mui/material';
import sq from "../../../store/SectionsQuestions";

class CheckboxAnswer extends React.Component {
  render() {
    return (
    <div className="radio-field">
      <FormControlLabel 
        value={(this.props.value)? this.props.value: this.props.index} 
        sx={{ margin: 0 }}
        control={
          <Checkbox
            sx={{
              color:"#ffffff56", 
              '&.Mui-checked': {
                color: "#90CAF9",
              }
            }}
          />
        }
      />
      {/* <TextOnLine text={this.props.value} placeholder={"Вариант ответа"}/> */}
      <div className="textfield">
        <input
          type="text"
          defaultValue={this.props.value}
          onChange={(event) => sq.changeAnswerTitle(this.props.Sid, this.props.Qid, this.props.Aid, event.target.value)}
          placeholder={"Вариант ответа"}
        ></input>
      </div>
      <div className="radio-field__edit">
        <FormControlLabel control={
          <Checkbox
            checked={this.props.right}
            onChange={() => sq.changeAnswerRight(this.props.Sid, this.props.Qid, this.props.Aid)}
            sx={{
              color:"#ffffff56", 
              '&.Mui-checked': {
                color: "#66BB6A",
            }
          }}
          />
        } 
        />
        <span style={{whiteSpace: "nowrap"}}>Правильный ответ</span>
        {(this.props.index === 0)?
          <div className="small-icon small-icon_disabled">
              <IconButton disabled={true} aria-label="delete" color="inherit">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 8L1.41 9.41L7 3.83V16H9V3.83L14.58 9.42L16 8L8 0L0 8Z"/>
              </svg>
              </IconButton>
          </div> 
          :
          <SmallIcon onClick={() => sq.moveAnswerTop(this.props.Sid, this.props.Qid, this.props.index)} title="Выше" svg={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 8L1.41 9.41L7 3.83V16H9V3.83L14.58 9.42L16 8L8 0L0 8Z"/>
            </svg>          
          }/>
        }
        {(this.props.index === this.props.q.answers.length-1)?
          <div className="small-icon small-icon_disabled">
              <IconButton disabled={true} aria-label="delete" color="inherit">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8L14.59 6.59L9 12.17V0H7V12.17L1.42 6.58L0 8L8 16L16 8Z"/>
              </svg>
              </IconButton>
          </div> 
          :
          <SmallIcon onClick={() => sq.moveAnswerDown(this.props.Sid, this.props.Qid, this.props.index)} title="Ниже" svg={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8L14.59 6.59L9 12.17V0H7V12.17L1.42 6.58L0 8L8 16L16 8Z"/>
            </svg>                    
          }/>
        }
        <SmallIcon onClick={() => sq.removeAnswer(this.props.Sid, this.props.Qid, this.props.Aid)} title="Удалить" svg={
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"/>
          </svg>                              
        }/>
      </div>
    </div>
    )
  }
}

export default CheckboxAnswer