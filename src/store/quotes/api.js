export default {
    get: (http, symbols) => http.get(`https://api.iextrading.com/1.0/tops/last?symbols=${symbols.join()}`),
};
