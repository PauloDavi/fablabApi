export const config = () => ({
  port: Number(process.env.PORT),
  jwtSecret: process.env.JWT_SECRET,
  mongoUri: process.env.MONGO_URI,
});
