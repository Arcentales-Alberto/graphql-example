const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Task {
        _id: ID
        title: String
        description: String
    }
    
    input TaskInput {
        title: String
        description: String
    }

    type Query {
        getAllTasks: [Task]
        getTask(id: ID): Task
    }

    type Mutation {
        createTask(task: TaskInput!): Task
        deleteTask(id: ID!): String
        updateTask(id: ID!, task: TaskInput): String
    }
`

module.exports = { typeDefs }