const path = require("path");

module.exports = {

    entry: {
        indeed: "./lib/indeed.js", 
        cwjobs: "./lib/cwjobs.js",
        monster: "./lib/monster.js", 
        reed: "./lib/reed.js"
    },

    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: 'source-map',
    node: {
        fs: 'empty'
    }
};