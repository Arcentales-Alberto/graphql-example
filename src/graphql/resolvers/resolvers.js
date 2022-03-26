const Task = require('../../models/Task')
const infoMessage = require('../../messages/infoMessage')

const resolvers = {
    Query: {
        getAllTasks: async () => {
            const tasks = await Task.find()
            return tasks
        },
        getTask: async (_, { id }) => {
            const task = await Task.findById(id)
            return task
        }
    },
    Mutation: {
        createTask: async (_, args) => {
            const { title, description } = args.task
            const newTask = new Task({ title, description })
            await newTask.save()
            return newTask
        },
        deleteTask: async (_, { id }) => {
            const taskFound = await Task.findById(id)
            if (taskFound) {
                const task = await Task.deleteOne({ _id: id })
                if (task.acknowledged && task.deletedCount === 1) {
                    return infoMessage.taskDeleted
                } else {
                    return infoMessage.taskNotDeleted
                }
            } else {
                return infoMessage.idNotExist
            }
        },
        updateTask: async (_, { id, task }) => {
            const taskFound = await Task.findById(id)
            if (taskFound) {
                const taskUpdated = await Task.updateOne({ _id: id },
                    {
                        $set: task
                    })
                if (taskUpdated.acknowledged && taskUpdated.modifiedCount === 1) {
                    return infoMessage.taskUpdated
                } else {
                    return infoMessage.taskNotUpdated
                }
            } else {
                return infoMessage.idNotExist
            }
        }
    }
}

module.exports = { resolvers }