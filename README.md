# Angular Planner (Pet Project)

This is a personal pet project built with Angular to practice application architecture, component communication, and reactive patterns using RxJS.

The main focus of this project was not UI complexity, but learning how to structure a scalable Angular application.

---

## Purpose of the Project

This project was created to practice:

- Angular standalone components
- Component-based architecture
- Service-based state communication
- RxJS Subjects and Observables
- Separation of UI and business logic
- Working with multiple application states (todo / done / edit)

---

## Architecture Overview

The application uses a **service-based event communication pattern** instead of global state management tools like NgRx.

### Key idea:

- Components do not directly modify shared state
- Instead, they communicate through `ToDoService`
- The service uses `RxJS Subject` streams to broadcast events
- The main page component (`ToDoPageComponent`) manages application state

This approach was used to practice decoupled architecture and reactive programming.

---

## Main Features

- Add new tasks
- Mark tasks as completed / uncompleted
- Edit existing tasks
- Delete tasks
- Separate lists for:
  - Active tasks
  - Completed tasks
- Modal window for editing tasks
- Custom UI directives (hover effects)

---

## Technologies Used

- Angular (Standalone Components)
- TypeScript
- RxJS
- HTML / CSS
- Angular Directives

---

## Project Structure

The application is divided into:

### Components
- `ToDoPageComponent` → main state container
- `ToDoListComponent` → active tasks view
- `DoneTasksComponent` → completed tasks view
- `ToDoCardComponent` → single task UI
- `AddTaskFormComponent` → task creation form
- `EditModalComponent` → editing logic
- `ModalWindowComponent` → modal wrapper

### Services
- `ToDoService` → event-based communication layer using RxJS Subjects

### Directives
- `HighlightButtonDirective` → button hover animation
- `HighlightCardDirective` → UI interaction styling

---

## State Management Concept

Instead of using a global store, this project uses a **lightweight event bus pattern**:

- `addTask$`
- `deleteTask$`
- `doneTask$`
- `openEdit$`
- `editTask$`

Each action is emitted from components and handled inside `ToDoPageComponent`.

---

## What I Learned

This project helped me understand:

- How Angular change detection works
- How to structure standalone Angular apps
- How to use RxJS for component communication
- Why state separation matters
- How to design scalable frontend architecture
- When NOT to use heavy state management tools

---

## Future Improvements

If extended, this project could be improved with:

- NgRx or Angular Signals for state management
- Backend API integration
- Persistent storage (localStorage / DB)
- Drag & drop task reordering
- Better form validation
- Unit tests (Jasmine / Jest)
- Routing for multiple pages

---

## Screenshots
<img width="1570" height="215" alt="image" src="https://github.com/user-attachments/assets/453ba7e1-ee1a-40cc-9012-d93fea8bb232" />
<img width="1594" height="390" alt="image" src="https://github.com/user-attachments/assets/39a088df-ccf0-4151-97d1-4a32a6f67170" />
<img width="1598" height="528" alt="image" src="https://github.com/user-attachments/assets/93c77eef-ff47-48d0-8013-881760337b28" />
<img width="1600" height="575" alt="image" src="https://github.com/user-attachments/assets/db35395e-ccb7-4fda-b8e2-02bdfada6896" />



