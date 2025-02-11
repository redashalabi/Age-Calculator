function calculateAge() {
    const dob = document.getElementById('dob').value;
    if (dob === "") {
        document.getElementById('result').innerHTML = "Please select your date of birth!";
        return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById('result').innerHTML = `You are ${age} years old.`;
}
