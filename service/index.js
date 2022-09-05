//Imports
const express = require('express');

//imports from other files
const authRouter = require('./routes/auth');



//INIT
const PORT = 3000;
const app = express();

//middleware
app.use(authRouter);



app.listen(PORT,  () => {
    console.log(`Connected at port ${PORT}`);
});