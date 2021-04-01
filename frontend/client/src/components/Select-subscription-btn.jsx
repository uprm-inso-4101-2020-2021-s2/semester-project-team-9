import React, { Fragment } from 'react';
import "bootstrap";

const Subscriptionbtn = () => {

    return (
        <Fragment>
            <button data-toggle="collapse" data-target="#subscription-select" >Select</button>

            <div id="subscription-info" class="collapse">
                <form>
                    <label for="billing-date">Payment Day:</label>
                    <input type="date" id="billing-date" name="billing-date"></input>
                </form>

            </div>
        </Fragment >
    )
}
export default Subscriptionbtn;