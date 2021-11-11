function generateReadme(answers) {

    return `#${answers.title}

    ## Table of contents:
    [description](#description)
    [installation](#installation)
    [linkURL](#linkUrl)
    [usage](#usage)
    [license](#licence)
    [contributing](#contributing)
    [tests](#tests)
    [issues](#issues)
    [Username](#Usernames)
    [email](#emails)

### description:
${answers.description}
### installation:
${answers.installation}
### linkURL
${answers.linkURL}
### usage:
${answers.usage}
### license:
${answers.license}
### contributing:
${answers.contributors}
### tests:
${answers.tests}
### questions:
${answers.questions}
### Username:
${answers.Username}
### email:
${answers.email}
`;
}
// generateReadme();

module.exports = generateReadme;