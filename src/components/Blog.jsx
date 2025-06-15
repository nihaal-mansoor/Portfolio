import blogImage1 from '../assets/cursor-vs-vscode.png';
import AnimatedTitle from './AnimatedTitle';
import AnimatedHR from './AnimatedHR';

const Blog = () => {

  return (
    <section id="blog" className="blog">
        <div className="container">
            <AnimatedTitle>BLOG</AnimatedTitle>
            <AnimatedHR />
            <div className="blog-list">
                <div className="blog-list-item">
                    <img src={ blogImage1 } alt="Blog 1" width="200" height="250" />
                    <div className="blog-list-item-meta">
                        <p className="text-base font-clash-extralight">08 June 2025</p> |
                        <p className="text-base font-clash-extralight">8 min read</p>
                    </div>
                    <h3 className="text-base font-clash-medium">Switching from VS Code to Cursor: What I Learned</h3>
                    <a className="text-base font-clash-regular fit-content" href="#">Read More</a>
                </div>
                <div className="blog-list-item">
                    <img src={ blogImage1 } alt="Blog 2" width="200" height="250" />
                    <div className="blog-list-item-meta">
                        <p className="text-base font-clash-extralight">08 June 2025</p> |
                        <p className="text-base font-clash-extralight">8 min read</p>
                    </div>
                    <h3 className="text-base font-clash-medium">How to create a WordPress website</h3>
                    <a className="text-base font-clash-regular fit-content" href="#">Read More</a>
                </div>
                <div className="blog-list-item">
                    <img src={ blogImage1 } alt="Blog 2" width="200" height="250" />
                    <div className="blog-list-item-meta">
                        <p className="text-base font-clash-extralight">08 June 2025</p> |
                        <p className="text-base font-clash-extralight">8 min read</p>
                    </div>
                    <h3 className="text-base font-clash-medium">How to create a WordPress website</h3>
                    <a className="text-base font-clash-regular fit-content" href="#">Read More</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog