import React from "react";
import { Link } from "react-router-dom";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Company Overview */}
      <section className="about-section hero-section">
        <h1>About Kithan Autocare Limited</h1>
        <p className="tagline">Excellence in Automotive Care & Service</p>
        <p className="intro-text">
          Kithan Autocare Limited is a leading automotive repair and maintenance
          service provider dedicated to delivering exceptional quality services
          to our valued customers. With over a decade of experience in the
          automotive industry, we pride ourselves on our commitment to
          excellence, reliability, and customer satisfaction.
        </p>
      </section>

      {/* What We Offer */}
      <section className="about-section">
        <h2>🎯 What We Offer to Customers</h2>
        <div className="offerings-grid">
          <div className="offering-card">
            <h3>Professional Repair Services</h3>
            <p>
              Comprehensive vehicle repair services including engine repairs,
              transmission work, brake servicing, and electrical diagnostics.
            </p>
          </div>
          <div className="offering-card">
            <h3>Maintenance Services</h3>
            <p>
              Regular maintenance packages including oil changes, filter
              replacements, fluid checks, and preventive care to keep your
              vehicle running smoothly.
            </p>
          </div>
          <div className="offering-card">
            <h3>Quality Motor Spares</h3>
            <p>
              Wide selection of genuine and OEM motor spare parts with
              competitive pricing and availability guarantee.
            </p>
          </div>
          <div className="offering-card">
            <h3>Expert Diagnostics</h3>
            <p>
              State-of-the-art diagnostic equipment and experienced technicians
              to accurately identify vehicle issues.
            </p>
          </div>
          <div className="offering-card">
            <h3>24/7 Support</h3>
            <p>
              Customer support available round the clock for emergency services
              and technical consultations.
            </p>
          </div>
          <div className="offering-card">
            <h3>Warranty Coverage</h3>
            <p>
              All repairs and services come with warranty coverage, ensuring
              peace of mind for our customers.
            </p>
          </div>
        </div>
      </section>

      {/* Motor Information */}
      <section className="about-section">
        <h2>🚗 Motors We Service</h2>
        <div className="motors-list">
          <div className="motors-column">
            <h3>African & Asian Vehicles</h3>
            <ul>
              <li>Toyota (Camry, Corolla, Hilux, Prado)</li>
              <li>Honda (Civic, Accord, CR-V, Odyssey)</li>
              <li>Nissan (Altima, Maxima, Pathfinder, Frontier)</li>
              <li>Hyundai (Elantra, Sonata, Santa Fe, Tucson)</li>
              <li>Kia (Cerato, Sorento, Sportage, Rio)</li>
            </ul>
          </div>
          <div className="motors-column">
            <h3>European & American Vehicles</h3>
            <ul>
              <li>Mercedes-Benz (C-Class, E-Class, GLE, A-Class)</li>
              <li>BMW (3 Series, 5 Series, X3, X5)</li>
              <li>Volkswagen (Golf, Passat, Tiguan, Jetta)</li>
              <li>Ford (Focus, Escape, Explorer, Ranger)</li>
              <li>Chevrolet (Cruze, Malibu, Equinox, Silverado)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Company Rules & Standards */}
      <section className="about-section">
        <h2>📋 Company Rules & Standards</h2>
        <div className="rules-grid">
          <div className="rule-card">
            <h3>Quality Assurance</h3>
            <p>
              All work is performed to the highest industry standards with
              rigorous quality control checks before vehicle handover.
            </p>
          </div>
          <div className="rule-card">
            <h3>Transparency</h3>
            <p>
              We provide detailed job quotations and keep customers informed of
              all work being performed on their vehicles.
            </p>
          </div>
          <div className="rule-card">
            <h3>Professional Ethics</h3>
            <p>
              Our team adheres to strict professional codes of conduct, ensuring
              honest and fair service at all times.
            </p>
          </div>
          <div className="rule-card">
            <h3>Safety Standards</h3>
            <p>
              We maintain the highest safety standards in our workshop,
              protecting both our team and customer vehicles.
            </p>
          </div>
          <div className="rule-card">
            <h3>On-Time Delivery</h3>
            <p>
              We commit to completing repairs within agreed timelines and
              provide real-time updates on vehicle status.
            </p>
          </div>
          <div className="rule-card">
            <h3>Customer Satisfaction</h3>
            <p>
              Customer satisfaction is our priority. We offer a satisfaction
              guarantee and address any concerns promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Company Hierarchy */}
      <section className="about-section">
        <h2>👥 Company Hierarchy & Management</h2>
        <div className="hierarchy-container">
          <div className="hierarchy-level">
            <h3>Executive Level</h3>
            <div className="hierarchy-item">
              <h4>Chief Executive Officer (CEO)</h4>
              <p>Engr. Chukwu Ikechukwu</p>
              <p className="role-desc">
                Overall strategic direction, business development, and company
                operations oversight.
              </p>
            </div>
          </div>

          <div className="hierarchy-level">
            <h3>Management Level</h3>
            <div className="hierarchy-item">
              <h4>Workshop Manager</h4>
              <p>Mr. Emeka Eze</p>
              <p className="role-desc">
                Oversees all technical operations, quality control, maintenance
                schedules, and team supervision.
              </p>
            </div>
            <div className="hierarchy-item">
              <h4>Sales & Operations Manager</h4>
              <p>Mrs. Amara Okonkwo</p>
              <p className="role-desc">
                Manages customer relations, spare parts inventory, scheduling,
                and financial records.
              </p>
            </div>
          </div>

          <div className="hierarchy-level">
            <h3>Administrative Level</h3>
            <div className="hierarchy-item">
              <h4>Secretary & Front Desk Officer</h4>
              <p>Ms. Chioma Okoro</p>
              <p className="role-desc">
                Handles customer inquiries, appointment scheduling,
                documentation, and administrative tasks.
              </p>
            </div>
            <div className="hierarchy-item">
              <h4>Finance Officer</h4>
              <p>Mr. Chidi Nwosu</p>
              <p className="role-desc">
                Manages financial transactions, invoicing, payroll, and
                accounting records.
              </p>
            </div>
          </div>

          <div className="hierarchy-level">
            <h3>Technical Level</h3>
            <div className="hierarchy-item">
              <h4>Senior Technicians (3)</h4>
              <p>
                Specialists in engine repair, transmission, and complex
                diagnostics with 8+ years experience.
              </p>
            </div>
            <div className="hierarchy-item">
              <h4>Junior Technicians (5)</h4>
              <p>
                Support staff handling routine maintenance, repairs, and
                learning advanced technical skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Vision & Mission */}
      <section className="about-section mission-section">
        <h2>🎯 Our Vision & Mission</h2>
        <div className="vision-mission-grid">
          <div className="vm-card">
            <h3>🌟 Vision</h3>
            <p>
              To be the most trusted and reliable automotive service provider in
              the region, known for excellence, innovation, and customer-centric
              solutions.
            </p>
          </div>
          <div className="vm-card">
            <h3>📌 Mission</h3>
            <p>
              To provide world-class automotive repair and maintenance services
              that exceed customer expectations, employing skilled technicians
              and quality parts, while maintaining the highest standards of
              professionalism and integrity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
