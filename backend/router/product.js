const express = require ("express")
const { addproduct, getproducts, updateproduct, getbyid, getbycategorie, deleteproduct } = require("../controllers/Product.controller")
const {isAuth }= require("../middlewars/isAuth");
const router= express.Router()

router.post("/addproduct" ,isAuth, addproduct)
router.put("/updateproduct/:id" ,isAuth, updateproduct)
router.get("/getproducts",getproducts )
router.get("/getoneproduct/:id", getbyid)
router.get("/getproductscategorie/:categorie",getbycategorie)
router.delete("/deleteproduct/:id", isAuth, deleteproduct)


module.exports = router
