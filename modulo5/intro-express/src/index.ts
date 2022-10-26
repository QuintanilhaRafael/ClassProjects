import express, {Request, Response} from "express"

import { users, posts } from './data'

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.get('/', (req:Request, res:Response) => {          
    res.send("Hello from Express")
})

app.get('/users', (req:Request, res:Response) => {    
    const allUsers = users.map((user) => {
        return user
    })
    res.send(allUsers)
})

app.get('/posts', (req:Request, res:Response) => {    
    const allPosts = posts.map((post) => {
        return post
    })
    res.send(allPosts)
})

app.get('/posts/:id', (req:Request, res:Response) => {    
    const id = req.params.userid
    const filteredPosts = posts.filter((post) => {
    })
    res.send(filteredPosts)
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});