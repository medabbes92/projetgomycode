const Admin = require("../model/Admin");



//require bcrypt
const bcrypt = require('bcryptjs');

// require jwt
const jwt = require('jsonwebtoken');



exports.register = async(req,res)=> {
    const {name, lastName, email, password} = req.body

    try {
        

    // create admin
    const admin= new Admin({name, lastName, email, password})

    // create salt and hash
    const salt = 10;
    const hashedPassword= await bcrypt.hash(password, salt)
    
    // replace password with hashedPassword
    admin.password= hashedPassword

    // save the admin
    await admin.save()

    // sign the admin
    const payload= {
        _id: admin._id
    }

    const secret = process.env.codesecret
    // token
    const token = await jwt.sign(payload, secret, {

        expiresIn: '10h',
        
    })

    res.send({msg: 'Admin registred with success', admin, token})
  
    }

    catch (error) {
        res.send({msg: 'server error'})

    }
}



exports.login = async(req,res)=> {
    const {email,password} = req.body
    try {
        let admin= await Admin.findOne({email})

        if (!admin) {
            return res.send({msg: 'Bad Credentials !'})
        }

        // check password
        const isMatch= await bcrypt.compare(password, admin.password)

        if(!isMatch) {
            return res.send({msg: 'Bad Credentials !'})
        }
    // sign the user
    const payload= {
        _id: admin._id
    }
    // token
    const secret = process.env.codesecret
    const token = await jwt.sign(payload, secret, {
        expiresIn: '7 days'
    })
        res.send ({msg: 'logged with success',admin , token})

    }
    catch(error) {
        console.log(error)

    }
}

exports.auth = (req,res)=> {
    res.send(req.admin)

}
