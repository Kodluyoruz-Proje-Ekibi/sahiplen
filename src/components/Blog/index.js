import { useQuery, gql } from '@apollo/client';
import './style.css';
import loadingGif from '../../img/loading.gif';

const GET_BLOG = gql`
	query GetBlog {
		blog {
			id
			images
			title
			description
			author
			created_at
		}
	}
`;

function Blog() {
	const { loading, error, data } = useQuery(GET_BLOG);
	if (loading)
		return (
			<p>
				<img src={loadingGif} className="gif-loading" alt="" />
			</p>
		);
	if (error) return <p>Error :(</p>;

	return (
		<div className="container mt-5">
			<div className="row">
				{data.blog.map(({ id, images, title, description, created_at }) => (
					<div key={id} className="col-md-4">
						<div className="card cardStyle mb-5">
							<img className="card-img-top" src={images} alt="" />
							<div className="card-body p-3">
								<h5 className="card-title">{title}</h5>
								<p className="card-text">{description.substring(0, 300)}</p>
								<p className="card-text">
									<small className="text-muted">{created_at}</small>
								</p>
								<a href={`/blogdetay?id=${id}`} className="btn btn-info">
									Devamı...
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Blog;
