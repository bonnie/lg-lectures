#! /usr/bin/env node

const command = process.argv[2]
const store = process.argv[3]
const items = process.argv.slice(4).join('')

const LISTFILE = process.env.MODE === 'test' ? './test_list.json' : './list.json'

switch (command) {
  case 'list':
    break;
  case 'add':
    break;
  case 'delete':
    break;
  default:
    console.error(`USAGE:
      Valid commands are list, add, and delete.
          list
          list <store>
          add <store> <item>
          delete <store> <item>
          `)
}

module.exports = {
  LISTFILE,
}
