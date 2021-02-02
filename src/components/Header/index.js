import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../Home';
import Shop from '../Shop';
import Blog from '../Blog';

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
							<li className="active">
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
			<Route exact path="/" component={Home} />
			{/* <Route path="/tumhayvanlar" component={tumhayvanlar} /> */}
			<Route path="/shop" component={Shop} />
			<Route path="/blog" component={Blog} />
			{/* <Route path="/sahiplendir" component={Sahiplendir} /> */}
		</Router>
	);
}

export default Header;