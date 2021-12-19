const User = require('../Models/sequelizeConfig').User
const validator = require('../helpers')

    const getUsers = ('/users', async (req,res) => {
        try {
            const result = await User.findAll();
            res.json(result);
        } catch (error) {
            console.error("An error occured while getting the users",error);
            res.send(error)
        }
    })


    const getUserByAccountId = ('/user/:id' , async(req,res) => {
        try {
            const id = req.params.id
            const result = await User.findOne({
                  where: {
                      AccountId: id
                  }
              })
            res.json(result);
        } catch (error) {
            console.error('An error occurd while getting the user by id');
        }
    })

    const postUser = ('/user', async (req,res) => {
        try {
            const user = req.body
            const result  = await User.create({
                    AccountId: user.AccountId })
                res.json(result)
        } catch (error) {
            res.status(400).send(error)
        }
   })

   

    module.exports = { 
        getUsers,
        getUserByAccountId,
        postUser
    }
