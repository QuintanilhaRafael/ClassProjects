import React, {useState} from 'react'
import { InputStyle } from '../../style'

export const EnsinoMedioForm = (props) => {

    const {options} = props
    
    return (
     <>
     <select value={props.valorComplementar} onChange={props.handleValorComplementar}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
      <InputStyle type="text" placeholder='Por que você não terminou um curso de graduação?' value={props.valorQuestion} onChange={props.handleValorQuestion} />
      <button type='submit' onClick={props.send}><i class="fa fa-send-o"></i></button>
     </>
    )
}