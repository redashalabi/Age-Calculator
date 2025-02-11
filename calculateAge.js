  function calculateAge() {
            let dobInput = document.getElementById('dob').value;
            let result = document.getElementById('result');
            
            if (!dobInput) {
                result.innerText = "Please enter a valid date";
                result.style.color = "red";
                result.style.display = "block";
                return;
            }
            
            let dob = new Date(dobInput);
            let today = new Date();
            
            if (dob > today) {
                result.innerText = "Date cannot be in the future";
                result.style.color = "red";
                result.style.display = "block";
                return;
            }
            
            let ageYears = today.getFullYear() - dob.getFullYear();
            let ageMonths = today.getMonth() - dob.getMonth();
            let ageDays = today.getDate() - dob.getDate();
            
            if (ageDays < 0) {
                ageMonths--;
                ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            }
            if (ageMonths < 0) {
                ageYears--;
                ageMonths += 12;
            }
            
            result.innerText = `Your Age: ${ageYears} Years, ${ageMonths} Months, and ${ageDays} Days`;
            result.style.color = "green";
            result.style.display = "block";
        }
