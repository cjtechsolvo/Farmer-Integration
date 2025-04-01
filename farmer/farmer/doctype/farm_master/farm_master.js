frappe.ui.form.on('Farm Master', {
    refresh: function(frm) {  
        update_number_of_crops(frm);
    },
    actual_crops_add: function(frm) {  
        update_number_of_crops(frm);
    },
    actual_crops_remove: function(frm) {  
        update_number_of_crops(frm);
    },              
    validate: function(frm) {  
        update_number_of_crops(frm);
    }
});

function update_number_of_crops(frm) {
    let uniqueCrops = new Set();

    (frm.doc.actual_crops || []).forEach(row => {
        if (row.crop_name) {
            uniqueCrops.add(row.crop_name);
        }
    });

    frm.set_value('number_of_crops', uniqueCrops.size);
    frm.refresh_field('number_of_crops');  // Ensures the field updates immediately
}



frappe.ui.form.on('Farm Master', {
    refresh: function(frm) {
        update_crop_name_field(frm);
    },
    onload: function(frm) {
        update_crop_name_field(frm);
    },
    actual_crops_add: function(frm, cdt, cdn) {
        update_crop_name_field(frm);
    },
    actual_crops_remove: function(frm, cdt, cdn) {
        update_crop_name_field(frm);
    },
    actual_crops: function(frm) {
        update_crop_name_field(frm);
    },
});

// Function to update crop_name based on actual_crops child table
function update_crop_name_field(frm) {
    if (!frm.doc.actual_crops || frm.doc.actual_crops.length === 0) {
        frm.set_value('crop_name', '');
        return;
    }

    let crops = [];

    // Loop through the actual_crops child table rows
    frm.doc.actual_crops.forEach(row => {
        if (row.crop_name) {  // Make sure crop_name exists in the row
            crops.push(row.crop_name);  // Push the crop_name to the crops array
        }
    });

    // Remove duplicates from the crops array
    let unique_crops = [...new Set(crops)];

    // Join the crops into a comma-separated string
    const crop_names_string = unique_crops.join(", ");

    // Set the value of the crop_name field
    frm.set_value('crop_name', crop_names_string);

    // Refresh the crop_name field to show the updated value
    frm.refresh_field('crop_name');
}
