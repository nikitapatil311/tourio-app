import Place from "../../../db/models/places";
import dbConnect from "../../../db/connect";

export default async function handler(request, response) {
    console.log("connecting to the db");
    //connect to the db
    await dbConnect();
    // collect data from client
    const method = request.method;
    console.log(method);

    // the switch board
    switch (method) {
        // when reading the data
        case "GET":
            console.log("starting to get the data");

            const places = await Place.find();

            if (places) {
                return response.status(200).json(places);
            } else {
                return response
                    .status(400)
                    .json({ status: "No data was found" });
            }

            break;
        // when adding data‚
        case "POST":
            try {
                console.log("posting");
                const placeData = request.body;
                console.log(placeData);
                const place = new Place(placeData);
                console.log(place);
                await place.save();
                response.status(201).json({ status: "Places created" });
            } catch (error) {
                response.status(400).json({ error: error.message });
            }
            break;
    }
}
