import { User } from "../models/userModels.js";

export const authCallback = async (req, res, next) => {
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
    res.status(200).json({ success: true });
  } catch (error) {
    console.log("Error in auth callback", error);
    next(error);
  }
};
