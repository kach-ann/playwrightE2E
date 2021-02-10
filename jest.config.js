module.exports = {
    verbose: true,
    roots: [
        './__tests__'
    ],
    setupFilesAfterEnv: [
        './defaultTimeout.js'
    ],
    preset: 'jest-playwright-preset',
};