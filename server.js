require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});

/*Data Connection*/
let uri = 'mongodb+srv://mon-project-wee:monproject@monprojectwee.brqps.mongodb.net/monprojectWee?retryWrites=true&w=majority'
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let urlSchema = new mongoose.Schema({
  original : {type: String, required: true},
  short: Number
})

let Url = mongoose.model('Url', urlSchema)

let bodyParser = require('body-parser')
let responseObject = {}
app.post('/api/shorturl', bodyParser.urlencoded({ extended: false }), (request, response) => {
  
  
  response.json(responseObject)
})
