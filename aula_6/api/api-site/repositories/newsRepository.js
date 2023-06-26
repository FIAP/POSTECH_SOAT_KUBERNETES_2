'use strict';
var News = require('../config/db');

module.exports = new class NewsRepository {
    create(news) {
        return News.create(news);
    }

    getAll() {
        return News.find();
    } 
}

