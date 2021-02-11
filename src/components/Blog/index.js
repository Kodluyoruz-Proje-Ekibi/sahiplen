import './style.css';
import kedi from './kedi.jpg';

function index() {
	return (
		<div className="container mt-5">
			<div className="row">
				<div className="card-deck">
					<div className="card cardStyle">
						<img className="card-img-top" src={kedi} alt="" />
						<div className="card-body p-3">
							<h5 className="card-title">Kedi Nasıl Yıkanır?</h5>
							<p className="card-text">
								Aslında kedilerin çoğu ıslanmaktan çok da hoşlanmazlar. Yıkama işlemini yaparken
								birinden yardım istemeniz işinizi kolaylaştıracaktır. Kedi şampuanı...
							</p>
							<p className="card-text">
								<small class="text-muted">08.02.21</small>
							</p>
							<a href="/#" class="btn btn-info">
								Devamı...
							</a>
						</div>
					</div>

					<div className="card cardStyle">
						<img className="card-img-top" src={kedi} alt="" />
						<div className="card-body p-3">
							<h5 className="card-title">Hangi Kedi Maması Tercih Edilmeli?</h5>
							<p className="card-text">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quod ab, vel iusto
								accusantium voluptate?
							</p>
							<p className="card-text">
								<small class="text-muted">08.02.21</small>
							</p>
							<a href="/#" class="btn btn-info">
								Devamı...
							</a>
						</div>
					</div>

					<div className="card cardStyle">
						<img className="card-img-top" src={kedi} alt="" />
						<div className="card-body p-3">
							<h5 className="card-title">Köpek Türlerine Göre Hastalıklar</h5>
							<p className="card-text">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex doloribus laboriosam
								quidem minus voluptatum sequi beatae placeat numquam inventore! Hic!
							</p>
							<p className="card-text">
								<small class="text-muted">08.02.21</small>
							</p>
							<a href="/#" class="btn btn-info">
								Devamı...
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default index;
