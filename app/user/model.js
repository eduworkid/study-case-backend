const mongoose = require('mongoose')
const {model,Schema} = mongoose;
const AutoIncrement = require('mongoose-sequence')(mongoose)
const bcrypt = require('bcrypt')
let userSchema = Schema({
    fullname: {
        type : String,
        minlength: [5, "minimal 3 karakter"],
        maxlength: [100, "maximal 100 karakter"],
        required : [true, "fullname harus di isi"]
    },
    customer_id : {
        type : Number
    },
    email : {
        type : String,
        required : [true, "harus isi email"],
        maxlength: [255, "maximal panjang email 255"]
    },
    password : {
        type : String,
        required : [true, "harus buat password"],
        maxlength: [255, "maximal panjang paswword 255"]
    },
    role : {
        type: String,
        enum : ['user','admin'],
        default : 'user'
    },
    token : String
}, {timestamps: true})

userSchema.path('email').validate(function(value){
    const EMAIL_RE = /^([\w-\-]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return EMAIL_RE.test(value);
}, attr => `${attr.value} harus merupakan email yang valid`);

userSchema.path('email').validate(async function(value) {
    try {
        const existingUser = await this.constructor.findOne({ email: value });
        return !existingUser;
    } catch (error) {
        throw error;
    }
}, attr => `${attr.value} sudah terdaftar`);


const HASH_ROUND = 10;
userSchema.pre('save',function(next){
    this.password = bcrypt.hashSync(this.password, HASH_ROUND)
    next();
})
userSchema.plugin(AutoIncrement, {inc_field : 'customer_id'});


module.exports = model('User', userSchema)