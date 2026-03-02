const loadData = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => loadPost(data));
};

//   {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },

const loadPost = (data) => {
  const container = document.querySelector(".container");
  const div = document.createElement("div");
  container.innerHTML = "";
  data.forEach((element) => {
    const li = document.createElement("li");
    li.innerText = element.title;
    div.appendChild(li);
  });
  container.append(div);
  return div;
};
