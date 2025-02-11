function calculateAge() {
    // الحصول على تاريخ الميلاد المدخل من المستخدم
    const dobInput = document.getElementById('dob').value;
    if (!dobInput) {
        document.getElementById('result').innerHTML = 'Please enter a valid date.';
        return;
    }

    // تحويل التاريخ المدخل إلى كائن Date
    const dob = new Date(dobInput);
    const today = new Date();

    // حساب العمر
    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();

    // إذا كانت تاريخ الميلاد في الشهر السابق، ينقص العمر سنة واحدة
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    // عرض النتيجة
    document.getElementById('result').innerHTML = `Your age is: ${age} years old.`;
}
