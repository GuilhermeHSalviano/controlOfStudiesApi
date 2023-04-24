import express from "express"
import StudiesController from "../controller/control-of-studies-controller.js"

const router = express.Router()

router
    .get("/", StudiesController.getAllStudyRecords)
    .get("/estudos/dia-de-estudo/:year-:month-:day", StudiesController.getDayOfStudy)
    .get("/estudos/:year", StudiesController.getAllStudiesOfTheYear)
    .get("/estudos-por-mes/:year-:month", StudiesController.getStudiesPerYearAndMonth)
    .put("/estudos/estudo-atualizado", StudiesController.updateDayOfStudy)
    .post("/estudos/novo-estudo", StudiesController.addDayOfStudy)
    .delete("/estudos/:year-:month-:day", StudiesController.deleteStudyRecord)

export default router