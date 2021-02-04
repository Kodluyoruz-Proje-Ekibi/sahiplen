import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';


function App() {
	return (
		<>
			<Header/>
			
			<div className='content'> 
			   <Card image='birinci.PNG' title='Maltipoo'/>
			   <Card image='https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'/>
			   <Card image='ücüncü.PNG' title='Çin Aslanı' />
			   <Card image='dördüncü.PNG' title='Golden'/>

			</div>
			
			<Footer/>
			
			
	
		</>
	);
}

export default App;
