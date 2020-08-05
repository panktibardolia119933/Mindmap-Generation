import React, { Component } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap'

import Tree from './Tree/Tree'
import MindMap from './MindMap/MindMap'

class Home extends Component {

    tree = {
        nodes: [{ id: "A" }, { id: "B" }, { id: "C" }, { id: "D" }, { id: "E" }, { id: "F" }, { id: "G" }, { id: "H" }],
        links: [
            { source: "A", target: "B" },
            { source: "A", target: "C" },
            { source: "B", target: "D" },
            { source: "C", target: "E" },
            { source: "C", target: "F" },
            { source: "E", target: "G" },
            { source: "E", target: "H" },
        ],
    };

    // TODO User input from Node to node, ND LINK

    myConfig = {
        nodeHighlightBehavior: true,
        node: {
            color: "lightgreen",
            size: 120,
            highlightStrokeColor: "blue",
        },
        link: {
            highlightColor: "lightblue",
        },
    };

    drawMap = false;

    constructor() {
        super()
        this.state = {
            drawMap: false,
            myMindMap: {},
        }
    }

    onClickNode = (nodeId) => {
        // window.alert(`${nodeId}`)
        this.createMindMap(nodeId)
    }

    createMindMap = (nodeId) => {

        let myMap = {
            nodes: [],
            links: [],
        };

        let idObj = {
            id: nodeId
        }
        myMap.nodes.push(idObj)

        this.tree.links.forEach(link => {
            console.log("link", link)
            if (link.source == nodeId) {
                myMap.links.push(link)
                let targetObj = {
                    id: link.target
                }
                myMap.nodes.push(targetObj)
            }
            else if (link.target == nodeId) {
                myMap.links.push(link)
                let sourceObj = {
                    id: link.source
                }
                myMap.nodes.push(sourceObj)
            }

        });

        // console.log("MINDMAP", this.mindMap);
        this.setState({
            drawMap: true,
            myMindMap: myMap
        })
    }

    render() {
        return (
            <Row>
                <Col>
                    <Tree tree={this.tree} myConfig={this.myConfig} onClickNode={this.onClickNode} />
                </Col>
                <Col>
                    <MindMap tree={this.tree} myConfig={this.myConfig} mindMap={this.state.myMindMap} drawMap={this.state.drawMap} />
                </Col>
            </Row>
        );
    }

}

export default Home;
