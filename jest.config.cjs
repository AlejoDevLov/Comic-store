module.exports = {
    testEnvironment: "jest-environment-jsdom",
    transformIgnorePatterns: [
        "/node_modules/(?![swiper/react/swiper-slide.js])",
        "/node_modules/(?![swiper/react/swiper.js])"
    ],
    transform : {
        '^.+\\.(js|jsx)$': 'babel-jest',
        '^.+\\.css$': 'jest-transform-css',
    },
}