import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-cont" to='/'>
                    <CrownLogo className='logo'></CrownLogo>
                </Link>
                <div className="nav-links-cont">
                    <Link className="nav-link" to='/shop'>
                        Shop
                    </Link>
                    <Link className="nav-link" to='/auth'>
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet></Outlet>
        </Fragment>
    )
}

export default Navigation;