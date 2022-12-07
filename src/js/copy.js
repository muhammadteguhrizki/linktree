// Project 1
const copyBtn1 = document.getElementById('copyBtn1');
const copyText1 = document.getElementById('copyText1');

copyBtn1.onclick = () => {
  copyText1.select();
  document.execCommand('copy');
  Swal.fire({
    icon: 'sukses',
    title: 'Text telah di copy',
    showConfirmButton: false,
    timer: 1000,
  });
};

// Project 2
const copyBtn2 = document.getElementById('copyBtn2');
const copyText2 = document.getElementById('copyText2');

copyBtn2.onclick = () => {
  copyText2.select();
  document.execCommand('copy');
  Swal.fire({
    icon: 'sukses',
    title: 'Text telah di copy',
    showConfirmButton: false,
    timer: 1000,
  });
};

// Project 3
const copyBtn3 = document.getElementById('copyBtn3');
const copyText3 = document.getElementById('copyText3');

copyBtn3.onclick = () => {
  copyText3.select();
  document.execCommand('copy');
  Swal.fire({
    icon: 'sukses',
    title: 'Text telah di copy',
    showConfirmButton: false,
    timer: 1000,
  });
};

// Project 4
const copyBtn4 = document.getElementById('copyBtn4');
const copyText4 = document.getElementById('copyText4');

copyBtn4.onclick = () => {
  copyText4.select();
  document.execCommand('copy');
  Swal.fire({
    icon: 'sukses',
    title: 'Text telah di copy',
    showConfirmButton: false,
    timer: 1000,
  });
};
