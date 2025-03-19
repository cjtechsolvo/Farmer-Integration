import frappe
from frappe import _
from frappe.utils.password import check_password

#Adding the Data into Farmer Master from Registration fields

def create_farmer_for_user(user_email, phone, gender, location, id_type, id_number, bank_name, account_number, crops_processed, 
                           qty_processed_daily, equipments_used, unit, site):
    try:
        # Check if Farmer Master already exists
        if frappe.db.exists("Farmer Master", {"farmer": user_email}):
            frappe.logger().info(f"Farmer already exists for user {user_email}")
            return

        # Create Farmer Master entry
        farmer = frappe.get_doc({
            "doctype": "Farmer Master",
            "farmer": user_email,  # Link field to User doctype (email is user name)
            "phone_number": phone,
            "gender": gender,
            "Address": location,
            "id_type": id_type,
            "id_number": id_number,
            "bank_name": bank_name,
            "account_number": account_number,
            "crops_processed": crops_processed,
            "qty_processed_daily": qty_processed_daily,
            "equipments_used": equipments_used,
            "unit": unit,
            "site": site

        })
        farmer.insert(ignore_permissions=True)
        frappe.db.commit()
        frappe.logger().info(f"Farmer Master created for user {user_email}")

    except Exception as e:
        frappe.log_error(frappe.get_traceback(), "Farmer Master Creation Failed")


# API 1: Create User with Farmer Master 

@frappe.whitelist(allow_guest=True)
def create_user():
    import json
    data = json.loads(frappe.request.data)

    #USER Fields
    first_name = data.get("first_name")
    last_name = data.get("last_name")
    email = data.get("email")
    phone = data.get("phone")
    gender = data.get("gender")
    location = data.get("location")
    password = data.get("new_password")

    #FARMER Fields
    site = data.get("site")
    id_type = data.get("id_type")
    id_number = data.get("id_number")
    bank_name = data.get("bank_name")
    account_number = data.get("account_number")
    crops_processed = data.get("crops_processed")
    qty_processed_daily = data.get("qty_processed_daily")
    equipments_used = data.get("equipments_used")
    unit = data.get("unit")

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
        "phone": phone,
        "gender": gender,
        "location": location,
        "send_welcome_email": 1,
        "enabled": 1,
        "new_password": password
    })
    user.insert(ignore_permissions=True)

    # **Assign "Farmer" role to the user**
    user.append("roles", {"role": "Farmer"})
    user.save(ignore_permissions=True)

    frappe.db.commit()  # Ensure changes are committed

    create_farmer_for_user(email, phone, gender, location, id_type, id_number, bank_name, account_number, crops_processed, 
                           qty_processed_daily, equipments_used, unit, site)

    return {"message": "User Created Successfully"}
    
# API 2: Create Farm Entry

@frappe.whitelist(allow_guest=True)
def create_farm():
    try:
        # Get JSON data from Postman request
        data = frappe.request.get_json()

        if not data:
            return {"status": "Failed", "message": "No JSON data provided."}

        # Extract fields
        farm_name = data.get("farm_name")
        longitude = data.get("longitude")
        latitude = data.get("latitude")
        crops = data.get("crops")  # Expecting list of crop names (for MultiSelect)
        actual_crops = data.get("actual_crops")  # Expecting list of dicts for child table

        # Validation
        if not (farm_name and longitude and latitude):
            return {"status": "Failed", "message": "Missing required fields."}

        # Prepare Table MultiSelect entries (crop_name field)
        crop_table = []
        if crops and isinstance(crops, list):
            for crop in crops:
                crop_table.append({
                    "crop_name": crop  # Link field to Crop Master
                })

        # Prepare Actual Crop child table entries
        actual_crop_table = []
        if actual_crops and isinstance(actual_crops, list):
            for ac in actual_crops:
                if ac.get("crop_name"):
                    actual_crop_table.append({
                        "crop_name": ac.get("crop_name"),
                        "start_month": ac.get("start_month"),
                        "end_month": ac.get("end_month"),
                        "quantity": ac.get("quantity"),
                        "unit": ac.get("unit")
                    })

        # Create Farm Master entry
        farm = frappe.get_doc({
            "doctype": "Farm Master",
            "farm_name": farm_name,
            "longitude": longitude,
            "latitude": latitude,
            "crop_name": crop_table,        # MultiSelect Table field
            "actual_crops": actual_crop_table  # Child Table field
        })
        farm.insert(ignore_permissions=True)  # Allow Guest
        frappe.db.commit()

        return {
            "status": "Success",
            "message": f"Farm '{farm_name}' created successfully.",
            "farm_id": farm.name
        }

    except Exception as e:
        frappe.log_error(frappe.get_traceback(), "Farm Creation Error")
        return {
            "status": "Failed",
            "message": f"Error occurred: {str(e)}"
        }
    

# API 3: Get All Crop Master Entries

@frappe.whitelist(allow_guest=True)
def get_all_crops():
    try:
        crops = frappe.get_all("Crops Master", fields=["name"])
        return {
            "status": "Success",
            "crops": crops
        }
    except Exception as e:
        frappe.log_error(frappe.get_traceback(), "Crop Fetch Error")
        return {
            "status": "Failed",
            "message": f"Error occurred: {str(e)}"
        }
    

# API 4: Get All Sites List

@frappe.whitelist(allow_guest=True)
def fetch_site_list():
    try:
        # Fetch all Site records
        site_list = frappe.get_all("Site", fields=["name", "site_name"])

        return {
            "status": "success",
            "data": site_list
        }

    except Exception as e:
        frappe.log_error(frappe.get_traceback(), "Fetch Site List Failed")
        return {
            "status": "error",
            "message": "Failed to fetch site list"
        }
