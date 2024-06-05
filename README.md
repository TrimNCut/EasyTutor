<div align="center">

# USI Tutors

</div>

# About The Repository
USI Tutors is a website

# Contribution Guidelines

When contributing to `USI Tutors`, whether on GitHub or in other community spaces:

- Be respectful, civil, and open-minded.
- Before opening a new pull request, try searching through the [issue tracker](https://github.com/TrimNCut/USITutors/issues) for known issues or fixes.
- If you want to make code changes based on your personal opinion(s), make sure you open an issue first describing the changes you want to make, and open a pull request only when your suggestions get approved by maintainers.

## How to Contribute

### Prerequisites

In order to not waste your time implementing a change that has already been declined, or is generally not needed, start by [opening an issue](https://github.com/TrimNCut/USITutors/issues/new/choose) describing the problem you would like to solve.

### Setup your environment locally
- First you will need to create a fork of the repository.
- Then clone the forked repository using the command but replacing`repository` with the url of the forked repository:
  ```bash
  git clone <repository>
  ```
- The project uses pnpm so you will need to install it:
  ```bash
  npm i -g pnpm@latest
  ```
- Then you will need to install dependencies:
  ```bash
  pnpm install
  ```
- Then you will need to create the backend env by creating a .env.local file using the content in the .env.example file

### Implement your changes
This project is a Turborepo monorepo. The code for the backend is in the backend directory, and the code for the frontend is in the frontend directory. Now you're all setup and can start implementing your changes.

Here are some useful scripts for when you are developing:
| Command               | Description                                   |
| --------------------- | --------------------------------------------- |
| `pnpm start`          | Runs backend and frontend                     |
| `pnpm start:frontend` | Runs frontend                                 |
| `pnpm start:backend`  | Runs backend                                  |
| `pnpm dev`            | Starts the backend and frontend in watch mode |
| `pnpm dev:frontend`   | Starts the frontend in watch mode             |
| `pnpm dev:backend`    | Starts the backend in watch mode              |
| `pnpm build`          | Builds backend and frontend                   |
| `pnpm build:backend`  | Builds the backend                            |
| `pnpm build:frontend` | Builds the frontend                           |
| `pnpm lint`           | Lints the code                                |
| `pnpm format`         | Formats the code                              |

### When your done
Create a pull request
