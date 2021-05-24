import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <Router>
      <Link to="/">Home</Link>
      <Link to="/jobs">Jobs</Link>
        
      </Router>
    </MainHeader>
  );
};
export default Header;

const MainHeader = styled.div`
  color: green;
  text-decoration: none;
  Link{
    color: black;
  }
`;
