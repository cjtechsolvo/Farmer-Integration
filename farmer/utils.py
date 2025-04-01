import frappe

def custom_resolver(path):
    # If the URL contains "login?redirect-to=%2Fapp%2Fhome#login", redirect to /login
    if "login?redirect-to=%2Fapp%2Fhome#signup" in path:
        return "/#signup"
    
    # Return None to let Frappe handle other routes normally
    return None
