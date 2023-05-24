import React from "react";
import { useState } from "react";

const UserPage = () => {
  let UserId = localStorage.getItem("UserID");
  const [candidateval, setCandidateval] = useState("");

  function onChangeValue(event) {
    setCandidateval(event.target.value);
    console.log(event.target.value);
  }

  // {
  //   "candidateName":"Candidate3",
  //   "userid":"646a1e31ddf9c8a8a2df0fee"
  // }

  function handleSubmit(evt) {
    //candidateval

    let body1 = {
      candidateName: candidateval,
      userid: UserId,
    };
    body1 = JSON.stringify(body1);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body1,
    };
    fetch("http://localhost:3005/vote/candidate", options)
      .then((response) => response.json())
      .then((response) => {
        console.log("Resp ==>", response);
        return response;
      })
      .catch((err) => console.error(err));

    console.log(evt.target.value);
  }

  return (
    <>
      <div id="title">
        <b>Vote candidates -Select one</b>
      </div>
      <div id="mainform">
        <div>
          <label className="label1" for="userName">
            Candidate 1 :
          </label>
          <input
            onChange={onChangeValue}
            className="inp1"
            id="candi1"
            name="candidate"
            type="radio"
            value={"Candidate1"}
          />
        </div>
        <div>
          <label className="label1" for="password">
            Candidate 2 :
          </label>
          <input
            onChange={onChangeValue}
            className="inp1"
            id="candi2"
            name="candidate"
            type="radio"
            value={"Candidate2"}
          />
        </div>
        <div>
          <label className="label1" for="email">
            Candidate 3 :
          </label>
          <input
            onChange={onChangeValue}
            className="inp1"
            id="candi3"
            name="candidate"
            type="radio"
            value={"Candidate3"}
          />
        </div>
        <div>
          <label className="label1" for="mobile">
            Candidate 4 :
          </label>
          <input
            onChange={onChangeValue}
            className="inp1"
            id="candi4"
            name="candidate"
            type="radio"
            value={"Candidate4"}
          />
        </div>
      </div>
      <div>
        <div id="inner">
          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
            style={{
              backgroundColor: "green",
              marginTop: "5px",
              color: "white",
              width: "110px",
              height: "25px",
              cursor: "pointer",
            }}
          >
            Submit Vote
          </button>
          {/* <button id="registerbtn">Register</button> */}
        </div>
      </div>
    </>
  );
};

export default UserPage;
