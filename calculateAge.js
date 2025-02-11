 function calculateAge() {
            let dob = document.getElementById('dob').value;
            if (dob === "") {
                document.getElementById('result').innerText = "يرجى إدخال تاريخ الميلاد";
                return;
            }
            let dobDate = new Date(dob);
            let today = new Date();
            let ageYears = today.getFullYear() - dobDate.getFullYear();
            let ageMonths = today.getMonth() - dobDate.getMonth();
            let ageDays = today.getDate() - dobDate.getDate();
            
            if (ageDays < 0) {
                ageMonths--;
                ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            }
            if (ageMonths < 0) {
                ageYears--;
                ageMonths += 12;
            }
            
            document.getElementById('result').innerText = `عمرك هو ${ageYears} سنة و ${ageMonths} شهر و ${ageDays} يوم`;
        }
