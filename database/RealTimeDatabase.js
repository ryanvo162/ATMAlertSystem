import { getDatabase } from "firebase/database";
import app from "./Firebase";

const database = getDatabase(app);

export default database

