// /users/paulina/mongodb/bin/mongod --dbpath=/Users/paulina/mongodb-data
const {MongoClient, ObjectID} = require ('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-app'

MongoClient.connect(connectionUrl, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }
    const db = client.db(databaseName)

    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) =>{
    //     console.log(result)
    // }).catch((error) =>{
    //     console.log(error)
    // })

   db.collection('tasks').deleteOne({
       _id: new ObjectID("5eb7f2f821614c0cd91b516b")
   }).then((result) => {
       console.log(result)
   }).catch((error) => {
       console.log(error)
   })

})