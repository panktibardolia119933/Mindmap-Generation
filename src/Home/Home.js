import React, { Component } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap'

import TreeMap from './Tree/Tree'
import MindMap from './MindMap/MindMap'
import TopNavBar from './../Components/TopNavBar/TopNavBar'

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

    // CREATE MINDMAP
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
        let myTranslate = {
            x: 350,
            y: 200
        }
        return (
            <div>
                <TopNavBar />
                <Row>
                    <Col>
                        <TreeMap tree={this.myTreeData} onClickNode={this.onClickNode} myTranslate={myTranslate} />
                    </Col>
                    <Col>
                        <MindMap mindMap={this.state.myMindMap} drawMap={this.state.drawMap} myTranslate={myTranslate} />
                    </Col>
                </Row>
            </div>

        );
    }

}

export default Home;
