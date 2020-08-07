import React, { Component } from 'react'
import { Tree } from 'react-d3-tree'

class MindMap extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <>
                <h3 className="pd-4-top pd-1-left">MindMap Graph</h3>
                <span className="sz-1 primary-800 pd-1-left">Click here to Clear Screen <a href="/"><i class="fa fa-refresh" aria-hidden="true"></i></a></span>
                {
                    this.props.drawMap ?
                        (<>
                            {console.log("inside", this.props.mindMap)}
                            <Tree data={this.props.mindMap} orientation={'vertical'}
                                onClick={this.props.onClickNode}
                                pathFunc="straight"
                                collapsible={false}
                                translate={this.props.myTranslate}
                            />
                        </>)
                        : null
                }
            </>
        )
    }

}

export default MindMap