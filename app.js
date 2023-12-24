// const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');

const userRoutes = require('./routes/user');

const sequelize = require('./util/database');

const User = require('./models/user');
var cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: false}))
// app.use(express.static(path.join(__dirname, 'public')));


app.use('/', userRoutes);

// app.delete('/user/:id',async (req, res) =>{
//     const uid = req.params.id
//     try{
//         const rowsDeleted = await User.destroy({
//             where: {id: uid} 
//         });
//         if(rowsDeleted > 0){
//             res.status(204).send();
//         }
//         else{
//             res.status(404).send('User not found');
//         }
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).send('Internal Server Error');
//     }
    
// });
// app.post('/user', async (req, res) => {
//     try {
//       const name = req.body.name;
//       const email = req.body.email;
//       const phone = req.body.phn;
  
//       console.log(name, email, phone);
//       const user = await User.create({
//         name: name,
//         email: email,
//         phn: phone
//       });
  
//       console.log({ user: user });
//       res.send(user);
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Internal Server Error');
//     }
//   });

sequelize.sync()
    .then((result) => {
        // console.log(result);
        console.log("app started")
        app.listen(5000);
    })
    .catch(err => console.log(err));
