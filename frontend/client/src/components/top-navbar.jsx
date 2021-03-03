import React, { Fragment, useState } from 'react';
import '../src/index.css';
import "bootstrap";

const TopNavBar = () => {
    return (
        <Fragment>

            <a href="../public/index.html" class="bar-item">
                <img src=""> SUBSCRIPTION APP</img></a>

            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"><i class="fa fa-user"></i>LOGIN</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">SIGN UP</a>
                </li>
            </ul>

        </Fragment>)
}
export default TopNavBar;