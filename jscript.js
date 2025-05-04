async function fetchData() {
  const [usersRes, postsRes, commentsRes] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users"),
    fetch('https://jsonplaceholder.typicode.com/posts'),
    fetch('https://jsonplaceholder.typicode.com/comments'),
  ]);

  const users = await usersRes.json();
  const posts = await postsRes.json();
  const comments = await commentsRes.json();

  return { users, posts, comments };
}

function createTable(users, posts, comments) {
  const table = document.getElementById('usersTable');

  const headerRow = document.createElement('tr');
  const headers = ['Username', 'Email', 'Company', 'Geo Location', 'Posts (Title & Comments Count)'];
  headers.forEach(h => {
    const th = document.createElement('th');
    th.textContent = h;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  users.forEach(user => {
    const row = document.createElement('tr');

    const usernameTd = document.createElement('td');
    usernameTd.textContent = user.username;
    row.appendChild(usernameTd);

    const emailTd = document.createElement('td');
    emailTd.textContent = user.email;
    row.appendChild(emailTd);

    const companyTd = document.createElement('td');
    companyTd.textContent = user.company?.name || 'N/A';
    row.appendChild(companyTd);

    const geoTd = document.createElement('td');
    const geo = user.address?.geo;
    geoTd.textContent = geo ? `Lat: ${geo.lat}, Lng: ${geo.lng}` : 'N/A';
    row.appendChild(geoTd);

    const postsTd = document.createElement('td');
    const userPosts = posts.filter(post => post.userId === user.id);
    const ul = document.createElement('ul');

    userPosts.forEach(post => {
      const postComments = comments.filter(c => c.postId === post.id);
      const li = document.createElement('li');
      li.textContent = `${post.title} (${postComments.length} comments)`;
      ul.appendChild(li);
    });

    postsTd.appendChild(ul);
    row.appendChild(postsTd);

    table.appendChild(row);
  });
}

fetchData()
  .then(({ users, posts, comments }) => {
    createTable(users, posts, comments);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
