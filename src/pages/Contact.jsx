import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Engr. Chukwu Ikechukwu",
      position: "Chief Executive Officer (CEO)",
      email: "chukwu.ikechukwu@kithanautocarepe.com",
      phone: "+234 (0) 703 456 7890",
      phone2: "+234 (0) 816 234 5678",
      role: "Strategic Leadership & Business Development",
      image: "https://via.placeholder.com/300x300?text=CEO+Chukwu",
      bio: "Engr. Chukwu brings over 20 years of automotive industry experience and holds engineering certifications from leading institutions. He founded Kithan Autocare Limited with a vision to revolutionize vehicle service standards in Nigeria.",
    },
    {
      id: 2,
      name: "Mr. Emeka Eze",
      position: "Workshop Manager",
      email: "emeka.eze@kithanautocarepe.com",
      phone: "+234 (0) 705 678 9012",
      phone2: "+234 (0) 803 456 7890",
      role: "Technical Operations & Quality Assurance",
      image: "https://via.placeholder.com/300x300?text=Manager+Emeka",
      bio: "Mr. Emeka is a certified master technician with 15+ years of hands-on experience in vehicle repair and maintenance. He leads a team of skilled technicians and ensures all work meets international quality standards.",
    },
    {
      id: 3,
      name: "Ms. Chioma Okoro",
      position: "Secretary & Front Desk Officer",
      email: "chioma.okoro@kithanautocarepe.com",
      phone: "+234 (0) 708 901 2345",
      phone2: "+234 (0) 812 345 6789",
      role: "Customer Service & Administration",
      image: "https://via.placeholder.com/300x300?text=Secretary+Chioma",
      bio: "Ms. Chioma is the first point of contact for all customers. With her excellent communication skills and 8 years of administrative experience, she ensures every customer receives prompt and professional service.",
    },
  ];

  const contactInfo = {
    address: "123 Motor Road, Lekki, Lagos, Nigeria",
    workingHours:
      "Monday - Friday: 8:00 AM - 6:00 PM | Saturday: 9:00 AM - 4:00 PM | Sunday: Closed",
    mainPhone: "+234 (0) 700 123 4567",
    mainEmail: "info@kithanautocarepe.com",
  };

  return (
    <div className="contact-container">
      {/* Header */}
      <section className="contact-header">
        <h1>Contact Kithan Autocare Limited</h1>
        <p>
          Get in touch with our team for inquiries, bookings, or emergency
          services
        </p>
      </section>

      {/* Main Contact Information */}
      <section className="contact-info-section">
        <h2>📍 Main Contact Information</h2>
        <div className="main-contact-grid">
          <div className="contact-info-card">
            <h3>📌 Office Address</h3>
            <p>{contactInfo.address}</p>
          </div>
          <div className="contact-info-card">
            <h3>📞 Main Phone</h3>
            <p>
              <a href={`tel:${contactInfo.mainPhone}`}>
                {contactInfo.mainPhone}
              </a>
            </p>
          </div>
          <div className="contact-info-card">
            <h3>✉️ Email</h3>
            <p>
              <a href={`mailto:${contactInfo.mainEmail}`}>
                {contactInfo.mainEmail}
              </a>
            </p>
          </div>
          <div className="contact-info-card">
            <h3>🕐 Working Hours</h3>
            <p>{contactInfo.workingHours}</p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="team-section">
        <h2>👥 Meet Our Leadership Team</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="position">{member.position}</p>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
                <div className="contact-details">
                  <div className="detail-item">
                    <span className="detail-label">📧 Email:</span>
                    <a href={`mailto:${member.email}`}>{member.email}</a>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">📱 Primary:</span>
                    <a href={`tel:${member.phone}`}>{member.phone}</a>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">📱 Secondary:</span>
                    <a href={`tel:${member.phone2}`}>{member.phone2}</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Contact Form */}
      <section className="contact-form-section">
        <h2>💬 Send Us a Message</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="your.email@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+234 (0) 700 123 4567"
            />
          </div>
          <div className="form-group">
            <label htmlFor="service">Service of Interest</label>
            <select id="service" name="service">
              <option value="">Select a service</option>
              <option value="repair">General Repair</option>
              <option value="maintenance">Maintenance</option>
              <option value="diagnostics">Diagnostics</option>
              <option value="spare-parts">Spare Parts</option>
              <option value="emergency">Emergency Service</option>
            </select>
          </div>
          <div className="form-group full-width">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </section>

      {/* Emergency Services */}
      <section className="emergency-section">
        <h2>🚨 Emergency Services</h2>
        <div className="emergency-info">
          <p>
            For roadside breakdowns and emergency vehicle assistance, we provide
            24/7 support.
          </p>
          <p className="emergency-number">
            <strong>Emergency Hotline:</strong>
            <a href="tel:+2347001234567"> +234 (0) 700 123 4567</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
