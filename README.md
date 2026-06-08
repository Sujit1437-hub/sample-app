# CI/CD Pipeline Setup Using GitHub Actions

## Project Description

This project demonstrates the implementation of a basic Continuous Integration and Continuous Deployment (CI/CD) pipeline using GitHub Actions for a sample Node.js web application.

The pipeline automates:

- Dependency installation
- Code linting
- Unit testing
- Deployment to Render

---

## Technologies Used

- Node.js
- Express.js
- GitHub Actions
- ESLint
- Jest
- Render

---

## Project Structure

```
ci-cd-pipeline/
│
├── .github/
│   └── workflows/
│       └── ci-cd.yml
│
├── tests/
│   └── app.test.js
│
├── app.js
├── package.json
├── .eslintrc.json
├── README.md
```

---

## CI/CD Pipeline Stages

### Build Stage

The build stage performs the following tasks:

1. Checkout source code
2. Install Node.js
3. Install project dependencies
4. Run ESLint for code quality checks

Commands:

```bash
npm install
npm run lint
```

### Test Stage

The test stage runs automated unit tests using Jest.

Command:

```bash
npm test
```

### Deploy Stage

After successful completion of build and test stages, the application is automatically deployed to Render.

---

## GitHub Actions Workflow

Workflow file location:

```text
.github/workflows/ci-cd.yml
```

Example workflow:

```yaml
name: CI/CD Pipeline

on:
  push:
    branches:
      - main

jobs:
  build-test-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install Dependencies
        run: npm install

      - name: Run Lint Check
        run: npm run lint

      - name: Run Unit Tests
        run: npm test

      - name: Deploy Application
        run: echo "Deploying application..."
```

---

## Local Setup

Clone the repository:

```bash
git clone https://github.com/your-username/ci-cd-pipeline.git
```

Navigate to the project folder:

```bash
cd ci-cd-pipeline
```

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm start
```

Application URL:

```text
http://localhost:3000
```



## Benefits of CI/CD

- Faster software delivery
- Automated testing
- Improved code quality
- Reduced deployment errors
- Continuous integration and deployment



## Conclusion

This project demonstrates a complete CI/CD workflow using GitHub Actions. Every code push triggers automated build, test, and deployment stages, ensuring efficient and reliable software delivery.



## Author

Sujit Lakshman Bergal


## License

This project is created for educational and academic purposes.
