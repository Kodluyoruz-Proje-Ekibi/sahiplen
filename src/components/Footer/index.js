function Footer() {
	return (
		<>
			<footer id="footer">
				<div className="footer-top">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-6 footer-contact">
								<h3>
									Sahiplen<span>.</span>
								</h3>
								<p>
									Şahkulu, Şişhane Metro Durağı, Meşrutiyet Cd.
									<br />
									Beyoğlu No:125, 34421
									<br />
									İstanbul <br />
									<br />
									<strong>Tel:</strong> +90 212 123 45 67
									<br />
									<strong>E-Posta:</strong> info@kodluyoruz.org
									<br />
								</p>
							</div>

							<div className="col-lg-3 col-md-6 footer-links">
								<h4>Faydalı Linkler</h4>
								<ul>
									<li>
										<i className="bx bx-chevron-right"></i> <a href="/#">Sahiplendir</a>
									</li>
									<li>
										<i className="bx bx-chevron-right"></i> <a href="/#">Tüm Hayvanlar</a>
									</li>
									<li>
										<i className="bx bx-chevron-right"></i> <a href="/#">Shop</a>
									</li>
									<li>
										<i className="bx bx-chevron-right"></i> <a href="/#">Blog</a>
									</li>
									<li>
										<i className="bx bx-chevron-right"></i>{' '}
										<a href="/#">Gizlilik Politikası ve KVKK</a>
									</li>
								</ul>
							</div>

							<div className="col-lg-3 col-md-6 footer-links">
								<h4>Hizmetlerimiz</h4>
								<ul>
									<li>
										<i className="bx bx-chevron-right"></i> <a href="/#">Hayvan Sahiplendirme</a>
									</li>
									<li>
										<i className="bx bx-chevron-right"></i> <a href="/#">PetShop</a>
									</li>
									<li>
										<i className="bx bx-chevron-right"></i>{' '}
										<a href="/#">Sosyal Sorumluluk Projeleri</a>
									</li>
									<li>
										<i className="bx bx-chevron-right"></i> <a href="/#">Hayvan Bakım Rehberi</a>
									</li>
								</ul>
							</div>

							<div className="col-lg-3 col-md-6 footer-links">
								<h4>Sosyal Medya Hesaplarımız</h4>
								<p>Bizi sosyal medya üzerinden takip edip, büyümemize destek olabilirsiniz.</p>
								<div className="social-links mt-3">
									<a href="/#" className="twitter">
										<i className="bx bxl-twitter"></i>
									</a>
									<a href="/#" className="facebook">
										<i className="bx bxl-facebook"></i>
									</a>
									<a href="/#" className="instagram">
										<i className="bx bxl-instagram"></i>
									</a>
									<a href="/#" className="google-plus">
										<i className="bx bxl-skype"></i>
									</a>
									<a href="/#" className="linkedin">
										<i className="bx bxl-linkedin"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container py-4">
					<div className="copyright">
						&copy; Copyright{' '}
						<strong>
							<span>Sahiplen</span>
						</strong>
						. Tüm hakları mahfuzdur.
					</div>
					<div className="credits">
						Geliştiren <a href="/#">Kodluyoruz Proje Ekibi | Grup 9</a>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
