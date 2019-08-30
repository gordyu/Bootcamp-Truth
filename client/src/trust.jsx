import React from 'react';
import { Alert } from "reactstrap";

export default class Trust extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div>
        <h2>Educate Yourself About Bootcamp Fraud</h2>

        <Alert color="warning" isOpen={this.state.visible} toggle={this.onDismiss}>
          <b>Flatiron School coding bootcamp sued by attorney general</b> of New York for advertising false outcomes.  <a href="https://www.marketwatch.com/story/coding-bootcamps-375000-settlement-highlights-challenges-for-new-industry-2017-10-17">More from CBS.</a>
        </Alert>
        
        <Alert color="danger" isOpen={this.state.visible} toggle={this.onDismiss}>
        <b>Programming school instructor steals tuition money</b>, abandons students.  Students later discover instructor had criminal record.<a href="https://www.inc.com/salvador-rodriguez/devschool-coding-bootcamps.html">  More from Inc.</a>
        </Alert>
        
        <Alert color="secondary" isOpen={this.state.visible} toggle={this.onDismiss}>
        <b>Programming bootcamp for adults sued by students after promised apprenticeships did not materialize.</b> for advertising false outcomes.  <a href="https://pittsburgh.cbslocal.com/2017/12/21/miners-sue-mined-minds-program/">  More from CBS.</a>
        </Alert>
      </div>
    );
  }
}