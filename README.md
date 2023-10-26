# Reminder App Documentation

## Overview

This is a full-stack reminder app designed using cutting-edge technologies to offer an efficient and user-friendly experience for setting and managing reminders.

---

## Screens

<img src="">
<img src="">

## Tech Stack

1. **Next.js**: For the frontend and backend server-side rendering, ensuring optimal performance and SEO.
2. **Tailwind CSS**: For utility-first styling, giving the app a modern and responsive design.
3. **Clerk Auth**: Ensuring user authentication and authorization is secure and seamless.
4. **shadncn UI**: A UI library for consistent and intuitive interface components.
5. **next-themes**: Provides theme management and dark mode capabilities.

---

## Features

### 1. User Authentication (via Clerk Auth)

- Secure sign-up and login functionality.
- OAuth integrations.
- Profile management.

### 2. Reminder Dashboard (via Next.js & shadncn UI)

- List view of all reminders.
- Search and filter capabilities.
- Theme toggling (light/dark mode) using next-themes.

### 3. Create/Edit Reminder (via Hook-form & Zod)

- Form for creating and editing reminders.
- Field validation using Zod for data integrity.
- Seamless user experience via Hook-form.

### 4. Backend Operations (via Prisma & ServerActions)

- CRUD operations for reminders.
- Efficient server actions using ServerActions.
- Data storage and retrieval using Prisma ORM.

---

## Getting Started

1. **Setup**: Clone the repository and install dependencies using `npm install`.
2. **Running Locally**: Use `npm run dev` to start the Next.js development server.

---

## Future Enhancements

- Notification system to alert users about upcoming reminders.
- Integration with third-party calendar apps.
- Mobile application for cross-platform access.

---

## Prisma

- npm i @prisma/client.
- npm i -D prisma .
- npx prisma init --datasource-provider sqlite.
- After defining the dataset params, run :
- npx prisma migrate dev.
- npx prisma studio.

## Contribution

Interested in improving the Reminder App? Fork the repository, make your changes, and submit a pull request. All contributions are welcome!
