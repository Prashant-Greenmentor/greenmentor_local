const fs = require("fs");
const path = require("path");
const multer = require("multer");

const s3 =require("../../../../src/data-access/sequelize/config/awsConfig");
const dotenv = require("dotenv");
const nodeZip = require("node-zip");
require("aws-sdk/lib/maintenance_mode_message").suppress = true;
dotenv.config();
const UploadEvidence = () => {
  return async function post(httpRequest) {
    try {
      const { files } = httpRequest;

      if (!files || files.length === 0) {
        return {
          headers: {
            "Content-Type": "application/json",
          },
          statusCode: 400,
          body: {
            error: "No files were uploaded.",
          },
        };
      }

      const zip = new nodeZip();
      for (let file of files) {
        zip.file(file.originalname, file.buffer);
      }
      const data = zip.generate({ base64: false, compression: "DEFLATE" });

      const fileName = "uploaded.zip";
      const filePath = path.join(__dirname, "uploads", fileName);
      if (!fs.existsSync(path.dirname(filePath))) {
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
      }

      // Write zip file to local storage
      fs.writeFileSync(filePath, data, "binary");

      const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: "energy/fuel/" + Date.now() + ".zip",
        Body: fs.createReadStream(filePath),
      };

      // Upload zip file to S3
      const uploadPromise = new Promise((resolve, reject) => {
        s3.upload(params, (err, data) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            console.log(data);
            resolve(data);
          }
        });
      });

      const s3Response = await uploadPromise;

      // Delete local file
      fs.unlinkSync(filePath);

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: {
          msg: "File uploaded.",
          path: s3Response.Location,
        },
      };
    } catch (e) {
      console.error(e);
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  };
};

module.exports = UploadEvidence;
