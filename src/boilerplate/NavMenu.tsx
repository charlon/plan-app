import * as React from 'react';
import { NavLink } from 'react-router-dom';

class NavMenu extends React.Component<{}> {

  public render() {
    return (
      <ul className="bp-menu">
        <li><NavLink to="/courses" activeClassName="u-active"> <i className="fas fa-home" /> Courses</NavLink></li>
        <li><NavLink to="/programs" activeClassName="u-active"> <i className="fas fa-link" /> Programs</NavLink></li>
        <li><a href="#"><i className="fas fa-link" /> Item</a></li>
        <li><a href="#"><i className="fas fa-link" /> Item</a></li>
        <li><hr /></li>
        <li><a href="#"><i className="fas fa-link" /> Item</a></li>
        <li><a href="#"><i className="fas fa-link" /> Item</a></li>

      </ul>
    );
  }

}

export default NavMenu;
