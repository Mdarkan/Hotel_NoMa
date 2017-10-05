import React from 'react';
import { Button } from 'react-bootstrap';
// arguments received: this.props.pricing, this.handleSubmit
//===============================================================================================//

export function mardiGrasRooms(pricing, submit) {
    return (
        <div>
            <div>
                <div>
                    <p className="roomExpandedLeftHeadline">
                        Miniature Suite ${(pricing.miniatureSuite).toFixed(2)}/night
                        <h4>(Room size: 725 sq. ft)</h4>
                    </p>
                    <p className="roomExpandedRightButton">
                        <Button bsStyle="success" value="miniatureSuite" onClick={submit}>Book now</Button>
                    </p>
                </div>
                <div className="roomDescription">
                    <p>
                        Pretyy good room view.
                        Hot tub inside of room. Enim eiusmod high life accusamus terry richardson ad squid.
                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </p>
                </div>
            </div>
            <hr />
            <div>
                <div>
                    <p className="roomExpandedLeftHeadline">
                        Family Special ${(pricing.familySpecialSuite).toFixed(2)}/night
                        <h4>(Room size: 718 sq. ft.)</h4>
                    </p>
                    <p className="roomExpandedRightButton">
                        <Button bsStyle="success" value="familySpecialSuite" onClick={submit}>Book now</Button>
                    </p>
                </div>
                <div className="roomDescription">
                    <p>
                        Ideal accomodation for a family. Luxurious feel. Stroller is already in room.
                        One king bed, city view. Free $25 bar voucher, concierge service.
                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </p>
                </div>
            </div>
        </div>
    );
}