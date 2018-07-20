var mongoose=require('mongoose');
var RecruiterSchema=mongoose.Schema({
    companyName:{
        type:String,
        required:true
    },
    companyRegistrationNo:{
        type:String,
        required:true
    },
    contactNo:{
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
    recruiterName:{
        type:String,
        required:true
    },
    companyWebsite:{
        type:String,
        required:true
    },
    create_date:{
        type:Date,
        default:Date.now
    }
    
});

var Company=module.exports=mongoose.model('Recruiter',RecruiterSchema);

module.exports.getCompany=function(callback,limit){
    Company.find(callback).limit(limit);
};
module.exports.addCompany=function(company,callback){
    Company.create(company,callback);
};
module.exports.updateCompany=function(id,company,options,callback){
    var query={_id:id};
    var update={
     
        email:company.email,
        contactNo:company.contactNo,
        password:company.password,
        recruiterName:company.recruiterName ,
        companyWebsite: company.companyWebsite,
   
 
    };
 
     Company.findOneAndUpdate(query,update,options,callback);
 };