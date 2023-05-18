# ULTRA - automated test framework for the https://www.saucedemo.com/ dummy website.
## Summary
This repository contains automated test framerowk for saucedemo dummy webpage. It is a part of **ULTRA** recruitment process. Solution has been done in cypress. 

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
2. Run tests from the command line `npx cypress run`
3. (Optional) To run the tests with preview write in command line `npx cypress run --headed`

## About the solution <a name="about-the-solution"></a>

## Possible improvements <a name="possible-improvements"></a>
- Adding Cucumber to the code to improve documentation quality and code undestanding for non technical person.
- Adding more commands to reuse less code in the tests.
- Add cross-browser tests in the CI/CD pipeline
- Add slack bot with test results.
- Create more test scenarios to fully cover the app functionality.
- Configure test report to improve readablity of the tests results.