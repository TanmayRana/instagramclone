// import mongoose from "mongoose";

// let initialized = false;

// export const connect = async () => {
//   mongoose.set("strictQuery", true);

//   if (initialized) {
//     console.log("MongoDB already connected");
//     return;
//   }

//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       dbName: "instagram",
//     });
//     console.log("MongoDB connected");
//     initialized = true;
//   } catch (error) {
//     console.log("MongoDB connection error:", error);
//   }
// };

import mongoose from "mongoose";

let initialized = false;

export const connect = async () => {
  mongoose.set("strictQuery", true);

  if (initialized) {
    console.log("MongoDB already connected");
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("Missing MONGODB_URI environment variable");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "instagram",
    });
    console.log("MongoDB connected");
    initialized = true;
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
