// declaring the dependencies
const fs = require('fs');
const inquirer = require('inquirer');
var util = require('util');
const generateReadme = require("../utils/generateReadme")

const writeFileAsync = util.promisify(fs.writeFile);

// prompt questions to populate the README.md 
const questions = [{
        type: "input",
        message: "What is the project title?",
        name: "projectTitle",
    },
    {
        type: "input",
        message: "Write a brief description about your project?",
        name: "description",
    },

    // {
    //     type: "input",
    //     message: "What is the code the user needs for installing packages?:",
    //     name: "installation",
    // },
    // {
    //     type: "input",
    //     message: "What is your LinkedIn URL?",
    //     name: "linkURL",
    // },
    // {
    //     type: "input",
    //     message: "What is project used for?",
    //     name: "usage",
    // },
    // {
    //     type: "input",
    //     message: "Chose the appropriate license for this project:",
    //     name: "license",

    //     Choices: ["MIT", "GNU", "Open", "Mozilla", "Apache", "BSD", ],
    // },

    // {
    //     type: "input",
    //     message: "Who are the contributors of this projects?",
    //     name: "contributing",
    // },
    // {
    //     type: "input",
    //     message: "Were there any tests on the project?",
    //     name: "tests",
    // },
    // {
    //     type: "input",
    //     message: "What are the issues you had?",
    //     name: "questions",
    // },
    // {
    //     type: "input",
    //     message: "Please enter your GitHub username:",
    //     name: "Username",
    // },
    // {
    //     type: "input",
    //     message: "please enter your email adress:",
    //     name: "email",
    //}

];






// Async function using util.promisify 
async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await inquirer.prompt(ques);
        const generateContent = generateReadme(answers);
        // Write new README.md to dist directory
        // await writeFileAsync('./dist/README.md', generateContent);
        // console.log('✔️  Successfully wrote to README.md');
    } catch (err) {
        console.log(err);
    }
    console.log('SourceBuffer');
}

init();