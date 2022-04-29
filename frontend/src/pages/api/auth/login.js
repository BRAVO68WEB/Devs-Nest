import { sign } from "jsonwebtoken";
import axios from "axios";
import { serialize } from "cookie";

const secret = process.env.SECRET;

export default async function (req, res) {
  const { username, email, password } = req.body;
  const [token, setToken] = useState(null);
  const [Error, setError] = useState(false);

  // Check in the database
  // if a user with this username
  // and password exists

  axios.post("http://localhost:5000/auth/login", {email, password}).then((response) => {
    setToken(response.data.token);
  }).catch((error) => {
    if (error.response.data.message === "User not exist") {
      setError(true);
    }
  })

  axios.post("http://localhost:5000/auth/register", {name, email, password}).then((response) => {
    setToken(response.data.token);
  }).catch((error) => {
    if (error.response.data.message === "User not exist") {
      setError(true);
    }
  })

  if (token && !Error) {
    const serialised = serialize("OursiteJWT", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialised);

    res.status(200).json({ message: "Success!" });
  } else {
    res.json({ message: "Invalid credentials!" });
  }
}