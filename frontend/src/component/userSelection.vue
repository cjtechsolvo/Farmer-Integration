<template>
  <div
    v-if="!showSignupForm"
    class="bg-green-50 flex items-center justify-center min-h-screen"
  >
    <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl mb-40">
      <h1 class="text-2xl font-semibold text-center mb-2">Create an account</h1>
      <p class="text-center text-gray-600 mb-6">
        How would you like to sign up?
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div
          class="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow cursor-pointer"
          @click="selectUserType('buyer')"
        >
          <img
            alt="Icon representing a buyer"
            class="mb-2"
            src="../assets/logo/buyerIcon.svg"
          />
          <p class="text-center">Buyer</p>
        </div>
        <div
          class="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow cursor-pointer"
          @click="selectUserType('vendor')"
        >
          <img
            alt="Icon representing a vendor"
            class="mb-2"
            src="../assets/logo/vendorIcon.svg"
          />
          <p class="text-center">Vendor</p>
        </div>
        <div
          class="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow cursor-pointer"
          @click="selectUserType('farmer')"
        >
          <img
            alt="Icon representing a farmer"
            class="mb-2"
            src="../assets/logo/farmerIcon.svg"
          />
          <p class="text-center">Farmer</p>
        </div>
        <div
          class="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow cursor-pointer"
          @click="selectUserType('delivery_agent')"
        >
          <img
            alt="Icon representing a delivery agent"
            class="mb-2"
            src="../assets/logo/deliveryAgentIcon.svg"
          />
          <p class="text-center">Delivery Agent</p>
        </div>
      </div>
      <p class="text-center text-gray-600 mt-4">
        Already have an account?
        <a class="text-green-500" href="#"> Log in </a>
      </p>
    </div>
    <!-- <farmerRegister v-if="selectedUserType === 'farmer'" /> -->
    <!-- <farmerRegister
      v-if="selectedUserType === 'farmer'"
      @goBack="selectedUserType = ''"
    /> -->
  </div>
  <farmerRegister v-if="showSignupForm" @goBack="showSignupForm = false" />
</template>

<script>
import farmerRegister from '@/component/farmerRegister.vue' // Import the form component
export default {
  data() {
    return {
      showSignupForm: false,
    }
  },
  methods: {
    selectUserType(userType) {
      if (userType === 'farmer') {
        // /this.selectedUserType = 'farmer' // Switch to multi-step form
        this.showSignupForm = true
      } else {
        alert('Signup for ' + userType + ' is under development!')
      }
    },
  },
  components: {
    farmerRegister, // Register component
  },
}
</script>

<style scoped>
.option-box {
  cursor: pointer;
  text-align: center;
  padding: 1rem;
  background-color: #f3f4f6;
  border-radius: 8px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}
.option-box:hover {
  background-color: #d1fae5;
}
body {
  font-family: 'Inter', sans-serif;
}
</style>
