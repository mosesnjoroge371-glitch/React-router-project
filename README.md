# Kithan Autocare Limited - Vehicle Service Management System

A modern, full-featured web application for managing automotive repair, maintenance, and spare parts inventory. Built with React, React Router, and Vite.

## 🚗 Features

### Authentication System

- **Login Page** - Secure user authentication
- **Signup Page** - User registration with validation
- **Forgot Password** - Password recovery mechanism
- Demo credentials included: `admin@kithan.com` / `admin123`

### Dashboard (Protected Route)

- **Motor Spares Inventory** - Track available spare parts with pricing and stock levels
- **Services Offered** - Complete list of automotive services with duration and pricing
- **Vehicles Under Repair** - Real-time status tracking of vehicles in the workshop
- **Completed Work** - Historical records of completed repairs and maintenance

### About Page

- **Company Overview** - Mission, vision, and company information
- **Services & Offerings** - Detailed description of all customer-facing services
- **Motors Supported** - List of vehicle makes and models serviced
- **Company Rules & Standards** - Quality assurance and operational standards
- **Company Hierarchy** - Organizational structure with team roles and responsibilities

### Contact Page

- **Team Information** - Detailed contact information for:
  - CEO (Engr. Chukwu Ikechukwu)
  - Workshop Manager (Mr. Emeka Eze)
  - Secretary (Ms. Chioma Okoro)
- **Contact Details** - Email, phone numbers, and office address
- **Contact Form** - Message submission for inquiries
- **Emergency Hotline** - 24/7 emergency support

### Navigation

- **Dynamic Navbar** - Context-aware navigation with authentication status
- **User Welcome Message** - Personalized greeting for logged-in users
- **Logout Functionality** - Secure session termination

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Router**: React Router v7.12.0
- **Build Tool**: Vite 7.2.4
- **Styling**: CSS3 with Responsive Design
- **State Management**: React Context API
- **CSS Framework**: Tailwind CSS 4.1.18 (available)

## 📁 Project Structure

```
src/
├── components/
│   └── Navbar.jsx              # Navigation component with auth logic
├── context/
│   └── AuthContext.jsx         # Authentication context & provider
├── pages/
│   ├── Home.jsx                # Landing/Login page
│   ├── Login.jsx               # Login form
│   ├── Signup.jsx              # User registration
│   ├── ForgotPassword.jsx       # Password recovery
│   ├── Dashboard.jsx           # Main application dashboard
│   ├── About.jsx               # Company information
│   └── Contact.jsx             # Team contact information
├── styles/
│   ├── Navbar.css              # Navigation styles
│   ├── Auth.css                # Authentication pages styles
│   ├── Dashboard.css           # Dashboard styles
│   ├── About.css               # About page styles
│   └── Contact.css             # Contact page styles
├── App.jsx                     # Main application component
├── main.jsx                    # Application entry point
└── index.css                   # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Navigate to the project directory:**

   ```bash
   cd "c:\Users\HomePC\Desktop\React Projects\reactrouter"
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Navigate to `http://localhost:5173` (or the URL shown in terminal)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🔐 Authentication

### Demo Credentials

```
Email: admin@kithan.com
Password: admin123
```

### Authentication Flow

1. Unauthenticated users see the login page
2. Users can sign up for new accounts
3. Valid credentials grant access to the dashboard
4. Dashboard access is protected and redirects to login if session expires
5. Logout clears session and returns to login page

## 📊 Dashboard Features

### Motor Spares Inventory

| Spare Part | Category | Price  | Stock    |
| ---------- | -------- | ------ | -------- |
| Engine Oil | Fluids   | ₦2,500 | 45 units |
| Air Filter | Filters  | ₦1,200 | 30 units |
| Brake Pads | Brakes   | ₦8,000 | 15 units |

_View the dashboard for complete inventory list_

### Services Offered

- Oil Change & Filter Replacement
- Full Vehicle Inspection
- Brake Service
- Transmission Fluid Change
- Battery Check & Replacement
- Wheel Alignment
- AC Service & Repair
- Engine Diagnostics

### Vehicle Status Tracking

Real-time tracking of:

- Vehicles in progress
- Pending parts waiting
- Ready for pickup
- Repair completion status

## 🎨 Design Features

- **Responsive Design** - Works on desktop, tablet, and mobile
- **Modern UI** - Gradient backgrounds and smooth animations
- **Color Scheme** - Professional blue and purple theme
- **Accessibility** - Semantic HTML and ARIA labels
- **User Feedback** - Success and error messages
- **Loading States** - Visual feedback during operations

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔒 Security Considerations

- Authentication state managed securely via Context API
- Protected routes prevent unauthorized access
- Form validation on signup and login
- Password confirmation on registration
- Session management with logout functionality

## 📝 Team Structure

### Executive Level

- **CEO**: Engr. Chukwu Ikechukwu
  - Strategic Leadership & Business Development

### Management Level

- **Workshop Manager**: Mr. Emeka Eze
  - Technical Operations & Quality Assurance
- **Sales & Operations Manager**: Mrs. Amara Okonkwo
  - Customer Relations & Inventory Management

### Administrative Level

- **Secretary**: Ms. Chioma Okoro
  - Customer Service & Administration
- **Finance Officer**: Mr. Chidi Nwosu
  - Financial Management & Accounting

### Technical Level

- **Senior Technicians** (3): 8+ years experience
- **Junior Technicians** (5): Training & support staff

## 🚗 Supported Vehicles

### African & Asian Vehicles

- Toyota (Camry, Corolla, Hilux, Prado)
- Honda (Civic, Accord, CR-V, Odyssey)
- Nissan, Hyundai, Kia, and more

### European & American Vehicles

- Mercedes-Benz, BMW, Volkswagen
- Ford, Chevrolet, and more

## 📞 Contact Information

**Main Office:**

- Address: 123 Motor Road, Lekki, Lagos, Nigeria
- Phone: +234 (0) 700 123 4567
- Email: info@kithanautocarepe.com

**Working Hours:**

- Monday - Friday: 8:00 AM - 6:00 PM
- Saturday: 9:00 AM - 4:00 PM
- Sunday: Closed

**Emergency Hotline:** +234 (0) 700 123 4567 (24/7)

## 🎯 Future Enhancements

- Backend API integration for persistent data
- Customer portal for booking services
- Payment gateway integration
- SMS notifications for repair status
- Mobile app for iOS and Android
- Automated invoicing and reporting
- Advanced vehicle diagnostics integration

## 📄 License

This project is proprietary to Kithan Autocare Limited.

## 👨‍💻 Developer

Built with React and Vite for high performance and excellent developer experience.

---

**Version**: 1.0.0  
**Last Updated**: January 2026
