# Import AI Time Saver

A full-stack web application for AI automation services with user authentication and demo booking functionality.

## Project Structure

```
import-ai-time-saver-34-main/
├── frontend/          # React + TypeScript + Vite
├── backend/           # Node.js + Express + MongoDB
└── README.md
```

## Quick Start

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   # Copy the example file
   copy .env.example .env
   ```
   
   Edit `.env` with your values:
   ```
   MONGODB_URI=mongodb://localhost:27017/importai
   JWT_SECRET=your-secret-key-here
   PORT=5000
   FRONTEND_URL=http://localhost:8080
   ```

4. **Start MongoDB** (if running locally):
   - Install MongoDB Community Edition
   - Start MongoDB service
   - Or use MongoDB Atlas (cloud)

5. **Start the backend server:**
   ```bash
   npm run dev
   ```
   
   The API will be available at `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   # Create .env.local file
   echo VITE_API_URL=http://localhost:5000 > .env.local
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   
   The app will be available at `http://localhost:8080`

## Features

### Authentication
- **Register**: Create new account with name, email, and password
- **Login**: Authenticate with email and password
- **JWT Tokens**: Secure authentication with JSON Web Tokens
- **Protected Routes**: Automatic redirect to login for unauthenticated users

### Demo Booking Flow
1. Click "Book 30-min Free Demo" on homepage
2. If not logged in → redirected to login page
3. After login → ready to proceed with booking

### API Endpoints

#### Authentication
- `POST /api/auth/register` - Create new account
- `POST /api/auth/login` - Authenticate user
- `GET /api/auth/me` - Get current user (protected)

#### Demo Navigation
- `GET /go/demos` - Redirect to demos page

#### Health Check
- `GET /api/health` - API status check

## Testing the Authentication Flow

1. **Start both servers** (backend on port 5000, frontend on port 8080)

2. **Test Registration:**
   - Go to `http://localhost:8080/login`
   - Click "Sign Up" tab
   - Fill in name, email, and password
   - Submit form
   - Should redirect to homepage with success message

3. **Test Login:**
   - Go to `http://localhost:8080/login`
   - Use the email/password from registration
   - Submit form
   - Should redirect to homepage with success message

4. **Test Demo Booking:**
   - Click "Book 30-min Free Demo" on homepage
   - If not logged in → redirected to login page
   - After login → button should work (currently logs to console)

5. **Test Logout:**
   - Click "Logout" in navigation
   - Should clear authentication and show "Login" button

## Technology Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **React Router** for navigation
- **React Query** for data fetching

### Backend
- **Node.js** with Express
- **MongoDB** with Mongoose
- **JWT** for authentication
- **bcrypt** for password hashing
- **CORS** for cross-origin requests

## Development

### Backend Commands
```bash
npm run dev    # Start development server with nodemon
npm start      # Start production server
```

### Frontend Commands
```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run preview # Preview production build
```

## Environment Variables

### Backend (.env)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `PORT` - Server port (default: 5000)
- `FRONTEND_URL` - Frontend URL for CORS

### Frontend (.env.local)
- `VITE_API_URL` - Backend API URL

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running locally or Atlas connection string is correct
- Check firewall settings if using cloud MongoDB

### CORS Issues
- Verify `FRONTEND_URL` in backend `.env` matches your frontend URL
- Check that both servers are running on correct ports

### Authentication Issues
- Clear browser localStorage if tokens become stale
- Check JWT_SECRET is set in backend environment
- Verify API endpoints are accessible
