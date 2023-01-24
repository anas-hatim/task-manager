
const express = require("express");
const router = express.Router();
const tache = require("../../models/tache");

//route pour récupérer la liste les taches : localhost/api/taches
router.route("/tache")
    .get((req,res) => {
        Tache.find()
            .then((data) => res.status(200).json(data))
            .catch((error) => res.status(400).json(error))        
    }) ;

    //route pour récuperer une tache suivant sont id : localhost/api/tache/id
router.route("/tache/:id")
//read
.get((req,res) => {
    Tache.find({ _id: req.params.id})
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(400).json(error))        
}) 
//update
.put((req, res) => {
    Tache.updateOne({ _id: req.params.id}, req.body)
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(400).json(error)) 
})
//delete
.delete((req, res) => {
    Tache.deleteOne({ _id: req.params.id})
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(400).json(error)) 
});


// route pour ajouter une tache : localhost/api/tache +json
//create
router.route("/tache")
.post((req,res) => {
   let tache = new Tache(req.body)
   tache.save()
         .then((data) => res.status(201).json(data))
        .catch((error) => res.status(400).json(error))       
}) ;




//export les routes contenu dans le routeuer
module.exports = router;