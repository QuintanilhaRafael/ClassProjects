type todos = {
    userId: number,
    id: number,
    title: string,
    completed: boolean   
}

export const toDoList : todos[] = [
    {userId:1, id:1, title: "Comer", completed: false},
    {userId:1, id:2, title: "Drink", completed: true},
    {userId:1, id:3, title: "Take a dump", completed: false},
    {userId:2, id:1, title: "Comer", completed: true},
    {userId:2, id:2, title: "Drink", completed: true},
    {userId:2, id:3, title: "Take a dump", completed: false},
    {userId:3, id:1, title: "Comer", completed: false},
    {userId:3, id:2, title: "Drink", completed: false},
    {userId:3, id:3, title: "Take a dump", completed: true},
]