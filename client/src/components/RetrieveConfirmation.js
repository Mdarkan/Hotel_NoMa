import React, { Component } from 'react';
import { Grid, Col, Row, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect} from 'react-router';

import { fetchExistingItinerary } from '../actions';
import { deleteExistingItinerary } from '../actions';

// to-do: add modal to confirm delete see: https://react-bootstrap.github.io/components.html?#modals-contained
// to-do: refactor with validation instead of alerts
// to-do: would like to refactor handleGet and handleDelete into one function. Unable to select button props though?
// currently delete removes reservation from db entirely. maybe better to set everything to null and deleted = yes
//===============================================================================================//

class RetrieveConfirmation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmationNum: '',
            email: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleGetReservation = this.handleGetReservation.bind(this);
        this.handleDeleteReservation = this.handleDeleteReservation.bind(this);
    }


    handleChange(event) {
        if (event.target.name === 'confirmationNum') {
            this.setState({confirmationNum: event.target.value});
        }

        if (event.target.name === 'email') {
            this.setState({email: event.target.value});
        }
    }


    // search database for existing itinerary and redirect to display results if match is found. If not, prompt error
    handleGetReservation() {
        this.props.dispatch(fetchExistingItinerary(this.state.confirmationNum, this.state.email));
        setTimeout(() => {
            if (!this.props.itinerary) {
                return alert('Shucks.... we were unable to locate an itinerary from the confirmation number and email you provided. Please check your inputs and try again.');
            } else {
                return this.setState({redirect: true});
            }
        }, 1500);
    }


    // search database for existing itinerary and delete if match is found. If no match, prompt error
    // currently delete removes reservation from db entirely. maybe better to set everything to null and deleted = yes
    handleDeleteReservation() {
        this.props.dispatch(deleteExistingItinerary(this.state.confirmationNum, this.state.email));
        setTimeout(() => {
            if (this.props.itinerary.res === 'YES DELETED') {
                alert('Your itinerary has has been deleted. We hope you will consider staying with us in the future.');
                return window.location.reload();
            }
            return alert('Shucks.... we were unable to locate an itinerary from the confirmation number and email you provided. ' +
                'Perhaps you have already deleted your reservation? Please check your inputs.');
        }, 1500);
    }


    render() {
        window.scrollTo(0, 0);
        if (this.state.redirect) {
            return <Redirect push to="/displayReservation" />;
        }
        return (
            <div className="container">

                <div>
                    <Grid>
                        <Row>
                            <Col sm={0} md={2}><hr /></Col>
                            <Col sm={12} md={8}>
                                <div id="roomTypeHeading">
                                    <h3>Lookup Itinerary</h3>
                                </div>
                            </Col>
                            <Col sm={0} md={2}><hr /></Col>
                        </Row>
                    </Grid>
                </div>

                <div id="resultContainer">
                    <div>
                        <Grid>
                            <Row id="lookupForm">
                                <Col sm={0} md={2}></Col>
                                <Col sm={12} md={8}>
                                    <h4>
                                        <Form>
                                            <FormGroup>
                                                <ControlLabel>Confirmation number:</ControlLabel>
                                                <FormControl type="text" name="confirmationNum" value={this.state.confirmationNum} onChange={this.handleChange}/>
                                            </FormGroup>
                                            <FormGroup>
                                                <ControlLabel>Email address:</ControlLabel>
                                                <FormControl type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                                            </FormGroup>
                                        </Form>
                                    </h4>
                                </Col>
                                <Col sm={0} md={2}></Col>
                            </Row>
                        </Grid>
                    </div>

                </div>
                <br />
                <Button id="getButton" bsStyle="success" value="getReservation"
                        onClick={this.handleGetReservation}>
                    Get reservation
                </Button>
                {' '}
                <Button id="deleteButton" bsStyle="danger" value="deleteReservation"
                        onClick={this.handleDeleteReservation}>
                    Delete reservation
                </Button>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        itinerary: state.itineraryReducer.itinerary,
    };
}

export default connect(mapStateToProps)(RetrieveConfirmation);