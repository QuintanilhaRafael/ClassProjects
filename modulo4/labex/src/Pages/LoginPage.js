import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as myRoute from '../Components/Coordinates'
import { Form, GenericContainer, Header, HeaderDiv, GenericDiv } from './../Style';
import { URL } from '../Components/Constants';
import axios from 'axios';
import { useForm } from '../Hooks/useForm';


export default function LoginPage() {

  const navigate = useNavigate()

  const [form, onChange, clear] = useForm({ email: "", password: "" })

    const login = (e) => {
        e.preventDefault()

        axios.post(`${URL}login`, form)
            .then(response => {
                localStorage.setItem("token", response.data.token)
                navigate("/admin/trips/list")
            })
            .catch((error) => {
                alert("Erro! Usuário ou senha incorreta.")
                console.log(error.message)
            })

        clear();

    }

  return (
    <>
    <Header>
      <h1>Labex</h1>
      <HeaderDiv>
        <button onClick={() => { myRoute.goToHomePage(navigate) }}>Home</button>
      </HeaderDiv>
      </Header>
    <GenericContainer>
      <GenericDiv>
      <Form onSubmit={login}>
                    <h1>Login</h1>
                    <>
                        <input
                            name="email"
                            placeholder="E-mail"
                            value={form.email}
                            onChange={onChange}
                            type="email"
                            required
                        />
                    </>
                    <>
                        <input
                            name="password"
                            placeholder="Senha"
                            value={form.password}
                            onChange={onChange}
                            type="password"
                            required
                        />
                    </>
                    <div>
                        <button type="submit">Send</button>
                    </div>
                </Form>
      </GenericDiv>
    </GenericContainer>
    </>
  )
}
