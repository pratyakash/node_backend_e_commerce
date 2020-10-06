const dotenv = require('dotenv');

dotenv.config({ path: `${process.env.NODE_ENV}.env` });

const app = require('./app');
const { LOGS_LEVEL } = require('./utils/constants');
const { log } = require('./utils/log');


const { db } = require('./models');

const port = process.env.PORT || 3000;

//  Starting the server
app.listen(port, () => {
    log(`Listening on Port ${port}`, LOGS_LEVEL.DESCRIPTION);
});
