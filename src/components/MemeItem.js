import React, { Component } from 'react';
import {createMeme} from '../actions';
import { connect } from 'react-redux';
class MemeItem extends Component {
  
    constructor(){
        super();

        this.state = {
            hovered: false
        }
    }
    
    postMemes(){
        const { text0, text1 } = this.props;
        const memeObj = {
            template_id: this.props.meme.id,
            text0,
            text1
        }
        this.props.createMeme(memeObj);
    }
    render() {
        return (
            <div onClick={() =>this.postMemes()} className="meme-item" onMouseEnter = {() => this.setState({ hovered: true})}
            onMouseLeave = {() => this.setState({ hovered: false})}
            >
                <img className={ this.state.hovered ? "meme-img darken-img" : "meme-img" } 
                src={this.props.meme.url}
                alt={this.props.meme.name}
                />
                <p className={ this.state.hovered? "meme-txt" : "no-txt" }>{this.props.meme.name}></p>

            </div>
        )
    }
}
export default connect(null, { createMeme })(MemeItem);