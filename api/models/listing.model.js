import mongoose, { mongo } from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      reuired: true,
    },
    address: {
      type: String,
      reuired: true,
    },
    regularPrices: {
      type: Number,
      required: true,
    },
    discountPrices: {
      type: Number,
      required: true,
    },
    bedrooms: {
      type: Number,
      require: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    furnished: {
      type: Boolean,
      required: true,
    },
    parking: {
      type: Boolean,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    offer: {
      type: Boolean,
      required: true,
    },
    imageUrls: {
      type: Array,
      required: true,
    },
    useRef: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Listing = mongoose.model("Listing", listingSchema);
