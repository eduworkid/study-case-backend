const Tag = require('./model');

const store = async(req, res, next) => {
    let payload = req.body;
    try {
        let tag = new Tag(payload);
        await tag.save()
        res.json(tag)
    } catch (error) {
        if (err && err.name === 'ValidationError') {
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors,
            });
        }
        next(err);
    }
  
}
const update = async(req, res, next) => {
    let payload = req.body;
    let {id} = req.params
    try {
        let tag = await Tag.findByIdAndUpdate(id,payload,{
            new : true,
            runValidations : true
        })
        res.json(tag)
    } catch (error) {
        if (err && err.name === 'ValidationError') {
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors,
            });
        }
        next(err);
    }
  
}
const destroy = async (req,res, next) => {
    try {
        let tag = await Tag.findOneAndDelete(req.params.id)
        return res.json(tag)
    } catch (error) {
        next(error)
    }
}
const index = async (req,res, next) => {
    try {
        let {skip = 0, limit = 10} = req.query;
        let tag = await Tag
        .find()
        .skip(parseInt(skip))
        .limit(parseInt(limit));
        return res.json(tag)
    } catch (error) {
        next(error)
    }
}
module.exports = {store, update, index, destroy}