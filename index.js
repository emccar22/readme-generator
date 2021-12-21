// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title to your project (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title!');
                return false;
            }
        }
    },
    {
       type: 'input',
       name: 'description',
       message: 'Please enter a description of your project (Required)',
       validate: descriptionInput => {
           if (descriptionInput) {
               return true;
           } else {
               console.log('Please enter your project description!');
               return false;
           }
       }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter the installation instructions of your project (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter the installation insturctions for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter the usage information of your project (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter the usage information of your project!');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please choose the license of your project',
        choices: ['ISC', 'MIT', 'Apache License 2.0', 'GNU GPLv3']
    },
    {
        type: 'confirm',
        name: 'confirmContribute',
        message: 'Would you like to add a contribute section?',
        default: true
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please provide some information on how others can contribute',
        when: ({ confirmContribute }) => {
            if (confirmContribute) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Would you like to add a tests section?',
        default: true
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide tests for you project',
        when: ({ confirmTests }) => {
            if (confirmTests) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    }

];

// TODO: Create a function to write README file
const writeFile = readmeData => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', readmeData, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File Created'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
   .then(readmeData => {
       return generateMarkdown(readmeData);
   })
   .then(pageMarkdown => {
        return writeFile(pageMarkdown)
   })
   .then(writeFileResponse => {
       console.log(writeFileResponse)
   })
   