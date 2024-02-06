const express = require("express")
const app = express();

require("dotenv").config({path:"./../.env"});
const PORT = process.env.PORT || 8000;

// const db = require("./config/database");
// db.connect();

const fileUplaod = require("express-fileupload");
app.use(fileUplaod({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

app.use(express.json());

const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

const Upload = require("./routes/FileUpload");
app.use('/api/v1/upload',Upload);


app.listen(PORT,() => {
    console.log(`App is running at ${PORT}`);
})
