const router = require("express").Router();
const services = require("../services/services");

router.post("/register", services.register);
router.post("/login", services.login);

module.exports = router;
