# Note Project

## Description
This is an Angular project designed to manage notes. It features a modular architecture, organizing the application into `core`, `shared`, and `features` folders for better maintainability and scalability.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Routing](#routing)
- [API](#api)
- [Screenshots](#screenshots)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/sheanmad/astrapay-note-project-angular.git
   ```
2. Navigate to the project directory:
   ```bash
   cd note-project
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
To run the application, use:
   ```bash
   npm serve
   ```
Then open your browser and navigate to `http://localhost:4200`.

## Features
- Create, read, update, and delete notes.
- Modular architecture with separate folders for core functionalities, shared components, and feature modules.

## Routing
The application uses Angular Router for navigation. The following routes are defined:
- **Home**: Displays the list of notes.
  - Path: `/`
  - Component: `NoteListComponent`
- **Note Detail**: Displays details of a specific note.
  - Path: `/notes/:id`
  - Component: `NoteDetailComponent`
- **Note Form**: Allows users to create or edit notes.
  - Path: `/note-form`
  - Component: `NoteFormComponent`
  - Path: `/note-form/:id`
  - Component: `NoteFormComponent`

## API
The application interacts with a backend API to manage notes. The following endpoints are used:
- **GET /api/notes**: Fetch all notes.
- **GET /api/notes/:id**: Fetch a note by ID.
- **POST /api/notes**: Create a new note.
- **PUT /api/notes/:id**: Update an existing note by ID.
- **DELETE /api/notes/:id**: Delete a note by ID.

## Screenshots
![Screenshot](path/to/screenshot.png)
