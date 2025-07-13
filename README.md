# Modern Todo App

A feature-rich task management application built with React and Vite, featuring a modern UI, drag-and-drop functionality, and local storage persistence.

## Features

- ✨ Modern, clean user interface
- 🎯 Create, edit, and delete tasks
- ✅ Mark tasks as completed
- 🔍 Filter tasks (All, Completed, Pending)
- 🔄 Drag and drop to reorder tasks
- 💾 Automatic saving to local storage
- 📱 Responsive design
- ⌨️ Keyboard shortcuts support

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (comes with Node.js) or [pnpm](https://pnpm.io/)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/animesh2211076/todo_app.git
cd todo_app
```

### 2. Install dependencies

```bash
npm install
# or if you use pnpm
pnpm install
```

### 3. Start the development server

```bash
npm run dev
# or
pnpm dev
```

The application will start running at `http://localhost:5174` (or another port if 5174 is in use).

## Usage

- Add a new task: Type in the input field and click "Add" or press Enter
- Edit a task: Double-click on the task text or click the "Edit" button
- Complete a task: Click the checkbox next to the task
- Delete a task: Click the "Delete" button
- Reorder tasks: Drag and drop tasks to change their order
- Filter tasks: Use the filter buttons (All, Completed, Pending)

## Keyboard Shortcuts

- `Enter`: Save a task (when adding or editing)
- `Escape`: Cancel editing
- Double-click on task text: Start editing

## Project Structure

```
todo_app/
├── src/
│   ├── App.jsx        # Main application component
│   ├── App.css        # Component styles
│   ├── index.css      # Global styles
│   └── main.jsx       # Application entry point
├── public/
│   └── vite.svg       # Vite logo
├── package.json       # Project dependencies and scripts
└── vite.config.js     # Vite configuration
```

## Built With

- [React](https://reactjs.org/) - UI Library
- [Vite](https://vitejs.dev/) - Build tool
- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) - Drag and drop functionality

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React team for the amazing library
- Vite team for the lightning-fast build tool
- Atlassian team for react-beautiful-dnd

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
