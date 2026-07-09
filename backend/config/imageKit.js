import dotenv from "dotenv";

dotenv.config();

import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY,
  urlEndpoint: process.env.URL_ENDPOINT,
});

const uploadImage = async (file) => {
  const result = await imagekit.upload({
    file: file.buffer,          
    fileName: file.originalname
  });

  return result.url;
};

export default uploadImage