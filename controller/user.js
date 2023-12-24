

const User = require('../models/user');


const getUser = (req, res) => {
    User.findAll()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            console.log(err);
        })
}

const addUser = async (req, res) => {
    try {
      const name = req.body.name;
      const email = req.body.email;
      const phone = req.body.phn;
  
      console.log(name, email, phone);
      const user = await User.create({
        name: name,
        email: email,
        phn: phone
      });
  
      console.log({ user: user });
      res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

const deleteUser = async (req, res) =>{
    const uid = req.params.id
    try{
        const rowsDeleted = await User.destroy({
            where: {id: uid} 
        });
        if(rowsDeleted > 0){
            res.status(204).send();
        }
        else{
            res.status(404).send('User not found');
        }
    }
    catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
    
}
module.exports = {
    getUser,
    addUser,
    deleteUser
}