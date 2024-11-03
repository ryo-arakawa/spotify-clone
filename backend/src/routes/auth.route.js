import { Router } from "express";
import { User } from "../models/userModels.js";
const router = Router();

router.post("/callback", async (req, res) => {
  try {
    const { id, firstName, lastName, emailAddresses, imageUrl } = req.body;
    const user = await User.findOne({ clerkId: id });

    if (!user) {
      // if user does not exist, create a new user
      await User.create({
        clerkId: id,
        fullName: `${firstName} ${lastName}`,
        imageUrl,
      });
    }
    res.status(200).json({ success: true });
  } catch (error) {
    console.log("Error in auth callback", error);
    res.status(500).json({ message: "Internal server error", error });
  }
});

export default router;
