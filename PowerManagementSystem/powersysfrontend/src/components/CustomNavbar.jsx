import { useContext, useEffect, useState } from 'react'
import { NavLink as ReactLink, useNavigate } from 'react-router-dom'
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
import { doLogout, getCurrentUserDetail, isLoggedIn } from '../auth'
import userContext from '../context/userContext'

const CustomNavbar = () => {
    const userContextData = useContext(userContext)
    let navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    const [login, setLogin] = useState(false)
    const [user, setUser] = useState(undefined)

    useEffect(() => {
        setLogin(isLoggedIn())
        setUser(getCurrentUserDetail())
    }, [login])

    const logout = () => {
        doLogout(() => {
            //logged out
            setLogin(false)
            userContextData.setUser({
                data: null,
                login: false,
            })

            navigate('/')
        })
    }

    return (
        <div>
            <Navbar color="dark" expand="md" dark className="px-5">
                <NavbarBrand href="/">Electricity Management</NavbarBrand>
                <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
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
                    <Nav navbar>
                        {login && (
                            <>
                                <NavItem>
                                    <NavLink onClick={logout}>Logout</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink>{user.username}</NavLink>
                                </NavItem>
                            </>
                        )}

                        {!login && (
                            <>
                                <NavItem>
                                    <NavLink tag={ReactLink} to="/">
                                        Login
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={ReactLink} to="/signup">
                                        Sign Up
                                    </NavLink>
                                </NavItem>
                            </>
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default CustomNavbar
