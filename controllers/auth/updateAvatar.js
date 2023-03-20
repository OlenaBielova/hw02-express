const path = require("path");
const fs = require("fs/promises");
const { User } = require("../../models");


const avatarDir = path.join(__dirname, "../", "public", "avatars");

const updateAvatar = async (req, res) => {
    const { _id } = req.user;
    const { path: tempUpload, originalName } = req.file;
    const resultUpload = path.join(avatarDir, originalName);
    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join("avatars", originalName);
    await User.findByIdAndUpdate(_id, { avatarURL });

    res.json({
        avatarURL,
    })
}

module.exports = updateAvatar;