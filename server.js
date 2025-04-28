import express from "express"
import path from "path"
import { fileURLToPath } from "url"
import { dirname } from "path"
import data from "./data.js"

const app = express()

const PORT = process.env.PORT || 8000
const __dirname = dirname(fileURLToPath(import.meta.url))


//express static middleware
// app.use(express.static(path.join(__dirname, 'public')))
app.get('/api/user/:id', (req, res)=>{
    const id = parseInt(req.params.id)
    res.json(data.filter((item)=>item.id === id))
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
