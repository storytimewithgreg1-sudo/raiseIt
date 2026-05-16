# RaiseIt Documentation

## Overview
RaiseIt is an anonymous suggestion and voting platform for organisations, teams, classrooms, and communities. Members can join a room, post suggestions anonymously, vote on ideas, and pin the most important ones — all without revealing their identity.

**Live URL:** [raiseit.gregrepo.com](https://raiseit.gregrepo.com)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, Tailwind CSS, DaisyUI, Zustand |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT (via HTTP-only cookies) |

---

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Git

### Installation

**1. Clone the repository:**
```bash
git clone https://github.com/your-username/raiseit.git
cd raiseit
```

**2. Install backend dependencies:**
```bash
cd backend
npm install
```

**3. Install frontend dependencies:**
```bash
cd frontend
npm install
```

**4. Set up environment variables:**

Create a `.env` file in the backend directory:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
PORT=5001
```

**5. Run the development servers:**

Backend:
```bash
cd backend
npm run dev
```

Frontend:
```bash
cd frontend
npm run dev
```

---

## Environment Variables

| Variable | Description | Required |
|---|---|---|
| `MONGODB_URI` | MongoDB connection string from Atlas | Yes |
| `JWT_SECRET` | Secret key for signing JWT tokens | Yes |
| `NODE_ENV` | Environment (`development` or `production`) | Yes |
| `PORT` | Port for the backend server | No (defaults to 5001) |

---

## API Reference

Base URL: `https://your-backend.railway.app/api`

All protected routes require a valid JWT token stored in an HTTP-only cookie. Log in first to get the cookie set automatically.

---

### Authentication

#### Sign Up
```
POST /api/auth/signup
```
**Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "username": "Greg"
}
```
**Response:**
```json
{
  "_id": "user_id",
  "email": "user@example.com",
  "username": "Greg"
}
```

---

#### Login
```
POST /api/auth/login
```
**Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```
**Response:**
```json
{
  "_id": "user_id",
  "email": "user@example.com",
  "username": "Greg"
}
```

---

#### Logout
```
POST /api/auth/logout
```
**Auth required:** No

**Response:**
```json
{
  "message": "Logged out successfully"
}
```

---

#### Get Authenticated User
```
GET /api/auth/check
```
**Auth required:** Yes

**Response:**
```json
{
  "_id": "user_id",
  "email": "user@example.com",
  "username": "Greg"
}
```

---

### Classrooms

All classroom routes require authentication.

#### Get All Classrooms
```
GET /api/classroom
```
**Auth required:** Yes

**Response:**
```json
[
  {
    "_id": "classroom_id",
    "name": "Campus Founders",
    "code": "50549",
    "description": "Photography, Podcasts, Videography",
    "createdBy": "user_id",
    "members": ["user_id"],
    "suggestions": [],
    "isPinned": false,
    "createdAt": "2026-05-10T19:04:18.074Z"
  }
]
```

---

#### Create Classroom
```
POST /api/classroom
```
**Auth required:** Yes

**Body:**
```json
{
  "name": "Campus Founders",
  "code": "50549",
  "description": "Photography, Podcasts, Videography"
}
```

---

#### Get Classroom By ID
```
GET /api/classroom/:classId
```
**Auth required:** Yes

---

#### Join Classroom
```
POST /api/classroom/:classId/join
```
**Auth required:** Yes

**Body:**
```json
{
  "code": "50549"
}
```

---

#### Enter Classroom
```
POST /api/classroom/:classId/enter
```
**Auth required:** Yes

---

#### Delete Classroom
```
DELETE /api/classroom/:classId
```
**Auth required:** Yes

**Permission:** Creator only

---

### Suggestions

#### Get Suggestions
```
GET /api/classroom/:classId/suggestions
```
**Auth required:** Yes

**Permission:** Members only

**Response:**
```json
[
  {
    "_id": "suggestion_id",
    "title": "Meet and greet",
    "content": "Let's do one",
    "author": "user_id",
    "classroom": "classroom_id",
    "isPinned": false,
    "votes": ["user_id"],
    "createdAt": "2026-05-10T19:58:50.228Z"
  }
]
```

---

#### Create Suggestion
```
POST /api/classroom/:classId/suggestions
```
**Auth required:** Yes

**Permission:** Members only

**Body:**
```json
{
  "title": "Meet and greet",
  "content": "Let's do one"
}
```

---

#### Delete Suggestion
```
DELETE /api/classroom/:classId/suggestions/:suggestionId
```
**Auth required:** Yes

**Permission:** Classroom creator or suggestion author only

---

#### Vote on Suggestion
```
POST /api/classroom/:classId/suggestions/:suggestionId/vote
```
**Auth required:** Yes

**Permission:** Members only

**Response:**
```json
{
  "votes": ["user_id_1", "user_id_2"]
}
```
Voting again on the same suggestion removes the vote (toggle).

---

#### Pin Suggestion
```
POST /api/classroom/:classId/suggestions/:suggestionId/pin
```
**Auth required:** Yes

**Permission:** Classroom creator only

**Response:** Returns the updated suggestion with `isPinned` toggled.

---

## Middleware

| Middleware | Description |
|---|---|
| `protectRoutes` | Verifies JWT token from cookie, attaches user to request |
| `isCreator` | Checks if the authenticated user is the classroom creator |
| `isMember` | Checks if the authenticated user is a member of the classroom |
| `isCreatorOrAuthor` | Checks if the user is either the classroom creator or the suggestion author |

---

## Features

- Create and manage rooms for any organisation or group
- Join rooms using a unique room code
- Post anonymous suggestions
- Vote on suggestions — vote again to remove your vote
- Pin important suggestions to the top
- Suggestions sorted by pinned status then vote count
- Suggestions expire after 7 days unless pinned
- Only the room creator can pin or delete any suggestion
- Only the suggestion author or room creator can delete a suggestion

---

## Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you would like to change.

---

## License

MIT

---

*Built by Greg Worlanyo*
