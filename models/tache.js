const mongoose = require("mongoose");
const tacheSchema = mongoose.Schema({
    label: { type: String, required: true},
    description: { type: String, required: true},
    datetache: { type: String, required: true},
    status: { type: String, required: false},
})

//export le model qui s'appel User et qui est crée à partir du schema définit avant
module.exports = mongoose.model('Tache', tacheSchema); 