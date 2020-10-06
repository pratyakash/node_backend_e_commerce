const chalk = require('chalk');
const { LOGS_LEVEL } = require('./constants');


const log = (message, type = LOGS_LEVEL.DESCRIPTION) => {
    if (type === LOGS_LEVEL.ERROR) {
        console.error(chalk.redBright(LOGS_LEVEL.ERROR.message + '  ' + message));
    }

    if (type === LOGS_LEVEL.SUCCESSFUL) {
        console.log(chalk.greenBright(LOGS_LEVEL.SUCCESSFUL.message + '  ' + message));
    }

    if (type === LOGS_LEVEL.DESCRIPTION) {
        console.log(chalk.blueBright(LOGS_LEVEL.DESCRIPTION.message + '  ' + message));
    }
};


module.exports.log = log;