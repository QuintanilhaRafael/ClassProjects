import React, { useState } from 'react'
import { ImputSectionContainer, InputMsg, InputSender, ChatContainer, MsgBox, MsgContainer } from '../../style';



function InputArea() {

    const [inputName, setInputName] = useState("")
	const [inputMsg, setInputMsg] = useState("")
	const [arrayMsg, setArrayMsg] = useState([])

	const addNewMsg = (e) => {
		e.preventDefault();
		const newMsg = {name: inputName, msg: inputMsg}
		if (newMsg.name === '' || newMsg.msg === '') {
			alert('Missing Input')
		} else {
		const newArray = [...arrayMsg, newMsg]
		setArrayMsg(newArray)
		setInputMsg('')
		setInputName('')
	}
	} 

	let newArrayMsg = arrayMsg.map((e, i) => {
		const deletarPessoa = () => {
			const newArray = [...arrayMsg]
			const deleteMsg = newArray.findIndex((element)=>{
				return element === e
			})
			newArray.splice(deleteMsg, 1)
			setArrayMsg(newArray)
		}
		if (e.name.toLowerCase() === 'eu') {
			return (
				<MsgBox onDoubleClick={deletarPessoa} lado={'direito'} cor={'#dcf8c6'} key={i}>
					<span>{e.msg}</span>
				</MsgBox>
			)
		} else {
		return (
			<MsgBox onDoubleClick={deletarPessoa} cor={'white'} key={i}>
				<p>{e.name}</p>
				<span>{e.msg}</span>
			</MsgBox>
		)
	}
	})


	return (
		<ChatContainer>
			<MsgContainer>
			{newArrayMsg}
			</MsgContainer>
		<ImputSectionContainer onSubmit={(event)=> {
			event.preventDefault()
		}} >
           <InputSender
				placeholder={'Usuário'}
				value={inputName}
				onChange={(e) => {
                    setInputName(e.target.value);
                  }}
			/>
			<InputMsg
				placeholder={'Mensagem'}
				value={inputMsg}
				onChange={(e) => {
                    setInputMsg(e.target.value);
                  }}
			/>
			<button type='submit' onClick={addNewMsg}><i class="fa fa-send-o"></i></button>
		</ImputSectionContainer>
		</ChatContainer>
	)
}

export default InputArea