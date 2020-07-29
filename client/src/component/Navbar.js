import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../App';


const renderList = (state, dispatch, history) => {
    const _handleLogout = () => {
        localStorage.clear();
        dispatch({ type: 'CLEAR' });
        history.push('/signin')
    };

    if (state) {
        return (
            <React.Fragment>
                <li>
                    <button className="waves-effect waves-light btn #c62828 red darken-3" onClick={() => _handleLogout()}>
                        Logout
                    </button>
                </li>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <li><Link to="/signin">Sign In</Link></li>,
                <li><Link to="/signup">Sign Up</Link></li>
            </React.Fragment>
        );
    }
}



const Navbar = () => {
    const { state, dispatch } = useContext(UserContext);
    const history = useHistory();

    return(
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper white">
                    <Link to={state ? '/' : '/signin'} className="brand-logo left">
                        <b> MUTUAL </b> <span> FUNDING </span>
                    </Link>
                    <ul id="nav-mobile" className="right">
                        { renderList(state, dispatch, history) }
                    </ul>
                </div>
            </nav>
        </div>    
    );
}

export default Navbar;