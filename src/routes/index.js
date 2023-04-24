import express from "express"
import studiesRoutes from "./studiesRoutes.js"

const routes  = (app) => {
    app.use(
        express.json(),
        studiesRoutes
    )
}

export default routes