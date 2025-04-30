module.exports = import( 'conventional-changelog-conventionalcommits')
    .then( pkg => pkg.default({
        issuePrefixes: ['TEST-'],
        issueUrlFormat: 'https://myBugTracker.com/{{prefix}}{{id}}'
    }));