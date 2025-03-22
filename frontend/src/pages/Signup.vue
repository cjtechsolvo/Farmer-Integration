<template>
  <div class="container mx-auto p-4">
    <div class="flex justify-between items-center mb-6">
      <a class="text-green-600" href="#">
        <i class="fas fa-arrow-left"></i> Back home
      </a>
      <a class="text-gray-600" href="#">
        Already have an account?
        <span class="text-green-600">Log in</span>
      </a>
    </div>
    <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold text-center mb-4">Create Account</h2>
      <form @submit.prevent="handleSubmit">
        <div v-if="step === 1">
          <p class="text-center text-gray-600 mb-8">Personal Information</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label class="block text-gray-700" for="first-name"
                >First Name *</label
              >
              <input
                class="w-full border border-gray-300 p-2 rounded mt-1"
                id="first-name"
                placeholder="First Name"
                type="text"
                v-model="form.firstName"
              />
            </div>
            <div>
              <label class="block text-gray-700" for="last-name"
                >Last Name *</label
              >
              <input
                class="w-full border border-gray-300 p-2 rounded mt-1"
                id="last-name"
                placeholder="Last Name"
                type="text"
                v-model="form.lastName"
              />
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700" for="email"
              >Email (optional)</label
            >
            <input
              class="w-full border border-gray-300 p-2 rounded mt-1"
              id="email"
              placeholder="Email"
              type="email"
              v-model="form.email"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700" for="phone">Phone *</label>
            <div class="flex">
              <select
                class="border border-gray-300 p-2 rounded-l"
                v-model="form.phoneCode"
              >
                <option value="+234">+234</option>
              </select>
              <input
                class="w-full border border-gray-300 p-2 rounded-r"
                id="phone"
                placeholder="Phone Number"
                type="text"
                v-model="form.phone"
              />
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label class="block text-gray-700" for="age-group"
                >Age Group *</label
              >
              <select
                class="w-full border border-gray-300 p-2 rounded mt-1"
                id="age-group"
                v-model="form.ageGroup"
              >
                <option value="">Select...</option>
                <option value="18-25">18 - 25</option>
                <option value="26-35">26 - 35</option>
                <option value="36-45">36 - 45</option>
                <option value="46-55">46 - 55</option>
                <option value="56+">56+</option>
              </select>
            </div>
            <div>
              <label class="block text-gray-700">Gender *</label>
              <div class="flex items-center mt-1">
                <input
                  class="mr-2"
                  id="male"
                  name="gender"
                  type="radio"
                  value="Male"
                  v-model="form.gender"
                />
                <label class="mr-4" for="male">Male</label>
                <input
                  class="mr-2"
                  id="female"
                  name="gender"
                  type="radio"
                  value="Female"
                  v-model="form.gender"
                />
                <label for="female">Female</label>
              </div>
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700" for="site">Site *</label>
            <select
              class="w-full border border-gray-300 p-2 rounded mt-1"
              id="site"
              v-model="form.site"
            >
              <option value="">Select...</option>
              <option value="Roracio Community">Roracio Community</option>
              <option value="Another Site">Another Site</option>
            </select>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Are you a processor? *</label>
            <div class="flex items-center mt-1">
              <input
                class="mr-2"
                id="processor-yes"
                name="processor"
                type="radio"
                value="Yes"
                v-model="form.processor"
                @change="toggleProcessorFields"
              />
              <label class="mr-4" for="processor-yes">Yes</label>
              <input
                class="mr-2"
                id="processor-no"
                name="processor"
                type="radio"
                value="No"
                v-model="form.processor"
                @change="toggleProcessorFields"
              />
              <label for="processor-no">No</label>
            </div>
          </div>
          <div class="mb-4" v-if="form.processor === 'Yes'">
            <div class="mb-4">
              <label class="block text-gray-700" for="crops"
                >What crops do you process? *</label
              >
              <select
                class="w-full border border-gray-300 p-2 rounded mt-1"
                id="crops"
                v-model="form.crops"
              >
                <option value="">Select...</option>
              </select>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700" for="current-equipment"
                >What equipment do you use currently? *</label
              >
              <select
                class="w-full border border-gray-300 p-2 rounded mt-1"
                id="current-equipment"
                v-model="form.currentEquipment"
              >
                <option value="">Select...</option>
              </select>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700" for="desired-equipment"
                >What equipment do you want to get? *</label
              >
              <select
                class="w-full border border-gray-300 p-2 rounded mt-1"
                id="desired-equipment"
                v-model="form.desiredEquipment"
              >
                <option value="">Select...</option>
              </select>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700" for="quantity"
                >What quantity do you process daily? *</label
              >
              <div class="flex">
                <select
                  class="border border-gray-300 p-2 rounded-l"
                  v-model="form.quantityUnit"
                >
                  <option value="Unit">Unit</option>
                </select>
                <input
                  class="w-full border border-gray-300 p-2 rounded-r"
                  id="quantity"
                  placeholder="E.g. 35"
                  type="text"
                  v-model="form.quantity"
                />
              </div>
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700" for="address"
              >Residential address *</label
            >
            <input
              class="w-full border border-gray-300 p-2 rounded mt-1"
              id="address"
              placeholder="Residential address"
              type="text"
              v-model="form.address"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700" for="id-type">ID Type *</label>
            <select
              class="w-full border border-gray-300 p-2 rounded mt-1"
              id="id-type"
              v-model="form.idType"
            >
              <option value="">Select...</option>
            </select>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700" for="id-number">ID number</label>
            <input
              class="w-full border border-gray-300 p-2 rounded mt-1"
              id="id-number"
              placeholder="Enter your selected ID number"
              type="text"
              v-model="form.idNumber"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700" for="id-document"
              >Upload ID document</label
            >
            <input
              class="w-full border border-gray-300 p-2 rounded mt-1"
              id="id-document"
              type="file"
              @change="handleFileUpload"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700" for="profile-picture"
              >Upload profile picture (optional)</label
            >
            <div class="flex items-center mt-1">
              <img
                alt="Profile picture"
                class="w-10 h-10 rounded-full mr-4"
                :src="profilePictureUrl"
              />
              <button
                class="bg-gray-200 text-gray-700 px-4 py-2 rounded"
                @click="changeProfilePicture"
              >
                Change Picture
              </button>
            </div>
          </div>
          <div class="flex justify-between">
            <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded">
              Back
            </button>
            <button
              class="bg-green-600 text-white px-4 py-2 rounded"
              @click="nextStep"
            >
              Continue
            </button>
          </div>
        </div>
        <div v-if="step === 2">
          <h2 class="text-2xl font-semibold text-center mb-4">
            Security Setup
          </h2>
          <div class="mb-4">
            <label class="block text-gray-700" for="password">Password *</label>
            <div class="relative">
              <input
                class="w-full border border-gray-300 p-2 rounded mt-1"
                id="password"
                placeholder="••••••••••••"
                type="password"
                v-model="form.password"
              />
              <button
                class="absolute right-2 top-2 text-gray-600"
                type="button"
                @click="togglePasswordVisibility('password')"
              >
                <i class="fas fa-eye"></i>
              </button>
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700" for="confirm-password"
              >Confirm password *</label
            >
            <div class="relative">
              <input
                class="w-full border border-gray-300 p-2 rounded mt-1"
                id="confirm-password"
                placeholder="••••••••••••"
                type="password"
                v-model="form.confirmPassword"
              />
              <button
                class="absolute right-2 top-2 text-gray-600"
                type="button"
                @click="togglePasswordVisibility('confirm-password')"
              >
                <i class="fas fa-eye"></i>
              </button>
            </div>
          </div>
          <div class="mb-4">
            <h3 class="text-gray-700 font-semibold">Password Requirements</h3>
            <ul class="list-disc list-inside text-gray-600">
              <li>Must be at least 8 characters</li>
              <li>Must contain one special character and one number</li>
              <li>Must contain one uppercase and lowercase letter</li>
            </ul>
          </div>
          <div class="flex justify-between">
            <button
              class="bg-gray-200 text-gray-700 px-4 py-2 rounded"
              @click="previousStep"
            >
              Back
            </button>
            <button
              class="bg-green-600 text-white px-4 py-2 rounded"
              @click="nextStep"
            >
              Continue
            </button>
          </div>
        </div>
        <div v-if="step === 3">
          <h2 class="text-2xl font-semibold text-center mb-4">Bank Details</h2>
          <div class="mb-4">
            <label class="block text-gray-700"
              >Do you have a smartphone? *</label
            >
            <div class="flex items-center mt-1">
              <input
                class="mr-2"
                id="smartphone-yes"
                name="smartphone"
                type="radio"
                value="Yes"
                v-model="form.smartphone"
              />
              <label class="mr-4" for="smartphone-yes">Yes</label>
              <input
                class="mr-2"
                id="smartphone-no"
                name="smartphone"
                type="radio"
                value="No"
                v-model="form.smartphone"
              />
              <label for="smartphone-no">No</label>
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700"
              >Do you have a bank account? *</label
            >
            <div class="flex items-center mt-1">
              <input
                class="mr-2"
                id="bank-account-yes"
                name="bank-account"
                type="radio"
                value="Yes"
                v-model="form.bankAccount"
                @change="toggleBankDetailsFields"
              />
              <label class="mr-4" for="bank-account-yes">Yes</label>
              <input
                class="mr-2"
                id="bank-account-no"
                name="bank-account"
                type="radio"
                value="No"
                v-model="form.bankAccount"
                @change="toggleBankDetailsFields"
              />
              <label for="bank-account-no">No</label>
            </div>
          </div>
          <div class="mb-4" v-if="form.bankAccount === 'Yes'">
            <div class="mb-4">
              <label class="block text-gray-700" for="bank-name"
                >Bank Name *</label
              >
              <select
                class="w-full border border-gray-300 p-2 rounded mt-1"
                id="bank-name"
                v-model="form.bankName"
              >
                <option value="">Select...</option>
              </select>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700" for="bank-account-number"
                >Personal Bank Account Number *</label
              >
              <input
                class="w-full border border-gray-300 p-2 rounded mt-1"
                id="bank-account-number"
                placeholder="E.g. 3892756930"
                type="text"
                v-model="form.bankAccountNumber"
              />
            </div>
          </div>
          <div class="flex justify-between">
            <button
              class="bg-gray-200 text-gray-700 px-4 py-2 rounded"
              @click="previousStep"
            >
              Back
            </button>
            <button
              class="bg-green-600 text-white px-4 py-2 rounded"
              @click="nextStep"
            >
              Continue
            </button>
          </div>
        </div>
        <div v-if="step === 4">
          <h2 class="text-2xl font-semibold text-center mb-4">
            Farm Registration
          </h2>
          <div class="mb-4">
            <label class="block text-gray-700" for="farm-name"
              >Farm Name *</label
            >
            <input
              class="w-full border border-gray-300 p-2 rounded mt-1"
              id="farm-name"
              placeholder="E.g. Armenia Farms Inc"
              type="text"
              v-model="form.farmName"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700" for="farm-address"
              >Address</label
            >
            <input
              class="w-full border border-gray-300 p-2 rounded mt-1"
              id="farm-address"
              placeholder="E.g. 12 landon community, Kogi"
              type="text"
              v-model="form.farmAddress"
            />
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div class="mb-4">
              <label class="block text-gray-700" for="longitude"
                >Longitude</label
              >
              <input
                class="w-full border border-gray-300 p-2 rounded mt-1"
                id="longitude"
                placeholder="E.g. 8.8765"
                type="text"
                v-model="form.longitude"
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700" for="latitude">Latitude</label>
              <input
                class="w-full border border-gray-300 p-2 rounded mt-1"
                id="latitude"
                placeholder="E.g. 8.8765"
                type="text"
                v-model="form.latitude"
              />
            </div>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700"
              >Crops cultivated and planting season</label
            >
            <div class="mb-4">
              <label class="block text-gray-700" for="crop"
                >What crop do you want to cultivate on this farm? *</label
              >
              <select
                class="w-full border border-gray-300 p-2 rounded mt-1"
                id="crop"
                v-model="form.crop"
              >
                <option value="">Select...</option>
              </select>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700" for="volume"
                >What volume of this crop will you cultivate? *</label
              >
              <div class="flex">
                <select
                  class="border border-gray-300 p-2 rounded-l"
                  v-model="form.volumeUnit"
                >
                  <option value="Unit">Unit</option>
                </select>
                <input
                  class="w-full border border-gray-300 p-2 rounded-r"
                  id="volume"
                  placeholder="E.g. 56"
                  type="text"
                  v-model="form.volume"
                />
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div class="mb-4">
                <label class="block text-gray-700" for="start-month"
                  >Start Month *</label
                >
                <select
                  class="w-full border border-gray-300 p-2 rounded mt-1"
                  id="start-month"
                  v-model="form.startMonth"
                >
                  <option value="">Select...</option>
                </select>
              </div>
              <div class="mb-4">
                <label class="block text-gray-700" for="end-month"
                  >End Month *</label
                >
                <select
                  class="w-full border border-gray-300 p-2 rounded mt-1"
                  id="end-month"
                  v-model="form.endMonth"
                >
                  <option value="">Select...</option>
                </select>
              </div>
            </div>
            <button class="text-green-600" @click="addAnotherCrop">
              + Add another crop
            </button>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Upload farm documents</label>
            <div
              class="border border-dashed border-gray-300 p-4 rounded mt-1 text-center"
            >
              <i class="fas fa-upload text-gray-600 text-2xl mb-2"></i>
              <p class="text-gray-600">
                Click to upload or drag and drop your files here
              </p>
              <p class="text-gray-600">PDF file only (max. 10MB)</p>
              <input class="hidden" type="file" @change="handleFileUpload" />
            </div>
          </div>
          <div class="flex justify-between">
            <button
              class="bg-gray-200 text-gray-700 px-4 py-2 rounded"
              @click="previousStep"
            >
              Back
            </button>
            <button
              class="bg-green-600 text-white px-4 py-2 rounded"
              @click="addAnotherCrop"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      step: 1,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phoneCode: '+234',
        phone: '',
        ageGroup: '',
        gender: '',
        site: '',
        processor: '',
        crops: '',
        currentEquipment: '',
        desiredEquipment: '',
        quantity: '',
        quantityUnit: 'Unit',
        address: '',
        idType: '',
        idNumber: '',
        idDocument: null,
        profilePicture: null,
        password: '',
        confirmPassword: '',
        smartphone: '',
        bankAccount: '',
        bankName: '',
        bankAccountNumber: '',
        farmName: '',
        farmAddress: '',
        longitude: '',
        latitude: '',
        crop: '',
        volume: '',
        volumeUnit: '',
      },
      profilePictureUrl: 'https://via.placeholder.com/40', // Placeholder profile image
      showPassword: false,
      showConfirmPassword: false,
    }
  },
  methods: {
    nextStep() {
      if (this.step < 4) {
        this.step++
      }
    },
    previousStep() {
      if (this.step > 1) {
        this.step--
      }
    },
    toggleProcessorFields() {
      if (this.form.processor !== 'Yes') {
        this.form.crops = ''
        this.form.currentEquipment = ''
        this.form.desiredEquipment = ''
        this.form.quantity = ''
        this.form.quantityUnit = 'Unit'
      }
    },
    toggleBankDetailsFields() {
      if (this.form.bankAccount !== 'Yes') {
        this.form.bankName = ''
        this.form.bankAccountNumber = ''
      }
    },
    togglePasswordVisibility(field) {
      if (field === 'password') {
        this.showPassword = !this.showPassword
        document.getElementById('password').type = this.showPassword
          ? 'text'
          : 'password'
      } else if (field === 'confirm-password') {
        this.showConfirmPassword = !this.showConfirmPassword
        document.getElementById('confirm-password').type = this
          .showConfirmPassword
          ? 'text'
          : 'password'
      }
    },
    handleFileUpload(event) {
      const file = event.target.files[0]
      if (file) {
        this.form.idDocument = file
      }
    },
    changeProfilePicture() {
      // Simulate profile picture upload
      this.profilePictureUrl = 'https://via.placeholder.com/100' // Change to uploaded image
    },
    handleSubmit() {
      console.log('Form Submitted', this.form)
      alert('Form submitted successfully!')
    },
  },
}
</script>
