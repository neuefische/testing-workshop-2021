# Testing workshop

> Switch to the branch `greeting` to see an example for testing!

This is the starter template for a beginner's testing workshop with TypeScript and Jest.

You can clone this project or follow the [Project setup from scratch](#project-setup-from-scratch).

## Project setup from scratch

1. Create a new directory with a package.json

  ```shell
  $ mkdir testing-workshop
  $ cd testing-workshop
  $ npm init -y
  ```

2. Add dependencies

  ```shell
  $ npm install -D jest ts-jest @types/jest
  ```

3. Create a `jest.config.js`

  ```shell
  $ npx ts-jest config:init
  ```

4. Add test scripts

  ```shell
  $ npm set-script test "jest"
  $ npm set-script test:watch "jest --watchAll"
  ```

4. Optional additions
  - `git init`
  - add a `.gitignore` file
  - add `prettier`