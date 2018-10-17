const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect(process.env.PROD_MONGODB, {useNewUrlParser: true})

module.exports = {
  mongoose
}