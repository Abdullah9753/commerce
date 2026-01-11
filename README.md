# Next.js Shopify Headless Starter ⚡️

A high-performance, enterprise-grade storefront built with **Next.js 15**, **Shopify Storefront API**, and **Tailwind CSS**.

This repository serves as a clean, minimalist starting point for building scalable e-commerce experiences, focusing on performance, SEO, and developer experience.

---

## 🚀 Live Demos

See the architecture in action across different implementations:

| Version | URL | Description |
| :--- | :--- | :--- |
| 🇺🇸 **English (Base)** | [lumina-demo-commerce.vercel.app](https://lumina-demo-commerce.vercel.app/) | Clean, lightweight version represented by this repository |
| 🇸🇦 **Arabic (Pro)** | [commerce-v2-lumina.vercel.app/ar](https://commerce-v2-lumina.vercel.app/ar) | Full RTL, Localization Middleware, Custom Checkout Flows |

> **Note:**  
> The Arabic version demonstrates the full extensibility of this architecture for complex, multi-language enterprise requirements.

---

## ✨ Features

- **Framework**: Next.js 15 (App Router & Server Components)
- **Styling**: Tailwind CSS (utility-first)
- **Data Fetching**: `shopifyFetch` utility with caching & type safety
- **Performance**: Optimized for Core Web Vitals (LCP, CLS, FID)
- **SEO**: Dynamic metadata, JSON-LD, Open Graph
- **Type-Safe**: Written in TypeScript
- **Clean Architecture**: No bloat, scalable foundation

---

## 🛠️ Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```
2. Install dependencies

```bash
pnpm install
```

3. Environment Variables

Rename .env.example to .env.local (or create a new one):


```bash
cp .env.example .env.local
Populate it with your store details:


COMPANY_NAME="Lumina"
SITE_NAME="Lumina Store"

# Your Shopify Store Credentials
SHOPIFY_STORE_DOMAIN="your-store.myshopify.com"
SHOPIFY_STOREFRONT_ACCESS_TOKEN="your-public-access-token"
SHOPIFY_REVALIDATION_SECRET="your-secret-key"
4. Run Locally
```

pnpm dev
Open http://localhost:3000 to view your store.

📦 Deployment

The easiest way to deploy is using Vercel:

Push your code to GitHub

Import the project into Vercel

Add Environment Variables in the Vercel dashboard

Click Deploy

📄 License

This project is licensed under the MIT License.

Designed & Developed by
Bamzahem Digital

---

### Acknowledgment

This project is proudly powered and deployed on **Vercel**.  
Special thanks to the Vercel team for providing an exceptional platform for building, scaling, and delivering high-performance Next.js applications.
