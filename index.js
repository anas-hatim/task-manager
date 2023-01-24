const express = require("express");
const bodyParser = require ("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const taskRoutes = require("./route/taskRoutes");

// charge le fichier de configuratiin 
dotenv.config();

// recupère l'application express
const app = express();

// défini le moteur de rendu
app.set('view engine', 'ejs');

// défine le dossier ou se trouve les vues
app.set('views',__dirname + "/views");


//suprimme le message Derecationwarning
mongoose.set('strictQuery', true);

// effectue la connexion à mongoBD
mongoose.connect(process.env.MONGO_CONNECTION,
{
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch((error) => console.log("Connexion à MongoDB échouée " + error));



//parse pour les modification
app.use(bodyParser.urlencoded({extended: false}))

//parse pour le json
app.use(bodyParser.json())
//indique l'url de depart des routes pour userapiroute
app.use('/',taskRoutes);



// démarre le serveur sur le port 1112
app.listen(1112, () => {
    console.log("Le serveur est démarré sur le port 1112")
});