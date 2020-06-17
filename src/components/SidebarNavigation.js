import React, { useEffect } from 'react'
import { Tab, Row, Nav, Col } from 'react-bootstrap'
import Container from './Container'
import CardsContainer from './CardsContainer'

function SidebarNavigation() {
  return (
    <Container>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={ 3 }>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="tops">Tops</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="bottoms">Bottoms</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="shoes">Shoes</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="accessories">Accessories</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={ 9 }>
            <Tab.Content>
              <Tab.Pane eventKey="tops">
                tops
              </Tab.Pane>
              <Tab.Pane eventKey="bottoms">
                <CardsContainer />
              </Tab.Pane>
              <Tab.Pane eventKey="shoes">
                shoes
              </Tab.Pane>
              <Tab.Pane eventKey="accessories">
                accessories
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  )
}

export default SidebarNavigation