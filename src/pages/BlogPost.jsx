import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams, Link, Navigate } from "react-router-dom";
import { getPostBySlug, getRecentPosts } from "../data/BlogData";
import AnimatedTitle from '../components/AnimatedTitle';

const BlogPost = () => {
	const { slug } = useParams();
	const post = getPostBySlug(slug);
	const recentPosts = getRecentPosts(3).filter((p) => p.slug !== slug);

	if (!post) {
		return <Navigate to="/404" replace />;
	}

	return (
		<div>
			<Header />
			<section className="main-content">
				<div className="container">
					<article>
                  <div className="pb-60-py">
								<span>
									{new Date(post.publishDate).toLocaleDateString("en-US", {
										year: "numeric",
										month: "long",
										day: "numeric",
									})}
								</span>
								<span className=""> | </span>
								<span>{post.readTime}</span>
							<AnimatedTitle className="">
								{post.title}
							</AnimatedTitle>
						</div>
						<img src={post.image} alt={post.title}/>
                  <div className="pb-60-py">
								{post.tags.map((tag) => (
									<span key={tag} className="">
										{tag}
									</span>
								))}
						</div>
                  <div className="" dangerouslySetInnerHTML={{ __html: post.content }}/>
						
					</article>

					
						<div className="blog-list">
                  {recentPosts.length > 0 && (
                     <div className="blog-list-item">
                        <div key={post.id} className="blog-list-item">
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
                        </div>
   
                        <Link to={`/blog/${post.slug}`} className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                           Read More
                        </Link>
                     </div>
                 )}
               </div>
					
				</div>
			</section>
        <Footer />
		</div>
	);
};

export default BlogPost;
