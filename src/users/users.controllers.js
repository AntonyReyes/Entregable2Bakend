const uuid = require('uuid')

const userDB = [
    {
        id: 'e53883d6-9ca8-4c92-b312-4384d291989a',
        first_name: 'Antony',
        last_name: 'Reyes',
        email: 'antony@gmail.com',
        password: '12345',
        birthday: '2000/07/11'
    },
    {
        id: 'cd85243e-4ee8-4446-aef7-526da404ea98',
        first_name: 'Brayan',
        last_name: 'Villanueva',
        email: 'brayan@gmail.com',
        password: '12345',
        birthday: '2003/03/03'
    },
    {
        id: '2787ffa5-58d1-4583-9e68-5fdedcb55a3e',
        first_name: 'Sury',
        last_name: 'Paredes',
        email: 'saury@gmail.com',
        password: '12345',
        birthday: '2009/12/23'
    }
]

const getAllUsers = () => {
    return userDB;
}

const getUsersById = (id) => {
    return userDB.find(user => user.id === id)
}

const createUsers = (first_name,last_name, email, password, birthday ) => {
    const newUser = {
        id: uuid.v4(),
        first_name,
        last_name,
        email,
        password,
        birthday
    }

    userDB.push(newUser);

    return newUser;
}


module.exports = {
    getAllUsers,
    getUsersById,
    createUsers
}