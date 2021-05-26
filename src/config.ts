export const config = () => ({
  port: Number(process.env.PORT),
  jwtSecretKey: process.env.JWT_SECRET_KEY,
  jwtExpirationTime: process.env.JWT_EXPIRATION_TIME,
  mongoUri: process.env.MONGO_URI,
});
