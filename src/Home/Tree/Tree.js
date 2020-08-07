import React, { Component } from 'react'
import { Tree } from 'react-d3-tree'

import './Tree.css'

class TreeMap extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="fullScreen secondary-bg-500">
                <h3 className="pd-4-top pd-1-left">Tree Graph</h3>
                <span className="sz-1 primary-800 pd-1-left">Hint: Please Click on Any Node to see MindMap. </span>
                <Tree data={this.props.tree}
                    orientation={'vertical'}
                    onClick={this.props.onClickNode} pathFunc="straight"
                    collapsible={false}
                    translate={this.props.myTranslate}
                />
            </div>
        )
    }

}

export default TreeMap