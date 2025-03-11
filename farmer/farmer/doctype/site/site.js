// Copyright (c) 2025, chirag and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Site", {
// 	refresh(frm) {

// 	},
// });

// frappe.provide("frappe.ui.form");

// frappe.ui.form.SiteQuickEntryForm = frappe.ui.form.QuickEntryForm.extend({
//     init: function(doctype, after_insert) {
//         this._super(doctype, after_insert);
//     },

//     render_dialog: function() {
//         this._super();

//         // Add Power Rating field dynamically
//         let powerRatingField = {
//             fieldname: "power_rating",
//             label: __("Power Rating"),
//             fieldtype: "int",
//             reqd: 1
//         };

//         this.dialog.fields_dict.power_rating = this.dialog.make_field(powerRatingField);
//         this.dialog.fields_dict.power_rating.refresh();
//     }
// });

// // Override the Quick Entry form for the Site Doctype
// frappe.ui.form.make_quick_entry = function(doctype, after_insert) {
//     if (doctype === "Site") {
//         new frappe.ui.form.SiteQuickEntryForm(doctype, after_insert);
//     } else {
//         new frappe.ui.form.QuickEntryForm(doctype, after_insert);
//     }
// };
