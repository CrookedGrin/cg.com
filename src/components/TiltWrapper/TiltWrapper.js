import React, {Component} from 'react';
import VanillaTilt from 'vanilla-tilt';
import './TiltWrapper.css';

class TiltWrapper extends Component {
    componentDidMount() {
        VanillaTilt.init(this.rootNode, {
            reverse: true,
            reset: false,
            max: 25,
            speed: 800,
            glare: false,
            'max-glare': 0.1,
            transition: true,
            perspective: 1000,
            scale: 1,
        });
    }

    render() {
        return (
            <div
                ref={node => (this.rootNode = node)}
                className="tilt-root"
            >
                <div className="tilt-child" {...this.props}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default TiltWrapper;
