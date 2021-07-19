import React from "react";
import '../App.css'
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

// style the navigation bar  
const StyledMenu = withStyles({
    paper: {
      border: "1px solid #d3d4d5"
    }
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
      {...props}
    />
  ));

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      "&:focus": {
        backgroundColor: theme.palette.primary.main,
        "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
          color: theme.palette.common.white
        }
      }
    }
  }))(MenuItem);
  //------end the style----------

function Homenav() {
  
  //handing the dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //logout function
  const logout = () =>{
    alert("Are you want to exit?")
  }

  return (
    <div className="row" style={{ margin: "0px" }}>
      <nav className="navbar navbar-expand-lg navbar-fixed" style={{ backgroundColor: "rgb(28, 27, 27)", color: "white" }}>
        <div className="mx-auto" style={{ display: "flex" }}>
          <img className='navbar-brand col' src='/images/geoid1.png' style={{width:'300px', height:'60px'}} alt=""/>
        </div>
        <div className="homenavDropdown">
          <Button style={{height:'40px', backgroundColor:'blueviolet'}}
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              color="primary"
              onClick={handleClick}
          >
            <span className="fa-stack fa-2x">
              <i className="fas fa-user  fa-inverse"></i>
            </span>
              Account Officer
          </Button>
              <StyledMenu
                  id="customized-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
              >
                  <StyledMenuItem>
                      <Link to={`/edit-user/${localStorage.getItem("user")}`}>
                          <ListItemText primary="Edit Profile" />
                      </Link>
                  </StyledMenuItem>
                  <StyledMenuItem>
                      <Link to="/">
                          <ListItemText onClick={logout} primary="Logout" />
                      </Link>
                  </StyledMenuItem>
              </StyledMenu>
        </div>
      </nav>
    </div>
  );
}
export default Homenav;
