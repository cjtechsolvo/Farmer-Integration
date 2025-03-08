import frappe
from frappe import _
from frappe.utils.password import check_password

@frappe.whitelist(allow_guest=True)
def create_user(first_name, last_name, phone, email, new_password):
    try:
        if frappe.db.exists("User", {"email": email}):
            return {"message": "Email Already Exists"}

        user = frappe.get_doc({
            "doctype": "User",
            "email": email,
            "first_name": first_name,
            "last_name": last_name,
            "phone": phone,  
            "new_password": new_password,  
            "enabled": 1,
            "send_welcome_email": 0,
        })
        user.insert(ignore_permissions=True)
        frappe.db.commit()

        return {"message": "User Created Successfully"}

    except Exception as e:
        frappe.log_error(f"User Creation Failed: {e}", "Farmer App")
        return {"message": str(e)}

@frappe.whitelist(allow_guest=True)
def login(email, password):
    try:
        # Check if the email exists and if the user is enabled
        user = frappe.db.get_value("User", {"email": email}, ["name", "enabled"], as_dict=True)

        if not user:
            return {"status": "fail", "message": _("Invalid email or password")}

        if not user.enabled:
            return {"status": "fail", "message": _("User is disabled")}

        # Validate the password
        check_password(user.name, password)

        # Generate user session
        frappe.local.login_manager.login_as(user.name)

        # Successful login response (Only returning token)
        return {
            "status": "success",
            "message": _("Login successful"),
            "token": frappe.local.session.sid,  # Use session ID as the token
            "expire_in": 612000000,
            "type": "Bearer"
        }

    except frappe.AuthenticationError:
        return {"status": "fail", "message": _("Invalid email or password")}

    except Exception as e:
        frappe.log_error(f"Login Failed: {e}", "Farmer App")
        return {"status": "fail", "message": str(e)}