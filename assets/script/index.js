//Получаю на вход объект поста и возвращаю строку HTML-разметки:
function makePost(post) {
  return `
  <div>
    <h2>Заголовок: ${post.title}</h2>
    <p>Статья: ${post.body}</p>
  </div>
  `;
}

//Добавляю разметку в контейнер:
function addPost(posts) {
  const container = document.querySelector('.container');
  posts.forEach(post => {
    container.innerHTML += makePost(post);
  })
}

//Делаю GET-запрос:
function getPost() {
  const paragraph = document.querySelector('.err-message');

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
    return res.json()
  })
  .then(data => {
    addPost(data)
  })
  .catch(err => {
    paragraph.textContent = `Ошибка: ${err}`;
  })
}

getPost();