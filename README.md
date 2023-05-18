# ULTRA - automated test framework for the saucedemo dummy website.
## Summary
This repository contains automated test framerowk for https://www.saucedemo.com/ dummy webpage. It is a part of **ULTRA** recruitment process. Solution has been done in cypress. 

Tech task contains few important points which has been done:
- Manual test cases covering the flow
- Automated prepared test cases
- Testing of the provided functionality is enabled as a part of CI/CD pipeline
- Execituon instructions has been provided in [Instructions](#instructions) part
- Chosen testing approache has been described in [Abuout the solution](#about-the-solution)
- All improvements to the task has been described in [Possible imporvements](#possible-improvements)

## Instructions <a name="instructions"></a>
To run the tests locally follow the steps below:
1. Install dependences `npm install`
2. Install cypress `npm cypress install`
2. Run tests from the command line `npx cypress run`
3. (Optional) To run the tests with preview write in command line `npx cypress run --headed`

## About the solution <a name="about-the-solution"></a>
The solution has been done using cypress. Cypress is being used for creating, maintaining and executing all the tests. The tests covers:
- Login scenarios with wrong credentials
- Successful login scenario.
- Successful purchase scenario.
- Negative purchase scenario which checks missing purchase user data.

For CI/CD configuration GitHub Actions has been used. GitHub Actions makes sure that the tests are running whenever new changes are going to be pushed to the repository. Solution and test results can be found in Actions tab in github repository: [link](https://github.com/LukaszKulyk/ultra-tech-task/actions/workflows/ultra-tech-task.yml)

## Possible improvements <a name="possible-improvements"></a>
- Adding Cucumber to the code to improve documentation quality and code undestanding for non technical person.
- Adding more commands to reuse less code in the tests.
- Add cross-browser tests in the CI/CD pipeline.
- Configure CI/CD to use env variables.
- Add slack bot with test results.
- Create more test scenarios to fully cover the app functionality.
- Configure test report to improve readablity of the tests results.