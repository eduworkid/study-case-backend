const mongoose = require('mongoose')
const {model, Schema } = mongoose

let tagSchema = Schema({
    name : {
        type : String,
        minlength: [3, "minimal 3 karakter"],
        maxlength: [20, "maksimal 20 karakter"],
        required: [true, "kategori harus di isi"]
    }
})

module.exports = model("Tag", tagSchema)