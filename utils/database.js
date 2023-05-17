import mongoose, { mongo } from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("dziala");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlPraser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("podloczylo sie mongo db");
  } catch (error) {
    console.log(error);
  }
};
