# Working with this project

## NPM Scripts

- `npm start`: Starts the local development server
- `npm test`: Runs tests
- `npm run test:coverage`: Runs tests + collects collects coverage information
- `npm run generateApiTypes`: Generates a client-side types to connect to the IRS Jobs API

## Git commit messages

This project uses the conventional commit message format

More Info: https://www.conventionalcommits.org/en/v1.0.0/

## Current git workflow

1. Create a new branch named after the JIRA ticket you want to work on.
2. When the work has completed, merge the main branch into your working branch. -> Resolve all merge conflicts.
3. Open a pull request.
4. The pull request is going to be merged when there are no more open issues to work on.

_Note:_ The main branch is protected currently by husky, i.e. git pre commit hook. This is because we currently cannot enable this feature on the github repository because we lack the rights to modify the repository settings.

## Overview of 3rd Party Dependencies

Here is a list of 3rd party dependencies and how they relate to each other.

### Dependencies

### UI Components

    *Catena-X Components*
    "cx-portal-shared-components": "0.10.0", https://portal.dev.demo.catena-x.net/_storybook/?path=/story/chip--examples

    **Supporting Libraries**
        "@emotion/react": "^11.10.5",
        "@emotion/styled": "^11.10.5",
        "@mui/icons-material": "^5.11.0",
        "@mui/material": "5.11.6",
        "@mui/x-data-grid": "^5.17.21",

    This library was chosen to be consistent with other CatenaX projects.

### Authentication

    "@react-keycloak/web": "^3.4.0",
    "keycloak-js": "^20.0.3",

    https://www.keycloak.org/docs/latest/securing_apps/index.html#_javascript_adapter

    This library was chosen to be consistent with other CatenaX projects.

### Network Management

    "@tanstack/react-query": "^4.23.0",
    https://tanstack.com/query/latest/docs/react/overview

    This library was chosen to ensure network management.

### Node Visualization

    "reactflow": "^11.5.1"
    "dagre": "^0.8.5", (needed to layout the nodes)

    https://reactflow.dev/

    This library was chosen as it has several features to ensure that large datasets can be rendered as well. It is easy to extend, and customize the individual nodes in the graph.
    Multiple node layout engines can be used as well. We are currently using the 'dagre' - library as suggested by the reactflow documentation.

### I18n

    "i18next": "^22.4.9",
    "i18next-browser-languagedetector": "^7.0.1",
    "react-i18next": "^12.1.4",

    This library was chosen to be consistent with other CatenaX projects.

### Routing

    "react-router-dom": "^6.8.0",
    More Info: https://reactrouter.com/en/main

    This library was chosen to be consistent with other CatenaX projects.

### Other

    "dayjs": "^1.11.7",
    "lodash": "^4.17.21",
    "react-hook-form": "^7.42.1",
    "react-syntax-highlighter": "^15.5.0",

### Dev Dependencies

Build system Vite (https://vitejs.dev/)
Testing: ViTest (https://vitest.dev/) + Testing Library (https://testing-library.com/)
