// const errorMessageList = {
//     400: "Bad request",
//     401: "Unuthirized",
//     403: "Forbidden",
//     404: "Not found",
//     409: "Conflict"
// }

// const HttpError = (status, message = errorMessageList[status]) => {
//     const error = new Error(message);
//     error.status = status;
//     return error;
// }

const HttpError = (status, message) => {
    const error = new Error(message);
    error.status = status;
    return error;
}

module.exports = HttpError;