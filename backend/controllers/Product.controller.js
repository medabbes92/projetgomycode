const Product = require("../model/Product");

exports.addproduct = async(req,res) => {
const {image,nom,categorie,puissance,size,description} = req.body
try { const newproduct= await Product.create({
    image,nom,categorie,puissance,size,description
})
    res.status(200).send(newproduct)
} catch (error) {
    res.status(500).json({msg : error.message})
}

}

exports.updateproduct = async(req,res) => {
    try {
        const updateproduct = await Product.findByIdAndUpdate(
            req.params.id,
          {
            ...req.body,
          },
         
          { new: true }
        );
        res.send(updateproduct);
      } catch (error) {
        res.status(500).json({msg : error.message});
      }
    
    }

  

    exports.getproducts = async (req, res) => {
        try {
          const products = await Product.find();
          res.send(products);
        } catch (error) {
            res.status(500).json({msg : error.message});
        }
      };

      exports.getbyid = async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            res.send(product);
          } catch (error) {
            res.status(500).json({msg : error.message});
          }
      };

      exports.getbycategorie = async (req, res) => {
        try {
            const productcat = await Product.findOne({ categorie: req.params.categorie });
            res.send(productcat);
          } catch (error) {
            res.status(500).json({msg : error.message});
          }
      };


      exports.deleteproduct = async (req, res) => {
        try {
           await Product.findByIdAndDelete(req.params.id);
            res.send("product deleted ");
          } catch (error) {
            res.status(500).json({msg : error.message});
          }
      };
