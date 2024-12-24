const Sequelize = require('sequelize')
const database = require('../connection')
const sequelize = require('../connection')

const bd_data = database.define('data',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true ,
        autoIncrement: true
    },

    name: {
        type: Sequelize.STRING,
    },

    lastName:{
        type: Sequelize.STRING
    },

    participation:{
        type: Sequelize.DOUBLE
    }


})

// bd_data.sync({force:true})

module.exports = bd_data