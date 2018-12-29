import React, { Component } from 'react';
import { connect } from 'react-redux';

class MyMemes extends Component {
    render() {
        return(
            <div>
               {
                   this.props.myMemes.map((meme, index) => {
                       return (
                           <div>
                           <img 
                             key={index}
                             src={meme.data.url}
                             alt="my-meme"
                             className="my-meme-img"
                            
                            />
                            <br></br>
                            <div className="white">
                            <a href={meme.data.url} download>download</a>
                            </div>
                            </div>
                       )
                   })

               }
            </div>

        )       
        
    }
}

function mapStateToProps(state) {
    return {
        myMemes: state.myMemes
    }
}
export default connect(mapStateToProps,null)(MyMemes)