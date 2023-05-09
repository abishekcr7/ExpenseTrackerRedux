
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { Link,useHistory } from "react-router-dom/cjs/react-router-dom.min";
import AuthContext from "../Store/Auth-Context";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../Store/auth";


const NavBar = (props) => {
  const isAuthenticated=useSelector((state)=>state.auth.isAuthenticated)
  const dispatch=useDispatch();
 
  // cartCntx.items.map((item) => {
  //   // console.log(item);
  //   quantity = quantity + 1;
  // });
  // const authCtx=useContext(AuthContext)
  const history=useHistory()
  const logoutHandler =()=>{
    dispatch(authActions.logout())
    history.replace('/Login')
  }
  return (
    <>
      {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">PIC SHOPEE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link eventKey='/Home' onClick={props.showHome}>HOME</Nav.Link>
            <Nav.Link eventKey='/' onClick={props.showShop}>SHOP</Nav.Link>
            <Nav.Link eventKey='/About' onClick={props.showPricing}>ABOUT</Nav.Link>
            <Nav.Link onClick={props.showContact}>CONTACT US</Nav.Link>
          </Nav>
          {props.shop && <Button variant="success" onClick={props.showCart}>Cart {quantity}</Button>}
        </Container>
      </Navbar> */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link " to="/Expenses">
                HOME
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/SHOP">
                SHOP
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/CONTACTUS">
                CONTACT US
              </Link>
            </li>
            <li class="nav-item">
              {!isAuthenticated && <Link class="nav-link" to="/LOGIN">
                Login
              </Link>}
              {isAuthenticated && <Button class="nav-link" onClick={logoutHandler}>
                Logut
              </Button>}
            </li>
          </ul>
        </div>
        {isAuthenticated &&
          <Link to='/MainPage'>
           Userprofile
          </Link>
        }
      </nav>
    </>
  );
};
export default NavBar;
