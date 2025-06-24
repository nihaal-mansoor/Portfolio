import BlogHeader from '../components/BlogHeader';
import Footer from '../components/Footer';
import { useParams, Link, Navigate } from "react-router-dom";
import { getPostBySlug, getRecentPosts } from "../data/BlogData";
import Copy from '../components/Copy';
// import styles from "./blogpost.module.css";

const BlogPost = () => {
	const { slug } = useParams();
	const post = getPostBySlug(slug);
	const recentPosts = getRecentPosts(3).filter((p) => p.slug !== slug);

	if (!post) {
		return <Navigate to="/404" replace />;
	}

	return (
		<div>
			<BlogHeader />
			<section className="main-content">
				<div className="container-fluid">
					<article>
                  <div className="pb-60-py">
                        <div className="meta-box">
                           <span>
                              {new Date(post.publishDate).toLocaleDateString("en-US", {
                                 year: "numeric",
                                 month: "long",
                                 day: "numeric",
                              })}
                           </span>
                           <span className=""> | </span>
                           <span>{post.readTime}</span>
                        </div>
				            <Copy><h2 className="font-playfair text-4xl font-clash-regular line-height-medium">{post.title}</h2></Copy>
						</div>
						<img className="img-fluid" src={post.image} alt={post.title} width={1500} height={300}/>
                  {/* <div className="pb-60-py">
								{post.tags.map((tag) => (
									<span key={tag} className="">
										{tag}
									</span>
								))}
						</div> */}
                  <div className="" dangerouslySetInnerHTML={{ __html: post.content }}/>
						
					</article>

               <Copy><h3 className="font-playfair text-3xl font-clash-regular line-height-medium h2-m">Related Blogs:</h3></Copy>
					
						<div className="blog-list">
                  {recentPosts.length > 0 &&
  recentPosts.map((post) => (
                     <div key={post.id || post.slug} className="blog-list-item">
                           <div className="position-relative">
                              <img src={post.image} alt={post.title} width="200" height="250" className="gradient-mask img-fluid"/>
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
                 ))
               }
               </div>
					
				</div>
			</section>
        <Footer />
		</div>
	);
};

export default BlogPost;
