import { Listing } from "../models/listing.model.js";

export const createListing = async (req, res) => {
  try {
    const {
      name,
      description,
      address,
      regularPrices,
      discountPrices,
      bedrooms,
      bathrooms,
      furnished,
      parking,
      type,
      offer,
      imageUrls,
    } = req.body;

    const useRef = req.user.id;
    // Now you can use these destructured variables as needed
    const newListing = await Listing.create({
      name,
      description,
      address,
      regularPrices,
      discountPrices,
      bedrooms,
      bathrooms,
      furnished,
      parking,
      type,
      offer,
      imageUrls,
      useRef,
    });

    return res.status(201).json(newListing);
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
