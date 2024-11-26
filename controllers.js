const User = require('../models/models');
//Esta linha exporta a função para que ela possa ser usada em outras partes do aplicativo
exports.getAllUsers = (req, res) => {
    // Esta linha chama uma função 
    User.getAllUsers((users) => {
        //Depois que os dados do usuário são recuperados, o método é usado para renderizar a exibição.
        res.render('index', { users });
    });
};

exports.getUserById = (req, res) => {
    const userId = req.params.id;
    User.getUserById(userId, (user) => {
        res.render('edit', { user });
    });
};

///exibir usuário antes de deletar 
exports.getdeleteByUser = (req, res) => {
    const userId = req.params.id;
    User.getUserById(userId, (user) => {
        res.render('dell', { user });
    });
};

exports.addUser = (req, res) => {
    const newUser = {
        name: req.body.name,
        email: req.body.email
    };
    User.addUser(newUser, () => {
        res.redirect('/');
    });
};

exports.updateUser = (req, res) => {
    const userId = req.params.id;
    const updatedUser = {
        name: req.body.name,
        email: req.body.email
    };
    User.updateUser(userId, updatedUser, () => {
        res.redirect('/');
    });
};

exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    User.deleteUser(userId, () => {
        res.redirect('/');
    });
};


