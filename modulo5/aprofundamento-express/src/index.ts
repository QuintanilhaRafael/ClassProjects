import express, {Request, Response} from "express"

import { toDoList } from "./data"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.get('/', (req:Request, res:Response) => {          
    res.send("Pong")
})

app.get('/todos', (req:Request, res:Response) => {      
    const toDosList = toDoList.map((item)=> {
        return item
    })   
    res.send(toDosList)
})

app.get('/todos:id', (req:Request, res:Response) => {      
    const status = Number(req.params.id)
    console.log(status)
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});