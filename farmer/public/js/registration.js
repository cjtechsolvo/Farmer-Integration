frappe.ready(() => {
    console.log("CSRF Token from JS File:", frappe.csrf_token);

    document.getElementById("register-form").onsubmit = async function (e) {
        e.preventDefault();
        console.log("Submitting Form...");

        let formData = {
            first_name: document.getElementById("first_name").value,
            last_name: document.getElementById("last_name").value,
            phone: document.getElementById("phone").value, 
            email: document.getElementById("email").value,
            new_password: document.getElementById("new_password").value, 
        };

        console.log("Form Data:", formData);

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

            if (result.message && result.message.message === "User Created Successfully") {
                alert("User Registered Successfully");
                window.location.href = "/";
                return;
            }

            if (result._server_messages) {
                let messages = JSON.parse(result._server_messages).map(msg => JSON.parse(msg).message);
                alert(messages.join("\n"));
                return;
            }

            alert("Something went wrong, please try again.");
        } catch (error) {
            console.error("API Error:", error);
            alert("Something went wrong, please try again.");
        }
    };
});
