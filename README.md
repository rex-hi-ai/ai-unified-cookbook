# ai-unified-cookbook

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Project Overview

ai-unified-cookbook is dedicated to compiling the most practical AI tools, models, prompts, agents, and automation recipes. It helps developers, product managers, and researchers rapidly prototype, enhance collaboration efficiency, and build high-quality AI solutions.

## Directory Structure

```
├── prompts/                 # Prompt templates
│   └── workflow/            # Workflow prompt templates (e.g., document sync, Git operations, etc.)
├── docs/
│   └── survey/              # Introductions to AI-related tools and services
├── references/              # Reference materials, prototypes, templates
├── web-interface/           # Web interface for browsing AI tools survey
├── LICENSE                  # License terms
└── README.md                # Project documentation
```

## Project Maintenance

Automated maintenance workflows help maintainers improve efficiency, reduce omissions, and ensure process consistency. It is recommended for use by project maintainers only.

### Workflows

- **`/sync-readme <optional-memo>`**
  - Purpose: Synchronize and maintain the README file, helping maintainers automate updates and proofreading of project documentation.

- **`/sync-survey-docs <tool-service-name> <optional-memo>`**
  - Purpose: Maintain AI tool/service survey documents, standardizing the writing and synchronization of survey files.

- **`/git-commit <optional-memo>`**
  - Purpose: Standardize and automate Git commit operations, improving commit quality and consistency.

- **`/git-push <optional-memo>`**
  - Purpose: Automate Git push operations, ensuring the push process is safe and compliant.

> Currently only supports GitHub Copilot

## Web Interface

The web-interface directory contains a Next.js-based web application for browsing and exploring the AI tools survey. This interface provides an intuitive way to search, filter, and discover AI tools from the survey documentation.

### Features

- **Tool Discovery**: Browse and search through comprehensive AI tool surveys
- **Category Filtering**: Filter tools by categories (AI Agents, Automation, Design Tools, etc.)
- **Detailed Information**: View comprehensive details including features, pricing, installation guides, and usage examples
- **Responsive Design**: Modern, mobile-friendly interface built with Tailwind CSS
- **Search Functionality**: Advanced search capabilities powered by Fuse.js
- **Statistics Dashboard**: Overview of total tools, categories, and free tools available

### Tech Stack

- **Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS with Framer Motion animations
- **Language**: TypeScript
- **Search**: Fuse.js for fuzzy search
- **Icons**: Lucide React
- **Data Processing**: Gray Matter for Markdown frontmatter parsing

### Getting Started

1. Navigate to the web-interface directory:
   ```bash
   cd web-interface
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Generate the tools data from survey documentation:
   ```bash
   npm run generate-data
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Data Generation

The web interface automatically generates its data from the survey documentation in `docs/survey/`. The `generate-data` script processes all Markdown files and creates a structured JSON dataset that includes:

- Tool metadata and descriptions
- Feature lists and use cases
- Pricing information
- Official resources and links
- Installation instructions
- Usage examples

### Production Deployment

To build for production:

```bash
npm run build
npm run start
```

The application can be deployed to any platform that supports Next.js applications, such as Vercel, Netlify, or traditional web servers.

## License

This project is licensed under the [MIT License](LICENSE).