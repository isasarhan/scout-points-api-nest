
export default () => ({
    port: parseInt(process.env.PORT || '4000', 10) ,
    database: {
      host: process.env.DATABASE_HOST,
    }
  });
  