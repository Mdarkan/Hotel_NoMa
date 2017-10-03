import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';

//===============================================================================================//

class ExcaliburPhotoModal extends Component {
    render() {
        return (
            <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Additional photos of our Excalibur suites:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Carousel className="carouselLanding" autoPlay={true} dynamicHeight width={"100%"} useKeyboardArrows={false} showStatus={false} infiniteLoop={true}>
                            <div>
                                <img alt="excaliburView" src="https://static.pexels.com/photos/53577/hotel-architectural-tourism-travel-53577.jpeg" />
                                <p className="legend">Hallway</p>
                            </div>
                            <div>
                                <img alt="excaliburView" src="https://static.pexels.com/photos/462331/pexels-photo-462331.jpeg" />
                                <p className="legend">City view</p>
                            </div>
                            <div>
                                <img alt="excaliburFamilyRoom" src="https://static.pexels.com/photos/460537/pexels-photo-460537.jpeg" />
                                <p className="legend">Family room</p>
                            </div>
                            <div>
                                <img alt="excaliburBathroom" src="https://static.pexels.com/photos/342800/pexels-photo-342800.jpeg" />
                                <p className="legend">Bathroom</p>
                            </div>
                        </Carousel>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ExcaliburPhotoModal;