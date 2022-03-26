# Title
    GRAPHQL EXAMPLE

# Description
    It is a simple project to understand the basic concepts of graphql.
    Using a CRUD on a Task model.

# Example of queries
    query {
         getAllTasks {
             _id
             title
             description
         }
    }
    
    query {
         getTask (id: "<Task ID>") {
             title
             description
         }
    }

# Examples of mutations
    mutation {
        createTask ( 
            task: {
                title: "new title",
                description: "new description"
            }
        ) {
            _id
            title
            description
        }
    }

    mutation {
        updateTask (
            id: "<Task ID>" 
            task: {
                title: "title was updated",
                description: "description was updated"
            }
        ) 
    }

    mutation {
        deleteTask(id: "<Task ID>") 
    }

# Run API
    npm install
    npm run dev

# Run Docker
    docker-compose -f docker-compose.dev.yml -p graphql-example --env-file .env up

# URL
    http://localhost:3000/graphql
