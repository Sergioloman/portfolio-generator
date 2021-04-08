
const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer
    .prompt([
        { 
            type: 'input',
            name: 'name',
            message: 'what is your name?'
        },
        {
            type : 'input',
            name: 'github',
            message: 'enter your Github Username'
        },
        {
            type: 'input',
            name: 'about',
            message: 'provide some information about yourself:'
        }
    ]);
};

const promptProject =  portfolioData => {
    //if there is no projects array property create one
    if (!portfolioData.projects){
        portfolioData.projects = [];
    }
    console.log(`
    =================
    add a new project
    =================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: ' what is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'provide a description of the projects (Required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'whar did you build this project with? (chek all that apply)',
            choices: ['javascript','html','css','ES6','Jquery','bootstrap','node']
        },
        { 
            type: 'input',
            name: 'link',
            message: 'enter the github link to your project ( Required)'
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'would you like to feature this project?',
            default: false
        },
        { 
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'would you like to enter another project?',
            default: false
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if( projectData.confirmAddProhect){
            return promptProject(portfolioData);

        } else {
            return portfolioData;
        }
    })
};


promptUser()
    .then(promptProject)
    .then(portfolioData =>{
        console.log(portfolioData);
    });
    

//const fs = require('fs');

// const generatePage = require('./sources/page-template.js');

// const pageHTML =  generatePage(name, github);

// fs.writeFile('./index.html', generatePage(name,github), err=>{
//     if (err) throw new Error(err);
//     console.log("Portfolio complete! Check out index.html to see the output!")
// });

