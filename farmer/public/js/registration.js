// --- Full Width for Signup Page ---
window.onload = function () {
    var loginContent = document.querySelector(".for-signup .login-content");
    if (loginContent) {
        loginContent.classList.add("full-width-login");
    }

     // For hiding .page-card-head
     var pageCardHead = document.querySelector(".for-signup .page-card-head");
     if (pageCardHead) {
         pageCardHead.classList.add("hide-page-card-head");
     }
};

// --- Main Logic on DOM Ready ---
document.addEventListener('DOMContentLoaded', function () {

    // --- Bank Details Show/Hide Logic ---
    const bankYes = document.getElementById('bank_account_yes');
    const bankNo = document.getElementById('bank_account_no');
    const bankFields = document.getElementById('bank-details-fields');

    if (bankYes && bankNo && bankFields) {
        bankYes.addEventListener('change', () => {
            if (bankYes.checked) {
                bankFields.style.display = 'block';
            }
        });

        bankNo.addEventListener('change', () => {
            if (bankNo.checked) {
                bankFields.style.display = 'none';
            }
        });
    }

    // --- Step Form Logic ---
    const steps = document.querySelectorAll('.form-step');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const submitBtn = document.getElementById('submit-btn');
    const progressBar = document.getElementById('progress-bar'); // Optional if you want to add progress bar

    let currentStep = 0;

    function showStep(step) {
        steps.forEach((s, index) => {
            s.style.display = (index === step) ? 'block' : 'none';
        });

        if (prevBtn) prevBtn.style.display = (step > 0) ? 'inline-block' : 'none';
        if (nextBtn) nextBtn.style.display = (step < steps.length - 1) ? 'inline-block' : 'none';
        if (submitBtn) submitBtn.style.display = (step === steps.length - 1) ? 'inline-block' : 'none';

        // --- Progress Bar Update ---
        if (progressBar) {
            const progress = ((step + 1) / steps.length) * 100;
            progressBar.style.width = progress + '%';
        }
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentStep++;
            showStep(currentStep);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentStep--;
            showStep(currentStep);
        });
    }

    showStep(currentStep);

});

// --- Frappe Ready for Form Submission ---
frappe.ready(() => {

    console.log("CSRF Token from JS File:", frappe.csrf_token);

    const registerForm = document.getElementById("register-form");

    if (registerForm) {
        registerForm.onsubmit = async function (e) {
            e.preventDefault();
            console.log("Submitting Form...");

            // --- Capture Field Values ---
            let first_name = document.getElementById("first_name").value.trim();
            let last_name = document.getElementById("last_name").value.trim();
            let phone = document.getElementById("phone").value.trim();
            let email = document.getElementById("email").value.trim();
            let new_password = document.getElementById("new_password").value.trim();

            console.log("Form Data:", { first_name, last_name, phone, email, new_password });

            // --- Basic Validation ---
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!first_name || !last_name || !emailRegex.test(email)) {
                console.warn("Validation Failed - Invalid Name or Email");
                alert("Valid email and name required");
                return;
            }

            let formData = { first_name, last_name, phone, email, new_password };

            try {
                let response = await fetch("/api/method/farmer.api.user_api.create_user", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Frappe-CSRF-Token": frappe.csrf_token,
                    },
                    body: JSON.stringify(formData),
                    credentials: "include",
                });

                let result = await response.json();
                console.log("API Result:", result);

                if (result.message && result.message.includes("no roles enabled")) {
                    alert("User created, but no roles are assigned. Please assign roles in the dashboard.");
                    return;
                }

                if (result.message === "User Created Successfully") {
                    alert("User Registered Successfully");
                    window.location.href = "/";
                    return;
                }

                alert(result.message || "Something went wrong!");
            } catch (error) {
                console.error("API Error:", error);
                alert("Something went wrong, please try again.");
            }
        };
    }

});
