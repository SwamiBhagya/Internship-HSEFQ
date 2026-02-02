# HSEFQ Project - Business Management System (BMS)

## 📖 What is HSEFQ BMS?
**HSEFQ BMS** (Health, Safety, Environment, Fire, and Quality Business Management System) is a modern web application designed to digitize and streamline safety operations in industrial environments. 

It replaces manual paperwork with a centralized digital dashboard, allowing safety officers to:
- Monitor health and safety metrics in real-time.
- Report incidents and hazards instantly.
- Manage safety documentation and compliance.
This is a frontend project setup built with **React (Vite)** and **Tailwind CSS**. It serves as the foundation for the internship tasks, featuring a responsive layout with a header and sidebar.

## 🚀 Live Demo
**[Click Here to View Live Website](https://internship-hsefq.vercel.app/)**

## 🛠 Tech Stack
* **Framework:** React 18 (Vite)
* **Styling:** Tailwind CSS
* **Icons:** Heroicons (SVG)
* **Deployment:** Vercel

## ✨ Features
* **Responsive Layout:** Adapts to Mobile and Desktop screens.
* **Top Header:** Sticky navigation with user profile and mobile menu toggle.
* **Sidebar:** collapsible navigation for main content.
* **Modern Styling:** Clean UI using Tailwind utility classes.

## ⚙️ How Configuration Drives the UI
This application uses a **Data-Driven Architecture**, meaning the UI is not hardcoded. Instead, it dynamically renders based on central configuration files. This allows for "White Labeling" (changing branding for different clients) without touching the core code.

### 1. Tenant Configuration (Branding)
The application identity (Name, App Title) is controlled by `src/config/tenantConfig.js`.
- **Change the Tenant Name:** Update the JSON object, and the **Header** and **Sidebar** update automatically.

