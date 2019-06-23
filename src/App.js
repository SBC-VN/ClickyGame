import React, { Component } from "react";
import Modal from "./components/Modal";
import PicCard from "./components/PicCard";
import pictures from "./pictures.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    clicked : [],
    showModal : false,
    modalMessage : ""
  };

  cardClicked = id => {
    if (this.state.clicked.includes(id)) {
      // Clicked on a card that was previously clicked.  Game over.
      this.setState({ clicked : [], 
                      showModal : true, 
                      modalMessage : "You already clicked that card.  Game over."
      });
    }
    else {
      let newClicked = this.state.clicked;
      newClicked.push(id);
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
        show={this.state.isShowing}
        close={this.closeModalHandler}>
            this.state.modalMessage
        </Modal>

        {pictures.map(picture => (
            <PicCard
              id={picture.id}
              name={picture.name}
              image={picture.image}
              cardClick={this.cardClicked}
            />
        ))}
      </div>
    );
  }
}

export default App;
