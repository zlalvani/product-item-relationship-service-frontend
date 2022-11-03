# First Steps

## NPM Scripts

* `npm start`: Starts the local development server
* `npm test`: Runs tests
* `npm test:coverage`: Runs tests + collects collects coverage information


*Note:* When adding new scripts, that need to set environment variables prefix the script with [cross-env](https://github.com/kentcdodds/cross-env)

## Current git workflow

1. Create a new branch named after the JIRA ticket you want to work on.
2. When the work has completed, merge the main branch into your working branch. -> Resolve all merge conflicts.
3. Open a pull request.
4. The pull request is going to be merged when there are no more open issues to work on.

*Note:* The main branch is protected currently by husky, i.e. git pre commit hook. This is because we currently cannot enable this feature on the github repository because we lack the rights to modify the repository settings.
