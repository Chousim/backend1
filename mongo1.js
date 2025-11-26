const mongoose = require ('mongoose')

if (process.argv.length < 3){
    console.log('Te faltan parametros');
    console.log('node mongo1.js <password> [contenido] [importante]');
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://user2025:${password}@cluster0.dsufebk.mongodb.net/?appName=appNote`
mongoose.set('strictQuery', false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
    content: process.argv[3],
    important: process.argv[4],
})


note.save().then(result => {
    console.log('Nota guardada');
    mongoose.connection.close()
    
})

/*
Note.find({}).then(result => {
    result.forEach(x =>{
        console.log(x);
    })
    mongoose.connection.close()
})
    */
   