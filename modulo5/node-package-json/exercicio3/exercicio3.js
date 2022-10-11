import { tasksList } from "./tasksList.js"
const newTask = process.argv[2]

const findTarefa = (newTask) => {
    const exist = tasksList.find((task)=> task.toLowerCase() === newTask.toLowerCase())
    if (!exist) {
       var tasks = [...tasksList, newTask]
        console.log("Tarefa adicionada com sucesso!")
        console.log("tarefas:", tasks)
    } else {
        console.log('A tarefa já está na lista de tarefas.')
    }
}

findTarefa(newTask)