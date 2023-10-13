require("dotenv").config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { graphqlHTTP } from "express-graphql";
import { rootSchema }from './schema';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.static("./src/public"));
app.use(express.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: rootSchema,
    graphiql: true,
  })
);

const start = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MONGO_DB - connected");
    app.listen(PORT, () =>
      console.log(`server started on => http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log("Error =>", error);
  }
};

start();
