const util = require('.');

const jsonFormat = {
    code: -1,
    success: false,
    message: '',
    data: [],
    baseId: -1,
    error: {},
    sentAt: '' 
};


const sendResponse = (res, data) => {
    res.json(data);
};


const unauthorized = res => {
    const json = JSON.parse(JSON.stringify(jsonFormat));
    json.code = 403;
    json.message = 'Unauthorized request. It seems either you didn\'t provide the auth token, or you don\'t have the access to the module you are calling' ;
    sendResponse(res, json);
};

const success = (res, code, data, message, baseId, recordsCount) => {
    const json = JSON.parse(JSON.stringify(jsonFormat));
    json.code = code;
    json.success = true;
    json.data = data;
    json.message = message;
    json.baseId = baseId;
    json.sentAt = new Date();
    json.recordsCount = recordsCount;
    sendResponse(res, json);
};


const error = (res, error, errorCode, source) => {
    const json = JSON.parse(JSON.stringify(jsonFormat));
    json.code = errorCode ? errorCode : 502;
    json.message = error ? util.drill_down_error_message(error) : 'No error info found';
    json.error = error;

    // console.log('source in error: ', source, error, errorCode);

    sendResponse(res, json);
};


module.exports.error = error;
module.exports.unauthorized = unauthorized;
module.exports.success = success;