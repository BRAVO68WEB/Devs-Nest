const jwt = require("jsonwebtoken");
const User = require("../models/users");

const getAuthenticatedUser = async (token) => {
	const decoded = jwt.verify(token, process.env.JWT_SECRET);
	const user = await User.findById(decoded._id);

	if (!user) {
		throw new Error("Unauthorized");
	}
	return user;
};

const auth = async (req, res, next) => {
	try {
		const Authorization = req.header("Authorization");
		if (!Authorization) {
			res.status(401).send({ error: "Auth-key Not found" });
		}
		const token = Authorization.replace("Bearer ", "");
		req.token = token;
		req.user = await getAuthenticatedUser(token);
		next();
		return;
	} catch (e) {
		return res.status(401).send({ error: "Please authenticate", message: e.message });
	}
};

const isAuthenticated = async (req, res, next) => {
	try {
		const Authorization = req.header("Authorization");
		if (!Authorization) {
			req.user = null;
			req.isAuthenticated = false;
			next();
		}
		const token = Authorization.replace("Bearer ", "");
		req.user = await getAuthenticatedUser(token);
		req.token = token;
		req.isAuthenticated = true;
		next();
		return;
	} catch (e) {
		req.user = null;
		req.isAuthenticated = false;
		next();
	}
};

module.exports = {
	auth,
	isAuthenticated
};