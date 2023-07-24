# Automation tests project
Since project was done for a company actual logins won't work, and tests won't run, only code example!!!!
Will recreate on my own application in upcoming months, at the moment it is just as a code example.

Thank you for your cooperation!

## Requirements
- Node JS ([Download]( https://nodejs.org/en/download/))
- Java SE Development Kit ([Download]( https://www.oracle.com/java/technologies/downloads/#jdk17-windows))
- Visual Studio Code ([Download]( https://code.visualstudio.com/))
- GitHub Destkop ([Download]( https://desktop.github.com/))

## Setup
- Install Node JS without any additional software
- Install Java SE Development Kit
- Install Visual Studio Code
- Install GitHub Destkop

## Usage
- Watch following tutorial https://www.udemy.com/course/webdriverio-tutorial-nodejs-javascript/learn/lecture/25707132#overview (tglabautomationcourses@gmail.com/Labas123@@)
- Set Node Home path in system variables https://www.udemy.com/course/webdriverio-tutorial-nodejs-javascript/learn/lecture/25723002#overview (3m 8s - 4m 58s )
- Read second page of file https://docs.google.com/document/d/1vT_d0aO9-DCHPIrHZzCAn9EHFvDYsBIIBzq32U6i5aI/edit
- Once project is opened in VS code, copy these lines in terminal:
- 1) npm install @wdio/allure-reporter --save-dev
- 2) npm install -g allure-commandline --save-dev
- And last step enable scripts in power shell as shown in this tutotial:
- https://www.youtube.com/watch?v=mHV1Yh7McWA

## BNL tests:
- WBF limits tests

- Login test:
- 1) Logins manager to WBF

- Sets user limits trough WBF
- 1) Sets deposit limit
- 2) Sets daily loss limit
- Instructions:
- Go to test\BNL\TestEnvironment\data\wbfLogin.json file and enter your prefred language, username and password
- Go to test\BNL\TestEnvironment\data\wbfLimits.json file and enter your prefered limits
- Open terminal and enter following commands:
- "npm run bnlWbfTest"
- "npm run bnlTest"
- "allure generate allure-results --clean; allure open" finally run this command to open report and see if any tests failed

- Login test:
- 1) Checks if user is able to login

- Setting limits test:
- 1) Sets deposit limit
- 2) Sets daily loss limit

- Instructions:
- Go to test\BNL\TestEnvironment\data\login.json file and enter your prefred language, username and password
- Go to test\BNL\TestEnvironment\data\limits.json file and enter your prefered limits
- Open terminal and enter following commands:
- "npm run bnlTest" to run tests in test environment
- "npm run bnl" to run tests in dev environment (currently test will fail cause there are some problems with dev environment, not test cases)
- "allure generate allure-results --clean; allure open" finally run this command to open report and see if any tests failed

- Important notes:
- 1) Some strange popup appears which stops tests execution, so watch for it to appear and immediately close it
- 2) Before setting limits you need to go to wbf to check current limits, cause bnl only accepts lower than current limit (will automate it in near fututre)

### Authors: [Vaidas Pocius]( https://github.com/VaidasTGLab)
