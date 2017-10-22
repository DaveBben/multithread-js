if (window.Worker) {
  const myWorker = new Worker('./single-thread.js');
  myWorker.onmessage = function (e) {
    const li = document.createElement('li');
    li.innerHTML = e.data;
    document.querySelector('ul').appendChild(li);
  };
}
