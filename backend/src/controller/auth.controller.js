import { User } from "../models/userModels.js";

export const authCallback = async (req, res) => {
  try {
    const { id, firstName, lastName, emailAddresses, imageUrl } = req.body;

    // check if user already exists
    const user = await User.findOne({ clerkId: id });

    if (!user) {
      // if user does not exist, create a new user
      await User.create({
        clerkId: id,
        fullName: `${firstName} ${lastName}`,
        imageUrl,
      });
    }
  } catch (error) {
    console.log("Error in auth callback", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};
