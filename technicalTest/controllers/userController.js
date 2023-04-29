const axios = require("axios")
const fs = require('fs/promises');

class Controller {
    static async userRegister(req, res) {
        try {
            
            const { data } = await axios.post('http://13.212.226.116:8000/api/register', {
                username: req.body.username,
                password: req.body.password,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                telephone: req.body.telephone,
                profile_image: req.file.path,
                address: req.body.address,
                city: req.body.city,
                province: req.body.province,
                country: req.body.country
                },
            )
           
            res.status(200).json({data : data})
        } catch (err) {

            res.status(400).json({error : err.response.data})
        }
    }
}

module.exports = Controller