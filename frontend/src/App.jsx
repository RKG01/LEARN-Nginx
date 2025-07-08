import React, { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
  fetch('/api/posts')
    .then(res => res.json())
    .then(data => {
      console.log('Fetched posts:', data); // 👈 Add this
      setPosts(data);
    })
    .catch(err => console.error('API fetch error:', err));
}, []);


  return (
    <div style={{ padding: '20px' }}>
      <h1>My Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}><strong>{post.title}</strong></li>
        ))}
      </ul>
    </div>
  );
}

export default App;
