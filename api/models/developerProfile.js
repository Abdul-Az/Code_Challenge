var mongoose=require('mongoose');
var DeveloperSchema=mongoose.Schema({
    firsName:{
        type:String,
        required:true
    },
    middleName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    contactNo:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    projects:{
        firstProject:{ 
            type:String,
            
        },
        secondProject:{ 
            type:String,
           
        },
        thirdProject:{ 
            type:String,
            
        }
       
    },
    linkedinProfile:{
        type:String,
       
    },
    gitHub:{
        type:String,
        
    },
    address:{
        houseNo:{
            type:String
        },
        street:{
            type:String,
            
        },
        locality:{
            type:String,
        },
        city:{
            type:String
        },
        pincode:{
            type:String
        },
        country:{
            type:String
        },
    },
    create_date:{
        type:Date,
        default:Date.now
    }
    
});

var Developer=module.exports=mongoose.model('Developer',DeveloperSchema);

module.exports.addDetails=function(developer,callback){
    Developer.create(developer,callback);
};
module.exports.getDetails=function(callback,limit){
    Developer.find(callback).limit(limit);
};
module.exports.getDetailsById=function(id,callback){
    Developer.findById(id,callback);
};
module.exports.updateDetails=function(id,developer,options,callback){
    var query={_id:id};
    var update={
     
       
        contactNo:developer.contactNo,
        email:developer.email,
        password:developer.password,
        linkedinProfile:developer.linkedinProfile,
        gitHub:developer.gitHub,
        projects:{
        firstProject:developer.firstProject,
        secondProject:developer.secondProject,
        thirdProject:developer.thirdProject
        },
        address:{
            houseNo:developer.houseNo,
            street:developer.street,
            locality:developer.locality,
            city:developer.city,
            pincode:developer.pincode,
            country:developer.country
        }
    };
    Developer.findOneAndUpdate(query,update,options,callback);
 };