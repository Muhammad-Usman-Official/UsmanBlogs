import "dotenv/config";

const {
  ACCESS_TOKEN_SECRET,
  BACKEND_SERVER_PATH,
  REFRESH_TOKEN_SECRET,
  PORT,
  MONGO_URL,
} = process.env;

export {
  ACCESS_TOKEN_SECRET,
  BACKEND_SERVER_PATH,
  REFRESH_TOKEN_SECRET,
  PORT,
  MONGO_URL,
};
