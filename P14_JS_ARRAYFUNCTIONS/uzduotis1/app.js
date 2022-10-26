const arr = [];

btn_push.onclick = function () {
    const input = document.getElementById('input');
    arr.push(input.value);
    document.getElementById('output').innerHTML=arr;
  };

btn_pop.onclick = function () {
    arr.pop();
    document.getElementById('output').innerHTML=arr;
    };

btn_unshift.onclick = function () {
    const input = document.getElementById('input');
    arr.unshift(input.value);
    document.getElementById('output').innerHTML=arr;
  };

btn_shift.onclick = function () {
    arr.shift();
    document.getElementById('output').innerHTML=arr;
};

