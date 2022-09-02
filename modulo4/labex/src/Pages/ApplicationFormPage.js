import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as myRoute from '../Components/Coordinates'
import { GenericContainer, Header, HeaderDiv, GenericDiv, Form } from './../Style';
import { URL, countries } from '../Components/Constants';
import { useForm } from '../Hooks/useForm';
import useRequestData from '../Hooks/useRequestData';
import axios from 'axios';


export default function ApplicationFormPage({id, name}) {

    const navigate = useNavigate()

    const [form, onChange, clear] = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })

    const [dataTrips, isLoadingTrips, errorTrips] = useRequestData(`${URL}trips`);

    const headers = {
      headers: {
          'Content-Type': 'application/json'
      }
  }

  const applyToTrip = (e) => {
      e.preventDefault();

      axios.post(`${URL}trips/${id}/apply`, form, headers)
          .then(() => {
              alert("Registration is completed!")

          }).catch((error) => {
              alert("Error!")
              console.log(error)
          })

      clear();
  }


  return (
    <>
    <Header>
      <h1>LabeX</h1>
      <HeaderDiv>
      <button onClick={()=> {myRoute.goBack(navigate)}}>Back</button>
      </HeaderDiv>
      </Header>
    <GenericContainer>
      <GenericDiv>
      <Form onSubmit={applyToTrip}>
                    <h1>{name}</h1>
                    <>
                        <input
                            name="name"
                            pattern="^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{3,}$"
                            title="Digite pelo menos 3 letras (apenas letras são permitidas)."
                            value={form.name} 
                            onChange={onChange}
                            placeholder="Name"
                            type="text"
                            required />
                    </>
                    <>
                        <input
                            name="age"
                            min={18}
                            value={form.age}
                            onChange={onChange}
                            placeholder="Age"
                            type="number"
                            required />
                    </>
                    <>
                        <input
                            name="applicationText"
                            pattern="^.{30,}$"
                            title="Digite pelo menos 15 caracteres."
                            value={form.applicationText}
                            onChange={onChange}
                            rows={3}
                            placeholder="Application text"
                            type="text"
                            required />
                    </>
                    <>
                        <input
                            name="profession"
                            pattern="^.{1,}$"
                            title="Digite pelo menos 10 caracteres."
                            value={form.profession}
                            onChange={onChange}
                            placeholder="Profession"
                            type="text"
                            required />
                    </>
                    <>
                        <select defaultValue={""} name="country" onChange={onChange} required>
                            <option value="">Escolha um país</option>
                            {countries.map((option, index) => (
                                <option key={index} value={option.value}>
                                    {option.value}
                                </option>
                            ))}
                        </select>
                    </>

                    <div>
                        <button type="button" onClick={() => myRoute.goBack(navigate)}>Voltar</button>
                        <button type="submit">Enviar</button>
                    </div>
                </Form>
      </GenericDiv>
    </GenericContainer>
    </>
  )
}
