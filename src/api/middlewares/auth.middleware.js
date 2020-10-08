const jwt = require('jsonwebtoken')
//const authConfig = require("../../config/auth.json");

class AuthController {
  auth(req, res, next) {
    try {
      const { authorization } = req.headers
      if (!authorization) return res.sendStatus(401).send({error: 'Token inválido!'})

      const token = authorization.split(' ')[1]

      if (!token) return res.sendStatus(401)

      const decoded = jwt.verify(token, process.env.SECRET_KEY)

      req.userId = decoded.id,
      
      // req.user = {
      //   email: decoded.email,
      //   id: decoded.id,
      // } 
      next()
    } catch (error) {
      return res.status(401).json({ error: error.message })
    }
  }
}

module.exports = new AuthController().auth