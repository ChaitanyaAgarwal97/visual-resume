const mongoose = require("mongoose");
mongoose
  .connect(`${process.env.DB_URI}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log(`connected to ${process.env.DB_Name} DB`);
  })
  .catch((e) => {
    console.log(e);
  });
