# OpenMusic API

A RESTful music catalog API built with **Node.js**, **Hapi.js**, and **PostgreSQL**.

This repository is documented as a backend portfolio project that demonstrates API routing, PostgreSQL persistence, validation, modular service structure, and centralized client error handling.

---

## Project Overview

OpenMusic API provides backend endpoints for managing music catalog data such as albums and songs. The project uses a modular Hapi.js structure with separate API modules, services, validators, and custom exception handling.

---

## Tech Stack

| Area | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Hapi.js |
| Database | PostgreSQL |
| Validation | Joi |
| Migration | node-pg-migrate |
| Environment Config | dotenv |
| Code Quality | ESLint |

---

## Main Features

- Album resource management
- Song resource management
- PostgreSQL database integration
- Request payload validation
- Client error handling through custom exceptions
- Modular API, service, and validator structure
- CORS-enabled API server

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Ronaldo-spec/OpenMusic-API.git
cd OpenMusic-API
```

Install dependencies:

```bash
npm install
```

Create environment file:

```bash
cp .env.example .env
```

Configure PostgreSQL connection in `.env`:

```env
HOST=localhost
PORT=3000
PGUSER=postgres
PGHOST=localhost
PGPASSWORD=your_postgres_password
PGDATABASE=openmusic
PGPORT=5432
```

Run migration:

```bash
npm run migrate
```

Run development server:

```bash
npm run start:dev
```

Run production server:

```bash
npm run start:prod
```

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run start:dev` | Run server with nodemon |
| `npm run start:prod` | Run server in production mode |
| `npm run lint` | Run ESLint checking |
| `npm run migrate` | Run database migration |

---

## Recent Code Cleanup

This repository has been cleaned up to improve runtime stability and maintainability:

- added fallback values for `PORT` and `HOST`;
- re-enabled centralized client error response handling;
- removed debug-only console output for environment values;
- improved package metadata;
- added `.env.example` for easier setup.

---

## Portfolio Value

This project demonstrates:

- Backend API development with Hapi.js
- PostgreSQL-backed service layer
- Request validation with Joi
- Modular backend project structure
- API error handling pattern
- Environment-based application configuration

---

## Author

**Ronaldo Firmansyah**  
Programmer | Business Analyst | ERP/Application Support | SQL Reporting | Data Analyst

LinkedIn: [linkedin.com/in/ronaldofirmansyah](https://linkedin.com/in/ronaldofirmansyah)  
GitHub: [github.com/Ronaldo-spec](https://github.com/Ronaldo-spec)
