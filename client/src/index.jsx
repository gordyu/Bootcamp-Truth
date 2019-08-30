import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const magnifyingGlass = <FontAwesomeIcon icon={faSearch} />;
import {
  Button, ButtonDropdown, Spinner, Nav, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Container, Row, Col, Progress } from "reactstrap";
import Trust from "./trust.jsx";
import Feed from "./reviewsFeed.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.select = this.select.bind(this);
    this.state = {
      dropdownOpen: false,
      splitButtonOpen: false,
      error: null,
      isLoaded: false,
      items: [],
      value: "Lowest Rated"
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  select(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      value: event.target.innerText
    });
  }

  componentDidMount() {
    fetch("http://localhost:4000/2018-hr-seattle")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    if (this.state.error) return <div>Error: {error.message}</div>;
    else if (!this.state.isLoaded)
      return (
        <div>
          <Spinner
            style={{ width: "45rem", height: "45rem" }}
            type="grow"
            color="success"
          />
        </div>
      );
    else {
      return (
        <div className="feed">
          <div className="scams">
            <h1>
              Are Coding Bootcamp Outcomes Real?
            </h1>
            <br />
            <Trust />
          </div>
          <br />
          <div className="evaluation">
            <h2>
              Evaluate Outcomes of Other Bootcamps Using LinkedIn
            </h2>
            <div className="dropdowns">
              <span>
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle caret color="primary">
                    2018
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Graduation Year</DropdownItem>
                    <DropdownItem>2019</DropdownItem>
                    <DropdownItem>2017</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle caret color="secondary">
                    Hack Reactor
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Bootcamp</DropdownItem>
                    <DropdownItem>Flatiron School</DropdownItem>
                    <DropdownItem>General Assembly</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle caret color="success">
                    Seattle
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Location</DropdownItem>
                    <DropdownItem>San Francisco</DropdownItem>
                    <DropdownItem>New York</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </span>
            </div>
            <br />
            <div className="summary">
              <h2>Employment Overview for Your Selection</h2>
              <div className="progress_bar">
                <Progress multi>
                  <Progress bar color="success" value="80">HIRED</Progress>
                  <Progress bar color="warning" value="10">WTF</Progress>
                  <Progress bar color="danger" value="10">REJECTED</Progress>
                </Progress>
              </div>
            </div>
          </div>
          <Feed reviews={this.state.items} />
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById("app"));