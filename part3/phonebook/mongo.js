const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const process_password = process.argv[2]
const process_name = process.argv[3]
const process_number = process.argv[4]

if (process.argv.length < 3) {
  console.log('Usage: node mongo.js <password> [<name> <number>]')
  process.exit(1)
}

const url = `mongodb+srv://vicentesoto_db_user:${process_password}@cluster0.zlqqt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

console.log('connecting to MongoDB')

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
    if (process.argv.length === 3) {
      console.log('phonebook:')
      Person.find({}).then(persons => {
        persons.forEach(person => {
          console.log(`${person.name} ${person.number}`)
        })
      })
    } else if (process.argv.length === 5) {
      console.log('adding to phonebook')
      const person = new Person({
        name: process_name,
        number: process_number
      })
      person.save().then(result => {
        console.log(`added ${process_name} number ${process_number} to phonebook`)
        mongoose.connection.close()
      })
    } else {
      console.log('invalid number of arguments')
      console.log('Usage: node mongo.js <password> [<name> <number>]')
      process.exit(1)
    }
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })