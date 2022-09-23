import app from "./app";

require('dotenv').config({path: './.env'})

const port: number | string = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Application run on port ${port}`)
});