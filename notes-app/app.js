const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.0.0')

yargs.command({
    command: 'add',
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
    handler: (argv) => { notes.add(argv.title, argv.body) }
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
    handler: (argv) => notes.update(argv.title, argv.body)
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
    handler: (argv) => notes.remove(argv.title)
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
    handler: (argv) => notes.read(argv.title)
})

yargs.parse()