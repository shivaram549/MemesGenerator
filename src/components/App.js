import React,{ Component } from 'react';
import { connect } from 'react-redux';
import '../styles/index.css';
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import MemeItem from './MemeItem';
import { Modal } from 'react-bootstrap';

import MyMemes from './MyMemes';    
class App extends Component {
    constructor(){
        super();

        this.state = {
            memeLimit: 10,
            text0: '',
            text1: '',
            show: false
        }
    }

    

    handleShow =() => {
        this.setState({ show: true });
      }
    
      handleClose = () => {
        this.setState({ show: false });
      }
    render() {
        return (
            <div>
                <div className="red">
                    

                </div>

                <h2 className="headingText"><u>Welcome ITEMS</u></h2>
                <Modal show={this.state.show} onHide={this.handleClose}>
                   <Modal.Header closeButton>
                      <Modal.Title><div className = "help">Instructions</div></Modal.Title>
                   </Modal.Header>

                   <Modal.Body>
                       <div className = "help">
                       <p>Fill the input fields and click on a meme template,
                           a meme will be generated at the top of the page
                       </p>
                       </div>
                   </Modal.Body>
                  

                </Modal>
                <div class="helpclick" onClick={this.handleShow} >
                <p>Need help?</p>
                </div>
                <MyMemes/>
                <h4><i>Write Some Text</i></h4>
                <Form inline>
                 <FormGroup>
                      <ControlLabel>Text1</ControlLabel>
                      {' '}
                      <FormControl type="text" onChange={(event) => this.setState({text0: event.target.value})}></FormControl>
                      {'   '}
                 </FormGroup>
                  {' '}
                  
                 <FormGroup>
                      <ControlLabel>Text2</ControlLabel>
                      {' '}
                      <FormControl type="text" onChange={(event) => this.setState({text1: event.target.value})}gfffffgggggg></FormControl>
                 </FormGroup>

                 
                
                </Form>
                {

                    this.props.memes.slice(0,this.state.memeLimit).map((meme, index) => {
                        return (
                            <MemeItem key={index} meme={meme} 
                             text0={this.state.text0} text1={this.state.text1} />
                        )
                    })
                }
                <div className="meme-button" onClick = {() => {
                    this.setState({memeLimit: this.state.memeLimit+10})
                }}>
                 <input type="button" value=" Load 10 more Memes..." className="btn btn-primary"/>
                
               </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps, null)(App);
