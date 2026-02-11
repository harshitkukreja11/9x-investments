import React, { useState } from "react";
import { Container, Row, Col, Table, Form, Badge } from "react-bootstrap";
import {
  FaGraduationCap,
  FaBriefcase,
  FaHeartbeat,
  FaMicrochip,
  FaBolt,
  FaWater,
  FaOilCan,
  FaFutbol,
  FaIndustry,
  FaLeaf,
  FaPlaneDeparture,
} from "react-icons/fa";

const activitiesData = [
  {
    activity: "Investment in Educational Enterprises & Management",
    status: "Active",
    icon: <FaGraduationCap />,
  },
  {
    activity: "Investment in Commercial Enterprises & Management",
    status: "Active",
    icon: <FaBriefcase />,
  },
  {
    activity: "Investment in Healthcare Enterprises & Development",
    status: "Active",
    icon: <FaHeartbeat />,
  },
  {
    activity: "Investment in Technological Enterprises & Management",
    status: "Active",
    icon: <FaMicrochip />,
  },
  {
    activity: "Investment in Energy Enterprises & Management",
    status: "Active",
    icon: <FaBolt />,
  },
  {
    activity: "Investment in Water Enterprises & Development",
    status: "Active",
    icon: <FaWater />,
  },
  {
    activity: "Investment in Oil & Natural Gas Projects",
    status: "Active",
    icon: <FaOilCan />,
  },
  {
    activity: "Investment in Sport Enterprises & Development",
    status: "Active",
    icon: <FaFutbol />,
  },
  {
    activity: "Investment in Industrial Enterprises & Management",
    status: "Active",
    icon: <FaIndustry />,
  },
  {
    activity: "Investment in Agricultural Enterprises & Management",
    status: "Active",
    icon: <FaLeaf />,
  },
  {
    activity: "Investment in Tourist Enterprises & Management",
    status: "Active",
    icon: <FaPlaneDeparture />,
  },
];

export default function LicensedActivities() {
  const [search, setSearch] = useState("");

  const filteredActivities = activitiesData.filter((item) =>
    item.activity.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="licensed-activities-section-dark py-5">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <p className="section-eyebrow text-uppercase">
              Licensed Investment Activities
            </p>
            <h2 className="section-title">
              Government-registered areas of investment
            </h2>
            <p className="section-subtitle">
              Licensed by Government of Dubai; all activities registered and active.
            </p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6} className="mx-auto">
            <Form.Control
              type="text"
              placeholder="Search activities..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="activities-glass-wrapper">
              <div className="table-responsive">
                <Table className="activities-table align-middle">
                  <thead>
                    <tr>
                      <th>Activity</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredActivities.length > 0 ? (
                      filteredActivities.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <div className="activity-cell">
                              <span className="activity-icon">
                                {item.icon}
                              </span>
                              <span>{item.activity}</span>
                            </div>
                          </td>
                          <td>
                            <Badge className="status-badge px-3 py-2">
                              {item.status}
                            </Badge>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="2" className="text-center">
                          No activities found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
