const express = require ('express')
const app     = express()

console.log("starting app")


//THE ONE TO USE FOR HOMEWORK
app.use(express.static(__dirname + '/static', {
index: 'index.html'
}));



//EXPECT THE FOLDER OF OUR STATIC FILE (HERE IN STATIC FOLDER)
//EXPRESS STATICIS MOST OF THE TIMES FOR CSS AND JS FILES

app.listen (3000,()=> {
	console.log('im working')
})

