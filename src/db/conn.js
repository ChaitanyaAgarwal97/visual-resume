const mongoose = require("mongoose");
mongoose
  .connect(`mongodb://localhost:27017/${process.env.DB_Name}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log(`connected to ${process.env.DB_Name} DB`);
  })
  .catch((e) => {
    console.log(e);
  });
