const express = require('express')



const app = express()
app.set('view engine', 'ejs')


const port = 3000


app.get('/', (req, res)=> {
    res.render('Header')
})

app.listen(port, ()=> {
    console.log('App runinng at port ' + `${port}`)
})