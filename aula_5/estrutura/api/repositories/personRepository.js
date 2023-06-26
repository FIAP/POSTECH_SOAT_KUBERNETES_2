'use strict';
var Desenho = require('../config/db');

module.exports = new class PersonRepository {
    getAll() {
        return Desenho.find();
    }    
}

