const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the full name"],
        trim: true,
    },
    username:{
        type:String,
        required: [true, "Please enter the username"],
        trim: true,
        minlength: 4,
    },
    email: {
        type: String,
        required: [true, "Please enter the email"],
        unique: [true, "Duplicate email is not allowed!"],
        trim: true,
        validate: function(value) {
        var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        }
    },
    address:{
        street:{
            type:String,
            trim:true,
            required:[true, "Please enter the street address"]
        },
        suite:{
            type:String,
            trim:true,
            required:[true, "Please enter the suite details"]
        },
        city:{
            type: String,
            required: [true, "Please enter the city name"],
            trim: true,
            // lowercase: true,
            validate:function(value){
                var cityRegex = /^[a-zA-Z ]*$/;
                return cityRegex.test(value)
            },
        },
        zipcode:{
            type:String,
            required: [true, "Please enter the zipcode"],
            validate: function(value) {
                var zipcodeRegex =/^[0-9]{5}(-[0-9]{4})+$/ 
                return zipcodeRegex.test(value);
            }
        },
        geo :{
            lat:{
                type: String,
                required: true
            },
            lng: {
                type: String,
                required: true
            }
        },
    },
    phone:{
        type: String,
        required: [true,'Please enter the phone number'],
        validate: function(value) {
            var phoneRegex =/^[0-9]{1}(-[0-9]{3})(-[0-9]{3})(-[0-9]{4})+$/ 
                return phoneRegex.test(value);
        }
    },
    website:{
        type: String,
        required: [true,'Please enter the website address'],
        validate: function(value) {
            var websiteRegex =/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
                return websiteRegex.test(value);
        }
    },
    company:{
        name:{
            type:String,
            required: [true,'Please enter the company name'],
        },
        catchPhrase:{
            type:String,
            required: [true,'Please enter the company catchPhrase'],
        },
        bs:{
            type:String,
            required: [true,'Please enter the company bs'],
        }
    }
});


const User = mongoose.model("user", userSchema);
module.exports = User;

