#! /usr/bin/env node

/* CLI for shopping list app
 * usage:
 *    shopping_list.js <command> <args>
 *  where command/args combos can be:
 *    list
 *    list <store>
 *    add <store> <item>
 *    delete <store> <item>
 */

// gather command and args
const command = process.argv[2]
const store = process.argv[3]
const item = process.argv.slice(4).join(' ')

switch (command) {
  case 'list':
    break;
  case 'add':
    break;
  case 'delete':
    break;
  default:
    console.error(`USAGE:
      *    shopping_list.js <command> <args>
      *  where command/args combos can be:
      *    list
      *    list <store>
      *    add <store> <item>
      *    delete <store> <item>`)
}
