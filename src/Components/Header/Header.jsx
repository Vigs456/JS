
import React from 'react';
import s from'./Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
	return <header className={s.header}>
      		<img src="https://cdn.overleaf.com/img/ol-brand/overleaf_og_logo.png" />
      		
      		<div className={s.loginBlock}>
      			{ props.isAuth ? <div>
				      				<div>{props.login}</div>
				      				<div><button onClick={props.logout}>Log out</button></div>
			      				</div>
      				: <NavLink to={'/login'}>Login</NavLink>
      			}
      		</div>
      	</header>
}

export default Header;