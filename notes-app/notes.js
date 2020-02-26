const fs = require('fs')

module.exports = class Notes {
    static list() {
        console.log('LIST:')
        Notes.getNotes().forEach(e => console.log('Title:', e.title))
    }
    static add(arg) {
        let notes = Notes.getNotes()
        const index = Notes.findNote(notes, arg.title)
        if (index == -1) {
            notes.push({ title : arg.title, body: arg.body })
            console.log('ADD', 'Title:', arg.title, 'Body:', arg.body)
            Notes.setNotes(notes)
        } else
            console.log('ADD', 'A note with this title already exists')
    }
    static remove(arg) {
        let notes = Notes.getNotes()
        const index = Notes.findNote(notes, arg.title)
        if (index != -1) {
            const note = notes.splice(index, 1)[0]
            console.log('REMOVE', 'Title:', note.title, 'Body:', note.body)
            Notes.setNotes(notes)
        } else
            console.log('REMOVE', 'Note not found')
    }
    static update(arg) {
        let notes = Notes.getNotes()
        const index = c
        if (index != -1) {
            console.log('UPDATE', 'Title:', notes[index].title, 'Body:', notes[index].body, '=>', arg.body)
            notes[index].body = arg.body
            Notes.setNotes(notes)
        } else
            console.log('UPDATE', 'Note not found')
    }
    static read(arg) {
        const notes = Notes.getNotes()
        const index = Notes.findNote(notes, arg.title)
        if (index != -1)
            console.log('READ', 'Title:', notes[index].title, 'Body:', notes[index].body)
        else
            console.log('READ','Note not found')
    }
    static getNotes() {
        if (fs.existsSync('notes.json'))
            return JSON.parse(fs.readFileSync('notes.json').toString())
        else
            return []
    }
    static setNotes(notes) {
        fs.writeFileSync('notes.json', JSON.stringify(notes))
    }
    static findNote(notes, title) {
        for (let i = 0; i < notes.length; i++)
            if (notes[i].title === title)
                return i
        return -1
    }
}
