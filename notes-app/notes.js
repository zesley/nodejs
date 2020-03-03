const fs = require('fs')
const chalk = require('chalk')

module.exports = class Notes {
    static list() {
        console.log('LIST:')
        Notes.getNotes().forEach(e => console.log('Title:', e.title))
    }
    static add(title, body) {
        const notes = Notes.getNotes()
        const index = Notes.findNote(notes, title)
        if (index == -1) {
            notes.push({ title : title, body: body })
            console.log(chalk.green('ADD', 'Title:', title, 'Body:', body))
            Notes.setNotes(notes)
        } else
            console.log(chalk.red.inverse('ADD', 'A note with this title already exists'))
    }
    static remove(title) {
        const notes = Notes.getNotes()
        const index = Notes.findNote(notes, title)
        if (index != -1) {
            const note = notes.splice(index, 1)[0]
            console.log(chalk.green('REMOVE', 'Title:', note.title, 'Body:', note.body))
            Notes.setNotes(notes)
        } else
            console.log(chalk.red.inverse('REMOVE', 'Note not found'))
    }
    static update(title, body) {
        const notes = Notes.getNotes()
        const index = Notes.findNote(notes, title)
        if (index != -1) {
            console.log(chalk.green('UPDATE', 'Title:', notes[index].title, 'Body:', notes[index].body, '=>', body))
            notes[index].body = body
            Notes.setNotes(notes)
        } else
            console.log(chalk.red.inverse('UPDATE', 'Note not found'))
    }
    static read(title) {
        const notes = Notes.getNotes()
        const index = Notes.findNote(notes, title)
        if (index != -1)
            console.log(chalk.green('READ', 'Title:', notes[index].title, 'Body:', notes[index].body))
        else
            console.log(chalk.red.inverse('READ','Note not found'))
    }
    static getNotes() {
        try {
            return JSON.parse(fs.readFileSync('notes.json').toString())
        } catch (e) {
            return []
        }
    }
    static setNotes(notes) {
        try {
            fs.writeFileSync('notes.json', JSON.stringify(notes))
        } catch (e) {
            console.log(chalk.red.inverse('ERROR', 'Fail saiving file'))
        }
    }
    static findNote(notes, title) {
        for (let i = 0; i < notes.length; i++)
            if (notes[i].title === title)
                return i
        return -1
    }
}
