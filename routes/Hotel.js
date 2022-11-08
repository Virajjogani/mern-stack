import express from "express";
import {
  Addhotel,
  DeleteHotel,
  GetallHotels,
  GetsingleHotels,
  updatehotel
} from "../controller/hotelcontroller.js";
const router = express.Router();

// --------------------------------------------------
router.post("/addhotel", Addhotel);
router.put("/updatehotel/:id", updatehotel);
router.delete("/deletehotel/:id", DeleteHotel);
router.get("/getallhotels", GetallHotels);
router.get("/gethotel/:id", GetsingleHotels);

// --------------------------------------------------

export default router;
