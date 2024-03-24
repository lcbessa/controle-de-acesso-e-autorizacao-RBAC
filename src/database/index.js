import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1/API-RBAC");

mongoose.Promise = global.Promise;

export default mongoose;
