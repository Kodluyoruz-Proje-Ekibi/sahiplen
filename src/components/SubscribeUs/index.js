function SubscribeUs() {
	return (
		<div id="footer">
			<div className="footer-newsletter">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<h4>Bizi Takip Edin!</h4>
							<p>
								İndirimlerden yararlanmak, son kampanyalardan haberdar olmak için mail bültenimize
								abone olun
							</p>
							<form>
								<input type="email" name="email" />
								<input type="submit" value="Abone Ol!" />
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SubscribeUs;
