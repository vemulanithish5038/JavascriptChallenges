
const calculatebtn = document.getElementById('calculatebtn')

calculatebtn.addEventListener('click',function() {
    const age = document.getElementById('age-in-years').value;
    const d = new Date(2025);
    if(age) {
        let ageInDay = age - d;
        document.getElementById('result').textContent = `your age in days is :${ageInDay}`;
    } else {
        document.getElementById('result').textContent = `enter your age`;
    }
});