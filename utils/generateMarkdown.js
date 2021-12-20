// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
      return '';
    }

    return `

    `;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `
  ## License


  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribute](#contribute)
* [Tests](#tests)
* [Questions](#questions)

## Installaation

${data.installation}

## Usage

${data.usage}

## Contribute

${data.contribute}

## Tests

${data.tests}

## Questions

If you have any questions please reach out to me on GitHub at [https://github.com/${data.github}](https://github.com/${data.github}) or Email me at [mailto:${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
