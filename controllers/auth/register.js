const { HttpError, sendEmail } = require("../../helpers");
const { User } = require("../../models");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { v4: uuidv4 } = require('uuid');
const { BASE_URL } = process.env;

const register = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
        throw HttpError(409, "Email in use")
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email);
    const verificationToken = uuidv4();

    const newUser = await User.create({...req.body, password: hashPassword, avatarURL, verificationToken});
    
    const verifyEmail = {
        to: email,
        subject: "Verify email",
        html: `<a href = "${BASE_URL}/api/auth/verify/${verificationToken}">Click verify email</a>`
    }

    sendEmail(verifyEmail);

    res.status(201).json({
        password: newUser.password,
        email: newUser.email
    })
};

module.exports = register;