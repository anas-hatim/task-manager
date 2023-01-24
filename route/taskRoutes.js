const express = require("express");
const tache = require("../models/tache");
const router = express.Router();
const Tache = require("../models/tache")

router.route("/")
    .get((req, res) => {
        Tache.find()
        .then((data) => {
            res.render('home', {
                tasks: data
            });
        })
        .catch((error) => console.log(error));
});

router.route('/tache/new')
.get((req, res) => {
    res.render("new-task-form",{
        error:""
    });
})

.post((req, res) => 
{
    let error = ""; 

    if (req.body.label == "")
    {
        error += "Le champs label n'est pas renseigné";
    }
    if (req.body.description == "")
    {
        error += "Le champs descriptiOn n'est pas renseigné";
    }
    if (error != "")
    {
        res.render('new-task-form', {
            error: error
        })
    }
    else {
        let task = new tache(req.body)
        
        task.save()
        .then((data) => res.redirect('/'))
        .catch((error) => res.status(400).json(error));
        }
});
//delete
router.route("/tache/delete/:id")
    .get((req, res) => {
        Tache.deleteOne({ _id: req.params.id})
    .then((data) => {
        res.redirect('/');
    })
    .catch((error) => res.status(400).json(error))
    });

// .delete((req, res) => {
//     User.deleteOne({ _id: req.params.id})
//     .then((data) => res.status(200).json(data))
//     .catch((error) => console.log(error)) 
// });

module.exports = router;