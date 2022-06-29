import React, { useState } from 'react'
import './style.css'




export function DropDown(props) {

    const [open, setOpen] = useState(false)
    const [inputName, setInputName] = useState("")
    const [inputName2, setInputName2] = useState("")
    const [inputName3, setInputName3] = useState("")

    const onClickDropDown = () => {
        setOpen(!open)
    }

    

    return <div className='IconContainerNew'>
        < img className='IconImage' alt={'Icone'} src={props.icone} onClick={onClickDropDown} />
        {open && <div className='DropDown'>
            <div className='DropDownItem' >
                <i className="fa fa-facebook-square"></i>
                <div className='CommentContainer'>
			<input className='InputComentario'
				placeholder={'Comentário'}
				value={inputName}
				onChange={(event) => {
                    setInputName(event.target.value);
                  }}
			/>
			<button onClick={() => {
                console.log(`Post compartilhado no Facebook com a mensagem: ${inputName}`)
                setOpen(!open)
                setInputName("")
            }}>Enviar</button>
		</div>
            </div>
            <div className='DropDownItem' >
                <i className="fa fa-instagram"></i>
                <div className='CommentContainer'>
			<input className='InputComentario'
				placeholder={'Comentário'}
				value={inputName2}
				onChange={(event) => {
                    setInputName2(event.target.value);
                  }}
			/>
			<button onClick={() => {
                console.log(`Post compartilhado no Instagram com a mensagem: ${inputName2}`)
                setOpen(!open)
                setInputName2("")
            }}>Enviar</button>
		</div>
            </div>
            <div className='DropDownItem' >
                <i className="fa fa-twitter-square"></i>
                <div className='CommentContainer'>
			<input className='InputComentario'
				placeholder={'Comentário'}
				value={inputName3}
				onChange={(event) => {
                    setInputName3(event.target.value);
                  }}
			/>
			<button onClick={() => {
                console.log(`Post compartilhado no Twitter com a mensagem: ${inputName3}`)
                setOpen(!open)
                setInputName3("")
            }}>Enviar</button>
		</div>
            </div>
        </div>
        }
    </div>
}