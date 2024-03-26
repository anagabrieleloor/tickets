const client = require('../client')


//POST - /api/users
// const createUser = async ({ first_name, last_name, email, password, billing_address, payment_token, payment_verified }) => {
//     try {
//         const {
//             rows: [user],
//             //INSERT SQL query
//         } = await client.query(
//             `
//                 INSERT INTO users(first_name, last_name, email, password, billing_address, payment_token, payment_verified)
//                 VALUES($1, $2, $3, $4, $5, $6, $7)
//                 RETURNING *;
//             `,
//             //Hook parameteres to variables
//             [first_name, last_name, email, password, billing_address, payment_token, payment_verified]
//         )
//         return user
//     } catch (error) {
//         throw error
//     }
// }

const createUser = async ({ email, password, first_name, last_name }) => {
    try {
        const {
            rows: [user],
            //INSER SQL query
        } = await client.query(
            // INSERT INTO table(column1, column2, etc)
            //VALUES (var1, etc)
            //RETURNING everything
            `
                INSERT INTO users(email, password, first_name, last_name)
                VALUES($1, $2, $3, $4)
                RETURNING *;
            `,
            //hook parameteres to variables
            [email, password, first_name, last_name]
        )
        return user
    } catch (error) {
        throw error
    }
}

//GET - /api/users - get all users
const getAllUsers = async () => {
    try {
        const { rows }
            = await client.query(`
            SELECT *
            FROM users;
        `)
        return rows
    } catch (error) {
        throw error
    }
}

//GET - /api/users/:user_id
const getUserById = async (user_id) => {
    try {
        const { rows: [user], }
            = await client.query(`
        SELECT * 
        FROM users
        WHERE user_id = ${user_id};
        `);
        return user;
    } catch (error) {
        throw error;
    }
}


// PUT - /api/users/:user_id - update a user
const updateUser = async (user_id, updatedUserData) => {
    try {
        const { rows: [user], }
            = await client.query(`
        UPDATE users 
        SET 
        first_name = $1, 
        last_name = $2, 
        email = $3, 
        password = $4, 
        billing_address = $5, 
        payment_token = $6, 
        payment_verified = $7, 
        WHERE user_id = $8
        RETURNING *;
        `,
                [
                    updatedUserData.first_name,
                    updatedUserData.last_name,
                    updatedUserData.email,
                    updatedUserData.password,
                    updatedUserData.billing_address,
                    updatedUserData.payment_token,
                    updatedUserData.payment_verified,
                    user_id
                ]
            );
        return user;
    } catch (error) {
        throw error;
    }
}

//DELETE - /api/users/:user_id - delete user 
const deleteUser = async (user_id) => {
    try {
        const { rows: [user], }
            = await client.query(`
        DELETE 
        FROM users
        WHERE user_id = ${user_id};
        `);
        return user;
    } catch (error) {
        throw error;
    }
}


//POST - api/users/login - login 
const loginUser = async (email, password) => {
    try {
        console.log(email, password);
        const {
            rows: [user],
        } = await client.query(
            `
            SELECT * 
            FROM users 
            WHERE email = $1
            AND password = $2;
            `,
            [email, password]
        );
        return user;
    } catch (error) {
        throw error;
    }
};


//GET - api/users/:session_id - current user profile 
const currentUser = async (user_id) => {
    try {
        const {
            rows: [user],
        } = await client.query(
            `
            SELECT *
            FROM users
            WHERE user_id = $1;
            `,
            [user_id]
        );
        return user;
    } catch (error) {
        throw error;
    }
};





module.exports = { createUser, getAllUsers, getUserById, updateUser, deleteUser, loginUser, currentUser }