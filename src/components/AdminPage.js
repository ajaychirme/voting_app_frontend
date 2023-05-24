import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const [resp, setResp] = useState();

  useEffect(() => {
    fetch("http://localhost:3005/vote/admin", options)
      .then((response) => response.json())
      .then((response) => {
        console.log("Resp ==>", response);
        setResp(response);
        return response;
      })
      .catch((err) => console.error(err));
  }, []);

  function handleLogout(evt) {
    navigate("/");
  }

  return (
    <>
      <div id="title">
        <b>Admin Panel - Votes Summary</b>
      </div>
      <div id="mainform">
        {resp &&
          resp.map((item, index) => {
            return (
              <div key={item._id}>
                <label for="userName">{item.name} votes : </label>
                <input id="userName" name="userName" type="text" value={item.votes}/>
              </div>
            );
          })}
        {/* <label for="userName">Candidate 1:</label>
        <input id="userName" name="userName" type="text" />
        <label for="password">Candidate 2 :</label>
        <input id="password" name="password" type="text" />
        <label for="email">Candidate 3 :</label>
        <input id="email" name="email" type="email" />
        <label for="mobile">Candidate 4 :</label>
        <input id="mobile" name="mobile" type="tex" /> */}
      </div>
      <div>
        <div id="inner">
          <button
            onClick={(e) => {
              handleLogout(e);
            }}
            style={{
              backgroundColor: "red",
              marginTop: "5px",
              border: "solid 2px white",
              width: "110px",
              height: "25px",
              cursor: "pointer",
            }}
            id="loginbtn"
          >
            Log out
          </button>
          {/* <button
           
            id="registerbtn"
          >
            Register
          </button> */}
        </div>
      </div>
    </>
  );
};

export default AdminPage;
