// Fetch blog post metadata and render cards
document.addEventListener('DOMContentLoaded', () => {
  fetch('./assets/posts.json')
    .then(res => res.json())
    .then(posts => {
      const container = document.getElementById('posts-list');
      if (!container) return;

      posts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'post-card';

        card.innerHTML = `
          <img src="${post.thumb}" alt="${post.title}" class="post-thumb" loading="lazy">
          <div class="post-content">
            <h2 class="post-title">${post.title}</h2>
            <p class="post-desc">${post.desc}</p>
            <a href="./posts/${post.file}" class="post-link">Read More &rarr;</a>
          </div>
        `;

        container.appendChild(card);
      });
    })
    .catch(err => {
      document.getElementById('posts-list').innerHTML =
        "<p>Could not load posts. Please check your posts.json file.</p>";
    });
});
