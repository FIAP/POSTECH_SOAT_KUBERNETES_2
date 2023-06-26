require('dotenv').config();

var mongoose = require('mongoose');
const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl);


var Schema = mongoose.Schema;

var DesenhoSchema = new Schema({
    title: String,
    nameImage: String   
});


var Desenho = mongoose.model('Desenho', DesenhoSchema);
module.exports = Desenho;

