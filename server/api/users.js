const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { createUser, getAllUsers, getUserById, updateUser, deleteUser, loginUser, currentUser } = require('../db/helpers/users');
const jwt = require('jsonwebtoken');


const { JWT_SECRET } = require('../secrets');
const { token } = require('morgan');


const SALT_ROUNDS = 10;

//GET - /api/users - get all users
router.get('/', async (req, res, next) => {
    try{     
        const users = await getAllUsers();
        res.send(users);
    } catch (error) {
        next(error);
    }
});

// GET - /api/users/:user_id - get user by id
router.get('/:user_id', async (req, res, next) => {
    try{      
        const user = await getUserById(req.params.user_id);
        res.send(user);
    } catch (error) {
        next(error);
    }
});

// // POST - /api/users/signup - create new user
// router.post('/signup', async (req, res, next) => {
//     try {
//         console.log(req.body)
//         const { username, password, first_name, last_name, gender, location, education, work, photos, about_me, song} = req.body.user
        
        
//         //hashing the password
//         const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
//         //sending username and hashed pw to database
//         const user = await createUser({username, password: hashedPassword, first_name, last_name, gender, location, education, work, photos, about_me, song});
     
//         //removing password from user object for security reasons
//         delete user.password
        
//         //creating token
//         const token = jwt.sign(user, JWT_SECRET)
//         // user.token= token
//         // attaching a cookie to response using the token created
//         res.cookie('token', token, {
//             sameSite: 'strict',
//             httpOnly: true,
//             signed: true
//         })
//         console.log('Sign up token:', token)
//         delete user.password
//         // console.log(res)


//         res.send({message: 'Sign up successful, welcome', user});
//     } catch (error) {
//         next(error);
//     }
// });
router.post('/signup', async (req, res, next) => {
    try{
        const user = await createUser(req.body);
        // res.send(user);
        
    } catch (error) {
        next(error);
    }
});

// PUT - /api/users/:user_id - update user
router.put('/edit_profile/:user_id', async (req, res, next) => {
    try{
        const user = await updateUser(req.params.user_id, req.body);
        res.send(user);
    } catch (error) {
        next(error);
    }
});

// DELETE - /api/users/:user_id - delete user
router.delete('/:user_id', async (req, res, next) => {
    try{
        const user = await deleteUser(req.params.user_id);
        res.send(user);
    } catch (error) {
        next(error);
    }
});

// POST - /api/users/login - login
router.post('/login', async (req, res, next) => {
    try {
        console.log(req.body)
        const { username, password } = req.body 
        
        const user = await getUserByUsername(username)     
        console.log('You have successfully logged in', user )

        const validPassword = await bcrypt.compare(password, user.password)

        delete user.password
        
        if (validPassword) {
            //creating token 
            const token = jwt.sign(user, JWT_SECRET)
            console.log('token:', token)
            //attaching cookie to response using the token created
            res.cookie('token', token, {
                sameSite: 'strict',
                httpOnly: true,
                signed: true
            })

            //assign token to user object 
            // user.token = token
            // console.log('token??:', token)
            delete user.password
            res.send({user, token})
        }
        return token;
        
    } catch (error) {
        next(error); 
    }
});

//GET - api/users/:user_id - current user profile 
router.get('/users/:user_id', async (req, res, next) => {
    try{
        const user = await currentUser(req.params.user_id);
        res.send(user);
    } catch (error) {
        next(error);
    }
});


//POST -     - log out user
router.post('/logout', async (req, res, next) => {
    try {
        res.clearCookie('token', {
            sameSite: 'strict',
            httpOnly: true,
            signed: true
        })
        res.send({ 
            loggedIn: false,
            message: 'Logged Out'
        })
    } catch(error) {
        next(error)
    }
})

module.exports = router;