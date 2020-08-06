import React, { Component } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap'

import TreeMap from './Tree/Tree'
import MindMap from './MindMap/MindMap'

class Home extends Component {

    myTreeData = [
        {
            name: "A",
            children: [
                {
                    name: "B",
                    children: [
                        {
                            name: "D",
                        }
                    ]
                },
                {
                    name: "C",
                    children: [
                        {
                            name: "E",
                            children: [
                                {
                                    name: "G",
                                },
                                {
                                    name: "H",
                                }
                            ]
                        },
                        {
                            name: "F",
                        }
                    ]
                },
            ],
        },
    ];

    // TODO User input from Node to node

    drawMap = false;

    constructor() {
        super()
        this.state = {
            drawMap: false,
            myMindMap: {},
        }
    }

    onClickNode = (node) => {
        this.createMindMap(node)
    }

    createMindMap = (node) => {
        let myMindMap = {}
        let nodeChildren = []
        if (node.children) {
            node.children.forEach(child => {
                let obj = { name: child.name }
                nodeChildren.push(obj)
            });
        }
        if (node.parent) {
            myMindMap = {
                name: node.parent.name,
                children: [
                    {
                        name: node.name,
                        children: nodeChildren
                    }
                ]
            }

        }
        else {
            myMindMap = {
                name: node.name,
                children: nodeChildren

            }
        }
        this.setState({
            drawMap: true,
            myMindMap: myMindMap
        })
    }

    render() {
        return (
            <Row>
                <Col>
                    <TreeMap tree={this.myTreeData} onClickNode={this.onClickNode} />
                </Col>
                <Col>
                    <MindMap mindMap={this.state.myMindMap} drawMap={this.state.drawMap} />
                </Col>
            </Row>
        );
    }

}

export default Home;
