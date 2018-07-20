const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const bcrypt=require('bcrypt');

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
 });
Question=require('./models/question');
Submission=require('./models/submissionresult');
Company=require('./models/recruiterProfile');
Developer=require('./models/developerProfile');


mongoose.connect("mongodb://localhost:27017/question_sets");
var db = mongoose.connection;


app.get('/', (req, res) => {
	res.send('Hello ');
});


app.get('/api/questions',function(req,res){
    Question.getQuestions(function(err,question){

        if(err){
            throw err;
        }
        app.set('json spaces', 2);
        res.json(question);
    });

});
    
app.post('/api/questions',function(req,res){
    var question=req.body;
    Question.addQuestion(question,function(err,question){
        if(err){
            throw err;
        }
        app.set('json spaces', 2);
        res.json(question);
    });
});

app.delete('/api/questions/:_id',function(req,res){
    var id=req.params._id;
    Question.deleteQuestion(id,function(err,question){
        if(err){
             throw err;
        }
        app.set('json spaces', 2);
       res.json(question);
       
    });
});

app.get('/api/questions/:_id',function(req,res){
    Question.getQuestionById(req.params._id,function(err,question){
        if(err){
             throw err;
        }
        app.set('json spaces', 2);
       res.json(question);
       
    });
});


app.post('/api/submission',function(req,res){
    var submission=req.body;
    Submission.addSubmission(submission,function(err,submission){
        if(err){
            throw err;
        }
        app.set('json spaces', 2);
        res.json(submission);
    });
});
app.get('/api/submission',function(req,res){
    Submission.getSubmission(function(err,submission){

        if(err){
            throw err;
        }
        app.set('json spaces', 2);
        res.json(submission);
    });

});

app.get('/api/submission/:_id',function(req,res){
    Submission.getSubmissionById(req.params._id,function(err,submission){
        if(err){
             throw err;
        }
        app.set('json spaces', 2);
       res.json(submission);
       
    });
});


app.post('/api/company',function(req,res){
    var company=req.body;
    Company.addCompany(company,function(err,company){
        if(err){
            throw err;
        }
        app.set('json spaces', 2);
        res.json(company);
    });
});
app.get('/api/company',function(req,res){
    Company.getCompany(function(err,company){

        if(err){
            throw err;
        }
        app.set('json spaces', 2);
        res.json(company);
    });

});
app.put('/api/company/:_id',function(req,res){

    var id=req.params._id;
    var company=req.body;
    Company.updateCompany(id,company,{},function(err,company){
        if(err){
             throw err;
        }
        app.set('json spaces', 2);
       res.json(company);
       
    });
});


app.get('/api/developer',function(req,res){
    Developer.getDetails(function(err,developer){

        if(err){
            throw err;
        }
        app.set('json spaces', 2);
        res.json(developer);
    });

});
    
app.post('/api/developer',function(req,res){
    var developer=req.body;
    Developer.addDetails(developer,function(err,developer){
        if(err){
            throw err;
        }
        app.set('json spaces', 2);
        res.json(developer);
    });
});
app.get('/api/developer/:_id',function(req,res){
    Developer.getDetailsById(req.params._id,function(err,developer){
        if(err){
             throw err;
        }
        app.set('json spaces', 2);
       res.json(developer);
       
    });
});
app.put('/api/developer/:_id',function(req,res){

    var id=req.params._id;
    var developer=req.body;
    Developer.updateDetails(id,developer,{},function(err,developer){
        if(err){
             throw err;
        }
        app.set('json spaces', 2);
       res.json(developer);
       
    });
});


app.listen(9000);
console.log("Running");