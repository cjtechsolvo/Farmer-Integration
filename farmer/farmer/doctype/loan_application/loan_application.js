frappe.ui.form.on('Loan Application', {

    down_payment_percentage: function(frm) {
        calculate_down_payment(frm);
    },
    total_amount: function(frm) {
        calculate_down_payment(frm);
    },
    refresh: function(frm) {
        // Ensure the button is shown only if loan is approved and down payment is not made
        if (frm.doc.status === 'Approved' && !frm.doc.down_payment_paid) {
            frm.add_custom_button(__('Make Down Payment'), function() {
                make_down_payment(frm);
            }).addClass('btn-primary');
        }
    },
    status: function(frm) {
        frm.refresh();
    },
    sales_order: function(frm) {
        if (frm.doc.sales_order) {
            fetch_customer_from_sales_order(frm);
        }
    }
});

// Function to calculate down payment and loan amount
function calculate_down_payment(frm) {
    if (frm.doc.total_amount && frm.doc.down_payment_percentage) {
        let down_payment = (frm.doc.total_amount * frm.doc.down_payment_percentage) / 100;
        let loan_amount = frm.doc.total_amount - down_payment;

        frm.set_value('down_payment_amount', down_payment);
        frm.set_value('loan_amount', loan_amount);  // Storing remaining amount in 'loan_amount' field
    }
}

// Fetch customer from Sales Order
function fetch_customer_from_sales_order(frm) {
    frappe.call({
        method: "frappe.client.get",
        args: {
            doctype: "Sales Order",
            name: frm.doc.sales_order
        },
        callback: function(response) {
            if (response.message && response.message.customer) {
                frm.set_value('customer', response.message.customer);
            }
        }
    });
}

// Function to process down payment
function make_down_payment(frm) {
    if (!frm.doc.customer) {
        frappe.msgprint(__('Customer information is missing. Please ensure the Loan Application has a valid customer.'));
        return;
    }

    frappe.call({
        method: "frappe.client.insert",
        args: {
            doc: {
                doctype: "Payment Entry",
                payment_type: "Receive",
                party_type: "Customer",
                party: frm.doc.customer,  // Ensure the correct customer is assigned
                paid_amount: frm.doc.down_payment_amount,
                received_amount: frm.doc.down_payment_amount
            }
        },
        callback: function(response) {
            if (response.message) {
                frappe.msgprint(__('Down Payment Recorded Successfully'));
                frm.set_value('down_payment_paid', 1);
                frm.save();
                frm.reload_doc();
            }
        }
    });
}


frappe.ui.form.on('Loan Application', {
    loan_amount: function(frm) {
        calculate_total_amount_with_interest(frm);
    },
    interest_rate: function(frm) {
        calculate_total_amount_with_interest(frm);
    },
    repayment_period: function(frm) {
        calculate_total_amount_with_interest(frm);
    }
});

function calculate_total_amount_with_interest(frm) {
    if (frm.doc.loan_amount && frm.doc.interest_rate && frm.doc.repayment_period) {
        let P = frm.doc.loan_amount;
        let r = frm.doc.interest_rate / 100;  // Convert percentage to decimal
        let t = frm.doc.repayment_period;
        let n = 12;  // Assuming monthly compounding

        let A = P * Math.pow(1 + (r / n), n * t);  // Compound Interest Formula

        frm.set_value('total_amount_after_interest', A.toFixed(2));  // Store with 2 decimal places
    }
}
