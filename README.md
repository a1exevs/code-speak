# code-speak
The project is an attempt to speed up the work of writing code using voice commands.

## Available Scripts
In the project directory, you can run the following scripts:

**Main**
### `yarn run start:dev`
Starts the application in a browser window at http://localhost:3000 for more comfortable development.

### `yarn run build:prod`
Prepares the build directory for launching in desktop mode or for subsequent assembly of the release version of the application.

### `yarn run start:prod`
Starts the application in desktop mode.

### `yarn run make-release-build`
Prepares the release build of the application and places it in the _release_ folder
WARNING: Need to run as administrator for Windows 11.

**Additional**
### `yarn run build-core`
Builds the React application in the _build_ folder.

### `yarn run build-app-wrapper`
Builds Electron files into a temporary _dist_ folder.

### `yarn run copy-electron-files`
Copies Electron files from the _dist_ folder to the _build_ folder.

### `yarn run correct-index-html`
Corrects the path to the deferred script in index.html.

Before: `<script ="defer" src="/path/to/script"></script>`

After: `<script ="defer" src="./path/to/script"></script>`

### `yarn run start-app`
Launches the application from the _build_ folder

### `yarn run eject`
**Note:** this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Node version
v18.16.0. Use NVM:
1. nvm current - check current version of Node
2. nvm list - show list of available Node versions
3. nvm install <version> - to install and use Node version.
4. nvm use <version> - set version of Node as current version

## Repository
Link to repository https://github.com/a1exevs/code-speak.