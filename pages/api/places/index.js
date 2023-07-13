import { places } from '../../../lib/db';
import dbConnect from '../../../db/connect'

export default async function handler(request, response) {
  //connect to the db  
  await dbConnect()
  return response.status(200).json(places);
}


