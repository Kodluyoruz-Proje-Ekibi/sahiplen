  
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';

function App() {
	return (
		<>
			<Header />
			<div>
				<Card image='birinci.PNG' title='Maltipoo'/>
				<Card image='ikinci.PNG' title='Morkie' />
	
				<Card image='ücüncü.PNG'/>
				<Card image='dördüncü.PNG' title='Golden'/>
				

				

				

			</div>
			
			<Footer />
		</>
	);
}

export default App;
