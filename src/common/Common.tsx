import * as React from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap-reboot.css'
import './common.css';

class Common extends React.Component<{}> {


  public render() {
    return (

      <section>

        <header role="banner" className="com-header">
          <div className="com-thin-bar">
            <div className="com-container">
              <div className="com-links">
                <ul>
                  <li>MyUW</li>
                  <li>UW.edu</li>
                </ul>
              </div>
              <div className="com-user">
                <ul>
                  <li><i className="fas fa-user" /></li>
                  <li><i className="fas fa-question-circle" /></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="com-masthead">
            <div className="com-container">
              <div className="com-title-mobile">
                <button className="com-title-button" id="nav_button">
                  <span className="fa-stack fa-2x com-title-button-icon" aria-hidden="true">
                    <i className="far fa-square fa-stack-2x" />
                    <i className="fa fa-bars fa-stack-1x" />
                  </span>
                </button>
                <span>MyPlan</span>
              </div>
              <div className="com-title-desktop">MyPlan</div>
            </div>
          </div>
        </header>


        <div className="com-body">
          <div className="com-container">

            <main role="main" className="com-main">
              {this.props.children}
            </main>

          </div>
        </div>

      </section>

    );
  }

}

export default Common;
