/**
 * @typedef {import('../../frontend/node_modules/botasaurus-controls/dist/index').Controls} Controls
 */

/**
 * @param {Controls} controls
 */
function getInput(controls) {
    controls
        .link('link', { isRequired: true ,defaultValue:"https://www.omkar.cloud/"})
}
