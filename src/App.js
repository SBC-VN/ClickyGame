import React, { Component } from "react";
import Modal from "./components/Modal";
import PicCard from "./components/PicCard";
import pictures from "./pictures.json";

let displayPictures = pictures;

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    clicked : [],
    showModal : false,
    modalMessage : ""
  };
  myPictures = pictures;

  cardClicked = id => {
    if (this.state.clicked.includes(id)) {
      // Clicked on a card that was previously clicked.  Game over.
      console.log("Already clicked, game over");
      this.setState({ clicked : [], 
                      showModal : true, 
                      modalMessage : "You already clicked that card.  Game over."
      });
    }
    else {
      let newClicked = this.state.clicked;
      newClicked.push(id);

      // Randomize the cards for the next click.
      let newArray = [];
      console.log("Start pics",displayPictures);
      while (displayPictures.length > 0) {
        let rIndex = Math.floor(Math.random() * displayPictures.length);
        console.log("Selection",rIndex);
        console.log("Item",displayPictures[rIndex]);
        newArray.push(displayPictures[rIndex]);
        displayPictures.splice(rIndex,1)
      }
      displayPictures = newArray;
      console.log("End pics",displayPictures);

      this.setState({ clicked : newClicked, 
        showModal : false, 
        modalMessage : ""
      });
    }
  }

  openModalHandler = () => {
    this.setState({
      showModal: true
    });
  }

  closeModalHandler = () => {
    this.setState({
      showModal: false
    });
  }

  render() {
    return (
      <div>
        <Modal
        className="modal"
        show={this.state.showModal}
        close={this.closeModalHandler}>
            {this.state.modalMessage}
        </Modal>

        {displayPictures.map(picture => (
            <PicCard
              key={picture.id}
              id={picture.id}
              name={picture.name}
              image={picture.image}
              cardClick={this.cardClicked}
              show={!this.state.showModal}
            />
        ))}
      </div>
    );
  }
}

export default App;
