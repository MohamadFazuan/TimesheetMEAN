var { Model } = require('mongoose');

var model = require('../model/model.js')

async function create(req, res, next){
    const newData = req.data;

    const data = new Model({
        project: newData.project,
        task: newData.task,
        assignedTo: newData.assignedTo,
        from: newData.from,
        to: newData.to,
        status: newData.status
    })

    const dataSave = await data.save();
    res.status(200).json(dataSave);
}

async function readItem(){

}

async function readAll(req, res, next){
    try {
        const data = await Model.find();
        return data;
    } catch (error) {
        return error;
    }
}

async function updateItem(){

}

async function deleteItem(){

}

module.exports = {create, readItem, readAll, updateItem, deleteItem}