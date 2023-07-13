import Place from "../../../db/models/places";
import dbConnect from "../../../db/connect";

export default async function handler(request, response) {
  console.log('connceting to the db');
    //connect to the db
    await dbConnect();
    // collect data from client
    const method = request.method;
    console.log(method);

    // the switch board
    switch (method) {
        // when reading the data
        case "GET":
          console.log('starting to get the data');
            console.log(Place);
            const places = await Place.find();
            console.log(places);
            if (places) {
                return response.status(200).json(places);}
            // } else {
            //     return response
            //         .status(400)
            //         .json({ status: "No data was found" });
            // }

            break;
        // when adding data‚
        case "POST":
            console.log("posting");
            break;
    }
}
