import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div class="container-fluid">
          <Link class="navbar-brand" to={"/"}>
            Contact List
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
            </ul>
            <form class="d-flex" role="search">

              <Link to='/add' className='btn btn-dark'>Add Contact</Link>
             
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

{
  /* <div className='col-md-2 my-1 text-end'>
                    <Link to='/add' className='btn btn-outline-dark'>Add Contact</Link>
                </div> */
}
