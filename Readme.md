# Password Generator Web App (MERN)

A secure, full-stack password generator application built using the MERN stack.  
The app focuses on **security, clean architecture, and backend-driven password generation**, rather than a trivial frontend-only solution.

---

## Features

- Secure password generation using Node.js `crypto`
- JWT-based authentication
- Password history stored securely (hashed)
- Rate-limited APIs to prevent abuse
- Configurable password rules (length, character sets)
- Clean, scalable backend architecture
- React-based frontend with strength indicator

---

## Tech Stack

**Frontend**
- React
- Tailwind CSS

**Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt
- Node.js crypto module

---

## Architecture Overview

- Controllers handle HTTP concerns only
- Services contain business logic
- Utilities handle pure reusable functions
- Passwords are never stored in plain text
- Backend is responsible for password generation to ensure security

---

## Folder Structure

