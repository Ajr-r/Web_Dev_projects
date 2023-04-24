let day = 0;
let month = 0;
let year = 0;
let table = {
  daytable: [document.querySelector('.d'), document.querySelector('#d'), document.querySelector('label[for="d"]')],
  monthtable: [document.querySelector('.m'), document.querySelector('#m'), document.querySelector('label[for="m"]')],
  yeartable: [document.querySelector('.y'), document.querySelector('#y'), document.querySelector('label[for="y"]')]
}
document.querySelector('.gim').addEventListener('click', (e) => {
  // e.preventDefault();
  const d = document.querySelector('#d').value;
  const m = document.querySelector('#m').value;
  const y = document.querySelector('#y').value;
  const s = 'This field is required';
  console.log(d);
  const curyear = new Date().getFullYear();
  let c1, c2, c3 = 0;

  if (!d) {
    table.daytable[0].innerHTML = s;
    table.daytable[1].style.border = '1px solid red';
    table.daytable[2].style.color = 'red';
    c1 = 1;
  } else if (d <= 0 || d > 31) {
    table.daytable[0].innerHTML = "Must be a valid day";
    table.daytable[1].style.border = '1px solid red';
    table.daytable[2].style.color = 'red';
    c1 = 1;
  } else {
    table.daytable[0].innerHTML = "";
    table.daytable[1].style.border = '';
    table.daytable[2].style.color = '';
    c1 = 0;
  }

  if (!m) {
    table.monthtable[0].innerHTML = s;
    table.monthtable[1].style.border = '1px solid red';
    table.monthtable[2].style.color = 'red';
    c2 = 1;
  } else if (m <= 0 || m > 12) {
    table.monthtable[0].innerHTML = "Must be a valid month";
    table.monthtable[1].style.border = '1px solid red';
    table.monthtable[2].style.color = 'red';
    c2 = 1;
  } else {
    table.monthtable[0].innerHTML = "";
    table.monthtable[1].style.border = '';
    table.monthtable[2].style.color = '';
    c2 = 0;
  }

  if (!y) {
    table.yeartable[0].innerHTML = s;
    table.yeartable[1].style.border = '1px solid red';
    table.yeartable[2].style.color = 'red';
    c3 = 1;
  } else if (y < 0 || y > curyear) {
    table.yeartable[0].innerHTML = "Must be a valid year";
    table.yeartable[1].style.border = '1px solid red';
    table.yeartable[2].style.color = 'red';
    c3 = 1;
  } else {
    table.yeartable[0].innerHTML = "";
    table.yeartable[1].style.border = '';
    table.yeartable[2].style.color = '';
    c3 = 0;
  }


  console.log(c1, c2, c3);
  if (c1 || c2 || c3) return;
  day = d;
  month = m;
  year = y;
  console.log(day);
  const form = document.querySelector('form');
  form.dispatchEvent(new Event('submit', { bubbles: true }));

});

document.querySelector('form').addEventListener('submit', (e) => {
  findAge(new Date().getDay(), new Date().getMonth(), new Date().getFullYear(), Number(day),
    Number(month), Number(year));
});

//Findage algorithm is not accurate
function findAge(current_date, current_month, current_year, birth_date,
  birth_month, birth_year) {
  // days of every month 
  month = [31, 28, 31, 30, 31, 30, 31,
    31, 30, 31, 30, 31]

  // if birth date is greater than current date 
  // then do not count this month and add 30 
  // to the date so as to subtract the date and 
  // get the remaining days 
  if (birth_date > current_date) {
    current_date = current_date + month[birth_month - 1];
    current_month = current_month - 1;
  }

  // if birth month exceeds current month, then do 
  // not count this year and add 12 to the month so 
  // that we can subtract and find out the difference 
  if (birth_month > current_month) {
    current_year = current_year - 1;
    current_month = current_month + 12;
  }

  // calculate date, month, year 
  var calculated_date = current_date - birth_date;
  var calculated_month = current_month - birth_month;
  var calculated_year = current_year - birth_year;

  // print the present age 
  document.querySelector('.yo').innerHTML = calculated_year;
  document.querySelector('.mo').innerHTML = calculated_month;
  document.querySelector('.do').innerHTML = calculated_date;

}


