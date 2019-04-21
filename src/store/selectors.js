function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const req = require.context('.', true, /\.\/.+\/selectors\.js$/);

req.keys().forEach((key) => {
    const storeName = key.replace(/\.\/(.+)\/.+$/, '$1');
    const fromName = `from${capitalizeFirstLetter(storeName)}`;
    const selectors = req(key);
    const getState = (state = {}) => state[storeName] || {};

    module.exports[fromName] = {};

    Object.keys(selectors).forEach((name) => {
        const selector = selectors[name];
        if (typeof selector === 'function') {
            module.exports[fromName][name] = (state, ...args) => selector(getState(state), ...args);
        }
    });
});
