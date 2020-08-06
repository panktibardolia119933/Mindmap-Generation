import React, { Component } from 'react'
import { Graph } from 'react-d3-graph'
import { Tree } from 'react-d3-tree'

import './Tree.css'
import { Row, Col } from 'react-bootstrap'

class TreeMap extends Component {
    constructor() {
        super()
        this.myRef = React.createRef();

        // let elemHeight = this.myRef.current.clientHeight
        // let elemWidth = this.myRef.current.clientWidth
        // // // let elemHeight = divElement.clientHeight;
        // // let elemWidth = divElement.clientWidth;
        // this.setState({
        //     translate: {
        //         x: elemHeight / 2,
        //         y: elemHeight / 2
        //     }
        // })
    }

    render() {
        return (
            <div className="fullScreen" ref={this.myRef}>

                <Tree data={this.props.tree}
                    orientation={'vertical'}
                    onClick={this.props.onClickNode} pathFunc="straight"
                    collapsible={false} />

                {/* <Graph
                    id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                    data={this.props.tree}
                    config={this.props.myConfig}
                    onClickNode={this.props.onClickNode}
                onDoubleClickNode={onDoubleClickNode}
                onRightClickNode={onRightClickNode}
                onClickGraph={onClickGraph}
                onClickLink={onClickLink}
                onRightClickLink={onRightClickLink}
                onMouseOverNode={onMouseOverNode}
                onMouseOutNode={onMouseOutNode}
                onMouseOverLink={onMouseOverLink}
                onMouseOutLink={onMouseOutLink}
                onNodePositionChange={onNodePositionChange}
                /> */}

            </div>
        )
    }

}

export default TreeMap