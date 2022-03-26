db = db.getSiblingDB('taskdb')

db.tasks.insertMany([
    {
        title: "new title 1",
        description: "new description 1"
    },
    {
        title: "new title 2",
        description: "new description 2"
    },
    {
        title: "new title 3",
        description: "new description 3"
    },
    {
        title: "new title 4",
        description: "new description 4"
    },
    {
        title: "new title 5",
        description: "new description 5 "
    }
]) 
