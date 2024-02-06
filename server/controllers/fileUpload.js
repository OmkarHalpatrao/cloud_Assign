const File = require("../models/files");
const cloudinary = require("cloudinary").v2;
require("dotenv").config({ path: "./../.env" });

exports.localFileUpload = async (req, res) => {
    try {
        const file = req.files.file;
        console.log("File received ->", file);

        // Upload to Cloudinary
        const response = await uploadFileToCloudinary(file, "FileApp");
        console.log(response);

       
        

        res.json({
            success: true,
            message: 'Local file uploaded successfully',
            
        });
    } catch (error) {
        console.log("Not able to upload the file on server");
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

function isFileTypeSupported(fileType, supportedTypes) {
    return supportedTypes.includes(fileType);
}

async function uploadFileToCloudinary(file, folder, quality) {
    const options = { folder };
    if (quality) {
        options.quality = quality;
    }
    options.resource_type = "auto";

    return await cloudinary.uploader.upload(file.tempFilePath, options);
}
