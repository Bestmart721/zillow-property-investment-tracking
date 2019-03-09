// ./express-server/app.js
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import SourceMapSupport from 'source-map-support';
import bb from 'express-busboy';





// import routes
import zillowRoutes from './routes/zillow.server.route';

// define our app using express
const app = express();

// express-busboy to parse multipart/form-data
bb.extend(app);

// allow-cors
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})


// configure app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));


// set the port
const port = process.env.PORT || 3001;
/*
// connect to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mern-todo-app', {
  useMongoClient: true,
});
*/

// add Source Map Support
SourceMapSupport.install();


app.use('/api', zillowRoutes);

/*
app.get('/', (req,res) => {
  return res.end('Api working');
})
*/


/*
unirest.post("https://ZillowdimashirokovV1.p.rapidapi.com/getChart")
.header("X-RapidAPI-Key", "5fa5d944a9msh9bf3a2a83a515d1p16d337jsna797538fb371")
.header("Content-Type", "application/x-www-form-urlencoded")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});

console.log('---------------------------------------------------------');

unirest.post("https://ZillowdimashirokovV1.p.rapidapi.com/getComps")
.header("X-RapidAPI-Key", "5fa5d944a9msh9bf3a2a83a515d1p16d337jsna797538fb371")
.header("Content-Type", "application/x-www-form-urlencoded")
.send("count=1")
.send("zwsId=X1-ZWz1gy3v1sml8r_2f38x")
.send("zpid=2000")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});

console.log('---------------------------------------------------------');

unirest.post("https://ZillowdimashirokovV1.p.rapidapi.com/getDeepComps")
.header("X-RapidAPI-Key", "5fa5d944a9msh9bf3a2a83a515d1p16d337jsna797538fb371")
.header("Content-Type", "application/x-www-form-urlencoded")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});

console.log('---------------------------------------------------------');

unirest.post("https://ZillowdimashirokovV1.p.rapidapi.com/getDeepSearchResults")
.header("X-RapidAPI-Key", "5fa5d944a9msh9bf3a2a83a515d1p16d337jsna797538fb371")
.header("Content-Type", "application/x-www-form-urlencoded")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});


console.log('---------------------------------------------------------');

unirest.post("https://ZillowdimashirokovV1.p.rapidapi.com/getRegionChildren")
.header("X-RapidAPI-Key", "5fa5d944a9msh9bf3a2a83a515d1p16d337jsna797538fb371")
.header("Content-Type", "application/x-www-form-urlencoded")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});


console.log('---------------------------------------------------------');




console.log('---------------------------------------------------------');
*/



// catch 404
app.use((req, res, next) => {
  res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});


// start the server
app.listen(port,() => {
  console.log(`App Server Listening at ${port}`);
});
