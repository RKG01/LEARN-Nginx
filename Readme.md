
# 📰 Full Stack Blog App – Docker + NGINX + React + Express

This is a complete full stack blog application built with:

- 💻 **Frontend**: React + Vite
- 🛠 **Backend**: Express.js (Node.js)
- 🗄 **Database**: MongoDB (can use MongoDB Atlas)
- 🐳 **Containerization**: Docker + Docker Compose
- 🔁 **Reverse Proxy**: NGINX
- ☁️ **Deployment**: AWS EC2 (manual or CI/CD via GitHub Actions)

---

## 🚀 Features

- 🎨 Clean frontend served by NGINX (`/`)
- 📦 Backend API served at `/api/posts`
- 🌐 Reverse proxy with NGINX routes requests smartly
- 📂 Multi-container setup using Docker Compose
- ☁️ Ready to deploy on AWS EC2
- ⚙️ Easily extendable for future features (auth, DB, etc.)

---

## 📁 Project Structure

```

blog-app/
├── backend/                # Express backend
│   ├── Dockerfile
│   └── index.js
│
├── frontend/               # React + Vite frontend
│   ├── Dockerfile
│   └── src/App.jsx
│
├── nginx/
│   └── default.conf        # NGINX config for reverse proxy
│
├── docker-compose.yml      # Orchestrates all services
└── README.md               # You are here!

````

---

## 🔧 How to Run Locally (Dev or Prod)

### Prerequisites
- ✅ [Docker](https://www.docker.com/products/docker-desktop)
- ✅ [Docker Compose](https://docs.docker.com/compose/)
- ✅ Node.js (for dev testing)

---

### 🚀 Run with Docker Compose (Recommended)
```bash
# From root of project
docker compose up --build
````

Then open browser at:

* Frontend: `http://localhost/`
* API: `http://localhost/api/posts`

---

### 🧪 Run Individually (Development mode)

**Frontend (React):**

```bash
cd frontend
npm install
npm run dev
```

**Backend (Express):**

```bash
cd backend
npm install
npm start
```

Access backend at `http://localhost:5000`, React at `http://localhost:5173`

---

## 🌐 NGINX Reverse Proxy Setup

* `/` → serves static files from React build
* `/api` → proxies to Express backend at port 5000

**NGINX Config (`nginx/default.conf`):**

```nginx
location / {
  root /usr/share/nginx/html;
  index index.html index.htm;
  try_files $uri /index.html;
}

location /api/ {
  proxy_pass http://express_backend:5000/;
}
```

---

## 📦 Technologies Used

| Layer         | Tech             |
| ------------- | ---------------- |
| Frontend      | React + Vite     |
| Backend       | Express.js       |
| Reverse Proxy | NGINX            |
| Container     | Docker + Compose |
| Deployment    | AWS EC2          |

---

## ✅ What I Learned From This Project

### 🧠 Core Learnings:

* ✅ How to use **Docker and Docker Compose** to containerize full stack apps
* ✅ How to serve React frontend using **NGINX as a reverse proxy**
* ✅ How to connect frontend → NGINX → backend (Express) cleanly
* ✅ How to build custom Dockerfiles for both React and Express
* ✅ How to use **volumes and networks** to link services together
* ✅ How to debug common Docker & NGINX errors (404, 500, permission, image sizes, etc.)
* ✅ How to push to GitHub, fix remote URL/auth issues, and clean `.gitignore`

### 🚀 Bonus Learnings:

* 🌐 How to deploy on AWS EC2
* 🔐 How to configure Git globally & SSH with GitHub
* ⚙️ Basic idea of CI/CD (GitHub Actions for Docker deployment)

---

## 💡 Future Ideas

* Add MongoDB with Mongoose for storing posts
* Add user authentication
* Add CI/CD with GitHub Actions
* Secure site with HTTPS using Let's Encrypt + Certbot

---

## 🤝 Author

Made with ❤️ by **[Rahul Gupta](https://github.com/RKG01)**
Repo: [github.com/RKG01/LEARN-Nginx](https://github.com/RKG01/LEARN-Nginx)

---

## 📜 License

MIT License – use freely and learn deeply!

```

---

Let me know if you also want:
- A `CONTRIBUTING.md`
- MongoDB + Mongoose integration section
- GitHub Actions CI/CD workflow in this `README` too


```
