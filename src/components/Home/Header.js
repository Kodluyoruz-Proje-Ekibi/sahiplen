import React from 'react';

function Header() {
	return (
		<header id="header" className="fixed-top">
			<div className="container d-flex align-items-center">
				<h1 className="logo mr-auto">
					<a href="index.html">
						Sahiplen<span>.</span>
					</a>
				</h1>

				<nav className="nav-menu d-none d-lg-block">
					<ul>
						<li className="active">
							<a href="index.html">Anasayfa</a>
						</li>
						<li>
							<a href="#about">Tüm Hayvanlar</a>
						</li>
						<li>
							<a href="#services">Shop</a>
						</li>
						<li>
							<a href="#portfolio">Blog</a>
						</li>
						<li>
							<a href="#team" className="btn btn-warning" style={{ color: 'black' }}>
								Hayvan Sahiplendir
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
