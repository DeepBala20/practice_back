import {v2 as cloudinary} from "cloudinary";
import fs from "fs";
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret:  process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localPathFile)=>{
    try{
        if (!localPathFile) return null

        //upload the file in cloudinary
        const response = await cloudinary.uploader.upload(localPathFile,{
            resource_type:"auto"
        })

        //file has been successfully uploaded
        // console.log("file uploaded successfully..",response.url)

        fs.unlinkSync(localPathFile);

        return response

    }
    catch (err) {
        fs.unlinkSync(localPathFile)//remove the locally saved temp file
        return null
    }
}

export {uploadOnCloudinary}