function generateReadme(answers) {

    return `#${data.projectTitle}
    ## Table of contents:
    [description](#description)
    [installation](#installation)
    [linkURL](#linkUrl)
    [use](#use)
    [license](#licence)
    [contributors](#contributors)
    [tests](#tests)
    [issues](#issues)
    [Username](#Usernames)
    [email](#emails)

### description:
${data.description}
### installation:
${data.installation}
### linkURL
${data.linkURL}
### usage:
${data.usage}
### license:
${data.license}
### contributing:
${data.contributors}
### tests:
${data.tests}
### questions:
${data.questions}
### Username:
${data.Username}
### email:
${data.email}`

}