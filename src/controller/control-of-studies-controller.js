import studies from "../models/studies.js"

class StudiesController {
    static addDayOfStudy = (req, res) => {
        let study = new studies(req.body)
        study.save((err) =>{
            if (err) res.status(500).send({message: `${err.message} - falha ao cadastrar estudo`})
            else res.status(201).send(study.toJSON())
        })
    }

    static getAllStudyRecords = (req, res) => {
        
        studies.find((err, result) => {
            res.status(200).json(result)
        })
    }

    static deleteStudyRecord = (req, res) => {
        const date = {date: `${req.params.year}/${req.params.month}/${req.params.day}`}
        studies.deleteOne(date, err => {
            if (!err) res.status(200).send({message: 'Registro de estudo removido com sucesso!  '})
            else res.status(500).send({message: err.message})
        }
    )}

    static getDayOfStudy = (req, res) => {
        const dayOfStudy = {date: `${req.params.year}/${req.params.month}/${req.params.day}`}
        studies.find(dayOfStudy, {}, (err, day) => {
            if(err) res.status(500).send({message: err.message})
            else{
                if(res.body == undefined) res.send("Não existe registro de estudo na data indicada.")
                else res.status(200).send(day)
            }
        })
    }

    static getAllStudiesOfTheYear = (req, res) => {
        const regex = new RegExp(`${req.params.year}/\\d\\d`)
        const year = {date: regex}
        studies.find(year, {}, (err, studiesPerYear) => {
            if(err) res.status(500).send({message: err.message})
            else res.status(200).send(studiesPerYear)
        })
    }

    static getStudiesPerYearAndMonth = (req, res) => {
        const regex = new RegExp(`${req.params.year}/${req.params.month}/\\d\\d`)
        const period = {date: regex}
        studies.find(period, {}, (err, studiesPerPeriod) => {
            if(err) res.status(500).send({message: err.message})
            else res.status(200).send(studiesPerPeriod) 
        })
    }

    static updateDayOfStudy = (req, res) => {
        const date = {date: req.body.date}
        studies.findOneAndUpdate(date, req.body, (err) => {
            if(err) res.status(500).send({message: err.message})
            else res.status(201).send("O dia de estudo foi atualizado com sucesso!")
        })
    }
}

export default StudiesController