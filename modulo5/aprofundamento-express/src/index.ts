//link postman : https://documenter.getpostman.com/view/22347490/2s8YYJr37x

import express, { Request, Response } from "express"

import { toDoList } from "./data"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.send("Pong")
})

app.get('/todos', (req: Request, res: Response) => {
    const toDosList = toDoList.map((item) => {
        return item
    })
    res.send(toDosList)
})

app.put('/todos', (req: Request, res: Response) => {
    const userId = Number(req.headers.userid)
    const title = req.body.title
    let count = 0

    if (userId && title) {
        for (let i = 0; i < toDoList.length; i++) {
            if (toDoList[i].userId == userId) {
                if (count < toDoList[i].id) {
                    count = toDoList[i].id
                }
            }
        }
        toDoList.push({
            userId: userId,
            id: count + 1,
            title: title,
            completed: false

        })
        res.status(201).send(toDoList)
    } else {
        res.status(400).send("userId and Title are both required")
    }
})

app.put('/todos/:id', (req: Request, res: Response) => {
    const userId = Number(req.headers.userid)
    const id = Number(req.params.id)

    if (userId && id) {
        for (let i = 0; i < toDoList.length; i++) {
            if (toDoList[i].userId === userId && toDoList[i].id === id) {
                toDoList[i].completed = !toDoList[i].completed
            }
        }
        res.status(201).send(toDoList)
    } else {
        res.status(400).send("userId and id are both required")
    }  
})

app.delete('/todos/:id', (req: Request, res: Response) => {
    const userId = Number(req.headers.userid)
    const id = Number(req.params.id)

    if (userId && id) {
        for (let i = 0; i < toDoList.length; i++) {
            if (toDoList[i].userId === userId && toDoList[i].id === id) {
                toDoList.splice(i, 1)
            }
        }
        res.status(201).send(toDoList)
    } else {
        res.status(400).send("userId and id are both required")
    }  
})

app.get('/todos/usertasks', (req: Request, res: Response) => {
    const userId = Number(req.query.userid)
    if (userId) {
        const filteredByUserId = toDoList.filter((item) => {
            return item.userId === userId
        })
        res.status(201).send(filteredByUserId)
    } else {
        res.status(400).send("Parameter must be set as the users Id.")
    }
})

app.get('/todos/:status', (req: Request, res: Response) => {
    const status = req.params.status
    if (status === "true" || status === "false") {
        const filteredByStatus = toDoList.filter((item) => {
            return item.completed.toString() === status
        })
        res.status(201).send(filteredByStatus)
    } else {
        res.status(400).send("Status must be set as true or false.")
    }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});