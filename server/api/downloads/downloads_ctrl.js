const studentsCollection = require("../student/student_model");
const utils = require('../../utils/ctrl.utils');
const { successHandler, failHandler } = utils;

const fetchFile = async(req, res) => {
    try {
        const { Id } = req.params;
        console.log(`get cv id: ${Id}...`);
        const post = await studentsCollection.findById(Id);
        if (!post) return failHandler(Id, res, 'getFile')
        if (!post.cv) return failHandler('user cv', res, 'getFile')
        const validName = () => {
            const nameURI = encodeURI(post.cv.name, "GBK")
            const notValid = post.cv.name.split('').some((char, index) =>
                char.charCodeAt(index) < 48 ||
                char.charCodeAt(index) > 57 && char.charCodeAt(index) < 65 ||
                char.charCodeAt(index) > 90 && char.charCodeAt(index) < 97 ||
                char.charCodeAt(index) > 122
            )
            return notValid ? nameURI : `${post.cv.name}`;
        }
        console.log(`send file... ${post.cv.name}`);
        res.set({
            "Content-Type": "application/octet-stream",
            "Content-Disposition": `attachment; filename="${validName()}"`
        })
        return res.json({ cv: post.cv })
            // successHandler(, res, 'getFile');
    } catch (error) {
        return {
            success: false,
            message: 'fetchCV failure',
            error: error.message
        }
    } finally {}
}



module.exports = {
    fetchFile,
}