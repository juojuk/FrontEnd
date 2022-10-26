const arr = [];

btn_push.onclick = function () {
    const input = document.getElementById('input');
    arr.push(input.value);
    document.getElementById('output').innerHTML='input.value';
  };