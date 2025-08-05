let allPosts = [];

document.addEventListener('DOMContentLoaded', () => {
  fetch('./assets/posts.json')
    .then(res => res.json())
    .then(posts => {
      allPosts = posts;
      renderPosts(posts);

      const searchInput = document.getElementById('search-input');
      if (searchInput) {
        searchInput.addEventListener('input', e => {
          const searchValue = e.target.value.toLowerCase();
          const filtered = allPosts.filter(post =>
            post.title.toLowerCase().includes(searchValue) ||
            post.desc.toLowerCase().includes(searchValue)
          );
          renderPosts(filtered);
        });
      }
    });

  function renderPosts(posts) {
    const container = document.getElementById('posts-list');
    container.innerHTML = '';
    posts.forEach(post => {
      const card = document.createElement('div');
      card.className = 'col';
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
  }
});
