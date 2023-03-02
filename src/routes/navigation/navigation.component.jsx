import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles'

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)

   /*  console.log(currentUser) */

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrownLogo className='logo'></CrownLogo>
                </LogoContainer>
                <NavLinks>
                    <NavLink className="nav-link" to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (
                            <Fragment>
                                <NavLink as='span' onClick={signOutUser}>{currentUser.displayName}</NavLink>
                                <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                            </Fragment>
                        ) : (
                            <NavLink to='/auth'>
                                SIGN IN
                            </NavLink>
                        )
                    }
                    <CartIcon></CartIcon>
                </NavLinks>
                {isCartOpen && <CartDropdown></CartDropdown>}
            </NavigationContainer>
            <Outlet></Outlet>
        </Fragment>
    )
}

export default Navigation;