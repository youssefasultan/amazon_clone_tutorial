//Imports
const express = require('express');
const mongoose = require('mongoose');
//imports from other files
const authRouter = require('./routes/auth');




//INIT
const PORT = 3000;
const app = express();
const DB = 'mongodb+srv://youssef:u67mm2K3u0CeVJQ7@cluster0.yszqhwc.mongodb.net/?retryWrites=true&w=majority';

//middleware
app.use(express.json());
app.use(authRouter);


// connections
mongoose.connect(DB).then(() => {
    console.log('Connected Successfully');
}).catch(e => {
    console.log(e);
});

app.listen(PORT, "0.0.0.0",  () => {
    console.log(`Connected at port ${PORT}`);
});