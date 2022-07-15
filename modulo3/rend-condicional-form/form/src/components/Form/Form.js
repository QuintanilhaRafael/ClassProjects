import React, { useState } from 'react'
import { ContainerForm } from '../../style';
import { EnsinoSuperiorForm } from './../EnsinoSuperiorForm/EnsinoSuperiorForm';
import { EnsinoMedioForm } from './../EnsinoMedioForm/EnsinoMedioForm';

function Form() {


  const options = [
    { value: '- - Escolaridade - -' },
    { value: 'Ensino Médio Incompleto' },
    { value: 'Ensino Médio Completo' },
    { value: 'Ensino Superior Incompleto' },
    { value: 'Ensino Superior Completo' },
  ];

  const options2 = [
    { value: '- - Curso complementar - -' },
    { value: 'Curso técnico' },
    { value: 'Cursos de inglês' },
    { value: 'Não fiz curso complementar' },
  ];

  const [selected, setSelected] = useState(options[0].value);
  const [valorComplementar, setValorComplementar] = useState(options2[0].value);
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [email, setEmail] = useState('')
  const [valorCurso, setValorCurso] = useState('')
  const [valorLugar, setValorLugar] = useState('')
  const [valorQuestion, setValorQuestion] = useState('')
  const [open, setOpen] = useState(false)



  const sendForm = (e) => {
    e.preventDefault();

    console.log(`Nome: ${nome}`)
    console.log(`Idade: ${idade}`)
    console.log(`Email: ${email}`)
    console.log(selected)
    if (selected.includes('Superior')) {
      console.log(`Curso: ${valorCurso}`)
      console.log(`Unidade de ensino: ${valorLugar}`)
      setOpen(true)
    } else {
      console.log(`Motivo da falta de graduação: ${valorQuestion}`)
      console.log(`Curso complementar: ${valorComplementar}`)
      setOpen(true)
    }
    setNome('')
    setIdade('')
    setEmail('')
    setSelected(options[0].value)
    setValorCurso('')
    setValorLugar('')
    setValorQuestion('')
    setValorComplementar('')
    setOpen(true)
  }

  const handleValorCurso = (e) => {
    setValorCurso(e.target.value)
  }

  const handleValorLugar = (e) => {
    setValorLugar(e.target.value)
  }

  const handleValorQuestion = (e) => {
    setValorQuestion(e.target.value)
  }

  const handleValorComplementar = (e) => {
    setValorComplementar(e.target.value)
  }



  return (
    <>
      <ContainerForm onSubmit={(e) => { e.preventDefault() }}>

        <input type="text" placeholder='Nome' value={nome} onChange={(e) => { setNome(e.target.value) }} />

        <input type="text" placeholder='Idade' value={idade} onChange={(e) => { setIdade(e.target.value) }} />

        <input type="text" placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />

        <select onClick={() => { setOpen(false) }} value={selected} onChange={(e) => { setSelected(e.target.value) }}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>

        {(selected.includes('Médio') &&

          <EnsinoMedioForm send={sendForm} valorComplementar={valorComplementar} valorQuestion={valorQuestion} handleValorComplementar={handleValorComplementar} handleValorQuestion={handleValorQuestion} options={options2} />)

          ||

          (selected.includes("Superior") &&

            <EnsinoSuperiorForm send={sendForm} valorCurso={valorCurso} valorLugar={valorLugar} handleValorCurso={handleValorCurso} handleValorLugar={handleValorLugar} />)}

      </ContainerForm>

      {open && <p>Muito obrigado por enviar o formulário !</p>}

    </>
  )

}

export default Form
