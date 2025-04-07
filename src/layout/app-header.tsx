
import { FC } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './app-header.scss';

interface AppHeaderProps {
  toggleSidePanel: () => void;
}

const AppHeader: FC<AppHeaderProps> = ({ toggleSidePanel }) => {
  return <Navbar expand="lg" className="app-header fixed-top">
    <Container>
      <button 
        className="navbar-toggler me-2" 
        onClick={toggleSidePanel}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <Navbar.Brand as={Link} to="/" className="header-title">
        Expense tracking app
      </Navbar.Brand>
    </Container>
  </Navbar>
}

export default AppHeader;
