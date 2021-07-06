
// const cocktailDrink = require('../models/Cocktail.model');

// const cocktailUpdateController = (req, res) => {
//     const { idDrink } = req.body;
//     cocktailDrink.findOne({ idDrink: idDrink }, (error, data) => {
//         if (error) {
//             res.send(error.message)
//         } else {
//             console.log(data);
//         }
//     })
// }
// module.exports = cocktailUpdateController;

// app.post("/user/updateScores", function (req, res) {
//     var username = req.body.username;

//     Users.findOne({ username: username }, function (error, user) {
//         if (error || !user) {
//             res.send({ error: error });
//         } else {
//             // update the user object found using findOne
//             user.win = req.body.win;
//             user.lose = req.body.lose;
//             user.draw = req.body.draw;
//             // now update it in MongoDB
//             user.update(function (err, user) {
//                 if (err) res.json(err) {
//                     req.session.loggedIn = true;
//                 }
//                 res.redirect('/user/' + user.username);
//             });
//         }
//     });
// });