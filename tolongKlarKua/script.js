const form = document.querySelector('form');
form.addEventListener('submit',insertTable);

function insertTable(e) {
    e.preventDefault();

    let studentid = document.querySelector('#nim');
    let studentname = document.querySelector('#fname');
    let blankradio = document.querySelector('#blankradio1');
    let blankradio = document.querySelector('#blankradio2');
    let faculty1 = document.querySelector('#faculty1');
    let prodi1 = document.querySelector('#prodi1');

    //console.log('${studentid.value} / ${studentname.value} / ${blankradio.value} / ${blankradio.value} / ${faculty1.value} / ${prodi1.value}');
    const table = document.createElement('table');
    table.className = 'stripped-item';

    const tableText = document.createTextNode('${studentid.value} / ${studentname.value} / ${blankradio.value} / ${blankradio.value} / ${faculty1.value} / ${prodi1.value}');
    table.appendChild(tableText);

    const th = document.querySelector('#inputtable');
    ul.appendChild(table);
    console.log(tr);
}