frappe.ui.form.on('Farm Master', {
    onload: function(frm) {  
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
