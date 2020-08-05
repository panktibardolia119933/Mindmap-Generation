import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap'

import Tree from './Tree/Tree'
import MindMap from './MindMap/MindMap'

function Home() {
    return (
        <Row>
            <Col>
                <Tree />
            </Col>
            <Col>
                <MindMap />
            </Col>
        </Row>
    );
}

export default Home;
