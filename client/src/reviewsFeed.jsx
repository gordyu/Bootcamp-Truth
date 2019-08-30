import React from 'react';
import { Table } from "reactstrap";

const Feed = (props) => {
  return (
    <div className="feed">
      {props.reviews.map((review) => {
        return (
          <div className = 'table'>
            <Table striped>
              <thead>
               <tr>
                  <th>Headshot</th>
                  <th>Employed?</th>
                  <th>Title</th>
                  <th>Employer</th>
                  <th>Year</th>
                  <th>Bootcamp</th>
                  <th>Area</th>
                  <th>LinkedIn</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <img
                    src={`./profilepics/${review.id}.jpeg`}
                    style={{ borderRadius: "5px", height: "80px", width: "80px" }}
                  />
                </tr>
                <tr>
                  <span className="stamp">
                      {
                        review.employed === "Yes" ? 
                        <img src="./starimgs/hired.png"  
                        style={{ borderRadius: "5px", height: "80px", width: "80px" }}/>
                        : null
                      }
                      {
                        review.employed === "No" ? 
                        <img src="./starimgs/rejected.png" 
                        style={{ borderRadius: "5px", height: "80px", width: "80px" }}/>
                        : null
                      }
                      {
                        review.employed === "Unk" ? 
                        <img src="./starimgs/wtf.png" 
                        style={{ borderRadius: "5px", height: "80px", width: "80px" }}/> 
                        : null
                      }
                    </span>
                </tr>
                <tr>
                  {review.title}
                </tr>
                <tr>
                  {review.employer}
                </tr>
                <tr>
                  {review.year}
                </tr>
                <tr>
                  <img
                    src={`./starimgs/hr.png`}
                    style={{ borderRadius: "5px", height: "80px", width: "80px" }}
                  />
                </tr>
                <tr>
                  <img
                    src={`./starimgs/seattle.jpg`}
                    style={{ borderRadius: "5px", height: "80px", width: "80px" }}
                  />
                </tr>
                <tr>
                  <a href={review.linkedin}>
                <img
                    src={`./starimgs/linkedin.png`}
                    style={{ borderRadius: "5px", height: "80px", width: "80px" }}
                    />
                  </a>
                </tr>
              </tbody>
            </Table>
          </div>
        )}
      )}
    </div>
  )
};

export default Feed;