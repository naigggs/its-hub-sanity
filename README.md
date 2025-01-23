# Running a Sanity.io Project Locally

This guide provides step-by-step instructions for setting up and running a Sanity.io project locally.

---

## Prerequisites

Before running the project, ensure the following are installed on your system:

1. **Node.js** (v16 or higher recommended)
   - Download and install from [Node.js Official Website](https://nodejs.org/).

2. **Sanity CLI**
   - Install globally using npm:

     ```bash
     npm install -g @sanity/cli
     ```

3. **Git** (optional, if cloning the repository)
   - Download and install from [Git Official Website](https://git-scm.com/).

---

## Steps to Run the Sanity.io Project Locally

### 1. Clone the Repository (if applicable)

If the project is hosted on a Git repository, clone it using:

```bash
git clone <repository-url>
```

Replace `<repository-url>` with the actual URL of the repository.

### 2. Navigate to the Project Directory

Change your directory to the project folder:

```bash
cd <project-folder>
```

Replace `<project-folder>` with the name of the cloned or downloaded project folder.

### 3. Install Dependencies

Install the necessary dependencies using npm or Yarn:

#### Using npm:
```bash
npm install
```

#### Using Yarn:
```bash
yarn install
```

### 4. Configure Environment Variables

If the project uses environment variables, set them up in a `.env` file. Check for an `.env.example` file in the project directory and use it as a template:

```bash
cp .env.example .env
```

Edit the `.env` file and update the variables as needed (e.g., project ID, dataset, tokens).

### 5. Start the Sanity Studio

Run the following command to start the Sanity Studio development server:

```bash
sanity start
```

By default, the Studio will be available at `http://localhost:3333`.

---

## Additional Commands

### Initialize a New Sanity Project
To create a new Sanity project:

```bash
sanity init
```
Follow the interactive prompts to set up your project.

### Deploy the Studio
To deploy the Sanity Studio to a hosting service provided by Sanity:

```bash
sanity deploy
```

### Manage Datasets
List available datasets:

```bash
sanity datasets list
```

Create a new dataset:

```bash
sanity datasets create <dataset-name>
```

Replace `<dataset-name>` with the desired dataset name.

### Import Data
To import data into your dataset:

```bash
sanity dataset import <file-name>.ndjson <dataset-name>
```

Replace `<file-name>` with the path to your `.ndjson` file and `<dataset-name>` with the target dataset.

### Export Data
To export data from your dataset:

```bash
sanity dataset export <dataset-name> <output-directory>
```

Replace `<dataset-name>` with the dataset you want to export and `<output-directory>` with the path to save the exported file.

---

## Troubleshooting

- **Port Already in Use:** If `http://localhost:3333` is in use, specify a different port:

  ```bash
  sanity start --port <port-number>
  ```
  Replace `<port-number>` with your desired port (e.g., `4000`).

- **Authentication Issues:** Ensure you are logged in to Sanity:

  ```bash
  sanity login
  ```

---

That's it! You should now be able to run and manage your Sanity.io project locally.

