const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        viewportHeight: 1080, 
        viewportWidth: 1920,
        baseUrl: 'https://www.netflix.com',
        
        // eslint-disable-next-line
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
