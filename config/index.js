module.exports = {
  PORT: process.env.PORT || 4000,
  DB_CONNECTION:
    process.env.DB_CONNECTION ||
    "mongodb+srv://Final:Turab@cluster0.4sz0si4.mongodb.net/?retryWrites=true&w=majority",
  DB_MONGODBLOCAL: "mongodb://localhost:27017/datas",
};
