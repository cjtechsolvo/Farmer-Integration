import frappe
from frappe import _
from frappe.utils.password import check_password

@frappe.whitelist(allow_guest=True)
def create_user():
    import json
    data = json.loads(frappe.request.data)

    first_name = data.get("first_name")
    last_name = data.get("last_name")
    email = data.get("email")
    phone = data.get("phone")
    password = data.get("new_password")

    if not (first_name and last_name and email and password):
        return {"message": "Missing required fields"}

    # Check if user already exists
    if frappe.db.exists("User", email):
        return {"message": f"User {email} already exists"}

    # Create User
    user = frappe.get_doc({
        "doctype": "User",
        "first_name": first_name,
        "last_name": last_name,
        "email": email,
        "mobile_no": phone,
        "send_welcome_email": 1,
        "enabled": 1,
        "new_password": password
    })
    user.insert(ignore_permissions=True)

    # **Assign "Farmer" role to the user**
    user.append("roles", {"role": "Farmer"})
    user.save(ignore_permissions=True)

    frappe.db.commit()  # Ensure changes are committed

    return {"message": "User Created Successfully"}
    

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
    
@frappe.whitelist(allow_guest=True)
def create_farm():
    try:
        # Get JSON data from request body
        data = frappe.request.get_json()

        if not data:
            return {"status": "Failed", "message": "No JSON data provided."}

        farm_name = data.get("farm_name")
        longitude = data.get("longitude")
        latitude = data.get("latitude")

        if not (farm_name and longitude and latitude):
            return {"status": "Failed", "message": "Missing required fields."}

        # Create new Farm Master entry
        farm = frappe.get_doc({
            "doctype": "Farm Master",
            "farm_name": farm_name,
            "longitude": longitude,
            "latitude": latitude
        })
        farm.insert()
        frappe.db.commit()

        return {
            "status": "Success",
            "message": f"Farm '{farm_name}' created successfully.",
            "farm_name": farm_name,
            "longitude": longitude,
            "latitude": latitude,
            "farm_id": farm.name
        }
    except Exception as e:
        frappe.log_error(frappe.get_traceback(), "Farm Creation Error")
        return {
            "status": "Failed",
            "message": f"Error occurred: {str(e)}"
        }