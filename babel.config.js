module.exports = api => {
    api.cache(true); //new babel 7 feature
    return {
        presets: ["@babel/preset-env"],
        plugins: []
    };
};