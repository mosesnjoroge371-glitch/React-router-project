import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const { isLoggedIn, user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate("/");
    return null;
  }

  const motorSpares = [
    {
      id: 1,
      name: "Engine Oil",
      category: "Fluids",
      price: "₦2,500",
      stock: 45,
    },
    {
      id: 2,
      name: "Air Filter",
      category: "Filters",
      price: "₦1,200",
      stock: 30,
    },
    {
      id: 3,
      name: "Brake Pads",
      category: "Brakes",
      price: "₦8,000",
      stock: 15,
    },
    {
      id: 4,
      name: "Battery 12V",
      category: "Electrical",
      price: "₦25,000",
      stock: 8,
    },
    {
      id: 5,
      name: "Spark Plugs (Set)",
      category: "Ignition",
      price: "₦5,000",
      stock: 20,
    },
    {
      id: 6,
      name: "Transmission Fluid",
      category: "Fluids",
      price: "₦4,500",
      stock: 12,
    },
  ];

  const servicesOffered = [
    {
      id: 1,
      name: "Oil Change & Filter Replacement",
      duration: "45 mins",
      price: "₦5,000",
    },
    {
      id: 2,
      name: "Full Vehicle Inspection",
      duration: "2 hours",
      price: "₦8,000",
    },
    { id: 3, name: "Brake Service", duration: "1.5 hours", price: "₦15,000" },
    {
      id: 4,
      name: "Transmission Fluid Change",
      duration: "1 hour",
      price: "₦10,000",
    },
    {
      id: 5,
      name: "Battery Check & Replacement",
      duration: "30 mins",
      price: "₦5,000",
    },
    { id: 6, name: "Wheel Alignment", duration: "1 hour", price: "₦8,000" },
    {
      id: 7,
      name: "AC Service & Repair",
      duration: "2 hours",
      price: "₦12,000",
    },
    { id: 8, name: "Engine Diagnostics", duration: "1 hour", price: "₦6,000" },
  ];

  const vehiclesBeingRepaired = [
    {
      id: 1,
      make: "Toyota",
      model: "Camry",
      plate: "ABC-123XY",
      owner: "John Okafor",
      status: "In Progress",
      estimatedCompletion: "2025-01-25",
    },
    {
      id: 2,
      make: "Honda",
      model: "Civic",
      plate: "XYZ-456AB",
      owner: "Maria Adeyemi",
      status: "In Progress",
      estimatedCompletion: "2025-01-23",
    },
    {
      id: 3,
      make: "Ford",
      model: "Focus",
      plate: "DEF-789CD",
      owner: "Chukwu Nnamdi",
      status: "Pending Parts",
      estimatedCompletion: "2025-01-28",
    },
    {
      id: 4,
      make: "Hyundai",
      model: "Elantra",
      plate: "GHI-012EF",
      owner: "Amara Chioma",
      status: "Ready for Pickup",
      estimatedCompletion: "2025-01-21",
    },
  ];

  const workCompleted = [
    {
      id: 1,
      date: "2025-01-20",
      vehicleInfo: "Toyota Corolla",
      workDescription: "Engine Oil Change + Filter Replacement",
      technician: "Chidi Okoro",
      totalCost: "₦7,500",
    },
    {
      id: 2,
      date: "2025-01-19",
      vehicleInfo: "Honda Accord",
      workDescription: "Brake Pads Replacement + Inspection",
      technician: "Emeka Eze",
      totalCost: "₦22,000",
    },
    {
      id: 3,
      date: "2025-01-18",
      vehicleInfo: "Mercedes-Benz C-Class",
      workDescription: "Full Diagnostics + AC Repair",
      technician: "Ibrahim Hassan",
      totalCost: "₦45,000",
    },
    {
      id: 4,
      date: "2025-01-17",
      vehicleInfo: "Nissan Altima",
      workDescription: "Transmission Fluid Change",
      technician: "Chidi Okoro",
      totalCost: "₦12,000",
    },
  ];

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to Kithan Autocare Limited Dashboard</h1>
        <p>Hello, {user?.name}! 👋</p>
      </header>

      {/* Motor Spares Section */}
      <section className="dashboard-section">
        <h2>🔧 Motor Spares Inventory</h2>
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>Spare Part Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock Available</th>
              </tr>
            </thead>
            <tbody>
              {motorSpares.map((spare) => (
                <tr
                  key={spare.id}
                  className={spare.stock < 15 ? "low-stock" : ""}
                >
                  <td>{spare.name}</td>
                  <td>{spare.category}</td>
                  <td>{spare.price}</td>
                  <td className={spare.stock < 15 ? "warning" : ""}>
                    {spare.stock} units
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="dashboard-section">
        <h2>🛠️ Services Offered</h2>
        <div className="services-grid">
          {servicesOffered.map((service) => (
            <div key={service.id} className="service-card">
              <h3>{service.name}</h3>
              <p className="duration">⏱️ Duration: {service.duration}</p>
              <p className="price">💰 Price: {service.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vehicles Being Repaired Section */}
      <section className="dashboard-section">
        <h2>🚗 Vehicles Currently Under Repair</h2>
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>Vehicle</th>
                <th>Registration</th>
                <th>Owner</th>
                <th>Status</th>
                <th>Est. Completion</th>
              </tr>
            </thead>
            <tbody>
              {vehiclesBeingRepaired.map((vehicle) => (
                <tr key={vehicle.id}>
                  <td>
                    {vehicle.make} {vehicle.model}
                  </td>
                  <td>{vehicle.plate}</td>
                  <td>{vehicle.owner}</td>
                  <td>
                    <span
                      className={`status-badge status-${vehicle.status.toLowerCase().replace(" ", "-")}`}
                    >
                      {vehicle.status}
                    </span>
                  </td>
                  <td>{vehicle.estimatedCompletion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Completed Work Section */}
      <section className="dashboard-section">
        <h2>✅ Recently Completed Work</h2>
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Vehicle</th>
                <th>Work Description</th>
                <th>Technician</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {workCompleted.map((work) => (
                <tr key={work.id}>
                  <td>{work.date}</td>
                  <td>{work.vehicleInfo}</td>
                  <td>{work.workDescription}</td>
                  <td>{work.technician}</td>
                  <td>{work.totalCost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
