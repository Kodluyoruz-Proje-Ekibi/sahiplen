import React from 'react';
import './BlogDetail.css';
import { useQuery, gql } from '@apollo/client';
import loadingGif from '../../img/loading.gif';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const blogId = urlParams.get('id');

const GET_ID_BLOG = gql`
	query GetBlog {
		blog(where: {id: {_eq: "${blogId}"}}) {
			id
			images
			title
			description
			author
			created_at
		}
	}
`;

function BlogDetail() {
	const { loading, error, data } = useQuery(GET_ID_BLOG);
	if (loading)
		return (
			<p>
				<img src={loadingGif} className="gif-loading" alt="" />
			</p>
		);
	if (error) return <p>Error :(</p>;
	console.log(data);
	return (
		<div className="container">
			{data.blog.map(({ id, images, title, description, author, created_at }) => (
				<div ket={id} className="container mt-5">
					<div className="row">
						<div className="card cardStyle mb-5">
							<img className="img" src={images} alt="" />
							<div className="card-body p-3">
								<h5 className="blog-title">{title} </h5>
								<p className="card-text">{description}</p>
								<p className="card-text">
									<small class="text-muted">Blog Yazarı: {author}</small>
								</p>
								<p className="card-text ">
									<small class="text-muted">{created_at}</small>
								</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default BlogDetail;
