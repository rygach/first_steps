let modalDMB = document.getElementById('modalDMB');
let myBtn4 = document.getElementById('myBtn4');
let close4 = document.getElementsByClassName('button-close')[3];
let calculateDMB = document.getElementById('calculateDMB');
let dateResult = document.getElementById('dateResult');


myBtn4.onclick = function() {
    modalDMB.style.display = 'block';
}

close4.onclick = function () {
	modalDMB.style.display = 'none'; 
}

calculateDMB.onclick = () => {
    let dateOfArmy = document.getElementById('dateOfArmy');
    dateResult.innerHTML = `Your freedom will be ${freedomDate()}`;
}

function freedomDate () {
    let freeDate = new Date;
    freeDate.setFullYear(1222, 12, 12);
    // freeDate.setMonth(dateOfArmy.month);
    // freeDate.setFullYear(dateOfArmy.year);
    return(console.log(freeDate.value));
}