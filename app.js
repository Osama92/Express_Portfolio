const express = require('express')
const bodyParser = require('body-parser')
const { render } = require('ejs')




const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))


const port = 3000


app.get('/', (req, res)=> {
    res.render('about')
})
app.get('/project', (req, res)=> {
    res.render('project')
})

app.listen(port, ()=> {
    console.log('App runinng at port ' + `${port}`)
})