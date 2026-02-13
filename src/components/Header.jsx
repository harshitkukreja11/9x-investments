import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`menu-backdrop ${menuOpen ? "show" : ""}`}
        onClick={closeMenu}
      />

      <Navbar
        expand="lg"
        fixed="top"
        expanded={menuOpen}
        className={`main-header ${scrolled ? "scrolled" : ""}`}
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/" onClick={closeMenu}>
            9x Investments
          </Navbar.Brand>

          {/* Animated Hamburger */}
          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>

          <Navbar.Collapse>
            <Nav className="ms-auto">
              {["/", "/about", "/services", "/portfolio","/process", "/contact"].map(
                (path, i) => (
                  <NavLink
                    key={path}
                    to={path}
                    end={path === "/"}
                    className="nav-link"
                    onClick={closeMenu}
                    style={{ animationDelay: `${i * 0.08}s` }}
                  >
                    {path === "/"
                      ? "Home"
                      : path.replace("/", "").charAt(0).toUpperCase() +
                        path.slice(2)}
                  </NavLink>
                )
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
