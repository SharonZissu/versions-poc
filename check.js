import createPreset from 'conventional-changelog-conventionalcommits'

createPreset({
    issuePrefixes: ['TEST-'],
    issueUrlFormat: 'https://myBugTracker.com/{{prefix}}{{id}}'
}).then((config) => {
    // do something with the config
})