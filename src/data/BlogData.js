// data/BlogData.js
export const blogPosts = [
   {
     id: 1,
     slug: "getting-started-with-react",
     title: "Getting Started with React: A Beginner's Guide",
     excerpt: "Learn the fundamentals of React and how to build your first component-based application.",
     content: `
     <h1 data-start="391" data-end="465">What You Need to Know Before Learning React: Prerequisites for Beginners</h1>
     <p data-start="467" data-end="593"><strong data-start="467" data-end="479">Keywords</strong>: prerequisites for learning React, what to learn before React, learn React JS, React for beginners, React roadmap</p>
     <hr data-start="595" data-end="598" />
     <p data-start="600" data-end="892">React is one of the most powerful and popular JavaScript libraries for building user interfaces, but diving in headfirst can be overwhelming&mdash;especially if you skip the foundational skills. Before learning React, there are several core technologies and concepts you should be comfortable with.</p>
     <p data-start="894" data-end="1105">This article breaks down the <strong data-start="923" data-end="950">essential prerequisites</strong> for React based on insights from Web Dev Simplified&rsquo;s video, <a class="" href="https://www.youtube.com/watch?v=83_7HQuIQfU" target="_new" rel="noopener" data-start="1012" data-end="1104">"What You Need to Know Before Learning React"</a>.</p>
     <hr data-start="1107" data-end="1110" />
     <h2 data-start="1112" data-end="1151">Why Not Start With React Right Away?</h2>
     <p data-start="1153" data-end="1492">While it&rsquo;s tempting to jump into React after hearing how powerful it is, skipping the basics can actually slow you down. React builds on <strong data-start="1290" data-end="1319">JavaScript, HTML, and CSS</strong>, and it assumes you already understand how those technologies work. Trying to learn React without knowing them is like trying to write a novel without knowing the alphabet.</p>
     <hr data-start="1494" data-end="1497" />
     <h2 data-start="1499" data-end="1546">Prerequisite #1: Solid Understanding of HTML</h2>
     <p data-start="1548" data-end="1712">React doesn&rsquo;t eliminate HTML&mdash;it enhances it using <strong data-start="1598" data-end="1605">JSX</strong>, which is essentially HTML mixed with JavaScript. So before you start React, you should be confident with:</p>
     <ul data-start="1714" data-end="1939">
     <li data-start="1714" data-end="1775">
     <p data-start="1716" data-end="1775">HTML tags and structure (<code data-start="1741" data-end="1748">&lt;div&gt;</code>, <code data-start="1750" data-end="1756">&lt;h1&gt;</code>, <code data-start="1758" data-end="1768">&lt;button&gt;</code>, etc.)</p>
     </li>
     <li data-start="1776" data-end="1824">
     <p data-start="1778" data-end="1824">Form elements (<code data-start="1793" data-end="1802">&lt;input&gt;</code>, <code data-start="1804" data-end="1812">&lt;form&gt;</code>, <code data-start="1814" data-end="1823">&lt;label&gt;</code>)</p>
     </li>
     <li data-start="1825" data-end="1875">
     <p data-start="1827" data-end="1875">Attributes (<code data-start="1839" data-end="1846">class</code>, <code data-start="1848" data-end="1852">id</code>, <code data-start="1854" data-end="1860">name</code>, <code data-start="1862" data-end="1868">type</code>, etc.)</p>
     </li>
     <li data-start="1876" data-end="1939">
     <p data-start="1878" data-end="1939">Semantic HTML (using tags properly for accessibility and SEO)</p>
     </li>
     </ul>
     <h3 data-start="1941" data-end="1960">Why it matters:</h3>
     <p data-start="1961" data-end="2109">In React, you&rsquo;ll write a lot of JSX, which <strong data-start="2004" data-end="2046">looks like HTML but isn&rsquo;t exactly HTML</strong>. Having HTML fundamentals down makes learning JSX much easier.</p>
     <hr data-start="2111" data-end="2114" />
     <h2 data-start="2116" data-end="2154">Prerequisite #2: Core CSS Knowledge</h2>
     <p data-start="2156" data-end="2258">CSS is essential for making your React components visually appealing. Before learning React, focus on:</p>
     <ul data-start="2260" data-end="2438">
     <li data-start="2260" data-end="2287">
     <p data-start="2262" data-end="2287">Selectors and specificity</p>
     </li>
     <li data-start="2288" data-end="2299">
     <p data-start="2290" data-end="2299">Box model</p>
     </li>
     <li data-start="2300" data-end="2343">
     <p data-start="2302" data-end="2343">Positioning and layout (Flexbox and Grid)</p>
     </li>
     <li data-start="2344" data-end="2381">
     <p data-start="2346" data-end="2381">Media queries for responsive design</p>
     </li>
     <li data-start="2382" data-end="2403">
     <p data-start="2384" data-end="2403">CSS classes and IDs</p>
     </li>
     <li data-start="2404" data-end="2438">
     <p data-start="2406" data-end="2438">Basic animations and transitions</p>
     </li>
     </ul>
     <h3 data-start="2440" data-end="2454">Bonus Tip:</h3>
     <p data-start="2455" data-end="2607">You don&rsquo;t need to master CSS frameworks (like Tailwind or Bootstrap) right away. Start with <strong data-start="2547" data-end="2562">vanilla CSS</strong> to understand how styling works at its core.</p>
     <hr data-start="2609" data-end="2612" />
     <h2 data-start="2614" data-end="2664">Prerequisite #3: Strong JavaScript Fundamentals</h2>
     <p data-start="2666" data-end="2781">React is <strong data-start="2675" data-end="2689">JavaScript</strong> at its core. To work with React effectively, you need to be comfortable with the following:</p>
     <h3 data-start="2783" data-end="2819">✅ Must-Know JavaScript Concepts:</h3>
     <ul data-start="2820" data-end="3197">
     <li data-start="2820" data-end="2855">
     <p data-start="2822" data-end="2855">Variables (<code data-start="2833" data-end="2840">const</code>, <code data-start="2842" data-end="2847">let</code>, <code data-start="2849" data-end="2854">var</code>)</p>
     </li>
     <li data-start="2856" data-end="2896">
     <p data-start="2858" data-end="2896">Functions (especially arrow functions)</p>
     </li>
     <li data-start="2897" data-end="2958">
     <p data-start="2899" data-end="2958">Arrays and array methods (<code data-start="2925" data-end="2932">map()</code>, <code data-start="2934" data-end="2944">filter()</code>, <code data-start="2946" data-end="2957">forEach()</code>)</p>
     </li>
     <li data-start="2959" data-end="2993">
     <p data-start="2961" data-end="2993">Objects and object destructuring</p>
     </li>
     <li data-start="2994" data-end="3042">
     <p data-start="2996" data-end="3042">Conditional statements (<code data-start="3020" data-end="3024">if</code>, <code data-start="3026" data-end="3032">else</code>, ternary)</p>
     </li>
     <li data-start="3043" data-end="3065">
     <p data-start="3045" data-end="3065">Loops and iterations</p>
     </li>
     <li data-start="3066" data-end="3148">
     <p data-start="3068" data-end="3148">DOM manipulation (basic understanding, even though React handles it differently)</p>
     </li>
     <li data-start="3149" data-end="3197">
     <p data-start="3151" data-end="3197">Event handling (like <code data-start="3172" data-end="3181">onClick</code> and <code data-start="3186" data-end="3196">onSubmit</code>)</p>
     </li>
     </ul>
     <h3 data-start="3199" data-end="3227">⚡ ES6+ Features to Know:</h3>
     <p data-start="3228" data-end="3292">React makes heavy use of modern JavaScript, so be sure you know:</p>
     <ul data-start="3293" data-end="3577">
     <li data-start="3293" data-end="3352">
     <p data-start="3295" data-end="3313"><strong data-start="3295" data-end="3312">Destructuring</strong>:</p>
     <div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">
     <div class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary select-none rounded-t-2xl">js</div>
     <div class="sticky top-9">
     <div class="absolute end-0 bottom-0 flex h-9 items-center pe-2">
     <div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"><button class="flex gap-1 items-center select-none py-1">Copy</button><span class="" data-state="closed"><button class="flex items-center gap-1 py-1 select-none">Edit</button></span></div>
     </div>
     </div>
     <div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-js"><span class="hljs-keyword">const</span> { name } = user; </code></div>
     </div>
     </li>
     <li data-start="3353" data-end="3429">
     <p data-start="3355" data-end="3381"><strong data-start="3355" data-end="3380">Spread/rest operators</strong>:</p>
     <div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">
     <div class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary select-none rounded-t-2xl">js</div>
     <div class="sticky top-9">
     <div class="absolute end-0 bottom-0 flex h-9 items-center pe-2">
     <div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"><button class="flex gap-1 items-center select-none py-1">Copy</button><span class="" data-state="closed"><button class="flex items-center gap-1 py-1 select-none">Edit</button></span></div>
     </div>
     </div>
     <div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-js"><span class="hljs-keyword">const</span> newArray = [...oldArray]; </code></div>
     </div>
     </li>
     <li data-start="3430" data-end="3507">
     <p data-start="3432" data-end="3452"><strong data-start="3432" data-end="3451">Arrow functions</strong>:</p>
     <div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">
     <div class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary select-none rounded-t-2xl">js</div>
     <div class="sticky top-9">
     <div class="absolute end-0 bottom-0 flex h-9 items-center pe-2">
     <div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"><button class="flex gap-1 items-center select-none py-1">Copy</button><span class="" data-state="closed"><button class="flex items-center gap-1 py-1 select-none">Edit</button></span></div>
     </div>
     </div>
     <div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-js"><span class="hljs-keyword">const</span> <span class="hljs-title function_">sayHi</span> = () =&gt; <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">'Hi'</span>); </code></div>
     </div>
     </li>
     <li data-start="3508" data-end="3577">
     <p data-start="3510" data-end="3534"><strong data-start="3510" data-end="3533">Modules and imports</strong>:</p>
     <div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary">
     <div class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-sidebar-surface-primary select-none rounded-t-2xl">js</div>
     <div class="sticky top-9">
     <div class="absolute end-0 bottom-0 flex h-9 items-center pe-2">
     <div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"><button class="flex gap-1 items-center select-none py-1">Copy</button><span class="" data-state="closed"><button class="flex items-center gap-1 py-1 select-none">Edit</button></span></div>
     </div>
     </div>
     <div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-js"><span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span> <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>; </code></div>
     </div>
     </li>
     </ul>
     <hr data-start="3579" data-end="3582" />
     <h2 data-start="3584" data-end="3633">Prerequisite #4: Basic Terminal and Git Skills</h2>
     <p data-start="3635" data-end="3695">While not mandatory at the very start, understanding how to:</p>
     <ul data-start="3696" data-end="3852">
     <li data-start="3696" data-end="3742">
     <p data-start="3698" data-end="3742">Navigate your file system using the terminal</p>
     </li>
     <li data-start="3743" data-end="3791">
     <p data-start="3745" data-end="3791">Run commands like <code data-start="3763" data-end="3776">npm install</code> or <code data-start="3780" data-end="3791">npm start</code></p>
     </li>
     <li data-start="3792" data-end="3852">
     <p data-start="3794" data-end="3852">Use basic Git commands (<code data-start="3818" data-end="3825">clone</code>, <code data-start="3827" data-end="3835">commit</code>, <code data-start="3837" data-end="3843">push</code>, <code data-start="3845" data-end="3851">pull</code>)</p>
     </li>
     </ul>
     <p data-start="3854" data-end="3931">&hellip;will make your life much easier when setting up or deploying React projects.</p>
     <hr data-start="3933" data-end="3936" />
     <h2 data-start="3938" data-end="3995">Optional But Helpful: JavaScript Debugging &amp; Dev Tools</h2>
     <p data-start="3997" data-end="4156">Being able to debug code with tools like <strong data-start="4038" data-end="4055">console.log()</strong>, browser dev tools, and the <strong data-start="4084" data-end="4119">React Developer Tools extension</strong> will help you solve problems faster.</p>
     <hr data-start="4158" data-end="4161" />
     <h2 data-start="4163" data-end="4206">Summary: Checklist Before Learning React</h2>
     <p data-start="4208" data-end="4484">✅ Comfortable with HTML and semantic structure<br data-start="4254" data-end="4257" /> ✅ Solid grasp of CSS (especially Flexbox/Grid)<br data-start="4303" data-end="4306" /> ✅ Strong JavaScript foundation (including ES6 features)<br data-start="4361" data-end="4364" /> ✅ Familiar with terminal basics and package managers (Node.js, npm)<br data-start="4431" data-end="4434" /> ✅ Basic understanding of Git and version control</p>
     <hr data-start="4486" data-end="4489" />
     <h2 data-start="4491" data-end="4541">Final Thoughts: Prepare Now, React Faster Later</h2>
     <p data-start="4543" data-end="4772">Learning React is exciting&mdash;but it&rsquo;s a lot more fun when you&rsquo;re not constantly tripping over missing foundational skills. By mastering HTML, CSS, and JavaScript first, you&rsquo;ll speed up your progress and enjoy the process much more.</p>
     <p data-start="4774" data-end="4934">💡<strong data-start="4776" data-end="4787">Pro Tip</strong>: Don&rsquo;t just watch tutorials&mdash;<strong data-start="4816" data-end="4834">build projects</strong>! Even small ones, like a to-do list or a calculator, will give you hands-on experience that sticks.</p>
     `,
     author: "Nihaal Mansoor",
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
     author: "Nihaal Mansoor",
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
     author: "Nihaal Mansoor",
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

 