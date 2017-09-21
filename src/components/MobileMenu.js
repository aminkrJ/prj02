import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import $ from 'jquery'

class MobileMenu extends Component {
  renderProducts() {
    return(
      this.props.products.entities.map((product, index) => {
        return(
          <li key={index}>
            <Link to={ "/market/" + product.slug }>{product.name}</Link>
          </li>
        )
      })
    )
  }

  componentDidMount() {
    this.setState({menuInitHeight: $( '.offcanvas-menu .menu' ).height()})
  }

  openSubMenu(e) {
    var self = e.target,
      parent = $(self).parent().parent().parent(),
      menu = $( self ).parents( '.menu' );

    parent.addClass( 'off-view' );
    $( self ).parent().parent().find( '> .offcanvas-submenu' ).addClass( 'in-view' );
    menu.css( 'height', $( self ).parent().parent().find( '> .offcanvas-submenu' ).height() );

    e.preventDefault();
    return false;
  }

  closeSubMenu(e) {
    var self = e.target,
      parent = $(self).parent().parent(),
      siblingParent = $(self).parent().parent().siblings().parent().parent(),
      menu = $(self).parents( '.menu' );

    parent.removeClass( 'in-view' );
    siblingParent.removeClass( 'off-view' );
    if ( siblingParent.attr( "class" ) === "menu" ) {
      menu.css( 'height', this.state.menuInitHeight );
    } else {
      menu.css( 'height', siblingParent.height() );
    }

    e.preventDefault();
  }

  render() {
    return (
      <div className="offcanvas-container" id="mobile-menu">
        <a className="account-link" href="account-orders.html">
          <div className="user-ava">
            <img src="img/account/user-ava-md.jpg" alt="Daniel Adams" />
          </div>
          <div className="user-info">
            <h6 className="user-name">Daniel Adams</h6>
          </div>
        </a>
        <nav className="offcanvas-menu">
          <ul className="menu">
            <li className="active">
              <Link to="/"><span>Home</span></Link>
            </li>
            <li className="has-children">
              <span>
                <a href="#"><span>Market</span></a>
                <span className="sub-menu-toggle" onClick={this.openSubMenu.bind(this)}></span>
              </span>
              <ul className="offcanvas-submenu">
                <li className="back-btn" onClick={this.closeSubMenu.bind(this)}><a href="#">Back</a></li>
                {this.renderProducts()}
              </ul>
            </li>
            <li className="">
              <Link to="/"><span>How it works?</span></Link>
            </li>
            <li className="">
              <Link to="/"><span>Our blog</span></Link>
            </li>
            <li className="">
              <Link to="/"><span>Find us</span></Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }

}

export default MobileMenu
