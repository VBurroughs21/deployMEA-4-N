var mongoose = require('mongoose');
var User = mongoose.model("User");

// Require controllers file
var users = require('../controllers/users.js')

module.exports = function (app) {

  app.get('/api/test', function (req, res) {
    users.test(req, res);
  });

  app.post('/api/user/create', function(req, res) {
    users.create(req, res);
  })

  app.get('/api/user/all', function(req, res) {
    users.show(req, res)
  })

  app.get('/api/user/delete/:userId', function(req, res) {
    users.delete(req, res);
  })

  // app.get('/mongooses/edit/:id', function (req, res) {
  //   Animal.findById(req.params.id, function (error, animal) {
  //     res.render('edit', { animal: animal });
  //   });
  // })

  // app.post('/mongooses/:id', function (req, res) {
  //   console.log("POST DATA", req.body);
  //   Animal.findById(req.params.id, function (error, animal) {
  //     animal.class = req.body.class;
  //     animal.lifespan = req.body.lifespan;
  //     animal.save(function (err, updatedAnimal) {
  //       if (err) {
  //         res.render('error', { errors: animal.errors });
  //       } else {
  //         console.log('Succesfully updated Animal');
  //         res.redirect('/');
  //       }
  //     })
  //   })
  // })

  app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./frontEnd/dist/index.html"))
  });

};