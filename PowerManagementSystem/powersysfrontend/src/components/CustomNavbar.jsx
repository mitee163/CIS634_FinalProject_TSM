import { useState } from 'react'
import { NavLink as ReactLink } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap'

const CustomNavbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <Navbar color="dark" expand="md" dark>
                <NavbarBrand href="/">Electricity Management</NavbarBrand>
                <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink tag={ReactLink} to="/about">
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={ReactLink} to="/login">
                                Login
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={ReactLink} to="/signup">
                                Sign Up
                            </NavLink>
                        </NavItem>
                        {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                <DropdownItem>
                    Option 1
                </DropdownItem>
                <DropdownItem>
                    Option 2
                </DropdownItem>
                  <DropdownItem divider />
                <DropdownItem>
                    Reset
                </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
                    </Nav>
                    <NavbarText>Youtube</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default CustomNavbar
