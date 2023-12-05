var mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    project:{
        required: true,
        type: String
    },
    task:{
        required: true,
        type: String
    },
    assignedTo: {
        required: true,
        type: String
    },
    from: {
        required: true,
        type: String
    },
    to: {
        required: true,
        type: String
    },
    status: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model('Data', dataSchema);