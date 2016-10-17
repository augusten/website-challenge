const express = require( 'express' )
const app = express()

// app.use( express.static( "myStaticPath", {
//   index: "index.html"
//   })
// )

app.use( '/', express.static( 'static' ))

// app.get("/", function ( request, response ) {
// 	response.sendFile( __dirname + '/index.html')
// 	response.sendFile( __dirname + '/includes/images/banner.jpg')
// })

app.get( '/home', (request, response) => {
	response.sendFile( __dirname + '/static/index.html' )
	console.log("hello")
	// response.sendFile( __dirname + '/static/includes/css/styles.css' )
	// response.sendFile( __dirname + '/static/includes/js/main.js' )
	// response.sendFile( __dirname + '/static/includes/js/jquery-3.1.1.min.js' )
	// response.sendFile( __dirname + '/static/includes/images/banner.jpg' )
	// response.sendFile( __dirname + '/static/includes/images/Flawless.jpg' )
	// response.sendFile( __dirname + '/static/includes/images/godlike.jpg' )
	// response.sendFile( __dirname + '/static/includes/images/Onfleek.jpg' )
})

app.listen ( 8000, () => {
  console.log( 'Example app listening on port 8000!' )
})