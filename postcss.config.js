module.exports = {
    plugins: [
      require('autoprefixer')({browsers:['ie >= 9', 'chrome >34']})
    ]
}
/**
 *   "autoprefixer.browsers": [
        "last 3 versions",
        "ie >= 10",
        "ie_mob >= 10",
        "ff >= 30",
        "chrome >= 34",
        "safari >= 6",
        "ios >= 6",
        "android >= 4.4"
    ],
 */