fetch('https://jsonplaceholder.typicode.com/users/1/albums')
  .then(function (response) {
      return response.json();
  })
  .then(function (data) {
      appendData(data);
  })
  .catch(function (err) {
      console.log('error: ' + err);
  });

function appendData(data) {
  const mainContainer = document.getElementById("myData");

  for (var i = 0; i < data.length; i++) {
    let div = document.createElement("div");
    div.classList.add('item');
    div.innerHTML = 'ID: ' + data[i].id + ' ' + data[i].title;
    mainContainer.appendChild(div);
  }
}