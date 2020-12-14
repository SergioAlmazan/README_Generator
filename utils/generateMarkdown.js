// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # **${data.Title}**
  ${data.Badge}
  ## Description 
  ${data.Description}
  ## Table of contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Licence](#Licence)
  - [Contributors](#Contributors)
  - [Test](#Test)
  - [Questions](#Questions) 
  ## Installation
          ${data.Installation}
  ## Usage
  ${data.Usage}
  ## Licence
  ${data.License}
  ## Contributors
  ${data.Contributors}
  ## Test
  ${data.Test}
  ## Questions
  
  Contact me:

  Github:[${data.Username}]

  Email:[${data.Email}]
  `;
  }
  
  module.exports = generateMarkdown;