# Firebase Auth Master 🔐

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

**Firebase Auth Master** is a production-ready authentication boilerplate designed to demonstrate modern React patterns, secure routing, and professional form handling. It features a sophisticated UI styled with Tailwind CSS and fully integrated Firebase Authentication.

---

## ✨ Key Features

- **Secure Authentication:** Complete email/password registration and login flows.
- **Social Integration:** One-tap Google Sign-In via Firebase Popup/Redirect.
- **Advanced Form Handling:** Refactored from manual state to **React Hook Form** for performance and maintainability.
- **Robust Validation:** Real-time field validation (Regex patterns, min/max length, required fields).
- **Protected Routes:** Higher-order component pattern to secure the Dashboard and private pages.
- **Modern UI/UX:** Clean, SaaS-style interface using Tailwind CSS and Lucide Icons.
- **Responsive Design:** Fully adaptive layout for mobile, tablet, and desktop.

---

## 🛠 Tech Stack

### **Frontend Core**

- **React 19:** Utilizing the latest functional component patterns and hooks.
- **Vite:** For lightning-fast development server and optimized build bundling.
- **React Router Dom v7:** managing dynamic routing and protected navigation guards.

### **Styling & UI**

- **Tailwind CSS:** Utility-first CSS for rapid, scalable design.
- **Lucide React:** Beautiful, consistent, and lightweight icon set.

### **State & Authentication**

- **Firebase Auth:** Backend-as-a-Service for secure identity management.
- **React Hook Form:** For managing form state, validation, and error handling without unnecessary re-renders.
- **React Firebase Hooks:** Simplified hooks for integrating Firebase listeners.

---

## 🚀 Development Journey & Architecture

This project was built in two distinct phases to emulate a real-world refactoring process:

### **Phase 1: The "Manual" Approach**

Initially, forms were built using standard React `useState` hooks for every input field. While functional, this approach led to:

- Excessive re-renders on every keystroke.
- Complex, manual validation logic (nested `if/else` statements).
- Boilerplate-heavy code that was hard to scale.

### **Phase 2: The "Professional" Refactor (Current State)**

The codebase was migrated to **React Hook Form**. This transition achieved:

- **Performance:** Inputs are now uncontrolled components, eliminating re-renders.
- **Scalability:** Validation rules are declarative and easy to extend.
- **DX (Developer Experience):** Cleaner code with `register` and `handleSubmit` patterns, separating UI from logic.

---

## 📂 Project Structure

The project follows a modular, component-based architecture:

```bash
src/
├── assets/             # Static assets (images, SVGs)
├── CommonCompo/        # Reusable UI atoms (Input fields, Buttons, Alerts)
├── components/         # Page-level components
│   ├── Dashboard.jsx   # Protected main application view
│   ├── Login.jsx       # Auth entry point
│   ├── Register.jsx    # User registration
│   ├── PrivateRoute.jsx# Route guard wrapper
│   └── ...
├── firebase.js         # Firebase SDK initialization and config
├── App.jsx             # Main routing configuration
└── main.jsx            # Entry point
```

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/Mahmudulislamshuvo/firebase-practice-with-react-form-hook
cd firebasePractice
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory. You must obtain these credentials from your [Firebase Console](https://console.firebase.google.com/).

```env
VITE_apiKey=your_api_key_here
VITE_authDomain=your_project_id.firebaseapp.com
VITE_projectId=your_project_id
VITE_storageBucket=your_project_id.appspot.com
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

---

## 🛡️ License

This project is open-source and available under the **MIT License**.

---

### Acknowledgements

- [Unsplash](https://unsplash.com) for placeholder photography.
- [Lucide](https://lucide.dev) for the icon library.
- [Tailwind CSS](https://tailwindcss.com) for the design system.
