export default {
    getTimeseries: (http, symbol) => http.get(`https://api.iextrading.com/1.0/stock/${symbol}/time-series`),
};
