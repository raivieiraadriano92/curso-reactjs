import React, {Component} from 'react';

class TextCounter extends Component {
    static defaultProps = {
        title: ''
    }

    state = {
        totalChars: 0
    }

    handleChangeEvent(event){
        var element = event.target,
            value = element.value;

        this.setState({totalChars: value.length})
    }

    render(){
        return (
            <div>
                {this.props.title}
                <textarea onChange={this.handleChangeEvent.bind(this)}/>
                <div>
                    <b>Total:</b> {this.state.totalChars}
                </div>
            </div>
        );
    }
}

export default TextCounter;
