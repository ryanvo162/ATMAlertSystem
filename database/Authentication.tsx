import { getAuth } from "firebase/auth";
import app from "./Firebase";

const auth = getAuth(app);

export default auth

