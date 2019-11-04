const User = require('../models/User')

module.exports = {
  async store(request, response) {
    const { email } = request.body // equivalente a -> const email = request.body.email

    let user = await User.findOne({ email }) // ou User.findOne({ email: email })

    if (!user) {
      user = await User.create({ email })
    }


    return response.json(user)
  }
}
