import React, { Component } from "react";
import ModalContents from "./components/ModalContents";
import PicCard from "./components/PicCard";
import pictures from "./pictures.json";

import Modal from 'react-modal';

let displayPictures = pictures;

Modal.setAppElement('#root');

const customStyles = {
  content : {
    top                   : '25%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    clicked : [],
    modalIsOpen : false,
    modalMessage : ""
  };
  myPictures = pictures;

  cardClicked = id => {
    if (this.state.clicked.includes(id)) {
      // Clicked on a card that was previously clicked.  Game over.
      console.log("Already clicked, game over");
      this.setState({ modalIsOpen : true, 
                      modalMessage : "Sorry, you already clicked that card. "
      });
    }
    else {
      let newClicked = this.state.clicked;
      newClicked.push(id);

      // Randomize the cards for the next click.
      let newArray = [];
      while (displayPictures.length > 0) {
        let rIndex = Math.floor(Math.random() * displayPictures.length);
        newArray.push(displayPictures[rIndex]);
        displayPictures.splice(rIndex,1)
      }
      displayPictures = newArray;

      this.setState({ clicked : newClicked, 
        modalIsOpen : false, 
        modalMessage : ""
      });
    }
  }

  openModalHandler = () => {
    this.setState({
      clicked: this.state.clicked,
      modalIsOpen: true,
      modalMessage: this.state.modalMessage
    });
  }

  closeModalHandler = () => {
    console.log("Close modal called");
    this.setState({
      clicked: [],
      modalIsOpen: false,
      modalMessage: ""
    });
  }

  afterOpenModal = () => {
    console.log("Modal open");
  }

  render() {
    return (
      <div>
        <div id="scorediv">
          <h2>Score: {this.state.clicked.length}</h2>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          style={customStyles}
          contentLabel="Game over"
        >
          <ModalContents 
            closeModal={this.closeModalHandler}
            modalMessage={this.state.modalMessage}
          />
        </Modal>

        {displayPictures.map(picture => (
            <PicCard
              key={picture.id}
              id={picture.id}
              name={picture.name}
              image={picture.image}
              cardClick={this.cardClicked}
              show={true}
            />
        ))}
      </div>
    );
  }
}

export default App;
