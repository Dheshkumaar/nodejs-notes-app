
const fs=require('fs')
const chalk=require('chalk')

const readnotes= (title) => {
   const notes=loadnotes()
   const note=notes.find((note)=> note.title===title)
   if(note){
     console.log(chalk.inverse(note.title))
     console.log(note.body)
   }
   else{
     console.log(chalk.red.inverse('Note Not found'))
   }
  
}

const listnotes=()=>{
  const notes=loadnotes()
  
  console.log(chalk.inverse('your notes'))
  
  notes.forEach( (note) => {
    console.log(note.title)
  })
}

const removenotes=(title)=>{
  const notes=loadnotes()
  const notestokeep=notes.filter((notes)=>notes.title!==title)
//  const notestokeep=notes.filter(function(notes){ return notes.title!==title })
  if(notes.length>notestokeep.length){
    console.log(chalk.green.inverse('Note Removed'))
    savenotes(notestokeep)
  }else{
    console.log(chalk.red.inverse('no note removed'))
  }
}

const addnotes=(title,body)=>{
    const notes=loadnotes()
    const duplicatenotes=notes.find((notes)=>notes.title===title)
    //const duplicatenotes=notes.filter(function(notes){return notes.title===title})
    if(!duplicatenotes)
    {
    notes.push({
        title:title,
        body:body
    })
    savenotes(notes)
    console.log(chalk.green.inverse('New Note added'))
    }
    else{
      console.log(chalk.red.inverse('note title taken'))
    }
}
const savenotes=(notes)=>{
  const datajson=JSON.stringify(notes)
  fs.writeFileSync('notes.JSON',datajson)
}
const loadnotes=()=>{
   try {
     const databuffer=fs.readFileSync('notes.JSON')
     const datajson=databuffer.toString()
     return JSON.parse(datajson)  
   } catch (e) {
       return []
   }
}

module.exports={
    addnotes:addnotes,
    removenotes:removenotes,
    listnotes:listnotes,
    readnotes:readnotes
}