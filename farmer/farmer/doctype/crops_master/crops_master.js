frappe.ui.form.on('Crops Master', {
    onload: function(frm) {  
        if (!frm.doc.crop_name) {
            console.log("Debug: No crop name provided, exiting.");
            return;
        }

        console.log("Debug: Fetching Farm Master records...");
        frappe.call({
            method: 'frappe.client.get_list',
            args: {
                doctype: 'Farm Master',
                fields: ['name', 'farm_name', 'site_name']  
            },
            callback: function(response) {
                if (response.message) {
                    console.log("Debug: Farm Master response:", response);
                    let farms = response.message;
                    frm.clear_table('crop_child_table');  

                    let uniqueFarms = new Set(); 
                    let uniqueSites = new Set();

                    let fetchPromises = farms.map(farm => {
                        console.log(`Debug: Fetching Farm Master record - ${farm.name}`);
                        return frappe.call({
                            method: 'frappe.client.get',
                            args: {
                                doctype: 'Farm Master',
                                name: farm.name
                            }
                        }).then(res => {
                            console.log(`Debug: Full Farm Master record for ${farm.name}:`, res);
                            
                            let crops = (res.message.actual_crops || []).filter(crop => crop.crop_name === frm.doc.crop_name);

                            return { 
                                farm: farm.name,
                                farm_name: farm.farm_name, 
                                site_name: farm.site_name, 
                                crops 
                            };
                        }).catch(error => {
                            console.error(`Error fetching Farm Master record for ${farm.name}:`, error);
                            return { 
                                farm: farm.name, 
                                farm_name: farm.farm_name, 
                                site_name: farm.site_name,
                                crops: [] 
                            }; 
                        });
                    });

                    Promise.all(fetchPromises).then(results => {
                        results.forEach(result => {
                            if (result.crops.length > 0) {  
                                uniqueFarms.add(result.farm_name);
                                uniqueSites.add(result.site_name);
                            }

                            result.crops.forEach(crop => {
                                let row = frm.add_child('crop_child_table');  
                                row.farm = result.farm;
                                row.farm_name = result.farm_name;  
                                row.site_name = result.site_name;  
                                row.start_month = crop.start_month;
                                row.end_month = crop.end_month; 
                                row.volume = crop.quantity; 
                                row.unit = crop.unit;
                            });
                        });

                        frm.refresh_field('crop_child_table');  

                        // Update only after fetching data into the child table
                        frm.set_value('no_of_farms', uniqueFarms.size);
                        frm.set_value('number_of_sites', uniqueSites.size);
                    });
                }
            },
            error: function(err) {
                frappe.msgprint(__('Permission Error: Unable to fetch Farm Master. Please check your user permissions.'));
                console.error("Debug: Farm Master Permission Error:", err);
            }
        });
    }
});
