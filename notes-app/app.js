const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.0.0')

yargs.command({
    command: 'save',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe:  'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: notes.add
})

yargs.command({
    command: 'update',
    describe: 'Update a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe:  'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: notes.update
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: notes.remove
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: notes.list
})

yargs.command({
    command: 'read',
    describe: 'Read note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: notes.read
})

yargs.parse()