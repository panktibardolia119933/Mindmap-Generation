import React, { Component } from 'react';
import { Graph } from "react-d3-graph";

class Tree extends Component {
    constructor() {
        super()
    }
    
    render() {
        return (
            <>
                <span>Tree works!</span>
                {console.log("Tree", this.props.tree)}
                <Graph
                    id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                    data={this.props.tree}
                    config={this.props.myConfig}
                    onClickNode={this.props.onClickNode}
                // onDoubleClickNode={onDoubleClickNode}
                // onRightClickNode={onRightClickNode}
                // onClickGraph={onClickGraph}
                // onClickLink={onClickLink}
                // onRightClickLink={onRightClickLink}
                // onMouseOverNode={onMouseOverNode}
                // onMouseOutNode={onMouseOutNode}
                // onMouseOverLink={onMouseOverLink}
                // onMouseOutLink={onMouseOutLink}
                // onNodePositionChange={onNodePositionChange}
                />
            </>
        )
    }

}

export default Tree