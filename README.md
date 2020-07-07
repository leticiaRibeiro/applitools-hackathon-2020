# Applitools Hachathon 2020
Project made as a resolution for Applitools Hackathon 2020, using Cypress as the testing framework.

## Pre-requisites
* Last version of [Node.js](https://nodejs.org/en/download/) installed on local machine
* For tradditional approach, local machine should have the following browsers installed:
    * [Chrome](https://www.google.com/intl/en/chrome/)
    * [Firefox](https://www.mozilla.org/en-US/firefox/new/)
    * [Edge - Chromium based](https://support.microsoft.com/pt-br/help/4501095/download-the-new-microsoft-edge-based-on-chromium)
* For modern approach, the following environment variable should be configured:
```text
$ export APPLITOOLS_API_KEY=<token generated from Applitools Eyes>
```

## Traditional approach - Instructions for V1
From the project root, execute the following commands:
```text
$ cd TraditionalTestsV1
$ npm install
$ echo "Executing tests for laptop with Chrome"
$ npm run cy:run:laptop:chrome
$ echo "Executing tests for laptop with Firefox"
$ npm run cy:run:laptop:firefox
$ echo "Executing tests for laptop with Edge"
$ npm run cy:run:laptop:edge
$ echo "Executing tests for tablet with Chrome"
$ npm run cy:run:tablet:chrome
$ echo "Executing tests for tablet with Firefox"
$ npm run cy:run:tablet:firefox
$ echo "Executing tests for tablet with Edge"
$ npm run cy:run:tablet:edge
$ echo "Executing tests for iPhone X with Chrome"
$ npm run cy:run:iphonex:chrome
```
This will create the file `Traditional-V1-TestsResults.txt`, with appended results of each `npm run` command.

## Traditional approach - Instructions for V2
From the project root, execute the following commands:
```text
$ cd TraditionalTestsV2
$ npm install
$ echo "Executing tests for laptop with Chrome"
$ npm run cy:run:laptop:chrome
$ echo "Executing tests for laptop with Firefox"
$ npm run cy:run:laptop:firefox
$ echo "Executing tests for laptop with Edge"
$ npm run cy:run:laptop:edge
$ echo "Executing tests for tablet with Chrome"
$ npm run cy:run:tablet:chrome
$ echo "Executing tests for tablet with Firefox"
$ npm run cy:run:tablet:firefox
$ echo "Executing tests for tablet with Edge"
$ npm run cy:run:tablet:edge
$ echo "Executing tests for iPhone X with Chrome"
$ npm run cy:run:iphonex:chrome
```
This will create the file `Traditional-V2-TestsResults.txt`, with appended results of each `npm run` command.

## Modern approach - Instructions for V1
From the project root, execute the following commands:
```text
$ cd ModernTestsV1
$ npm install
$ echo "Executing tests in Applitools Eyes Grid"
$ npm run test
```
Test results will be available on [Applitools Eyes](https://eyes.applitools.com) as a new batch run.

## Modern approach - Instructions for V2
From the project root, execute the following commands:
```text
$ cd ModernTestsV2
$ npm install
$ echo "Executing tests in Applitools Eyes Grid"
$ npm run test
```
Test results will be available on [Applitools Eyes](https://eyes.applitools.com) as a new batch run.