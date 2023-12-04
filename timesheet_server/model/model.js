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
        type: Date
    },
    to: {
        required: true,
        type: Date
    },
    status: {
        required: true,
        type: String
    }
})