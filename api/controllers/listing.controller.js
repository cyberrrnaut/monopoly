import { Listing } from "../models/listing.model.js";

//listing

export const createListing = async (req, res, next) => {
  try {
    // const newListing = await Listing.create(req.body);
    console.log(req.body);
    // return res.status(201).json(newListing);
    res.status(201).json({ success: true });
  } catch (error) {
    // next(error);
    console.log(error);
  }
};
