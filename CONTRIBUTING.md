# Contributing Guide to ESC-UI

## Prerequisites

- Node.js v20.0.0 or later (lts/iron recommended)
- PNPM v8.0.0 or later

## Getting Started

1. Clone the repository

   ```bash
   git clone https://github.com/esc-chula/esc-ui.git
   ```

1. Install the dependencies

   ```bash
   pnpm install
   ```

1. Start the development server

   ```bash
   pnpm storybook
   ```

1. Done! You can now start developing the components.

## Practices

- **Commit Message**: Use the following format for commit messages: `type: description`. For example, `feat: add button component`.
  Please check [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for more information.

- **Branching**: Use the following format for branch names: `type/description`. For example, `feature/button`.

## Pull Request

1. Create a new branch from the `main` branch.

   ```bash
   git checkout -b your-branch
   ```

1. Make changes to the code.

1. Staged and Commit the changes.

   ```bash
   git add .
   git commit -m "message"
   ```

1. Push the changes to the remote repository.

   ```bash
   git push origin your-branch
   ```

1. Create a pull request to the `main` branch.

1. Done! You can now wait for the review.

## Recommended Extensions for VSCode

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

### WSL

_Not required but recommended._
If you have some time or encounter some issues, I recommend setting up WSL for development.

Please check the [official documentation](https://docs.microsoft.com/en-us/windows/wsl/install) for more information.
