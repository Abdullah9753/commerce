# Next.js Shopify Headless Starter ⚡️

A high-performance, enterprise-grade storefront built with **Next.js 15**, **Shopify Storefront API**, and **Tailwind CSS**.

This repository serves as a clean, minimalist starting point for building scalable e-commerce experiences, focusing on performance, SEO, and developer experience.

---

### 🚀 Live Demos

See the architecture in action across different implementations:

| Version | URL | Description |
| :--- | :--- | :--- |
| **🇺🇸 English (Base)** | **[lumina-demo-commerce.vercel.app](https://lumina-demo-commerce.vercel.app/)** | The clean, lightweight version represented by this repository. |
| **🇸🇦 Arabic (Pro)** | **[commerce-v2-lumina.vercel.app](https://commerce-v2-lumina.vercel.app/ar)** | Advanced implementation featuring **Full RTL**, **Localization Middleware**, and **Custom Checkout Flows**. |

> **Note:** The Arabic version demonstrates the full extensibility of this architecture for complex, multi-language enterprise requirements.

---

## ✨ Features

- **Framework**: Next.js 15 (App Router & Server Components).
- **Styling**: Tailwind CSS for utility-first design.
- **Data Fetching**: Robust `shopifyFetch` utility with caching strategies and type safety.
- **Performance**: Optimized for Core Web Vitals (LCP, CLS, FID).
- **SEO**: Dynamic metadata, JSON-LD structured data, and Open Graph support.
- **Type-Safe**: Written in TypeScript.
- **Clean Architecture**: No bloat—just a solid foundation ready to scale.

## 🛠️ Getting Started

Follow these steps to get the project running on your local machine.

### 1. Clone the repository

```bash
git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
cd YOUR_REPO_NAME

2. Install dependencies
Bash

pnpm install
3. Environment Variables
Rename .env.example to .env.local (or create a new one):

Bash

cp .env.example .env.local
Populate it with your store details:


COMPANY_NAME="Lumina"
SITE_NAME="Lumina Store"
TWITTER_CREATOR="@bamzahem"
TWITTER_SITE="@lumina"

# Your Shopify Store Credentials
SHOPIFY_STORE_DOMAIN="your-store.myshopify.com"
SHOPIFY_STOREFRONT_ACCESS_TOKEN="your-public-access-token"
SHOPIFY_REVALIDATION_SECRET="your-secret-key"
4. Run Locally
Bash

pnpm dev
Open http://localhost:3000 to view your store.

📦 Deployment
The easiest way to deploy is using Vercel.

Push your code to GitHub.

Import the project in Vercel.

Add the Environment Variables in the Vercel dashboard.

Hit Deploy.

📄 License
This project is licensed under the MIT License.

Designed & Developed by Bamzahem Digital