# Kithan Autocare Limited - Quick Start Guide

## 🎯 Getting Started

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Run Development Server

```bash
npm run dev
```

### Step 3: Access the Application

Open your browser and go to: `http://localhost:5173`

## 🔐 Demo Login Credentials

**Email:** admin@kithan.com  
**Password:** admin123

## 📌 Application Features Overview

### 1. **Home/Login Page** (`/`)

- First page users see when visiting the application
- Contains login form with demo credentials
- Links to signup and forgot password pages
- Shows welcome message for authenticated users

### 2. **Signup Page** (`/signup`)

- User registration form
- Validates email and password requirements
- Prevents duplicate email registration
- Redirects to login after successful signup

### 3. **Forgot Password** (`/forgot-password`)

- Email-based password recovery
- Validation checks if email exists
- Returns success message with recovery instructions

### 4. **Dashboard** (`/dashboard`) - **PROTECTED ROUTE**

- Only accessible after successful login
- Auto-redirects unauthenticated users to login
- **Contains 4 main sections:**

#### A. Motor Spares Inventory

- Table showing available spare parts
- Columns: Part Name, Category, Price, Stock Level
- Highlights low-stock items with yellow background
- Includes 6 sample spare parts (Engine Oil, Air Filter, Brake Pads, etc.)

#### B. Services Offered

- Grid layout of all automotive services
- Shows service name, duration, and pricing
- Includes 8 services (Oil Change, Inspection, Brake Service, etc.)
- Responsive cards that adapt to screen size

#### C. Vehicles Under Repair

- Table of vehicles currently in the workshop
- Columns: Vehicle Info, Registration, Owner, Status, Estimated Completion
- Status badges with color coding:
  - Blue: In Progress
  - Yellow: Pending Parts
  - Green: Ready for Pickup
- Includes 4 sample vehicles

#### D. Recently Completed Work

- Table of completed repairs and maintenance
- Columns: Date, Vehicle, Work Description, Technician, Cost
- Historical record of finished jobs
- Includes 4 sample completed jobs

### 5. **About Page** (`/about`)

- **Company Overview** - Mission and vision
- **What We Offer** - 6 key service categories with descriptions
- **Motors We Service** - Lists supported vehicle makes/models
- **Company Rules & Standards** - 6 operational standards
- **Company Hierarchy** - Complete organizational structure:
  - CEO: Engr. Chukwu Ikechukwu
  - Managers: Workshop & Sales/Operations
  - Administrative: Secretary & Finance Officer
  - Technical: Senior & Junior Technicians

### 6. **Contact Page** (`/contact`)

- **Main Contact Info** - Address, phone, email, working hours
- **Leadership Team** - 3 key contacts:
  - **CEO**: Engr. Chukwu Ikechukwu
    - Email: chukwu.ikechukwu@kithanautocarepe.com
    - Phone: +234 (0) 703 456 7890
  - **Workshop Manager**: Mr. Emeka Eze
    - Email: emeka.eze@kithanautocarepe.com
    - Phone: +234 (0) 705 678 9012
  - **Secretary**: Ms. Chioma Okoro
    - Email: chioma.okoro@kithanautocarepe.com
    - Phone: +234 (0) 708 901 2345
- **Contact Form** - For customer inquiries
- **Emergency Services** - 24/7 emergency hotline

### 7. **Navigation Bar**

- Always visible at top of page
- Shows company name/logo
- Navigation links adapt based on login status:
  - **Not Logged In**: Home, About, Contact, Login, Sign Up
  - **Logged In**: Home, Dashboard, About, Contact, Welcome message, Logout
- Professional styling with hover effects

## 🎨 Design & Styling

### Color Scheme

- **Primary**: Dark Blue (#1e3c72, #2a5298)
- **Secondary**: Purple (#667eea, #764ba2)
- **Accent**: Gold (#ffd700)
- **Background**: Light Gray (#f5f7fa)

### Key CSS Features

- Responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Gradient backgrounds
- Professional card layouts
- Hover effects and interactive elements
- Accessibility features

## 🔐 Authentication Flow

```
1. User visits app → Login page (default)
   ↓
2. User can:
   a) Login with credentials
   b) Signup for new account
   c) Reset forgotten password
   ↓
3. Successful login → Dashboard (protected)
   ↓
4. Dashboard access:
   - Full inventory and services visibility
   - Vehicle repair tracking
   - Work history
   ↓
5. Logout → Back to login page
```

## 📂 File Structure

```
src/
├── context/AuthContext.jsx         # Authentication logic
├── pages/
│   ├── Home.jsx                    # Login redirect
│   ├── Login.jsx                   # Login form
│   ├── Signup.jsx                  # Registration form
│   ├── ForgotPassword.jsx          # Password recovery
│   ├── Dashboard.jsx               # Main dashboard
│   ├── About.jsx                   # Company info
│   └── Contact.jsx                 # Contact/team info
├── components/
│   └── Navbar.jsx                  # Navigation
├── styles/
│   ├── Navbar.css                  # Nav styling
│   ├── Auth.css                    # Login/Signup styling
│   ├── Dashboard.css               # Dashboard styling
│   ├── About.css                   # About page styling
│   └── Contact.css                 # Contact page styling
├── App.jsx                         # Main app component
├── main.jsx                        # Entry point
└── index.css                       # Global styles
```

## 🛠️ Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm lint
```

## 🔧 Customization Tips

### Update Company Information

- **Logo/Brand**: Edit navbar in `Navbar.jsx`
- **Team Details**: Modify contact arrays in `Contact.jsx`
- **Services**: Update arrays in `Dashboard.jsx`
- **Company Info**: Edit `About.jsx` content

### Add New Users

Edit the `users` array in `src/context/AuthContext.jsx`:

```javascript
const [users, setUsers] = useState([
  { email: "newuser@kithan.com", password: "password123", name: "User Name" },
]);
```

### Modify Styling

- Global styles: `src/index.css`
- Component-specific: Respective CSS files in `src/styles/`
- Color scheme: Update gradient values in CSS files

### Add New Pages

1. Create new component in `src/pages/`
2. Import and add route in `App.jsx`
3. Add navigation link in `Navbar.jsx`

## ⚠️ Important Notes

- This is a **frontend-only** application
- User data is stored in memory and resets on page reload
- For production, integrate with a backend API
- Images use placeholder service (via.placeholder.com)
- Replace placeholder images with actual team photos

## 🚀 Next Steps

1. Customize company details and branding
2. Replace placeholder images with real photos
3. Set up backend API for data persistence
4. Add payment processing for services
5. Implement email notifications
6. Deploy to production hosting

## 📞 Support

For questions or issues:

- Email: info@kithanautocarepe.com
- Phone: +234 (0) 700 123 4567
- Emergency: +234 (0) 700 123 4567 (24/7)

---

**Happy coding! 🚗**
