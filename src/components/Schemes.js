import React from 'react';
import { Container, Row, Col, Table, Button, Card } from 'react-bootstrap';

const Schemes = () => {
  // Sample data for central schemes (replace it with your actual data)
  const centralSchemes = [
    {
      "name": "Pradhan Mantri Kisan Samman Nidhi (PM-Kisan)",
      "description": "PM-Kisan is a government initiative providing direct income support to small and marginal farmers across India. Eligible farmers receive financial assistance of Rs. 6,000 per year in three equal installments. The goal is to supplement the financial needs of farmers for the purchase of seeds, fertilizers, and other inputs.",
      "category": "Income Support",
      "link": "https://pmkisan.gov.in/"
    },
    {
      "name": "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
      "description": "PMFBY is a crop insurance scheme designed to provide financial protection to farmers in case of crop loss or damage due to natural calamities, pests, or diseases. It aims to encourage farmers to adopt modern agricultural practices.",
      "category": "Crop Insurance",
      "link": "https://pmfby.gov.in/"
    },
    {
      "name": "National Agriculture Market (e-NAM)",
      "description": "e-NAM is an online trading platform that connects agricultural markets across the country. It facilitates transparent price discovery and better market access for farmers. The platform enables farmers to sell their produce directly to buyers, reducing intermediaries.",
      "category": "Market Connectivity",
      "link": "https://enam.gov.in/"
    },
    {
      "name": "Soil Health Card Scheme",
      "description": "The Soil Health Card Scheme aims to provide soil health cards to farmers, containing information about the health of their soil and recommendations for appropriate nutrients. This helps farmers make informed decisions about soil management and enhances productivity.",
      "category": "Soil Health",
      "link": "https://soilhealth.dac.gov.in/"
    },
    {
      "name": "Paramparagat Krishi Vikas Yojana (PKVY)",
      "description": "PKVY promotes organic farming and certification. It encourages farmers to adopt eco-friendly and sustainable agricultural practices without the use of chemical fertilizers and pesticides. The scheme aims to improve soil health and promote biodiversity.",
      "category": "Organic Farming",
      "link": "https://pib.gov.in/newsite/PrintRelease.aspx?relid=122698"
    },
    {
      "name": "National Mission for Sustainable Agriculture (NMSA)",
      "description": "NMSA focuses on promoting sustainable agricultural practices, enhancing water-use efficiency, and addressing climate change challenges. It includes various sub-missions aimed at achieving sustainable agriculture and improving farm productivity.",
      "category": "Sustainable Agriculture",
      "link": "https://nmsa.dac.gov.in/"
    }
  ];

  // Sample data for Telangana state schemes (replace it with your actual data)
  const telanganaSchemes = [
    {
      "name": "Rythu Bandhu Scheme",
      "description": "Rythu Bandhu is a farmer investment support scheme in Telangana. It provides financial assistance to farmers for purchasing inputs like seeds, fertilizers, and pesticides. The scheme aims to ensure timely and adequate credit to farmers and enhance agricultural productivity.",
      "category": "Financial Assistance",
      "link": "https://rythubandhu.telangana.gov.in/"
    },
    {
      "name": "Ryuthu Bima",
      "description": "Ryuthu Bima is an insurance scheme for farmers in Telangana. It provides coverage against natural calamities, accidents, and other risks that may lead to crop loss or financial distress. The scheme aims to protect farmers from unforeseen circumstances.",
      "category": "Insurance",
      "link": "https://www.bimakarishma.in/"
    },
    {
      "name": "Mission Kakatiya",
      "description": "Mission Kakatiya focuses on the restoration and rejuvenation of minor irrigation sources, such as tanks and lakes. The mission aims to enhance the capacity of water resources for agriculture, providing a sustainable water supply to farmers.",
      "category": "Irrigation",
      "link": "https://missionkakatiya.cgg.gov.in/"
    },
    {
      "name": "Mission Bhagiratha",
      "description": "Mission Bhagiratha aims to provide safe and sustainable drinking water to every household in Telangana. While not exclusive to farmers, the mission indirectly benefits agriculture by ensuring water availability.",
      "category": "Water Supply",
      "link": "https://missionbhagiratha.telangana.gov.in/"
    },
    {
      "name": "Kaleshwaram Project",
      "description": "The Kaleshwaram Project is a significant irrigation initiative in Telangana. It integrates several rivers to provide water for agriculture and drinking purposes. The project aims to address water scarcity challenges in the region.",
      "category": "Irrigation",
      "link": "https://irrigation.telangana.gov.in/kaleshwaram-project.html"
    }
  ];

  return (
    <Container>
      <Row>
        <Col>
          <Card className="mt-5">
            <Card.Title className="text-center">Central Government Schemes</Card.Title>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Link</th>
                  </tr>
                </thead>
                <tbody>
                  {centralSchemes.map((scheme) => (
                    <tr key={scheme.name}>
                      <td>{scheme.name}</td>
                      <td>{scheme.description}</td>
                      <td>{scheme.category}</td>
                      <td> <a href={scheme.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" > Learn More </a> </td> </tr> ))} </tbody>
                       </Table> 
                       </Card.Body> 
                       </Card> 
                       </Col> 
                       </Row>
                        <Row>
                           <Col> 
                           <Card className="mt-5"> <Card.Title className="text-center">Telangana State Government Schemes</Card.Title> 
                        <Card.Body> 
                          <Table striped bordered hover>
                             <thead> <tr> <th>Name</th>
                              <th>Description</th> 
                             <th>Category</th>
                              <th>Link</th> </tr> </thead>
                               <tbody> {telanganaSchemes.map((scheme) => ( <tr key={scheme.name}> <td>{scheme.name}</td> 
                               <td>{scheme.description}</td> <td>{scheme.category}</td>
                                <td> <a href={scheme.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" > Learn More </a> </td> </tr> ))} 
                                </tbody> </Table> 
                                </Card.Body> </Card> 
                                </Col>
                                 </Row> 
                                 </Container> ); };
export default Schemes;