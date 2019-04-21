const req = require.context('.', true, /\.\/.+\/actions\.js$/);

req.keys().forEach((key) => {
    const actions = req(key);

    Object.keys(actions).forEach((name) => {
        module.exports[name] = actions[name];
    });
});

// const req = require.context('.', true, /\.\/.+\/actions\.js$/);

// req.keys().forEach((key) => {
//    const storeName = key.replace(/\.\/(.+)\/.+$/, '$1');
//    const fromName = `${storeName}Actions`;
//    const actions = req(key);

//    module.exports[storeName] = {};

//    Object.keys(actions).forEach((name) => {
//        const action = actions[name];
//        if (typeof action === 'function') {
//            module.exports[storeName][name] = action;
//        }
//    });
// });
