import express from "express"
import "dotenv/config"

const application = express()
const PORT = process.env.port

application.get("/users", (req, res) => {
    res.send(users)
})

application.listen(PORT)
console.log(`Server running on http://localhost:${PORT}`)