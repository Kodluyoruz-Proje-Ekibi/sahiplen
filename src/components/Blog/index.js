import React from 'react';
import kedi from './kedi.jpg';

function index() {
	return (
		
		<div className="container">
			
			<div className="row">

			
			<div className="card-deck" >
				<div className="card">
					<img className="card-img-top" src={kedi} alt=""/>
				      <div className="card-body">
					    <h5 className="card-title">Kedi Nasıl Yıkanır?</h5>
					       <p className="card-text"> 
								Aslında kedilerin çoğu ıslanmaktan çok da hoşlanmazlar. Yıkama işlemini yaparken birinden yardım istemeniz işinizi kolaylaştıracaktır. Kedi şampuanı ve havlu elinizdeyse, bir kişi kediyi tutarken diğeri de nazikçe onu yıkayabilir.
								Evcil havyanınızın tüylerinde dolaşma sonucunda oluşan düğümleri açmak için kedinizi iyice fırçalayın. Bu işlemi normalde farklı olarak suda yaptığınızda, tüylerin suda büzülerek sıkışmasını hatta kedinizin canının yanmasını önleyecektir.
                            </p>
					<p className="card-text"><small class="text-muted">08.02.21</small></p>
					<a href="/#" class="btn btn-info">  Read More </a>
				</div>
			</div>

				<div className="card">
					<img className="card-img-top" src={kedi} alt=""/>
					<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
					<p className="card-text"><small class="text-muted">08.02.21</small></p>
					<a href="/#" class="btn btn-info">  Read More </a>
					</div>
				</div>

				    <div className="card">
						<img className="card-img-top" src={kedi} alt=""/>
						 <div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
							<p className="card-text"><small class="text-muted">08.02.21</small></p>
							<a href="/#" class="btn btn-info">  Read More </a>
					        </div>		
									
				</div>
			</div>
			<div className="card-deck" >
			<div className="card mt-3 mb-3 col-5" style={{ width: '36rem' }}>      
            
                <img className="card-img-top" src={kedi} alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">Kedi maması nasıl verilir?</h5>
                        <p className="card-text">
                            Ayrıca, kedinizi kuru mamaya alıştırmak için biraz ılık su ile yumuşatabilirsiniz, 
                            fakat bunu asla süt ile yapmayınız. Bir iki tane kuru mamayı ana yemekten önce,
                            elinizle ödül olarak verebilirsiniz.
                            Kediniz birkaç tane kuru mama yedikten sonra ana yemekte yaş mama ile karıştırarak verebilirsiniz.
                       </p>
                <p className="card-text">
                    <small class="text-muted">05.02.21</small>
                    </p>
					<a href="/#" class="btn btn-info">  Read More </a>
                    
                </div>
				
            </div>
			
            <div className="card mt-3 mb-3 col-8" style={{ width: '36rem' }}>
            <div className="card-body">
                <h5 className="card-title">Kedi maması nasıl verilir?</h5>
                <p className="card-text">
                
                Ayrıca, kedinizi kuru mamaya alıştırmak için biraz ılık su ile yumuşatabilirsiniz, 
                fakat bunu asla süt ile yapmayınız. Bir iki tane kuru mamayı ana yemekten önce,
                elinizle ödül olarak verebilirsiniz.
                Kediniz birkaç tane kuru mama yedikten sonra ana yemekte yaş mama ile karıştırarak verebilirsiniz.
                </p>
                <p className="card-text"><small class="text-muted">5.02.21</small></p>
				<a href="/#" class="btn btn-info">  Read More </a>
            </div>
            <img className="card-img-bottom" src={kedi} alt=""/>
            </div>
			</div>
			<div className="card-deck">
					<div className="card">
					<img className="card-img-top" src={kedi} alt=""/>
					<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					<p className="card-text"><small class="text-muted">08.02.21</small></p>
					<a href="/#" class="btn btn-info">  Read More </a>
					
					</div>
				</div>

				<div className="card" >
					<img className="card-img-top" src={kedi} alt=""/>
					<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
					<p className="card-text"><small class="text-muted">09.02.21</small></p>
					<a href="/#" class="btn btn-info"> Read More </a>
					
					</div>
				</div>

				    <div className="card">
						<img className="card-img-top" src={kedi} alt=""/>
						 <div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
							<p className="card-text"><small class="text-muted">09.02.21</small></p>
							<a href="/#" class="btn btn-info"> Read More </a>
							
					        </div>		
									
				</div>
			</div>
			
		
			
			
	</div>
</div>
		
	
	
		
	);
}

export default index;
