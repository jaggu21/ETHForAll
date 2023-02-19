

import logo from "../Assets/Logo/drate-low-resolution-color-logo.png"


import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function CustomToast(heading,content) {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);
  

  return (

    <Col md={6} className="mb-2">
    <Toast show={showA} onClose={toggleShowA}>
        <Toast.Header>
        <strong className="me-auto">{heading}</strong>
        </Toast.Header>
        <Toast.Body>{content}</Toast.Body>
    </Toast>
    </Col>
  );
}

export default CustomToast;