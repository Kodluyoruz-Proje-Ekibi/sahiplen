import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from '../Home';
import Shop from '../Shop';
import Blog from '../Blog';
import AddAnimalPage from '../AddAnimalPage';
import CardPage from '../CardPage'

function Header() {
	return (
		<Router>
			<header id="header" className="fixed-top">
				<div className="container d-flex align-items-center">
					<h1 className="logo mr-auto">
						<Link to="/">
							Sahiplen<span>.</span>
						</Link>
					</h1>

					<nav className="nav-menu d-none d-lg-block">
						<ul>
							<li>
								<Link to="/">Anasayfa</Link>
							</li>
							<li>
								<Link to="/tumhayvanlar">Tüm Hayvanlar</Link>
							</li>
							<li>
								<Link to="/shop">Shop</Link>
							</li>
							<li>
								<Link to="/blog">Blog</Link>
							</li>
							<li>
								<Link to="/sahiplendir" className="btn btn-warning" style={{ color: 'black' }}>
									Hayvan Sahiplendir!
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<Switch>
				<Route path="/" exact component={Home} />
			    <Route path="/tumhayvanlar" component={CardPage} />
				<Route path="/shop" component={Shop} />
				<Route path="/blog" component={Blog} />
				<Route path="/sahiplendir" component={AddAnimalPage} />
			</Switch>
		</Router>
	);
}

export default Header;
