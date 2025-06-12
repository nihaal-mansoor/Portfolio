import React from 'react'
import blogImage1 from '../assets/cursor-vs-vscode.png';


const Blog = () => {
  return (
    <section id="blog" className="blog">
        <div className="container">
            <h2 className="text-4xl font-clash-regular split-text line-height-base"><span className="text-4xl font-clash-bold accent-100 line-height-base">B</span>LOG</h2>
            <hr />
            <div className="blog-list">
                <div className="blog-list-item">
                    <img src={ blogImage1 } alt="Blog 1" width="200" height="250" />
                    <div className="blog-list-item-meta">
                        <p className="font-clash text-base font-clash-extralight">08 June 2025</p> |
                        <p className="font-clash text-base font-clash-extralight">8 min read</p>
                    </div>
                    <h3 className="font-clash text-lg font-clash-semibold">Switching from VS Code to Cursor: What I Learned</h3>
                    <a className="font-clash text-base font-clash-regular fit-content" href="#">Read More</a>
                </div>
                <div className="blog-list-item">
                    <img src={ blogImage1 } alt="Blog 2" width="200" height="250" />
                    <div className="blog-list-item-meta">
                        <p className="font-clash text-base font-clash-extralight">08 June 2025</p> |
                        <p className="font-clash text-base font-clash-extralight">8 min read</p>
                    </div>
                    <h3 className="font-clash text-lg font-clash-semibold">How to create a WordPress website</h3>
                    <a className="font-clash text-base font-clash-regular fit-content" href="#">Read More</a>
                </div>
                <div className="blog-list-item">
                    <img src={ blogImage1 } alt="Blog 2" width="200" height="250" />
                    <div className="blog-list-item-meta">
                        <p className="font-clash text-base font-clash-extralight">08 June 2025</p> |
                        <p className="font-clash text-base font-clash-extralight">8 min read</p>
                    </div>
                    <h3 className="font-clash text-lg font-clash-semibold">How to create a WordPress website</h3>
                    <a className="font-clash text-base font-clash-regular fit-content" href="#">Read More</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog