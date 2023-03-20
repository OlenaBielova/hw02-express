const path = require("path");
const fs = require("fs/promises");
const { User } = require("../../models");
const Jimp = require("jimp");


const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
    const { _id } = req.user;
    const { path: tempUpload, originalname } = req.file;
    const filename = `${_id}_${originalname}`;
    
    try {
        const avatarImg = await Jimp.read(tempUpload);
        avatarImg.resize(250, 250).quality(60).write(tempUpload);

        const resultUpload = path.join(avatarDir, filename);
        await fs.rename(tempUpload, resultUpload);
        const avatarURL = path.join("avatars", filename);
        await User.findByIdAndUpdate(_id, { avatarURL });

        res.json({
            avatarURL,
        })
    } catch (error) {
        console.log(error);
    }

};

module.exports = updateAvatar;