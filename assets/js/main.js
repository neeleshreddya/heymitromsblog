document.addEventListener('DOMContentLoaded', () => {
  fetch('./assets/posts.json')
    .then(res => res.json())
    .then(posts => {
      const container = document.getElementById('posts-list');
      if (!container) return;

      posts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'col'; // Bootstrap grid column

        card.innerHTML = `
          <div class="card h-100 shadow-sm">
            <img src="${post.thumb}" class="card-img-top" alt="${post.title}" loading="lazy" />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text flex-grow-1">${post.desc}</p>
              <a href="./posts/${post.file}" class="btn btn-primary mt-auto">Read More &rarr;</a>
            </div>
          </div>
        `;

        container.appendChild(card);
      });
    })
    .catch(() => {
      document.getElementById('posts-list').innerHTML =
        "<p>Could not load posts. Please check your posts.json file.</p>";
    });
});
