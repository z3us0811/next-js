import Users from "../../../models/Users";
import connectDb from "../../../middleware/mongoose";


//POST api call to find a single user
const handler = async (req, res) => {
    if (req.method == 'POST') {
        console.log(req.body);

        try {
            
            let data = await Users.findOne({email: req.body.email})
            //user is there
            if(Object.keys(data).length!==0) {
                //match password
                if(data.password === req.body.password) {
                    res.status(200).json(data);
                }
                else {
                    res.status(400).json({message : 'Invalid Password'})
                }
            }
            else{
                res.status(400).json({ message: 'User Not Found'})
            }
            res.status(201).json(response);
        }
        catch (err) {
            res.status(400).json({ message: err.message})
        }
    }
    else {
        res.status(400).json({ message: 'Method not allowed' })
    }
}

export default connectDb(handler);