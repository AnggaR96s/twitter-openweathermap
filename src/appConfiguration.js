/* Home doc */
/**
 * @file Main configuration for the application
 * @see module:appConfiguration
 */

/* Module doc */
/**
 * Main configuration for the application
 * @module appConfiguration
 */


/**
 * App configuration
 * @type {object}
 */
const appConfiguration = Object.freeze({
	citiesToRetrieve: {
		terrassa: {
			id: 3108286
		},
		barcelona: {
			id: 3128760
		}
	},
	publishInterval: 1200000 // 1200000 = 20 minutes
});

module.exports = appConfiguration;