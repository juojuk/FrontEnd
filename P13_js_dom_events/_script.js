btn_with_handler.onclick = function () {
    document.getElementById('hello').innerHTML = 'Hello from eventHandler';
  };
  // REGION for functions
  function helloFromEventListner() {
    document.getElementById('hello').innerHTML = 'Hello from event LISTNER';
  }
  
  function funkcija1() {
    // kazkas
    console.log('ivykdyta funkcija 1');
  }
  function funkcija2() {
    // kazkas
  }
  function funkcija3() {
    // kazkas
  }
  function nameToUpperCase() {
    const fld = document.getElementById('fld_name');
    fld.value = fld.value.toUpperCase();
  }
  const onMouseOverLastName = () => {
    const fld = document.getElementById('fld_lastname');
    fld.style.backgroundColor = 'blue';
  };
  
  //REGION for event listner registrations
  //btn_with_listner.addEventListener('click', helloFromEventListner);
  //document.querySelector('#btn_with_listner').addEventListener('click', helloFromEventListner);
  btn_with_listner.addEventListener('click', () => {
    funkcija1();
    funkcija2();
    funkcija3();
    helloFromEventListner();
  });
  fld_name.addEventListener('change', nameToUpperCase);
  fld_lastname.addEventListener('mouseover', onMouseOverLastName);
  fld_lastname.addEventListener('mouseout', () => {
    fld_lastname.style.backgroundColor = 'white';
  });