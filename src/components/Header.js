import { Navbar, Nav, Button, Container, Form, FormControl } from "react-bootstrap";
import "./css/Header.css";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();

  console.log(basket);

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const heart = {
    color: isHover ? 'red' : 'white',
  };

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <Navbar expand="lg" fixed="top" style={{
      height: "60px",
      display: "flex",
      alignItems: "center",
      backgroundColor: "black",
      position: "sticky",
      top: "0",
      zIndex: "100",
    }}>
      <Container fluid>
        <Navbar.Brand href="/">
          <Link to="/">
            <img
              className="header__logo"
              src="https://i.ibb.co/6bZ6dgs/thesolestore.png"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="ms-auto d-flex">
            <Form.Control
              type="search"
              className="me-2"
              aria-label="Search"
              style={{
                width: "400px",
                backgroundColor: "#efe5bc",
              }}
            />

            <Button className="nutton" >
              <SearchIcon className="searchIcon" />
            </Button>
          </Form>
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
          >

            <div className="header__option">
              <span className="header__optionLineOne">Hello User</span>
              <span className="header__optionLineTwo">Sign In</span>
            </div>


            {/* 
            <Link to="http://localhost:3000/sample_data/add">
              <Nav.Link href="/" >
                <PersonRoundedIcon className="header_personRoundedIcon"></PersonRoundedIcon>
              </Nav.Link>
            </Link> */}


            <button
              role="link"
              onClick={() => openInNewTab('http://localhost:3001/sample_data/add')} style={{
                background: "none",
                color: "inherit",
                border: "none",
                padding: 0,
                font: "inherit",
                cursor: "pointer",
                outline: "inherit",
              }}>

              <Nav.Link href="/" >
                <PersonRoundedIcon className="header_personRoundedIcon"></PersonRoundedIcon>
              </Nav.Link>
            </button>



            <Link to="/favorite">
              <Nav.Link href="/" >
                <FavoriteIcon style={heart}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="header_favIcon"></FavoriteIcon>
              </Nav.Link>
            </Link>
            <Nav.Link href="/checkout">
              <LocalMallIcon className="header_localMallIcon" />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default Header;
