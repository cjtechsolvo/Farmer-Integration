// frappe.listview_settings['Site'] = {
//     refresh: function (listview) {
//         listview.page.set_primary_action(__('+ Add Site'), function () {
//             add_site();
//         });
//     }
// };

// function add_site() {
//     let fields = [
//         {
//             fieldtype: 'HTML',
//             fieldname: 'site_image',
//             options: `<div style="text-align: center;">
//                         <img src="http://192.168.0.183:8004/files/farm-2.jpg" alt="Site Image"
//                             style="max-width: 100%; border-radius: 8px;"/>
//                       </div>`
//         },
//         {
//             fieldtype: 'Column Break'
//         },
//         {
//             label: __('Community (Site) Name'),
//             fieldname: 'community_name',
//             fieldtype: 'Data',
//             reqd: 1,
//             placeholder: __('E.g. Farmwarehouse community')
//         },
//         {
//             label: __('State'),
//             fieldname: 'state',
//             fieldtype: 'Select',
//             options: ['Select...', 'State 1', 'State 2', 'State 3'],
//             reqd: 1
//         },
//         {
//             label: __('Local Government Area (LGA)'),
//             fieldname: 'lga',
//             fieldtype: 'Select',
//             options: ['Select...', 'LGA 1', 'LGA 2', 'LGA 3'],
//             reqd: 1
//         },
//         {
//             label: __('Site Developer'),
//             fieldname: 'site_developer',
//             fieldtype: 'Link',
//             options: 'Site Developer',
//             reqd: 1
//         },
//         {
//             label: __('Status'),
//             fieldname: 'status',
//             fieldtype: 'Select',
//             options: ['Select...', 'Commissioned', 'Prospective', 'Under Construction'],
//             reqd: 1
//         },
//         {
//             label: __('Possible Crops'),
//             fieldname: 'possible_crops',
//             fieldtype: 'MultiSelect',
//             options: ['Crop 1', 'Crop 2', 'Crop 3', 'Crop 4']
//         },
//         {
//             label: __('Power Rating (kw)'),
//             fieldname: 'power_rating',
//             fieldtype: 'Float',
//             placeholder: __('E.g. 15000')
//         },
//         {
//             label: __('Do you have POS?'),
//             fieldname: 'has_pos',
//             fieldtype: 'Check'
//         },
        
//         {
//             label: __('PUE Estimate (%)'),
//             fieldname: 'pue_estimate_percent',
//             fieldtype: 'Float',
//             placeholder: __('E.g. 80')
//         },
//         {
//             label: __('PUE Estimate (kw)'),
//             fieldname: 'pue_estimate_kw',
//             fieldtype: 'Float',
//             default: 0
//         }
//     ];

//     var dialog = new frappe.ui.Dialog({
//         title: __('Add Site'),
//         fields: fields,
//         primary_action_label: __('Save'),
//         primary_action: function () {
//             let values = dialog.get_values();
//             if (values) {
//                 frappe.call({
//                     method: 'frappe.client.insert',
//                     args: {
//                         doc: {
//                             doctype: 'Site',
//                             community_name: values.community_name,
//                             state: values.state,
//                             lga: values.lga,
//                             site_developer: values.site_developer,
//                             status: values.status,
//                             possible_crops: values.possible_crops,
//                             power_rating: values.power_rating,
//                             has_pos: values.has_pos,
//                             pue_estimate_percent: values.pue_estimate_percent,
//                             pue_estimate_kw: values.pue_estimate_kw
//                         }
//                     },
//                     callback: function (r) {
//                         if (!r.exc) {
//                             frappe.msgprint(__('Site Saved!'));
//                             dialog.hide();
//                         } else {
//                             frappe.msgprint(__('Failed to save Site.'));
//                         }
//                     }
//                 });
//             }
//         }
//     });

//     dialog.set_secondary_action(function () {
//     dialog.hide(); // Close the dialog
//     frappe.new_doc('Site'); // Open a new Site form
// }, __('Edit in Full Form'));

//     setTimeout(() => {
//         $(".modal-footer .btn-secondary").text("Edit in Full Form");
//     }, 200);

//     dialog.show();
//     dialog.$wrapper.find('.modal-dialog').css("max-width", "60%");
// }
