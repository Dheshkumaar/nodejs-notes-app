const chalk =require('chalk')
const yargs=require('yargs')
const notes=require('./notes.js')
//customize yargs version
yargs.version('1.1.0')
//create a remmove command
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'             
        }
    },
    handler(argv){
        notes.removenotes(argv.title)
    }
})
//create a add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{ 
            describe:'Note title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.addnotes(argv.title,argv.body)
    }
})
//create a read command
yargs.command({
    command:'read',
    describe:'reads a note',
    builder:{
        title:{
            describe:'reads a note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readnotes(argv.title)
    }
})

//create a list command
yargs.command({
    command:'list',
    describe:'list all notes',
    handler(){
        notes.listnotes()
    }
})



//add remove list read
yargs.parse()
//console.log(yargs.argv)