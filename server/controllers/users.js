// Controller talks to DB
var mongoose = require('mongoose');
var User = mongoose.model("User");

// Export file as an object
module.exports = {
  test: function(req, res) {
    res.json({test: "success"})
  },

  create: function(req, res) {
    console.log("in users controller create function");
    console.log(req.body);

    var user = new User({
      name: req.body.name
    });

    user.save(function(err) {
      if (err) {
        res.json({'errors': err});
      } else {
        res.json({'success': "All good"});
      }
    })
  },

  show: function(req, res) {
    User.find({}, function(err, users) {
      if(!err) {
        res.json({'users': users});
      } else {
        res.json({'errors': err});
      }
    })
  },

  delete: function(req, res) {
    User.remove({_id: req.params.userId}, function(err) {
      if(err) {
        res.json({'errors': err});
      } else {
        res.json({'success': "All good"});
      }
    })
  }

  // index: function (req, res) {
  //   Animal.find({}, function (error, animals) {
      
  //     if (!error) {
  //       res.json({'animals': animals})
  //     } else {
  //       res.json({'errors': error})
  //     }
      
  //   });
  // },

  // create: function (req, res) {
  //   var animal = new Animal({
  //     theAnimal: req.body.theAnimal,
  //     class: req.body.class,
  //     lifespan: req.body.lifespan,
  //   });

  //   animal.save(function (err) {
  //     if (err) {
  //       res.render('error', { errors: animal.errors });
  //     } else {
  //       console.log('Succesfully added Animal');
  //       res.redirect('/');
  //     }
  //   })
  // },

  // show: function(req, res) {
  //   Animal.findById(req.params.id, function (error, animal) {
  //     res.render('animal', { animal: animal });
  //   });
  // }
}

