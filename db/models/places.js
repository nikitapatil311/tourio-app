// importing
import mongoose, { Schema } from "mongoose";

//the places db schema

const placesSchema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String , required: true},
    mapURL: { type: String, required: true },
    description: { type: String, required: true },
});

const Place = mongoose.models.Place || mongoose.model("Place", placesSchema);
export default Place;
