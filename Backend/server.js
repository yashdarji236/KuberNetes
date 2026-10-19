import express from "express"
import morgan from "morgan"

const app = express()

app.use(morgan())
app.get("/", (req, res) => {
    let sum = 0
    for (let i = 0; i <= 100000000; i++) {
        sum += i
    }
    res.send('Hellow world ' + sum)

})
app.listen(3000, () => {
    console.log("Server is running on port 3000");

})