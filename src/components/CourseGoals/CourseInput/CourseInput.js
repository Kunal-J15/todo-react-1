import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setValid] = useState(true);
  const goalInputChangeHandler = event => {
    if(event.target.value.trim())setValid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim() ==="") {
      setValid(false);
      return ;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid":""}`}>
        <label className={`${!isValid ? "invalid-text":""}`}>Course Goal</label>
        <input type="text"  onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" isValid={isValid}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
