import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import './navigation.styles.scss'

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)

    const signOutHandler = async () => {
        await signOutUser();
    }

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-cont" to='/'>
                    <CrownLogo className='logo'></CrownLogo>
                </Link>
                <div className="nav-links-cont">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
                        ) : (
                            <Link className="nav-link" to='/auth'>
                                SIGN IN
                            </Link>
                        )
                    }
                    <CartIcon></CartIcon>
                </div>
                {isCartOpen && <CartDropdown></CartDropdown>}
            </div>
            <Outlet></Outlet>
        </Fragment>
    )
}

export default Navigation;