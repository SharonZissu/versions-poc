const createPreset = require('conventional-changelog-conventionalcommits');

module.exports = createPreset({
    issuePrefixes: ['TEST-'],
    issueUrlFormat: 'https://myBugTracker.com/{{prefix}}{{id}}'
});