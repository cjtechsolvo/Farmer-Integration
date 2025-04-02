frappe.ui.form.on("PUE Sponsor", {
    refresh: function (frm) {
        calculate_total_quantity(frm);
        no_of_equipments(frm);
    },
    sponsored_equipments_add: function (frm) {
        calculate_total_quantity(frm);
        no_of_equipments(frm);
    },
    sponsored_equipments_remove: function (frm) {
        calculate_total_quantity(frm);
        no_of_equipments(frm);
    }
});

frappe.ui.form.on("Sponsored Equipments", {
    quantity: function (frm, cdt, cdn) {
        calculate_total_quantity(frm);
    },
    equipment: function (frm, cdt, cdn) {
        calculate_total_quantity(frm);
        no_of_equipments(frm);
    }
});

// Function to calculate total quantity
function calculate_total_quantity(frm) {
    let total_qty = 0;
    let item_totals = {}; // Store total quantity per equipment

    // Loop through child table and sum up quantity
    frm.doc.sponsored_equipments.forEach(row => {
        total_qty += row.quantity || 0;

        // Sum quantity for each unique item
        if (row.equipment) {
            if (!item_totals[row.equipment]) {
                item_totals[row.equipment] = 0;
            }
            item_totals[row.equipment] += row.quantity || 0;
        }
    });

    // Set the calculated value in the total_quantity field of the main doctype
    frm.set_value("total_quantity", total_qty);

    // Update total_for_item field in each row of the child table
    frm.doc.sponsored_equipments.forEach(row => {
        if (row.equipment) {
            frappe.model.set_value(row.doctype, row.name, "total_for_item", item_totals[row.equipment]);
        }
    });

    frm.refresh_field("sponsored_equipments"); // Refresh the child table to show updated values
}

// Function to calculate the number of unique equipments
function no_of_equipments(frm) {
    let equipments = new Set();

    (frm.doc.sponsored_equipments || []).forEach(row => {
        if (row.equipment) {
            equipments.add(row.equipment);
        }
    });

    frm.set_value('equipments', equipments.size);
    frm.refresh_field('equipments');
}

