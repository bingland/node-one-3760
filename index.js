const express = require('express')
const app = express()
const port = 3000

// built in express body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// api data
let lists = [
    { 
        name: 'jerry', 
        list: [ 'tomatoes', 'bacon', 'eggs', 'cheese', 'apple sauce', 'canned tomatoes', 'more bacon', 'apples', 'oranges']
    },
    {
        name: 'ben',
        list:  [ 'apple sauce', 'canned tomatoes', 'more bacon', 'apples', 'oranges', 'beans', 'hot sauce', 'chilis' ]
    },
    {
        name: 'sally', 
        list: [ 'tomatoes', 'bacon', 'oranges', 'crackers', 'candy', 'pudding', 'ghost pepper', 'cream of mushroom', 'liver'] 
    },
    {
        name: 'cindy',
        list: [ 'cheese', 'apple sauce', 'oranges', 'almonds', 'mushrooms', 'whole milk', 'sirloin steak', 'salmon', 'bell peppers' ]
    }
]


app.route('/api/lists/')
    .get((req, res) => {
        res.send(lists)
    })
    .post((req, res) => {
        const reqList = req.body
        // check if exists
        if (!reqList.name || !reqList.list || !Array.isArray(reqList.list)) {
            return res.status(400).json({message: "Please include both a name and list property"})
        }

        lists.push(reqList)
        res.send(lists)
    })
    .put((req, res) => {
        const reqList = req.body
        // check if exists
        if (!reqList.name || !reqList.list || !Array.isArray(reqList.list)) {
            return res.status(400).json({message: "Please include both a name and list property"})
        }
        // TODO: optimize this ? check if name matches
        let match = false
        lists.forEach(list => {
            if (list.name === reqList.name) {
                list.list = reqList.list
                match = true
            }
        })
        if (match) {
            res.send(lists)
        } else {
            return res.status(400).json({message: "List name not found"})
        }
    })

app.route('/api/lists/:name')
    .get((req, res, next) => {
        const user = lists[lists.findIndex(list => list.name === req.params.name)]
        // check if exists
        if (user) {
            res.send(user)
        } else {
            next()
        }
    })
    .delete((req, res, next) => {
        const user = lists[lists.findIndex(list => list.name === req.params.name)]
        console.log(user)
        // check if exists
        if (user) {
            lists = lists.filter(list => list !== user)
            res.send(lists)
        } else {
            next()
        }
    })

app.listen(port, () => {
    console.log(`Now listening on port ${port}...`)
})