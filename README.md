# Johnny Duenas | Data Analyst Portfolio

A professional portfolio website showcasing my work in SQL, Power BI, Python, and Data Reporting. 

**Live Site:** [https://johnnyd01.github.io](https://johnnyd01.github.io)



## 🛠️ Technical Architecture

This website is a **Single Page Application (SPA)** built with **React**. Unlike standard HTML/CSS sites, this project uses a compilation process to optimize performance and manage assets.

### Tech Stack
* **Framework:** React.js
* **Styling:** Tailwind CSS (via CDN/Classes)
* **Routing:** React Router DOM
* **Icons:** Lucide-React
* **Deployment:** GitHub Pages (via `gh-pages` package)

##  The Development Workflow

This project was built using a hybrid workflow combining AI prototyping with local full-stack development tools.

### 1. Prototyping & Scaffolding
The initial codebase and design concepts were generated using **Emergent AI**. This provided the base component structure (Navbar, Hero, Projects, Contact) and the design aesthetic.

### 2. Local Environment Setup (Windows PowerShell)
To move from prototype to a deployable application, I set up a local Node.js environment:
* **Node.js & npm:** Installed to manage project dependencies and run build scripts.
* **Git:** Version control initialization.
* **PowerShell (Admin):** Used for directory management, script execution, and handling file permission issues during the build process.

### 3. Dependency Management
The `package.json` file manages the following key libraries:
* `react-scripts`: Handles the Webpack build process.
* `gh-pages`: Automates the deployment of the `build` folder to the `gh-pages` branch on GitHub.
* `lucide-react`: Provides the iconography used throughout the site.

### 4. Build & Deployment Pipeline
Because this is a React app, it must be "compiled" before the browser can read it. I utilized a custom PowerShell workflow to deploy:

```powershell
# 1. Clean previous builds to prevent caching errors
Remove-Item -Recurse -Force build

# 2. Compile React code into static HTML/CSS/JS
npm run build

# 3. Asset Management (Resume Fix)
# Automated script to ensure the PDF resume is correctly named and moved 
# into the final build directory to prevent 404 errors.
Copy-Item "public/resume.pdf" -Destination "build/resume.pdf" -Force

# 4. Deployment
# Pushes the optimized 'build' folder to the GitHub Pages branch
npx gh-pages -d build
