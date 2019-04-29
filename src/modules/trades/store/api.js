export default {
    get: (http, symbols) => http.get(`deep/trades?symbols=${symbols.join()}`),
};
