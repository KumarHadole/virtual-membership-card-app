# Deployment Instructions for Virtual Membership Card Web Demo

This document provides instructions on how to deploy the `index.html` file as a static website. This web demo showcases the functionality of the Virtual Membership Card application in a browser environment.

## 🚀 Deployment Options

YouYou have several options to deploy this static website. Here are a few popular and easy-to-use methods:

### Option 1: GitHub Pages (Recommended for personal projects and demos)

GitHub Pages allows you to host static websites directly from your GitHub repository. It's free and integrates well with Git.

1.  **Create a GitHub Repository**: If you haven't already, create a new public GitHub repository (e.g., `virtual-membership-card-web`).
2.  **Upload Files**: Upload the `index.html` file and the `assets` folder (containing `profile_placeholder.png`) to the root of your new GitHub repository.
3.  **Enable GitHub Pages**: Go to your repository on GitHub, navigate to **Settings > Pages**.
4.  **Select Branch**: Under 

`Branch` select the branch where your `index.html` file is located (usually `main` or `master`), and choose `/ (root)` as the folder.
5.  **Save**: Click `Save`.
6.  **Access Your Site**: GitHub Pages will provide you with a URL (e.g., `https://yourusername.github.io/virtual-membership-card-web/`) where your website will be live in a few minutes.

### Option 2: Netlify (Easy and powerful for static sites)

Netlify offers a very user-friendly platform for deploying static sites with continuous deployment from Git repositories.

1.  **Sign Up/Log In**: Go to [Netlify](https://www.netlify.com/) and sign up for a free account or log in.
2.  **New Site from Git**: Click on `Add new site` and then `Import an existing project`.
3.  **Connect to Git Provider**: Connect your GitHub (or GitLab/Bitbucket) account and select the repository where you uploaded your `index.html` and `assets` folder.
4.  **Deploy Settings**: For `Base directory` leave it empty. For `Build command` leave it empty. For `Publish directory` enter `.` (a single dot, indicating the root of the repository).
5.  **Deploy Site**: Click `Deploy site`. Netlify will automatically build and deploy your site, providing you with a live URL.

### Option 3: Vercel (Developer-friendly platform)

Vercel is another popular platform for static sites and serverless functions, known for its ease of use.

1.  **Sign Up/Log In**: Go to [Vercel](https://vercel.com/) and sign up for a free account or log in.
2.  **New Project**: Click on `New Project`.
3.  **Import Git Repository**: Connect your Git provider and import the repository containing your `index.html` and `assets` folder.
4.  **Configure Project**: Vercel will usually auto-detect the project. Ensure the `Root Directory` is `/` and `Build and Output Settings` are left as default (or adjusted if needed, but for a simple `index.html` they are usually fine).
5.  **Deploy**: Click `Deploy`. Vercel will deploy your site and give you a unique URL.

### Option 4: Any Static Web Hosting Provider

You can also use traditional static web hosting services (e.g., Apache, Nginx, Amazon S3, Google Cloud Storage, etc.).

1.  **Upload Files**: Simply upload the `index.html` file and the `assets` folder to the root directory of your web server.
2.  **Access via Domain**: Your website will be accessible via your domain name (e.g., `https://yourdomain.com/index.html` or `https://yourdomain.com/` if `index.html` is the default document).

## 📁 Files to Upload

Ensure you upload the following files/folders to your chosen hosting provider:

-   `/home/ubuntu/MembershipCardApp/index.html`
-   `/home/ubuntu/MembershipCardApp/assets/profile_placeholder.png` (ensure the `assets` folder is created at the same level as `index.html`)

By following these instructions, you can easily make the web demo of your Virtual Membership Card accessible online.

