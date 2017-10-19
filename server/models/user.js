var mongoose = require('mongoose');
// If association between 2 models, require neccessary model

// Each file in the models folder should have a different schema
var UserSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 1},
}, {timestamps: true});

mongoose.model('User', UserSchema);