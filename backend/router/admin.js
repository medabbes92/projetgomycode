const express = require ("express")
const { register, login, auth } = require("../controllers/Admin.controller");
const{registerRules , validator, LoginRules} = require ("../middlewars/validator");
const {isAuth }= require("../middlewars/isAuth");

const router= express.Router()

router.post("/register" , registerRules(), validator ,register)
router.post("/login" ,LoginRules(), validator, login)
router.get("/auth",isAuth,auth )
module.exports = router

