import express from "express"
import {PORT, NODE_ENV} from "./src/configs/env.js"

async function main (){
    const app = express()

    app.use(express.json())
    app.use(express.urlencoded())

    app.get("/api/health", (req, res)=>{
        res.send("Active Server")
    })

    app.listen(
        PORT, 
        ()=>console.log(`server running on http://localhost:${PORT}`)
    )
}

main().catch(err=>{
    console.error(`Server Error "${err.name}"`)
    console.error(err)
    if(NODE_ENV !== "development"){
        process.exit(0)
    }
})