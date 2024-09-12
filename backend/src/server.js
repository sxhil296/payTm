import "dotenv/config";
import { app } from "./app.js";
import connectDB from "./db/index.js";
const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.on("ERROR : ", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    app.listen(PORT, () => {
      console.log(`Server is running at port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection Failed!!", error);
  });
