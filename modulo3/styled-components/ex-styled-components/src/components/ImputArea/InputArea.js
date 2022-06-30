import React, { useState } from 'react'
import { ImputSectionContainer, InputMsg, InputSender } from '../../style';


function InputArea(props) {

    const [inputName, setInputName] = useState("")
	const [inputName2, setInputName2] = useState("")

    

	return (
		<ImputSectionContainer >
            <span>Remetente: </span>
            <InputSender
				placeholder={''}
				value={inputName}
				onChange={(event) => {
                    setInputName(event.target.value);
                  }}
			/>
            <span>Msg: </span>
			<InputMsg
				placeholder={''}
				value={inputName2}
				onChange={(event) => {
                    setInputName2(event.target.value);
                  }}
			/>
			<button onClick={() => {
				console.log(`Remetente: ${inputName} \nMensagem: ${inputName2}`)
				setInputName("")
                setInputName2("")
			}}>Enviar Mensagem</button>
		</ImputSectionContainer>
	)
}

export default InputArea