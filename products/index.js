const express = require("express");
const app = express();
const port = 8001;
app.use(express.json());


app.get("/", (req, res, next) => {
    return res.status(200).json({ message: "Welcome to Products App" });
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})