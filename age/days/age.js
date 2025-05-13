
const calculatebtn = document.getElementById('calculatebtn')

calculatebtn.addEventListener('click',function() {
    const age = document.getElementById('age-in-years').value;
    if(age) {
        let ageInDay = age * 365;
        document.getElementById('result').textContent = `your born year is :${ageInDay}`;
    } else {
        document.getElementById('result').textContent = `your age in`;
    }
});


