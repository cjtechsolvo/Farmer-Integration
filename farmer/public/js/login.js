frappe.ready(() => {
    document.getElementById("login-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("login_email").value;
        const password = document.getElementById("login_password").value;

        frappe.call({
            method: "farmer.api.user_api.login", // Update with the correct path
            args: {
                email: email,
                password: password
            },
            callback: function (response) {
                if (response.message.status === "success") {
                    // Store token if needed
                    localStorage.setItem("auth_token", response.message.token);

                    // Redirect to home page
                    window.location.href = "/app";  
                } else {
                    frappe.msgprint(response.message.message || "Invalid email or password. Please try again.");
                }
            }
        });
    });
});
