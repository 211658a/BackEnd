const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.yacqk.mongodb.net/monkeybusiness?retryWrites=true&w=majority', {
    useNewUrlParser: true,
}).then(() => {
    console.log("Databse Connected Successfully!!");
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});