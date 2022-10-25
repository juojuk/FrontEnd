const cardNum = (e) => {
    const fld = e.target;
    if (!isNaN(fld.value) && fld.value.length === 16) {
      lbl_cardNum.innerHTML = `${fld.value.split(/(\d{4})/).join(' ').trim()}`;
    } else {
      lbl_cardNum.innerHTML = `**** **** **** ****`;
    }
  };

  const cardHolder = (e) => {
    const fld = e.target;
    if (isNaN(fld.value)) {
      lbl_cardHolder.innerHTML = `${fld.value}`;
    } else {
      lbl_cardHolder.innerHTML = `FULL NAME`;
    }
  };

  fld_cardNum.addEventListener('keyup', cardNum);

  fld_cardHolder.addEventListener('keyup', cardHolder);