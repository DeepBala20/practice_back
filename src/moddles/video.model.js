import mongoose , {Schema} from "mongoose";

const videoShema = new Schema(
    {
        videoFile:{
            type:String,//cloudinary url
            required : true
        },
        thumbnail:{
            type:String,//cloudinary url
            required : true
        },
        title:{
            type:String,
            required : true
        },
        description:{
            type:String,
            required : true
        },
        views:{
            type:Number,//get details from cloudinary url
            required : true
        },
        isPublished:{
            type : Boolean
        },
        owner : {
            type:Schema.Types.ObjectId,
            ref:"User"
        }

    },
    {
        timestamps : true
    }
)

export const Video = mongoose.model("Video" , videoShema)