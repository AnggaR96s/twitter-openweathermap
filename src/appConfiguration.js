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
			id: 3108286,
			timezone: 'Europe/Madrid'
		},
		barcelona: {
			id: 3128760,
			timezone: 'Europe/Madrid'
		}
	},
	publishInterval: 1200000 // 1200000 = 20 minutes
});

/** App Configuration */
module.exports = appConfiguration;
