import React from "react";
import ReactDOM from "react-dom";
import useSWR from "swr";

// function formatName(user) {
//   return user.firstName + " " + user.lastName;
// }

// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)}!</h1>;
//   }
//   return <h1>Hello, Stranger!</h1>;
// }

// const user = {
//   firstName: "Stian",
//   lastName: "Froystein",
//   avatarUrl: "https://avatars.githubusercontent.com/u/26657174?v=4",
// };

// const element = (
//   <>
//     <div tabIndex="0">
//       <button>
//         {getGreeting(user)}
//         <img alt="foo" src={user.avatarUrl}/>;
//       </button>
//     </div>
//   </>
// );

// const element = React.createElement(
//   "h1",
//   {className: "greeting"},
//   "Hello, world!"
// )

// <div> id="root" </div>
// const element = <h1>Hello, world</h1>
// ReactDOM.render(element, document.getElementById("root"));

// function Foo() {
//   return <h2>Bar</h2>;
// }

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Stian" />
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));

// function formatDate(date) {
//   return date.toLocaleDateString();
// }

// function Avatar(props) {
//   return (
//     <img
//       className="avatar"
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//       width="60px"
//       height="auto"
//     />
//   );
// }

// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">{props.user.name}</div>
//     </div>
//   );
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author} />
//       <div className="Comment-text">{props.text}</div>
//       <div className="Comment-date">{formatDate(props.date)}</div>
//     </div>
//   );
// }

// const comment = {
//   date: new Date(),
//   text: "I do like React.",
//   author: {
//     name: "Stian",
//     avatarUrl: "https://avatars.githubusercontent.com/u/26657174?v=4",
//   },
// };

// ReactDOM.render(
//   <Comment date={comment.date} text={comment.text} author={comment.author} />,
//   document.getElementById("root")
// );

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: new Date(),
//     };
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date(),
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }
// }

// function App(props) {
//   return (
//     <div>
//       <Clock />
//       <Clock />
//       <Clock />
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));

// function Form() {
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log("You clicked submit.");
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// ReactDOM.render(<Form />, document.getElementById("root"));

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isToggleOn: true };

//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState
//   }

//   render() {
//     return <button></button>;
//   }
// }

// ReactDOM.render(<Toggle />, document.getElementById("root"));
