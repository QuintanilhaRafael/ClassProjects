import { getNodeText } from '@testing-library/react';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import { Container, ListContainer, User, GlobalStyle } from './Style';


function App() {
  const [open, setOpen] = useState(false)
  const [myList, setMyList] = useState([])
  const [infos, setInfos] = useState([])
  const [inputText, setInputText] = useState('')
  const [inputMail, setInputMail] = useState('')

  const handleInputText = (e) => {
    setInputText(e.target.value)
  }

  const handleInputMail = (e) => {
    setInputMail(e.target.value)
  }

  const flipScreen = () => {
    setOpen(!open)
  }

  useEffect(()=>{
    getAllUsers()
  },[]
  )

  const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
  const rafaelHeader = {
    headers: {
        Authorization: 'rafael-quintanilha-lamarr'
    }
}
  const newUser = {
    "name": inputText,
    "email": inputMail 
  }
  

const getAllUsers = () => {
  axios.get(url, rafaelHeader).then((response) => {
      setMyList(response.data)
  }).catch((error) => {
      alert('nope')
  })

}

const createUser = (event) => {
  event.preventDefault()
  axios.post(url, newUser, rafaelHeader).then(() => {
    getAllUsers()
      alert('ok')
  }).catch((error) => {
      alert('nope')
  })
  setInputText('')
  setInputMail('')
}

const deleteUser = (id) => {
  if (window.confirm(`Are you sure you want to delete user: ${id}`)) {
  axios.delete(url+'/'+id, rafaelHeader).then(()=> {
      alert('deleted')
      getAllUsers()
  }).catch((error)=> {
      alert('error')
  })
}
}



const listOfUsers = myList.map((e,i)=> {
  return (
    <User>
      <button onClick={()=> openUserTab(e.id)}>{e.name}</button> 
      <button onClick={()=> deleteUser(e.id)}><i class="fa fa-trash-o"></i></button>
    </User>
  )
})

const openUserTab = (id) => {
  if (window.confirm(`Are you sure you want to show the user: ${id}`)) {
  axios.get(url+'/'+id, rafaelHeader).then((response) => {
    setInfos(response.data)
    console.log(infos)
}).catch((error) => {
    alert('nope')
})

}
}






  return (
    <>
    <Container>
      <GlobalStyle/>
      <button onClick={flipScreen}>Lists</button>
      {(!open && <Form inputMail={inputMail} inputText={inputText} handleInputText={handleInputText} handleInputMail={handleInputMail} createUser={createUser}/>) || (open && <ListContainer>{listOfUsers}</ListContainer>)}
    </Container> 
    </>
  );
}

export default App;
