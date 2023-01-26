import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <img src="http://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
    alt="logo"
    className ="logo" />
);



const Header = () => (
  <div className = "header">
    <Title />
    <div className ="nav_items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>

    </div>
  </div>
);

const Body  = () => {
  return (
    <>
      <h1>Body Component</h1>
    </>
  )
}

const Footer = () => (
  <>
    Footer
  </>
)

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout ></AppLayout>);