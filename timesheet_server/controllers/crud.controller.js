var { Model } = require('mongoose');

var Data = require('../model/model.js')

async function create(req, res) {
    const newData = req.body;

    const data = new Data({
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

async function readItem(req, res, next) {

    const task = req.body.task

    try {
        const data = await Data.findOne({ 'task': task })
        res.status(200).json(data);
    } catch (error) {
        res.status(201).json(error);
    }
}

async function readAll(req, res, next) {
    try {
        const data = await Data.find({});
        res.status(200).json(data);
    } catch (error) {
        res.status(201).json(error);
    }
}

async function updateItem(req, res, next) {
    const { id } = req.params;
    const body = req.body;

    try {
        const data = await Data.findByIdAndUpdate(id, req.body);
        req.status(200).json(data);
    } catch (error) {
        res.status(201).json(error);

    }
}

async function deleteItem(req, res, next) {
    const id = req.body.id;

    try {
        const data = await Data.findByIdAndDelete(id)
    } catch (error) {

    }
}

module.exports = { create, readItem, readAll, updateItem, deleteItem }