import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Home from '../Home';
import Shop from '../Shop';
import Blog from '../Blog';
import AddAnimalPage from '../AddAnimalPage';
import Card from '../Card';
import AnimalDetailPage from '../AnimalDetailPage';
import BlogDetail from '../BlogDetail';

function Header() {
	return (
		<Router>
			<header id="header" className="fixed-top">
				<div className="container d-flex align-items-center">
					<h1 className="logo mr-auto">
						<NavLink to="/">
							Sahiplen<span>.</span>
						</NavLink>
					</h1>

					<nav className="nav-menu d-none d-lg-block">
						<ul>
							<li>
								<NavLink to="/">Ana Sayfa</NavLink>
							</li>
							<li>
								<NavLink to="/tumhayvanlar">Tüm Hayvanlar</NavLink>
							</li>
							<li>
								<NavLink to="/shop">Shop</NavLink>
							</li>
							<li>
								<NavLink to="/blog">Blog</NavLink>
							</li>
							<li>
								<NavLink to="/sahiplendir" className="btn btn-warning" style={{ color: 'black' }}>
									Hayvan Sahiplendir!
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/tumhayvanlar" component={Card} />
				<Route path="/shop" component={Shop} />
				<Route path="/blog" component={Blog} />
				<Route path="/sahiplendir" component={AddAnimalPage} />
				<Route path="/detay" component={AnimalDetailPage} />
				<Route path="/blogdetay" component={BlogDetail} />
			</Switch>
		</Router>
	);
}

export default Header;
