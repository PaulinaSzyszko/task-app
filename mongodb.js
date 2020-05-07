const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
//users/paulina/mongodb/bin/mongod --dbpath=/Users/paulina/mongodb-data
const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-app'

MongoClient.connect(connectionUrl, { useNewUrlParser: true}, (error,client) => {
    if (error) {
        return console.log ('Unable to connect to database')
    }

    const db = client.db(databaseName)
    db.collection('users').insertOne({
        name: 'Paulina',
        age: 27
    })
})