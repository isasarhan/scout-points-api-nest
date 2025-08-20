
export default () => ({
  port: parseInt(process.env.PORT || '4000', 10),
  jwtSecret: process.env.JWT_SECRET || 'secret123',
  database: {
    host: process.env.DATABASE_HOST,
  },
  digitalOceanSpaces: {
    key: process.env.DO_SPACES_KEY,
    secret: process.env.DO_SPACES_SECRET,
    endpoint: process.env.DO_SPACES_ENDPOINT,
    region: process.env.DO_SPACES_REGION,
    bucket: process.env.DO_SPACES_BUCKET_NAME,
  },
});
