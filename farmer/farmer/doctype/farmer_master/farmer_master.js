frappe.ui.form.on('Farmer Master', {
    refresh: function(frm) {
        console.log("Farmer Master Form Refreshed...");
        
        // Fetch Website Items for the Farmer
        if (frm.doc.farmer) {
            console.log("Fetching Website Items for farmer:", frm.doc.farmer);
            frappe.call({
                method: "frappe.client.get_list",
                args: {
                    doctype: "Website Item",
                    filters: { owner: frm.doc.farmer },
                    fields: ["name", "item_name"]
                },
                callback: function(response) {
                    console.log("Website Items Response:", response);

                    if (response.message && response.message.length > 0) {
                        frm.clear_table("product_section");

                        response.message.forEach(item => {
                            let row = frm.add_child("product_section");
                            row.product_id = item.name;
                            row.product_name = item.item_name;
                        });

                        frm.refresh_field("product_section");
                        console.log("Product Section Updated Successfully.");
                    } else {
                        console.log("No Website Items found for this farmer.");
                    }
                },
                error: function(error) {
                    console.error("Error fetching Website Items:", error);
                }
            });
        } else {
            console.warn("No farmer email found in the 'farmer' field.");
        }
    }
});
