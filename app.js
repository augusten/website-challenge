// Connects website to the Node.js server on port 8000

const express = require( 'express' )
const app = express()

app.use( '/', express.static( 'static' ))

app.listen ( 8000, () => {
  console.log( 'Example app listening on port 8000!' )
})