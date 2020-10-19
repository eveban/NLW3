import path from 'path';
import multer from 'multer';

const tmpFolder = path.join(__dirname, '..', '..', 'uploads');

export default {
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename: (request, file, callback) => {
      // const fileHash = crypto.randomBytes(6).toString('hex');
      // const fileName = `${fileHash}-${file.originalname}`;

      const fileName = `${Date.now()}-${file.originalname}`;
      callback(null, fileName);
    },
  }),
};
