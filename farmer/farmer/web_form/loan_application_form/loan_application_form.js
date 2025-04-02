frappe.ready(() => {
    console.log("Loan Application Web Form Loaded");

    function getQueryParams() {
        let params = new URLSearchParams(window.location.search);
        return {
            sales_order: params.get("sales_order") || "",
            total_amount: params.get("total_amount") || "0",
            product_name: params.get("product_name") || "",
        };
    }

    let queryParams = getQueryParams();
    console.log("Query Parameters Extracted:", queryParams);

    if (typeof frappe.web_form !== "undefined") {
        console.log("Web Form Object Exists");

        // Set values from query parameters
        frappe.web_form.set_value("sales_order", queryParams.sales_order);
        frappe.web_form.set_value("total_amount", queryParams.total_amount);
        frappe.web_form.set_value("product_name", queryParams.product_name);

        // Fetch the logged-in user's email
        fetch("/api/method/frappe.auth.get_logged_user")
            .then(response => response.json())
            .then(userData => {
                if (!userData || !userData.message) {
                    console.error("Failed to fetch logged-in user.");
                    return;
                }

                let userEmail = userData.message;
                console.log("Logged-in User Email:", userEmail);


                // Set the applicant field with the email
                frappe.web_form.set_value("applicant", userEmail);

                // Fetch user details (to get full name)
                return fetch(`/api/resource/User/${userEmail}`);
            })
            .then(response => response.json())
            .then(userDetails => {
                if (!userDetails || !userDetails.data) {
                    console.error("Failed to fetch user details.");
                    return;
                }

                let userName = userDetails.data.full_name || "";
                console.log("Logged-in User Name:", userName);

                // Set the applicant_name field with the user's full name
                frappe.web_form.set_value("applicant_name", userName);
            })
            .catch(error => console.error("Error fetching user data:", error));
    } else {
        console.error("frappe.web_form is NOT available!");
    }
});
