# University Notes App MVP

A minimal viable product (MVP) for a University Notes application allowing users to join courses, take rich-text notes, and browse course information from UW–Madison.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Current Features](#current-features)  
- [Pending Features & Roadmap](#pending-features--roadmap)  
- [Tech Stack](#tech-stack)  
- [Setup & Installation](#setup--installation)  
- [Usage](#usage)  
- [Contributing](#contributing)  
- [API Documentation](#api-documentation)  
- [License](#license)  

---

## Project Overview

This app enables university students to manage their courses and notes efficiently. It has separate frontend and backend components and will support key features such as authentication, note taking with rich text editor integration, course discovery, and eventually audio transcription for notes.

---

## Current Features

- Basic frontend scaffolding with React  
- Core routing (`/`, `/dashboard`, `/courses/:courseId`, `/profile`) implemented  
- Authentication UI (login/signup/logout) stubbed  
- Basic backend API endpoints design (authentication, courses, notes) planned  
- Database schema designed for Users, Courses, Notes  
- ReactQuill integrated as note editor (in progress)  

---

## Pending Features & Roadmap

### Frontend

- Refactor UI components for reusability  
- Responsive design and theming (including optional dark mode)  
- Complete dashboard and sidebar with animations and better UX  
- Full course page with note listing, editing modal, and audio transcription UI stub  
- Course discovery page connected to backend API  
- Profile page with joined courses and user stats  
- Notifications (toasts/snackbars) and loading states  
- Accessibility improvements and keyboard navigation

### Backend

- Complete authentication with token/session management  
- Course and notes CRUD APIs with validation and security  
- Integration with AI transcription services for audio notes (MVP)  
- Search and filtering endpoints for courses  
- Deployment and backup automation  
- Detailed API documentation for frontend integration  

---

## Tech Stack

- **Frontend:** React, React Router, ReactQuill (rich text editor)  
- **Backend:** Node.js/Express (planned), REST API  
- **Database:** PostgreSQL (planned schema)  
- **Other:** AI transcription services (OpenAI/AssemblyAI), Swagger for API docs  

---

## Setup & Installation

1. Clone the repo:  
   ```
   git clone https://github.com/yourusername/university-notes-app.git
   cd university-notes-app
   ```

2. **Frontend:**  
   ```
   cd frontend
   npm install
   npm start
   ```
   Access the frontend at `http://localhost:3000`

3. **Backend:** (planned)  
   Configure environment variables and database connection as described in `/backend/README.md` (to be added).  
   Run migrations and seeders.  
   Start backend server with:  
   ```
   npm run dev
   ```
   Backend API will be accessible at `http://localhost:4000` (default port).

---

## Usage

- Sign up or log in to your account  
- Browse or join courses  
- Create and edit notes with rich text formatting  
- View your notes organized by course  
- Profile page to view your stats and courses (basic UI)  

---

## Contributing

Contributions are welcome! Please follow these steps:

- Fork the repository  
- Create a feature branch (`git checkout -b feature/your-feature`)  
- Commit your changes (`git commit -m 'Add some feature'`)  
- Push to the branch (`git push origin feature/your-feature`)  
- Open a pull request on GitHub  

Please ensure coding standards and add tests where applicable.

---

## API Documentation

API endpoints, request/response formats, and example curl commands will be documented in the `/backend/docs` folder (coming soon). For now, see the task list for planned API features.

---

## License

MIT © Your Name

---

*This README will be updated as the project progresses.*
