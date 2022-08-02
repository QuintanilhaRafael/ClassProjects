import { getNodeText } from '@testing-library/react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import { Container, ListContainer, User, GlobalStyle, MainContainer, InputSearchList, UserInfoScr } from './Style';


function App() {
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
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
    if (!open) {
      setOpen2(false)
      setOpen3(false)
    }
    getAllUsers()
    setInputText('')
    setInputMail('')
  }

  const editButton = () => {
    setOpen3(!open3)
    setInputText(infos[0].name)
    setInputMail(infos[0].email)
  }

  let buttonFlip = ''

  if (open) {
    buttonFlip = 'fa fa-arrow-left'
  } else if (!open) {
    buttonFlip = 'fa fa-list-ul'
  }

  useEffect(() => {
    getAllUsers()
  }, []
  )


  const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
  const rafaelHeader = {
    headers: {
      Authorization: 'rafael-quintanilha-lamarr'
    }
  }
  const body = {
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

  const getUser = (event) => {
    if (inputText.includes('@')) {
      axios.get(url + '/search?name=&email=' + inputText, rafaelHeader).then((response) => {
        setMyList(response.data)
      }).catch((error) => {
        alert('nope')
      })
      setInputText('')
    } else {
    axios.get(url + '/search?name=' + inputText, rafaelHeader).then((response) => {
      setMyList(response.data)
    }).catch((error) => {
      alert('nope')
    })
    setInputText('')
  }
  }

  const createUser = (event) => {
    event.preventDefault()
    axios.post(url, body, rafaelHeader).then(() => {
      getAllUsers()
      alert('ok')
    }).catch((error) => {
      alert('nope')
    })
    setInputText('')
    setInputMail('')
  }

  const deleteUser = (id, name) => {
    if (window.confirm(`Are you sure you want to delete user: ${name}`)) {
      axios.delete(url + '/' + id, rafaelHeader).then(() => {
        alert('deleted')
        getAllUsers()
      }).catch((error) => {
        alert('error')
      })
    }
  }

  const renderUser = (id) => {
    axios.get(url + '/' + id, rafaelHeader).then((response) => {
      setInfos([response.data])
    }).catch((error) => {
      alert('nope')
    })
  }

  const openUserTab = (id, name) => {
    if (window.confirm(`Are you sure you want to show the user: ${name}`)) {
      setOpen2(!open2)
      renderUser(id)
  }
}


  const editTheUser = (id, name) => {
    if (window.confirm(`Are you sure you want to edit the user: ${name}`)) {
      axios.put(url + '/' + id, body, rafaelHeader).then(() => {
        getAllUsers()
        alert(`User ${name} edited`)
        setOpen2(false)
      }).catch((error) => {
        alert('nope')
      })
      setInputText('')
      setInputMail('')
    }
  }


  const newInfos = infos && infos.map((item) => {
    return (
      <>
        <User>
          <ListContainer>
            <p>Nome: {item.name}</p>
            <p>Email: {item.email}</p>
          </ListContainer>
        </User>
        <button onClick={() => { deleteUser(item.id, item.name); setOpen2(false) }}>Delete</button>
      </>
    )
  })

  const listOfUsers = myList.sort((a,b) => a.name - b.name).map((e) => {
    return (
      <User>
        <button onClick={() => { openUserTab(e.id, e.name) }}>{e.name}</button>
        <button onClick={() => deleteUser(e.id, e.name)}><i className="fa fa-trash-o"></i></button>
      </User>
    )
  })


  return (
    <>
      <Container>
        <GlobalStyle />
        <h2>Labenusers</h2>
        <MainContainer>
          <button className='flipScr' onClick={flipScreen}><i className={buttonFlip}></i></button>
        {!open
          ?
          <Form inputMail={inputMail} inputText={inputText} handleInputText={handleInputText} handleInputMail={handleInputMail} buttonName={'Create'} functionUser={createUser} />
          :
          <ListContainer>
            {!open2
              ?
              <>
              <span>Users list</span>
              {listOfUsers}
              <InputSearchList>
              <input placeholder='Nome ou email completos' type='text' onChange={handleInputText} value={inputText}></input>
              <button onClick={getUser}>Search</button>
              </InputSearchList>
              </>
              :
              <UserInfoScr>
                <button className='buttonBack' onClick={() => { setOpen2(!open2); setOpen3(false) }}>Back to users</button>
                {newInfos}
                {!open3
                  ?
                  <button onClick={editButton}>Edit User</button>
                  :
                  <>
                    <input type='text' value={inputText} onChange={handleInputText}></input>
                    <input type='text' value={inputMail} onChange={handleInputMail}></input>
                    <button onClick={() => { editTheUser(infos[0].id, infos[0].name); setOpen3(false); }}>Edit</button>
                  </>
                }
              </UserInfoScr>
            }
          </ListContainer>
        }
        </MainContainer>
      </Container>
    </>
  );
}

export default App;
