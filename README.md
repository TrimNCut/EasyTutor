<div align="center">

# Easy Tutor

</div>

# About The Repository
Easy Tutor is a website

# Contribution Guidelines

When contributing to `Easy Tutor`, whether on GitHub or in other community spaces:

- Be respectful, civil, and open-minded.
- Before opening a new pull request, try searching through the [issue tracker](https://github.com/TrimNCut/EasyTutor/issues) for known issues or fixes.
- If you want to make code changes based on your personal opinion(s), make sure you open an issue first describing the changes you want to make, and open a pull request only when your suggestions get approved by maintainers.

## How to Contribute

### Prerequisites

In order to not waste your time implementing a change that has already been declined, or is generally not needed, start by [opening an issue](https://github.com/TrimNCut/EasyTutor/issues/new/choose) describing the problem you would like to solve.

### Setup your environment locally
- First you will need to create a fork of the repository.
- Then clone the forked repository using the command but replacing`repository` with the url of the forked repository:
  ```bash
  git clone <repository>
  ```
- Then you will need to install dependencies the project uses npm so the command will be:
  ```bash
  npm install
  ```

### Implement your changes
This project is a Turborepo monorepo. The code for the backend is in the backend directory, and the code for the frontend is in the frontend directory. Now you're all setup and can start implementing your changes.

Here are some useful scripts for when you are developing:
| Command                  | Description                                                    |
| ------------------------ | -------------------------------------------------------------- |
| `npm run start:frontend` | Runs frontend in dev server                                    |
| `npm run dev:backend`    | Builds and starts the backend in dev server                    |
| `npm run build`          | Builds backend and frontend                                    |
| `npm run build:backend`  | Builds the backend                                             |
| `npm run build:frontend` | Builds the frontend                                            |
| `npm run typecheck`      | checks the types                                               |

### When your done
Create a pull request
