import React from "react";
import ReactDOM from "react-dom";

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger!</h1>;
}

const user = {
  firstName: "Stian",
  lastName: "Froystein",
  avatarUrl: "https://avatars.githubusercontent.com/u/26657174?v=4",
};

const element = (
  <>
    <div tabIndex="0">
      <button>
        {getGreeting(user)}
        <img alt="foo" src={user.avatarUrl}></img>;
      </button>
    </div>
  </>
);

ReactDOM.render(element, document.getElementById("root"));
