const path = require('path');

module.exports = {
    entry: './lib/indeed.js',
    output: {
        filename: 'indeed.js',
        path: path.resolve(__dirname, 'dist')
    }
};