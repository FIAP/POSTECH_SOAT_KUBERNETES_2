require('dotenv').config();

var mongoose = require('mongoose');
const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl);

var Schema = mongoose.Schema;

var NewsSchema = new Schema({
    title: String,
    descricao: String,
    link: String,
    data: Date   
});


var News = mongoose.model('News', NewsSchema);
module.exports = News;

