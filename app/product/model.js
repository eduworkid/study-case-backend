const mongoose = require("mongoose");
const {model, Schema} = mongoose;

const productSchema = Schema({

    name: {
        type: String,
        minlength: [3, "panjang nama minimal 3 huruf"],
        required: [true, "nama makanan tidak boleh kosong"]
    },
    description: {
        type : String,
        // minlength: [1000, "minimal deskripsi 1000 karakter"]
    },
    price: {
        type: Number,
        default: 0
    },
    image_url : String,
    category : {
        type : Schema.Types.ObjectId,
        ref : 'Category' 
    },
    tags : {
        type : Schema.Types.ObjectId,
        ref : 'Tag' 
    }
}, {timestamps: true});

module.exports = model('Product', productSchema)