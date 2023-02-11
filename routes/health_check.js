const express = require('express')
const router = express.Router()
function healthCheck(){
    router.get("/", (req, res) => {
        const health = {
          uptime: process.uptime(),
          message: "OK",
          timestamp: Date.now(),
        };
        try {
          res.send(health);
        } catch (error) {
          res.send(error);
        }
      });
      return router
}
module.exports = {
    healthCheck
}