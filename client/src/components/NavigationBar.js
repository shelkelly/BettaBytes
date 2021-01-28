import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Betta Bytes
      </a>
      <a className="navbar-brand" href="/ForSale">
        For Sale
      </a>
      <a className="navbar-brand" href="/FavoritesList">
        Saved
      </a>
      <a className="navbar-brand" href="/Cart">
        Cart
      </a>
      <a className="navbar-brand" href="/Checkout">
        Checkout
      </a>
    </nav>
  );
}

export default Nav;