import React from 'react';
import HomeGallery from '../HomeGallery';
import Blog from '../Blog'; 
import Login from '../Login/Login';
export default function Home() {
	return (
		<div>
			<HomeGallery />
			<Blog />
			<Login/>
		</div>
	);
}
