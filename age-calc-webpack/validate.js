function validate(d,m,y,c1,c2,c3)
{
    const curyear = new Date().getFullYear();
    const s = 'This field is required';
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
return [c1,c2,c3];
}