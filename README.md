# TayQuiz

## Development Environment Setup

1. (Optional) Install [NVM (Node Version Manager](https://github.com/nvm-sh/nvm/tree/master) manually, via brew.sh or similar packet manager
2. Install [NodeJS](https://nodejs.org/en) manually or via NVM. We use the latest LTS version.
3. Install Ionic with `npm install -g @ionic/cli`
4. Checkout this repo
5. Switch into the folder `tayquiz/TayQuiz` folder and run `npm install`
6. Start the application locally with `ionic serve` and visit [http://localhost:8100/](http://localhost:8100/)
    If `ionic serve` cannot be executed on Windows, first run `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` in the same terminal.

### Build for android
tbd

### Build for iOS
tbd


## Development Guidelines

### Commands
+ Update local version: `npm version $(date +%Y.%m%d.%H%M)`

### Best practices
+ When importing ionic components always use the standalone version, not the ionic module.