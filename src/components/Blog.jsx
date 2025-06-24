import Copy from './Copy';
import { Link } from "react-router-dom";
import { blogPosts } from "../data/BlogData";

const Blog = () => {
	return (
		<section id="blog" className="blog">
			<div className="container">
				<Copy><h2 className="font-playfair text-4xl font-clash-regular line-height-base split-text"><span className="text-4xl font-clash-bold accent-100">B</span>LOG</h2></Copy>
				<div className="blog-list">
					{blogPosts.map((post, index) => (
						<div key={post.id || post.slug} className="blog-list-item">
								<div className="position-relative">
									<img
										src={post.image}
										alt={post.title}
										width="200"
										height="250"
										className="gradient-mask"
									/>
									<div className="blog-list-item-meta">
										<p className="text-base font-clash-extralight mb-0 d-inline">
											{new Date(post.publishDate).toLocaleDateString()}
										</p>
										<span className="mx-2">|</span>
										<p className="text-base font-clash-extralight mb-0 d-inline">
											{post.readTime}
										</p>
									</div>
								</div>

								<Link to={`/blog/${post.slug}`} className="text-base font-clash-medium">
									{post.title}
								</Link>
                        <Link to={`/blog/${post.slug}`} className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                           Read More
                        </Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Blog;
