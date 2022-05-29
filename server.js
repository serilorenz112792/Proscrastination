const express = require('express');
require('dotenv').config();
const mySQL = require('./datasources/mySql')
const app = express();
app.use(express.json()); 

app.use('/api/users', require('./routes/user.routes'));

mySQL.sequelize.sync().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`server running on PORT: [${process.env.PORT}]`)
    })  
})
