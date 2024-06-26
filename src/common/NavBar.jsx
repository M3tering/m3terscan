import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import "../CSS/styles.css";
import "../CSS/theme.min.css";
import navLogo from "/twitter-avatar.png"
import Button from "./Button";

import { useContext } from "react";
import Web3Context from "../contexts/Web3Context";
import ConnectButton from "./ConnectBtn";

function NavBar(props) {
  const { requireInstall, account, networkStatus } = useContext(Web3Context)
  const short = account
    ? `${account?.substring(0, 5)}...${account?.substring(38)}`
    : "no account";
  return (
    <div style={props.style}>
      <header
        className="navbar d-block fixed-top navbar-expand-lg navbar-light w-100"
        id="header"
      >
        <div className="container" id="nav-parent">
          <Link
            className="navbar-brand d-none d-sm-block me-4 order-lg-1"
            to="/"
          >
            <img src={navLogo} width="142" alt="Switch" className="switch-logo" />
          </Link>
          <Link className="navbar-brand d-sm-none me-2 order-lg-1" to="/">
            <img
              src={"../img/Switch/Switch Electric PNG croped.png"}
              width="74"
              alt="Switch"
            />
          </Link>
          <div className="navbar-toolbar d-flex align-items-center order-lg-3">
            <Button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </Button>
            <a
              className="navbar-tool d-none d-lg-flex"
              href="#!!"
              data-bs-toggle="collapse"
              data-bs-target="#searchBox"
              role="button"
              aria-expanded="false"
              aria-controls="searchBox"
            >
              <span className="navbar-tool-tooltip">Search</span>
              <div className="navbar-tool-icon-box">
                <i className="navbar-tool-icon ci-search"></i>
              </div>
            </a>
            <Link
              className="navbar-tool ms-lg-2"
              to="/account"
              data-bs-toggle="modal"
            >
              <span className="navbar-tool-tooltip">Account</span>
              <div className="navbar-tool-icon-box">
                <i className="navbar-tool-icon ci-user"></i>
              </div>
            </Link>
            {account ? (
              <>
                <Link className="d-flex flex-column btn btn-sm btn-outline disabled  ms-lg-4 ms-2">
                  {short}
                  <span
                    className="font-weight-bold"
                    //onClick={() =>signUp(web3, account)}
                    style={{
                      alignSelf: "center",
                    }}
                  >
                    {networkStatus}
                  </span>
                </Link>
              </>
            ) : requireInstall ? (
              <Link
                className="btn btn-sm btn-accent rounded-1 ms-lg-4 ms-2"
                onClick={() =>
                  window.open("https://metamask.io/download/", "_blank")
                }
              >
                Install Metamask
              </Link>
            ) : (
              <ConnectButton />
            )}
          </div>
          <div
            className="collapse navbar-collapse me-auto order-lg-2"
            id="navbarCollapse"
          >
            {/* <!-- Search (mobile)--> */}
            <div className="d-lg-none py-3">
              <div className="input-group">
                <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                <input
                  className="form-control rounded-start"
                  type="text"
                  placeholder="What do you need?"
                />
              </div>
            </div>
            {/* <!-- Primary menu--> */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link ${props.className}`} to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${props.activeid}`}
                  to="/marketplace"
                >
                  Marketplace
                </Link>
              </li>
              {/*<li className="nav-item">
                <Link
                  className={`nav-link ${props.classid}`}
                  to="/collections"
                >
                  Collections
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/WhyNotSwitch/Whitepaper/raw/master/litepaper/SwitchElectric_ProjectTokenization_Litepaper.pdf">
                  Whitepaper
                </a>
              </li>*/}
            </ul>
          </div>
        </div>
        {/* <!-- Search collapse--> */}
        <div className="search-box collapse" id="searchBox">
          <div className="container py-2">
            <div className="input-group">
              <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
              <input
                className="form-control rounded-start"
                type="text"
                placeholder="What do you need?"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

NavBar.propTypes = {
    className: PropTypes.string,
    activeid: PropTypes.any,
    classid: PropTypes.any,
    style: PropTypes.any
}

export default NavBar;
