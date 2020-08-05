import React, { Component } from 'react'
import { Graph } from "react-d3-graph";

class MindMap extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <>
                <span>MindMap works!</span>
                {
                    this.props.drawMap ?
                        (<>
                            {console.log("inside", this.props.mindMap)}
                            <Graph
                                id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                                data={this.props.mindMap}
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
                        </>)
                        : null
                }
            </>
        )
    }

}

export default MindMap