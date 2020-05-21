const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
// /users/paulina/mongodb/bin/mongod --dbpath=/Users/paulina/mongodb-data

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Service is temporary unavailable')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const main = async () => {
//     // const task = await Task.findById('5ec637c1afa4db05c90ef641')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)
//     const user = await User.findById('5ec650feb93e3506f50230da')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
//
// }
// main()
