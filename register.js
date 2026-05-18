document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("registerForm");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let isValid = true;

        let name = document.getElementById("name");
        let phone = document.getElementById("phone");
        let date = document.getElementById("date");

        // 🔴 Name
        if (name.value.trim().length < 3) {
            alert("Name must be at least 3 characters");
            isValid = false;
        }

        // 🔴 Phone
        if (!/^\d{8,15}$/.test(phone.value.trim())) {
            alert("Phone must be 8-15 digits");
            isValid = false;
        }

       let dateInput = document.getElementById("dob");

// اليوم - 16 سنة
let today = new Date();
let maxDate = new Date(today.getFullYear() - 16, today.getMonth(), today.getDate());

dateInput.max = maxDate.toISOString().split("T")[0];

        // ✅ Success
        if (isValid) {
            alert("Registration successful 🎉");
            form.submit();
        }
    });

    function calculateAge(dob) {
        let birth = new Date(dob);
        let today = new Date();

        let age = today.getFullYear() - birth.getFullYear();
        let m = today.getMonth() - birth.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
            age--;
        }

        return age;
    }

});
document.addEventListener("DOMContentLoaded", function () {

    // 🔄 تحميل الخطة المحفوظة
    let savedPlan = sessionStorage.getItem("membershipPlan");

    if (savedPlan) {
        document.getElementById(savedPlan).checked = true;
    }

    // 🎯 عند تغيير الاختيار
    document.querySelectorAll('input[name="plan"]').forEach(radio => {
        radio.addEventListener("change", function () {
            sessionStorage.setItem("membershipPlan", this.id);
        });
    });

});