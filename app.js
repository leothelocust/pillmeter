'use strict'

const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()


app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/index', {
        title: "PillMeter",
        active: "home",
        content: "",
        current_year: (new Date()).getFullYear()
    })
})

app.get('/core.css', (req, res) => {
    res.sendFile(__dirname + '/core.css')
})

app.use(function (req, res, next) {
    return res.status(404).render('pages/404', {
        title: "Page Not Found - PillMeter",
        active: "",
        current_year: (new Date()).getFullYear()
    })
})

/* app.get('/posts/:post', (req, res) => {
    let post = req.params.post
    let postData
    try {
        postData = JSON.parse(fs.readFileSync('./posts/' + post + '.json', 'utf8'))
        postData.content = fs.readFileSync('./posts/' + postData.content_file, 'utf8')
    } catch (e) {
        return res.redirect('/404')
    }
    postData.current_year = (new Date()).getFullYear()
    return res.render('pages/post', postData)
})
 */
const port = 3005
app.listen(port, () => console.log('Example app listening on port ' + port + '!'))

module.exports = app