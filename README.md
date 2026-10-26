# To-Do List App

A React-based task management app that helps users organize tasks, set priorities and due dates, and track completed work.

## Features

- Add, edit, and delete tasks
- Mark tasks as completed or active
- Filter tasks by status
- Set task priorities and due dates
- View task counts
- Switch between light and dark themes

## Built With

- React
- JavaScript
- CSS
- Vite
- Lucide React

## Getting Started

Clone the repository, install dependencies, and start the development server:

```bash
git clone YOUR_REPOSITORY_URL
cd YOUR_PROJECT_FOLDER
npm install
npm run dev
```

Open the local URL displayed in your terminal.

## How to Use

1. Enter a task and provide its date and priority.
2. Add the task to your list.
3. Edit, complete, or delete tasks as needed.
4. Use the filters to view all, active, or completed tasks.
5. Switch between light and dark themes using the theme icon.

## Project Structure

- `App.jsx` — Main application logic and state management.
- `components/` — Reusable task form, filter, list, and footer components.
- `App.css` — Component and layout styling.
- `index.css` — Global styles and theme backgrounds.

## Future Improvements

Connect a Node.js and Express backend with MongoDB to store tasks permanently.

**Note:** This version manages tasks in React state; tasks are not yet saved to a database.
