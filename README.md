# 📋 Job Tracker

A full-stack web application to track your job applications — add, manage, and monitor every job you apply to in one place.

🌐 **Live Demo:** [https://jobtracker-tau-fawn.vercel.app](https://jobtracker-tau-fawn.vercel.app)

---

## 🚀 Features

- 🔐 User Authentication (Register & Login with JWT)
- 📝 Add and manage job applications
- 📊 Track application status (Applied, Interview, Offer, Rejected)
- 🗄️ Persistent data storage with MySQL
- 📱 Responsive UI built with React

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js |
| Backend | Node.js, Express.js |
| Database | MySQL |
| Authentication | JWT (JSON Web Tokens) |
| Deployment (FE) | Vercel |
| Deployment (BE) | Render |
| Database Host | Railway |

---

## 📁 Project Structure

```
adarva/
├── frontend/                   # React application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── package.json
└── backend/                    # Node.js + Express API
    ├── src/
    │   ├── config/
    │   │   └── db.js           # MySQL database connection
    │   ├── controllers/
    │   │   ├── auth.controller.js
    │   │   └── job.controller.js
    │   ├── middlewares/
    │   │   └── auth.middleware.js  # JWT auth middleware
    │   ├── repositories/
    │   │   ├── job.repository.js
    │   │   └── user.repository.js
    │   ├── routes/
    │   │   ├── auth.routes.js
    │   │   └── job.routes.js
    │   ├── services/
    │   │   ├── auth.service.js
    │   │   └── job.service.js
    │   ├── utils/
    │   │   └── hash.js         # Password hashing utility
    │   └── app.js
    ├── .env
    ├── .gitignore
    ├── package.json
    └── server.js               # Entry point
```

---

## ⚙️ Getting Started (Local Setup)

### Prerequisites
- Node.js v18+
- MySQL

### 1. Clone the repository
```bash
git clone https://github.com/your-username/adarva.git
cd adarva
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:
```env
PORT=3001
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=job_tracker
JWT_SECRET=your_jwt_secret
FRONTEND_URL=http://localhost:3000
```

Start the backend:
```bash
npm start
```

### 3. Setup Frontend
```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend` folder:
```env
REACT_APP_API_URL=http://localhost:3001
```

Start the frontend:
```bash
npm start
```

### 4. Setup Database
Import the schema into your local MySQL:
```bash
mysql -u root -p job_tracker < schema.sql
```

---

## 🌍 Deployment

| Service | Platform | URL |
|---|---|---|
| Frontend | Vercel | https://jobtracker-tau-fawn.vercel.app |
| Backend | Render | https://adarva-server.onrender.com |
| Database | Railway | MySQL (hosted) |

---

## 📡 API Endpoints

### Auth
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/signup` | Register a new user |
| POST | `/api/auth/login` | Login and get JWT token |

### Jobs
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/jobs` | Get all jobs for logged in user |
| POST | `/api/jobs` | Add a new job application |
| PUT | `/api/jobs/:id` | Update a job application |
| DELETE | `/api/jobs/:id` | Delete a job application |

---

## 🔐 Environment Variables

### Backend (Render)
| Variable | Description |
|---|---|
| `DB_HOST` | MySQL host |
| `DB_PORT` | MySQL port |
| `DB_USER` | MySQL username |
| `DB_PASSWORD` | MySQL password |
| `DB_NAME` | Database name |
| `JWT_SECRET` | Secret key for JWT |
| `FRONTEND_URL` | Frontend URL for CORS |

### Frontend (Vercel)
| Variable | Description |
|---|---|
| `REACT_APP_API_URL` | Backend API base URL |

---

## 👨‍💻 Author

Made with ❤️ by Ashish
