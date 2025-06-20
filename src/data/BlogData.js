// data/BlogData.js
export const blogPosts = [
   {
     id: 1,
     slug: "getting-started-with-react",
     title: "Getting Started with React: A Beginner's Guide",
     excerpt: "Learn the fundamentals of React and how to build your first component-based application.",
     content: `
       <h2>Introduction to React</h2>
       <p>React is a powerful JavaScript library for building user interfaces, particularly web applications. Developed by Facebook, it has revolutionized how we think about creating interactive UIs.</p>
       
       <h3>Why Choose React?</h3>
       <ul>
         <li><strong>Component-Based:</strong> Build encapsulated components that manage their own state</li>
         <li><strong>Reusable:</strong> Write once, use everywhere approach</li>
         <li><strong>Virtual DOM:</strong> Efficient updates and rendering</li>
         <li><strong>Large Ecosystem:</strong> Extensive library and tool support</li>
       </ul>
       
       <h3>Your First Component</h3>
       <p>Here's a simple example of a React functional component:</p>
       <pre><code>function Welcome({ name }) {
   return &lt;h1&gt;Hello, {name}!&lt;/h1&gt;;
 }
 
 export default Welcome;</code></pre>
       
       <p>This component accepts a <code>name</code> prop and renders a greeting. It's that simple!</p>
       
       <h3>Next Steps</h3>
       <p>Now that you understand the basics, try building a small project like a todo list or calculator. Practice makes perfect!</p>
     `,
     author: "Sarah Johnson",
     publishDate: "2024-03-15",
     readTime: "8 min read",
     tags: ["React", "JavaScript", "Web Development", "Tutorial"],
     image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
   },
   {
     id: 2,
     slug: "modern-css-techniques",
     title: "Modern CSS Techniques Every Developer Should Know",
     excerpt: "Explore cutting-edge CSS features that will transform your web design workflow.",
     content: `
       <h2>The Evolution of CSS</h2>
       <p>CSS has evolved dramatically over the past few years. Modern browsers now support features that were once impossible or required complex workarounds.</p>
       
       <h3>CSS Grid: Layout Made Easy</h3>
       <p>CSS Grid revolutionizes how we create layouts. Unlike Flexbox, which is one-dimensional, Grid works in two dimensions.</p>
       <pre><code>.container {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   gap: 20px;
 }</code></pre>
       
       <h3>CSS Custom Properties (Variables)</h3>
       <p>Custom properties make your CSS more maintainable and dynamic:</p>
       <pre><code>:root {
   --primary-color: #3498db;
   --spacing-unit: 1rem;
 }
 
 .button {
   background-color: var(--primary-color);
   padding: var(--spacing-unit);
 }</code></pre>
       
       <h3>Container Queries</h3>
       <p>Style components based on their container size, not just the viewport:</p>
       <pre><code>@container (min-width: 400px) {
   .card {
     flex-direction: row;
   }
 }</code></pre>
       
       <p>These techniques will make your CSS more powerful and maintainable than ever before.</p>
     `,
     author: "Mike Chen",
     publishDate: "2024-03-10",
     readTime: "12 min read",
     tags: ["CSS", "Web Design", "Frontend", "Modern Web"],
     image: "https://images.unsplash.com/photo-1524666643752-b381eb00effb?w=800&h=400&fit=crop"
   },
   {
     id: 3,
     slug: "mastering-javascript-async",
     title: "Mastering Asynchronous JavaScript: Promises, Async/Await, and Beyond",
     excerpt: "Deep dive into JavaScript's asynchronous patterns and learn to handle complex async operations.",
     content: `
       <h2>Understanding Asynchronous JavaScript</h2>
       <p>JavaScript's asynchronous nature is both its strength and challenge. Mastering async patterns is crucial for building responsive applications.</p>
       
       <h3>Promises: The Foundation</h3>
       <p>Promises represent eventual completion of an asynchronous operation:</p>
       <pre><code>const fetchData = () => {
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve('Data loaded successfully');
     }, 2000);
   });
 };</code></pre>
       
       <h3>Async/Await: Cleaner Syntax</h3>
       <p>Async/await makes asynchronous code look synchronous:</p>
       <pre><code>async function loadUserData() {
   try {
     const user = await fetchUser();
     const posts = await fetchUserPosts(user.id);
     return { user, posts };
   } catch (error) {
     console.error('Failed to load data:', error);
   }
 }</code></pre>
       
       <h3>Handling Multiple Promises</h3>
       <p>Use Promise.all() for parallel execution:</p>
       <pre><code>const [users, posts, comments] = await Promise.all([
   fetchUsers(),
   fetchPosts(),
   fetchComments()
 ]);</code></pre>
       
       <h3>Error Handling Best Practices</h3>
       <p>Always handle errors gracefully in async operations. Use try-catch blocks with async/await and .catch() with promises.</p>
       
       <p>Master these patterns, and you'll write more reliable, maintainable JavaScript code.</p>
     `,
     author: "Alex Rodriguez",
     publishDate: "2024-03-05",
     readTime: "15 min read",
     tags: ["JavaScript", "Async", "Promises", "Programming"],
     image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=400&fit=crop"
   }
 ];
 
 // Helper function to get a post by slug
 export const getPostBySlug = (slug) => {
   return blogPosts.find(post => post.slug === slug);
 };
 
 // Helper function to get recent posts
 export const getRecentPosts = (limit = 3) => {
   return blogPosts
     .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
     .slice(0, limit);
 };