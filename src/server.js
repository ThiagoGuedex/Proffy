const express = require("express")
const server = express()
const {pageLanding, pageSutdy, pageGiveClasses, saveClasses} = require("./pages")


const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true,
})

server
.use(express.urlencoded({ extended: true }))
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageSutdy) 
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)
