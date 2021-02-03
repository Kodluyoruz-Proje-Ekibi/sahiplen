import React from 'react';
import Slider from '../Slider';
function Home() {
	return (
		<>
			<Slider />
			<h1>İçerik alanı</h1>

			{/* News Letter Bölümü */}

			<div id="footer">
				<div className="footer-newsletter">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-6">
								<h4>Join Our Newsletter</h4>
								<p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
								<form>
									<input type="email" name="email" />
									<input type="submit" value="Subscribe" />
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* News Letter Bölümü */}
		</>
	);
}

export default Home;
