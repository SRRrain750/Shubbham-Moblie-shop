import multer from "multer";

// use memory storage (buffer) so we can upload directly to Cloudinary
const storage = multer.memoryStorage();
const upload = multer({ storage});

export default upload;
