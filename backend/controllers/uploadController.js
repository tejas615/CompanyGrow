const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const DatauriParser = require('datauri/parser');
const path = require('path');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Setup multer memory storage (store file in memory for upload)
const storage = multer.memoryStorage();
const multerUploads = multer({ storage }).single('file'); // 'file' is the field name expected from frontend

const parser = new DatauriParser();

// Upload middleware to convert buffer to data URI
const dataUri = (req) => {
  if (!req.file) return null;
  return parser.format(path.extname(req.file.originalname).toString(), req.file.buffer);
};

exports.uploadFile = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ msg: 'No file uploaded' });

    const file = dataUri(req).content;
    const result = await cloudinary.uploader.upload(file, {
      folder: 'companygrow/uploads',
      resource_type: 'auto',
    });

    res.json({
      public_id: result.public_id,
      url: result.secure_url,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'File upload failed', error: err.message });
  }
};

exports.multerUploads = multerUploads;
