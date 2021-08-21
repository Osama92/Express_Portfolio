const express = require('express')
const bodyParser = require('body-parser')


const app = express()
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended:true}))


const port = 3000


app.get('/', (req, res)=> {
    res.render('Intro')
})
app.get('/project', (req, res)=> {
    res.render('project')
})
app.get('/about', (req, res)=> {
    res.render('About')
})

app.listen(process.env.PORT || port, ()=> {
    console.log('App runinng at port ' + `${port}`)
})