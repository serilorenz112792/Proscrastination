const bcrypt = require('bcryptjs');
 
const User = require('../models/users');

const getAll =  (req, res) => { 
    User.findAll().then(user => res.send(user))
}

const register = async (req, res) => {
    const { email, password, firstName, lastName, userName } = req.body
    if(email === '' || password === '' || firstName === '' || lastName === '' || userName === '') return res.status(400).json('All fields are required!')
    const user = await User.findOne({where: {username: userName}})

    if(user) return res.status(400).json('User already exists!')
    const hashedPassword =  await bcrypt.hash(password, 10)  
    
    User.create({
        first_name: firstName,
        last_name: lastName,
        username: userName,
        email,
        password: hashedPassword
    }).then(submittedUser => res.send(submittedUser)).catch(err => res.send(err));  
}

module.exports = {
    register,
    getAll,
}
