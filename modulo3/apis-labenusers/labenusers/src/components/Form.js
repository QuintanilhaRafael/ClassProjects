import React from 'react'
import { FormContainer } from './../Style';

export default function Form(props) {
    
  return (
    <FormContainer>
      <span>New Account</span>
      <input placeholder='Name' type='text' value={props.inputText} onChange={props.handleInputText}></input>
      <input placeholder='Email' type='text' value={props.inputMail} onChange={props.handleInputMail}></input>
      <button onClick={props.functionUser}>{props.buttonName}</button>

    </FormContainer>
  )
}
