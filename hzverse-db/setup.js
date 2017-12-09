'use strict'

const debug = require('debug')('hzverse:db:setup')
const db = require('./')

async function setup () {
  const config = {
    database: process.env.DB_NAME || 'hzverse',
    username: process.env.DB_USER || 'mrhz',
    password: process.env.DB_PASS || '03161991',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    loggin: s => debug(s),
    setup: true
  }
  await db(config).catch(handleFatalError)
  console.log('Succcess!')
  process.exit(0)
}

function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}

setup()
