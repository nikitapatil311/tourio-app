import Place from "../../../../db/models/places.js";
import dbConnect from "../../../../db/connect";

export default async function handler(request, response) {
    console.log("connecting to the db");
    //connect to the db
    await dbConnect();
    // collect data from client
    const method = request.method;
    console.log(method);
    const { id } = request.query;

    if (!id) {
        return;
    }
    switch (method) {
        // when reading the data
        case "GET":
            console.log("starting to get the data");

            const places = await Place.findById(id);

            if (places) {
                return response.status(200).json(places);
            } else {
                return response
                    .status(400)
                    .json({ status: "No data was found" });
            }
            break;
        // when updating data‚
        case "PATCH":
            console.log("updating");
            const pla = await Place.findByIdAndUpdate(id, {
                $set: request.body,
            });

            if (pla) {
                return response.status(200).json({ status: `Place updated` });
            } else {
                return response
                    .status(400)
                    .json({ status: "No data was found" });
            }
            break;
        // when deleting data‚
        case "DELETE":
            console.log("deleting");
            break;
    }

    const place = places.find((place) => place.id === id);

    if (!place) {
        return response.status(404).json({ status: "Not found" });
    }

    response.status(200).json(place);
}
