const student = require("../models/student");

exports.create = async (req, res) => {

    const user = new student({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        lastName: req.body.lastName,
        age: req.body.Age,
        highestQualification: req.body.highestQualification,
        isStudent: req.body.isStudent,
        interest: req.body.interest,
        address: req.body.address,
        branch: req.body.branch
        
    });
    
    await user.save().then(data => {
        res.send({
            message:"success",
            user:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating Student"
        });
    });
};

// Find all users
exports.findAll = async (req, res) => {
    try {
        const user = await student.find();
        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

// User with given id
exports.findOne = async (req, res) => {
    try {
        const user = await student.findById(req.params.id);
        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
};

// updating via given id
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
const id = req.body._id;
    
await student.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
    if (!data) {
        res.status(404).send({
            message: `Student not found.`
        });
    }else{
        res.send({ message: "Student updated successfully." })
    }
}).catch(err => {
    res.status(500).send({
        message: err.message
    });
});
};

// Delete a user with the specified id in the request
exports.destroy = async (req, res) => {
    await student.findByIdAndRemove(req.body._id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `Student not found.`
          });
        } else {
          res.send({
            message: "Student deleted successfully!"
          });
        }
    }).catch(err => {
        res.status(500).send({
          message: err.message
        });
    });
};

