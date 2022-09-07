import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as myRoute from '../Components/Coordinates'
import { GenericContainer, Header, HeaderDiv, GenericDiv, Form } from './../Style';
import useProtectedPage from './../Hooks/useProtectedPage';
import { useForm } from './../Hooks/useForm';
import axios from 'axios';
import { URL, planets } from '../Components/Constants';



export default function CreateTripPage() {

  useProtectedPage();

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [form, onChange, clear] = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })

  // POST

  const headers = {
      headers: {
          'Content-Type': 'application/json',
          auth: token
      }
  }

  const createTrip = (ev) => {
      ev.preventDefault();

      axios.post(`${URL}trips`, form, headers)
          .then(() => {
              alert("Done!")
          }).catch((err) => {
              console.log(err)
              alert("Erro!")
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
      <Form onSubmit={createTrip}>
                    <h1>Create Trip</h1>
                    <>
                        <input
                            name="name"
                            pattern="^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{5,}$"
                            title="Five characters minimum."
                            value={form.name} onChange={onChange}
                            placeholder="Nome da viagem"
                            type="text"
                            required />
                    </>
                    <>
                        <input
                            name="description"
                            pattern="^.{15,}$"
                            title="Fifteen characters minimum."
                            value={form.description}
                            onChange={onChange}
                            placeholder="Descrição"
                            type="text"
                            required />
                    </>
                    <>
                        <input
                            name="durationInDays"
                            min={50}
                            value={form.durationInDays}
                            onChange={onChange}
                            placeholder="Duração em dias"
                            type="number"
                            required />
                    </>
                    <>
                        <input
                            name="date"
                            min={new Date().toISOString().slice(0, 10)}
                            value={form.date}
                            onChange={onChange}
                            placeholder="Data"
                            type="date"
                            required />
                    </>
                    <>
                        <select defaultValue={""} name="planet" onChange={onChange} required >
                            <option value="">Escolha um planeta</option>
                            {planets.map((option, index) => (
                                <option key={index} value={option.value}>
                                    {option.value}
                                </option>
                            ))}
                        </select>
                    </>
                    <div>
                        <button type="submit">Enviar</button>
                    </div>
                </Form>
      </GenericDiv>
    </GenericContainer>
    </>
  )
}
