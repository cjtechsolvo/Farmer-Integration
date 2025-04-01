<template>
  <div class="container mx-auto p-4">
    <div class="flex justify-between items-center mb-6">
      <a class="text-green-600" @click="$emit('goBack')" href="#">
        <i class="fas fa-arrow-left"></i> Back home
      </a>
      <a class="text-gray-600" href="#">
        Already have an account?
        <span class="text-green-600">Log in</span>
      </a>
    </div>
    <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold text-center mb-4">Create Account</h2>
      <form class="multiform" @submit.prevent="handleSubmit">
        <div v-if="step === 1">
          <p class="text-center text-gray-600 mb-8">Personal Information</p>
          <div class="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label class="block text-gray-700" for="first-name"
                >First Name *</label
              >
              <input
                class="w-full border p-2 rounded mt-1"
                :class="{
                  'border-red-500': errors.firstName,
                  'border-gray-300': !errors.firstName,
                }"
                id="first-name"
                placeholder="First Name"
                type="text"
                v-model="form.firstName"
                required
              />
              <p v-if="errors.firstName" class="text-red-500 text-sm mt-1">
                {{ errors.firstName }}
              </p>
            </div>
            <div>
              <label class="block text-gray-700" for="last-name"
                >Last Name *</label
              >
              <input
                class="w-full border p-2 rounded mt-1"
                :class="{
                  'border-red-500': errors.lastName,
                  'border-gray-300': !errors.lastName,
                }"
                id="last-name"
                placeholder="Last Name"
                type="text"
                v-model="form.lastName"
              />
              <p v-if="errors.lastName" class="text-red-500 text-sm mt-1">
                {{ errors.lastName }}
              </p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div class="mb-4">
              <label class="block text-gray-700" for="email">Email</label>
              <input
                class="w-full border p-2 rounded mt-1"
                :class="{
                  'border-red-500': errors.email,
                  'border-gray-300': !errors.email,
                }"
                id="email"
                placeholder="Email"
                type="email"
                v-model="form.email"
                required
              />
              <p v-if="errors.email" class="text-red-500 text-sm mt-1">
                {{ errors.email }}
              </p>
            </div>

            <div class="mb-4">
              <label class="block text-gray-700" for="phone">Phone *</label>
              <div class="flex">
                <select
                  class="border p-2 rounded-l"
                  :class="{
                    'border-red-500': errors.phone,
                    'border-gray-300': !errors.phone,
                  }"
                  v-model="form.phoneCode"
                >
                  <option value="+234">+234</option>
                </select>
                <input
                  class="w-full border p-2 rounded-r"
                  :class="{
                    'border-red-500': errors.phone,
                    'border-gray-300': !errors.phone,
                  }"
                  id="phone"
                  placeholder="Phone Number"
                  type="text"
                  v-model="form.phone"
                  required
                />
              </div>
              <p v-if="errors.phone" class="text-red-500 text-sm mt-1">
                {{ errors.phone }}
              </p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label class="block text-gray-700" for="age-group"
                >Age Group *</label
              >
              <input
                type="number"
                id="age-group"
                class="w-full border p-2 rounded mt-1"
                :class="{
                  'border-red-500': errors.age,
                  'border-gray-300': !errors.age,
                }"
                placeholder="Enter Age"
                min="1"
                v-model="form.age"
                required
              />
              <p v-if="errors.age" class="text-red-500 text-sm mt-1">
                {{ errors.age }}
              </p>
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
              <p v-if="errors.gender" class="text-red-500 text-sm mt-1">
                {{ errors.gender }}
              </p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div class="mb-4">
              <label class="block text-gray-700" for="site">Site *</label>
              <select
                class="w-full border p-2 rounded mt-1"
                :class="{
                  'border-red-500': errors.site,
                  'border-gray-300': !errors.site,
                }"
                id="site"
                v-model="form.site"
              >
                <option value="">Select...</option>
                <option v-for="site in this.siteList" :value="site.name">
                  {{ site.site_name }}
                </option>
              </select>
              <p v-if="errors.site" class="text-red-500 text-sm mt-1">
                {{ errors.site }}
              </p>
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
              <p v-if="errors.processor" class="text-red-500 text-sm mt-1">
                {{ errors.processor }}
              </p>
            </div>
          </div>

          <div class="mb-4" v-if="form.processor === 'Yes'">
            <div class="mb-4">
              <label class="block text-gray-700" for="crop-field"
                >What crops do you process? *</label
              >
              <select
                class="w-full border p-2 rounded mt-1"
                :class="{
                  'border-red-500': errors.crop,
                  'border-gray-300': !errors.crop,
                }"
                id="crop-field"
                v-model="form.crop"
              >
                <option value="">Select...</option>
                <option v-for="crop in this.cropList" :value="crop.name">
                  {{ crop.name }}
                </option>
              </select>
              <p v-if="errors.crop" class="text-red-500 text-sm mt-1">
                {{ errors.crop }}
              </p>
            </div>

            <div class="mb-4">
              <label class="block text-gray-700" for="current-equipment"
                >What equipment do you use currently? *</label
              >
              <select
                class="w-full border p-2 rounded mt-1"
                :class="{
                  'border-red-500': errors.currentEquipment,
                  'border-gray-300': !errors.currentEquipment,
                }"
                id="current-equipment"
                v-model="form.currentEquipment"
              >
                <option value="">Select...</option>
                <option
                  v-for="equipment in this.equipmentList"
                  :value="equipment.name"
                >
                  {{ equipment.name }}
                </option>
              </select>
              <p
                v-if="errors.currentEquipment"
                class="text-red-500 text-sm mt-1"
              >
                {{ errors.currentEquipment }}
              </p>
            </div>

            <div class="mb-4">
              <label class="block text-gray-700" for="desired-equipment"
                >What equipment do you want to get? *</label
              >
              <select
                class="w-full border p-2 rounded mt-1"
                :class="{
                  'border-red-500': errors.desiredEquipment,
                  'border-gray-300': !errors.desiredEquipment,
                }"
                id="desired-equipment"
                v-model="form.desiredEquipment"
              >
                <option value="">Select...</option>
                <option
                  v-for="equipment in this.equipmentList"
                  :value="equipment.name"
                >
                  {{ equipment.name }}
                </option>
              </select>
              <p
                v-if="errors.desiredEquipment"
                class="text-red-500 text-sm mt-1"
              >
                {{ errors.desiredEquipment }}
              </p>
            </div>

            <div class="mb-4">
              <label class="block text-gray-700" for="quantity"
                >What quantity do you process daily? *</label
              >
              <div class="flex">
                <select
                  class="border p-2 rounded-l"
                  :class="{
                    'border-red-500': errors.quantity,
                    'border-gray-300': !errors.quantity,
                  }"
                  v-model="form.quantityUnit"
                >
                  <option value="Kg">Kg</option>
                  <option value="Bag">Bag</option>
                </select>
                <input
                  class="w-full border p-2 rounded-r"
                  :class="{
                    'border-red-500': errors.quantity,
                    'border-gray-300': !errors.quantity,
                  }"
                  id="quantity"
                  placeholder="E.g. 35"
                  type="text"
                  v-model="form.quantity"
                />
              </div>
              <p v-if="errors.quantity" class="text-red-500 text-sm mt-1">
                {{ errors.quantity }}
              </p>
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700" for="address"
              >Residential address *</label
            >
            <input
              class="w-full border p-2 rounded mt-1"
              :class="{
                'border-red-500': errors.address,
                'border-gray-300': !errors.address,
              }"
              id="address"
              placeholder="Residential address"
              type="text"
              v-model="form.address"
            />
            <p v-if="errors.address" class="text-red-500 text-sm mt-1">
              {{ errors.address }}
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div class="mb-4">
              <label class="block text-gray-700" for="id-type">ID Type *</label>
              <select
                class="w-full border border-gray-300 p-2 rounded mt-1"
                id="id-type"
                v-model="form.idType"
              >
                <option value="">Select...</option>
                <option value="Driver's License">Driver's License</option>
                <option value="National Identity Number">
                  National Identity Number
                </option>
                <option value="International Passport">
                  International Passport
                </option>
                <option value="Permanent Voter's Card">
                  Permanent Voter's Card
                </option>
              </select>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700" for="id-number"
                >ID number</label
              >
              <input
                class="w-full border p-2 rounded mt-1"
                :class="{
                  'border-red-500': errors.idNumber,
                  'border-gray-300': !errors.idNumber,
                }"
                id="id-number"
                placeholder="Enter your selected ID number"
                type="text"
                v-model="form.idNumber"
              />
              <p v-if="errors.idNumber" class="text-red-500 text-sm mt-1">
                {{ errors.idNumber }}
              </p>
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700" for="id-document"
              >Upload ID document</label
            >
            <input
              class="w-full border border-gray-300 p-2 rounded mt-1"
              id="id-document"
              type="file"
              @change="handleFileUpload($event, 'ID')"
            />
            <p v-if="errors.idDocument" class="text-red-500 text-sm mt-1">
              {{ errors.idDocument }}
            </p>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700" for="profile-picture">
              Upload profile picture (optional)
            </label>
            <div class="flex items-center mt-1">
              <img
                id="profilePic"
                alt="Profile picture"
                class="w-10 h-10 rounded-full mr-4"
                :src="this.profilePictureUrl"
              />
              <input
                type="file"
                id="fileInput"
                @change="changeProfilePicture"
              />
              <!-- <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded">
                Change Picture
              </button> -->
            </div>
          </div>

          <div class="flex justify-between">
            <!-- <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded">
              Back
            </button> -->
            <button
              class="bg-green-600 text-white px-4 py-2 rounded ml-auto"
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
                class="w-full border p-2 rounded mt-1"
                :class="{
                  'border-red-500': errors.password,
                  'border-gray-300': !errors.password,
                }"
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
            <p v-if="errors.password" class="text-red-500 text-sm mt-1">
              {{ errors.password }}
            </p>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700" for="confirm-password"
              >Confirm password *</label
            >
            <div class="relative">
              <input
                class="w-full border p-2 rounded mt-1"
                :class="{
                  'border-red-500': errors.confirmPassword,
                  'border-gray-300': !errors.confirmPassword,
                }"
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
            <p v-if="errors.confirmPassword" class="text-red-500 text-sm mt-1">
              {{ errors.confirmPassword }}
            </p>
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
            <p v-if="errors.smartphone" class="text-red-500 text-sm mt-1">
              {{ errors.smartphone }}
            </p>
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
            <p v-if="errors.bankAccount" class="text-red-500 text-sm mt-1">
              {{ errors.bankAccount }}
            </p>
          </div>

          <div class="mb-4" v-if="form.bankAccount === 'Yes'">
            <div class="mb-4" v-if="form.bankAccount === 'Yes'">
              <label class="block text-gray-700" for="bank-name"
                >Bank Name *</label
              >
              <!-- <select
                class="w-full border border-gray-300 p-2 rounded mt-1"
                id="bank-name"
                v-model="form.bankName"
              >
                <option value="">Select...</option>
              </select> -->
              <input
                class="w-full border border-gray-300 p-2 rounded mt-1"
                id="bank-name"
                placeholder="E.g. ABC Bank"
                type="text"
                v-model="form.bankName"
              />
              <p v-if="errors.bankName" class="text-red-500 text-sm mt-1">
                {{ errors.bankName }}
              </p>
            </div>

            <div class="mb-4" v-if="form.bankAccount === 'Yes'">
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
              <p
                v-if="errors.bankAccountNumber"
                class="text-red-500 text-sm mt-1"
              >
                {{ errors.bankAccountNumber }}
              </p>
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

          <!-- Farm Details -->
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
              @input="validateFarmName"
            />
            <p v-if="errors.farmName" class="text-red-500 text-sm mt-1">
              {{ errors.farmName }}
            </p>
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
              <p v-if="errors.longitude" class="text-red-500 text-sm mt-1">
                {{ errors.longitude }}
              </p>
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
              <p v-if="errors.latitude" class="text-red-500 text-sm mt-1">
                {{ errors.latitude }}
              </p>
            </div>
          </div>

          <!-- Crops Section -->
          <div class="mb-4">
            <label class="block text-gray-700"
              >Crops cultivated and planting season</label
            >

            <div
              v-for="(crop, index) in form.crops"
              :key="index"
              class="mb-4 flex flex-col bg-gray-100 p-6 rounded-lg mt-5 relative"
            >
              <!-- Remove button (only visible if more than one crop) -->
              <button
                v-if="form.crops.length > 1"
                class="absolute top-2 right-2 text-black-500 text-xl font-bold"
                @click="removeCrop(index)"
              >
                ✖
              </button>

              <div class="mb-4">
                <label class="block text-gray-700" :for="`crop-${index}`"
                  >What crop do you want to cultivate on this farm? *</label
                >
                <select
                  class="w-full border border-gray-300 p-2 rounded mt-1"
                  :id="`crop-${index}`"
                  v-model="crop.name"
                >
                  <option v-for="crop in this.cropList" :value="crop.name">
                    {{ crop.name }}
                  </option>
                </select>
                <p
                  v-if="errors[`crop_${index}_name`]"
                  class="text-red-500 text-sm mt-1"
                >
                  {{ errors[`crop_${index}_name`] }}
                </p>
              </div>

              <div class="mb-4">
                <label class="block text-gray-700" :for="`volume-${index}`"
                  >What volume of this crop will you cultivate? *</label
                >
                <div class="flex">
                  <select
                    class="border border-gray-300 p-2 rounded-l"
                    v-model="crop.volumeUnit"
                  >
                    <option value="Kg">Kg</option>
                    <option value="Bag">Bag</option>
                  </select>
                  <input
                    class="w-full border border-gray-300 p-2 rounded-r"
                    :id="`volume-${index}`"
                    placeholder="E.g. 56"
                    type="text"
                    v-model="crop.volume"
                  />
                </div>
                <p
                  v-if="errors[`crop_${index}_volume`]"
                  class="text-red-500 text-sm mt-1"
                >
                  {{ errors[`crop_${index}_volume`] }}
                </p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div class="mb-4">
                  <label
                    class="block text-gray-700"
                    :for="`start-month-${index}`"
                    >Start Month *</label
                  >
                  <select
                    class="w-full border border-gray-300 p-2 rounded mt-1"
                    :id="`start-month-${index}`"
                    v-model="crop.startMonth"
                  >
                    <option value="">Select...</option>
                    <option v-for="month in this.monthList" :value="month">
                      {{ month }}
                    </option>
                  </select>
                  <p
                    v-if="errors[`crop_${index}_startMonth`]"
                    class="text-red-500 text-sm mt-1"
                  >
                    {{ errors[`crop_${index}_startMonth`] }}
                  </p>
                </div>

                <div class="mb-4">
                  <label class="block text-gray-700" :for="`end-month-${index}`"
                    >End Month *</label
                  >
                  <!-- <select
                    class="w-full border border-gray-300 p-2 rounded mt-1"
                    :id="`end-month-${index}`"
                    v-model="crop.endMonth"
                    @change="validateEndMonth(index)"
                  > -->
                  <select
                    class="w-full border border-gray-300 p-2 rounded mt-1"
                    :id="`end-month-${index}`"
                    v-model="crop.endMonth"
                  >
                    <option value="">Select...</option>
                    <option v-for="month in this.monthList" :value="month">
                      {{ month }}
                    </option>
                  </select>
                  <p
                    v-if="errors[`crop_${index}_endMonth`]"
                    class="text-red-500 text-sm mt-1"
                  >
                    {{ errors[`crop_${index}_endMonth`] }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Add Another Crop Button -->
            <button
              class="rounded-lg text-[14px] leading-[20px] w-[180px] text-[#0d8a6a] bg-white border border-[#90D0BF] font-medium mb-6 py-2 px-4"
              @click="addAnotherCrop"
            >
              + Add another crop
            </button>

            <!-- File Upload -->
            <div class="mb-4">
              <label class="block text-gray-700">Upload farm documents</label>
              <div
                class="border border-dashed border-gray-300 p-4 rounded mt-1 text-center cursor-pointer"
                @click="triggerFileInput"
                @dragover.prevent
                @drop="handleFileDrop"
              >
                <i class="fas fa-upload text-gray-600 text-2xl mb-2"></i>
                <p class="text-gray-600">
                  Click to upload or drag and drop your files here
                </p>
                <p class="text-gray-600">PDF file only (max. 10MB)</p>
                <input
                  ref="fileInput"
                  class="hidden"
                  type="file"
                  accept=".pdf"
                  @change="handleFileUpload"
                />
              </div>

              <!-- Show uploaded file name -->
              <p v-if="form.farmDocument" class="text-green-600 mt-2">
                {{ form.farmDocument.name }}
              </p>
            </div>

            <!-- Navigation Buttons -->
            <div class="flex justify-between">
              <button
                class="bg-gray-200 text-gray-700 px-4 py-2 rounded"
                @click="previousStep"
              >
                Back
              </button>
              <button
                class="bg-green-600 text-white px-4 py-2 rounded"
                @click="submitForm"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
const baseUrl = import.meta.env.VITE_BASE_URL
// import { useToast } from 'vue-toastification'

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
        age: '',
        gender: '',
        site: '',
        processor: '',
        crop: '',
        currentEquipment: '',
        desiredEquipment: '',
        quantity: '',
        quantityUnit: 'Unit',
        address: '',
        idType: '',
        idNumber: '',
        idDocument: null,
        farmDocument: null,
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

        // First crop fields (always visible)
        crops: [
          {
            name: '',
            volume: '',
            volumeUnit: 'kg',
            startMonth: '',
            endMonth: '',
          },
        ],
      },
      profilePictureUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrsaTeFqurvUDvMYOcgZAd-JPf-dtLogrrog&s', // Placeholder profile image
      showPassword: false,
      showConfirmPassword: false,
      errors: {},
      siteList: [],
      cropList: [],
      equipmentList: [],
      monthList: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      response: {
        user_id: '',
        farm_id: '',
        farmer_id: '',
      },
    }
  },
  mounted() {
    this.fetchSites()
  },
  watch: {
    'form.firstName'(value) {
      const nameRegex = /^[A-Za-z\s]+$/
      if (!value) {
        this.errors.firstName = 'First name is required'
      } else if (!nameRegex.test(value)) {
        this.errors.firstName = 'First name cannot contain numbers'
      } else {
        this.errors.firstName = ''
        delete this.errors.firstName
      }
    },

    'form.lastName'(value) {
      const nameRegex = /^[A-Za-z\s]+$/
      if (!value) {
        this.errors.lastName = 'Last name is required'
      } else if (!nameRegex.test(value)) {
        this.errors.lastName = 'Last name cannot contain numbers'
      } else {
        this.errors.lastName = ''
        delete this.errors.lastName
      }
    },

    'form.email'(value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!value) {
        this.errors.email = 'Email is required'
      } else if (!emailRegex.test(value)) {
        this.errors.email = 'Enter a valid email address'
      } else {
        this.errors.email = ''
        delete this.errors.email
      }
    },

    'form.phone'(value) {
      const phoneRegex = /^[0-9]{7,15}$/
      if (!value) {
        this.errors.phone = 'Phone number is required'
      } else if (!phoneRegex.test(value)) {
        this.errors.phone = 'Enter a valid phone number (numbers only)'
      } else {
        this.errors.phone = ''
        delete this.errors.phone
      }
    },
    'form.age'(value) {
      if (!value) {
        this.errors.age = 'Valid age is required'
      } else if (!/^\d+$/.test(value)) {
        this.errors.age = 'Enter a valid age (positive numbers only)'
      } else {
        this.errors.age = ''
        delete this.errors.age
      }
    },

    'form.gender'(value) {
      this.errors.gender = value ? '' : 'Gender is required'
      if (value) {
        delete this.errors.gender
      }
    },

    'form.address'(value) {
      this.errors.address = value ? '' : 'Address is required'
      if (value) {
        delete this.errors.address
      }
    },

    'form.site'(value) {
      this.errors.site = value ? '' : 'Site is required'
      if (value) {
        delete this.errors.site
      }
    },

    'form.crop': function (value) {
      this.errors.crop = value ? '' : 'Crops is required'
      if (value) {
        delete this.errors.crop
      }
    },
    'form.currentEquipment': function (value) {
      this.errors.currentEquipment = value
        ? ''
        : 'Current Equipment is required'
      if (value === this.form.desiredEquipment) {
        this.errors.currentEquipment =
          "Current Equipment Can't be Same as Desired Equipment"
      } else if (value) {
        delete this.errors.currentEquipment
      }
    },
    'form.desiredEquipment': function (value) {
      this.errors.desiredEquipment = value
        ? ''
        : 'Desired Equipment is required'
      if (this.form.currentEquipment === value) {
        this.errors.desiredEquipment =
          "Desired Equipment Can't be Same as Current Equipment"
      } else if (value) {
        delete this.errors.desiredEquipment
      }
    },
    'form.quantity': function (value) {
      if (!value) {
        this.errors.quantity = 'Quantity is required'
      } else if (!/^\d+$/.test(value)) {
        this.errors.quantity = 'Quantity must be a positive number'
      } else {
        this.errors.quantity = ''
        delete this.errors.quantity
      }
    },
    // 'form.processor': {
    // handler(value) {
    //   if (value === 'Yes') {
    //     // Validate crop
    //     this.errors.crop = this.form.crop ? '' : 'Crops is required'

    //     // Validate current equipment
    //     this.errors.currentEquipment = this.form.currentEquipment
    //       ? ''
    //       : 'Current Equipment is required'

    //     // Validate desired equipment
    //     this.errors.desiredEquipment = this.form.desiredEquipment
    //       ? ''
    //       : 'Desired Equipment is required'

    //     // Validate quantity
    //     console.log('this.form.quantity', this.form.quantity)
    //     if (!this.form.quantity) {
    //       this.errors.quantity = 'Quantity is required'
    //     } else if (!/^\d+$/.test(this.form.quantity)) {
    //       this.errors.quantity = 'Quantity must be a positive number'
    //     } else {
    //       this.errors.quantity = ''
    //     }
    //   } else {
    //     // Reset errors if processor is not 'Yes'
    //     this.errors.crop = ''
    //     this.errors.currentEquipment = ''
    //     this.errors.desiredEquipment = ''
    //     this.errors.quantity = ''
    //   }
    // },
    // immediate: true, // Run validation when the component is mounted
    // },
    'form.idType'(value) {
      if (value && !this.form.idNumber) {
        this.errors.idNumber = "Selected ID's Number is required"
      } else {
        this.errors.idNumber = ''
        delete this.errors.idNumber
      }
    },

    'form.idNumber'(value) {
      if (this.form.idType && !value) {
        this.errors.idNumber = "Selected ID's Number is required"
      } else {
        this.errors.idNumber = ''
        delete this.errors.idNumber
      }
    },

    'form.password'(value) {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

      if (!value) {
        this.errors.password = 'Password is required'
      } else if (!passwordRegex.test(value)) {
        this.errors.password =
          'Password must be at least 8 characters long, contain one uppercase, one lowercase, one number, and one special character'
      } else {
        this.errors.password = ''
        delete this.errors.password
      }
    },

    'form.confirmPassword'(value) {
      if (!value) {
        this.errors.confirmPassword = 'Confirm Password is required'
      } else if (value !== this.form.password) {
        this.errors.confirmPassword = 'Passwords do not match'
      } else {
        this.errors.confirmPassword = ''
        delete this.errors.confirmPassword
      }
    },
    'form.smartphone'(value) {
      if (!value) {
        this.errors.smartphone = 'Please select if you have a smartphone'
      } else {
        this.errors.smartphone = ''
        delete this.errors.smartphone
      }
    },
    'form.bankAccount'(value) {
      if (!value) {
        this.errors.bankAccount = 'Please select one of the above options'
      } else {
        this.errors.bankAccount = ''
        delete this.errors.bankAccount
      }

      // if (value === 'Yes') {
      //   if (!this.form.bankName) {
      //     this.errors.bankName = 'Bank name is required'
      //   }
      //   if (!this.form.bankAccountNumber) {
      //     this.errors.bankAccountNumber = 'Bank account number is required'
      //   } else if (!/^\d+$/.test(this.form.bankAccountNumber)) {
      //     this.errors.bankAccountNumber = 'Bank account number must be numeric'
      //   }
      // } else {
      //   this.errors.bankName = ''
      //   this.errors.bankAccountNumber = ''
      // }
    },
    'form.bankAccountNumber'(value) {
      if (this.form.bankAccount === 'Yes') {
        if (!value) {
          this.errors.bankAccountNumber = 'Bank Account Number is required'
        } else if (!/^\d+$/.test(value)) {
          this.errors.bankAccountNumber =
            'Bank Account Number must contain only numbers'
        } else {
          this.errors.bankAccountNumber = ''
          delete this.errors.bankAccountNumber
        }
      }
    },
    'form.farmName'(value) {
      const farmNameRegex = /^[A-Za-z\s]+$/
      if (!value) {
        this.errors.farmName = 'Farm name is required'
      } else if (!farmNameRegex.test(value)) {
        this.errors.farmName = 'Farm name can only contain letters and spaces'
      } else {
        this.errors.farmName = ''
        delete this.errors.farmName
      }
    },
    'form.latitude'(value) {
      const latLngRegex = /^-?([1-8]?[0-9]|90)(\.\d+)?$/
      if (value && !latLngRegex.test(value)) {
        this.errors.latitude = 'Invalid latitude format'
      } else {
        this.errors.latitude = ''
        delete this.errors.latitude
      }
    },
    'form.longitude'(value) {
      const lngRegex = /^-?((1[0-7][0-9])|([1-9]?[0-9]))(\.\d+)?$/
      if (value && !lngRegex.test(value)) {
        this.errors.longitude = 'Invalid longitude format'
      } else {
        this.errors.longitude = ''
        delete this.errors.longitude
      }
    },
    'form.crops': {
      handler(value) {
        if (!Array.isArray(value)) {
          return
        }
        value.forEach((crop, index) => {
          // Crop Name Validation
          if (!crop.name) {
            this.errors[`crop_${index}_name`] = 'Crop name is required'
          } else {
            this.errors[`crop_${index}_name`] = ''
            delete this.errors[`crop_${index}_name`]
          }

          // Crop Volume Validation
          if (!crop.volume) {
            this.errors[`crop_${index}_volume`] = 'Volume is required'
          } else if (!/^\d+$/.test(crop.volume)) {
            this.errors[`crop_${index}_volume`] =
              'Volume must be a positive number'
          } else {
            this.errors[`crop_${index}_volume`] = ''
            delete this.errors[`crop_${index}_volume`]
          }

          // Start Month Validation
          if (!crop.startMonth) {
            this.errors[`crop_${index}_startMonth`] = 'Start month is required'
          } else {
            this.errors[`crop_${index}_startMonth`] = ''
            delete this.errors[`crop_${index}_startMonth`]
          }

          // End Month Validation
          if (!crop.endMonth) {
            this.errors[`crop_${index}_endMonth`] = 'End month is required'
          } else {
            this.errors[`crop_${index}_endMonth`] = ''
            delete this.errors[`crop_${index}_endMonth`]
          }
        })
      },
      deep: true,
    },
  },
  methods: {
    async fetchSites() {
      try {
        const response = await fetch(
          `${baseUrl}/api/method/farmer.api.user_api.fetch_site_list`,
          {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          }
        )
        const data = await response.json()
        if (data && data.message) {
          this.siteList = data.message.data.map((site) => site)
        } else {
          this.errors.site = 'Unexpected response format'
        }
      } catch (err) {
        this.errors.site = 'Failed to fetch sites'
        console.error(err)
      }

      try {
        const response = await fetch(
          `${baseUrl}/api/resource/Equipment Master?fields=["name"]&limit_page_length=1000`,
          {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          }
        )
        const data = await response.json()
        if (data && data.data) {
          this.equipmentList = data.data.map((equipment) => equipment)
          console.log('data', this.equipmentList)
        } else {
          this.errors.currentEquipment = 'Unexpected response format'
          this.errors.desiredEquipment = 'Unexpected response format'
        }
      } catch (err) {
        this.errors.currentEquipment = 'Failed to fetch Equipment'
        this.errors.desiredEquipment = 'Failed to fetch Equipment'

        console.error(err)
      }

      try {
        const response = await fetch(
          `${baseUrl}/api/method/farmer.api.user_api.get_all_crops`,
          {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          }
        )
        const data = await response.json()
        if (data && data.message) {
          this.cropList = data.message.crops.map((crop) => crop)
        } else {
          this.errors.crop = 'Unexpected response format'
        }
      } catch (err) {
        this.errors.crop = 'Failed to fetch Crops'
        console.error(err)
      }
    },

    async registerUser() {
      try {
        // Prepare the data object
        const requestData = {
          first_name: this.form.firstName,
          last_name: this.form.lastName,
          email: this.form.email,
          phone: `${this.form.phoneCode}${this.form.phone}`, // Combining country code and phone
          gender: this.form.gender,
          location: this.form.address, // Mapping address field
          new_password: this.form.password, // Using password field
          id_type: this.form.idType,
          id_number: this.form.idNumber,
          bank_name: this.form.bankName,
          account_number: this.form.bankAccountNumber,
          crops_processed:
            this.form.processor === 'Yes' ? this.form.crop || '' : '',
          qty_processed_daily:
            this.form.processor === 'Yes' ? this.form.quantity || '' : '',
          equipments_used:
            this.form.processor === 'Yes'
              ? this.form.currentEquipment || ''
              : '',
          unit:
            this.form.processor === 'Yes' ? this.form.quantityUnit || '' : '',
          site: this.form.site,
          farm_name: this.form.farmName,
          longitude: this.form.longitude,
          latitude: this.form.latitude,

          crops: this.form.crops.map((crop) => crop.name), // Extracting crop names

          actual_crops: this.form.crops.map((crop) => ({
            crop_name: crop.name,
            start_month: crop.startMonth,
            end_month: crop.endMonth,
            quantity: crop.volume,
            unit: crop.volumeUnit,
          })),
        }

        console.log({ requestData })
        // API Call
        const response = await fetch(
          `${baseUrl}/api/method/farmer.api.user_api.create_user`,
          {
            method: 'POST', // Fixed "PPOST" typo
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestData), // Corrected to pass JSON
          }
        )

        const data = await response.json()

        if (data && data.message) {
          console.log('User Registration Success:', data.message)
          return data.message
        } else {
          console.error('Unexpected API response format:', data)
          return data
        }
      } catch (err) {
        console.error('Failed to register user:', err)
        return err
      }
    },
    async upload_file() {
      try {
        const formData = new FormData()

        // Append necessary fields to formData
        formData.append('user_email', this.response.user_id)
        formData.append('farmer_id', this.response.farmer_id)
        formData.append('farm_name', this.response.farm_id)
        formData.append('profile_image', this.form.profilePicture)
        formData.append('id_document', this.form.idDocument)
        formData.append('farm_document', this.form.farmDocument)

        const response = await fetch(
          `${baseUrl}/api/method/farmer.api.user_api.upload_profile_picture`,
          {
            method: 'POST', // Use POST for file uploads
            body: formData, // Send formData directly
          }
        )

        const data = (await response.json()).message

        if (data && data.status == 200) {
          console.log('Upload successful:', data.message)
          return true
        } else {
          console.error('Unexpected response format:', data)
          return false
        }
      } catch (err) {
        console.error('Upload failed:', err)
      }
    },
    validateStep() {
      this.errors = {} // Reset errors before validation

      if (this.step === 1) {
        this.errors = {} // Reset previous errors

        const nameRegex = /^[A-Za-z\s]+$/ // Only letters and spaces
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Basic email format
        const phoneRegex = /^[0-9]{7,15}$/ // Numbers only, min 7 max 15 digits
        const positiveNumberRegex = /^[1-9]\d*$/ // Only positive numbers

        if (!this.form.firstName) {
          this.errors.firstName = 'First name is required'
        } else if (!nameRegex.test(this.form.firstName)) {
          this.errors.firstName = 'First name cannot contain numbers'
        }

        if (!this.form.lastName) {
          this.errors.lastName = 'Last name is required'
        } else if (!nameRegex.test(this.form.lastName)) {
          this.errors.lastName = 'Last name cannot contain numbers'
        }

        if (!this.form.email) {
          this.errors.email = 'Email is required'
        } else if (!emailRegex.test(this.form.email)) {
          this.errors.email = 'Enter a valid email address'
        }

        if (!this.form.phone) {
          this.errors.phone = 'Phone number is required'
        } else if (!phoneRegex.test(this.form.phone)) {
          this.errors.phone = 'Enter a valid phone number (numbers only)'
        }

        if (!this.form.age) {
          this.errors.age = 'Valid age is required'
        } else if (!positiveNumberRegex.test(this.form.age)) {
          this.errors.phone = 'Enter a valid age (positive numbers only)'
        }

        if (!this.form.gender) {
          this.errors.gender = 'Gender is required'
        }

        if (!this.form.address) {
          this.errors.address = 'Address is required'
        }

        if (!this.form.site) {
          this.errors.site = 'Site is required'
        }

        if (!this.form.processor) {
          this.errors.processor = 'Processor is required'
        }

        // Additional validations only if processor is "Yes"
        if (this.form.processor === 'Yes') {
          if (!this.form.crop) {
            this.errors.crop = 'Crops is required'
          }
          if (!this.form.currentEquipment) {
            this.errors.currentEquipment = 'Current Equipment is required'
          }
          if (!this.form.desiredEquipment) {
            this.errors.desiredEquipment = 'Desired Equipment is required'
          }
          if (!this.form.quantity) {
            this.errors.quantity = 'Quantity is required'
          } else if (!positiveNumberRegex.test(this.form.quantity)) {
            this.errors.quantity = 'Quantity must be a positive number'
          }
        }

        // Validate ID number only if ID type is selected
        if (this.form.idType && !this.form.idNumber) {
          this.errors.idNumber = "Selected ID's Number is required"
        }
      }

      if (this.step === 2) {
        const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

        if (!this.form.password) {
          this.errors.password = 'Password is required'
        } else if (!passwordRegex.test(this.form.password)) {
          this.errors.password =
            'Password must be at least 8 characters long, contain one uppercase, one lowercase, one number, and one special character'
        }

        if (!this.form.confirmPassword) {
          this.errors.confirmPassword = 'Confirm Password is required'
        } else if (this.form.confirmPassword !== this.form.password) {
          this.errors.confirmPassword = 'Passwords do not match'
        }
      }

      if (this.step === 3) {
        // Smartphone & Bank Account Validation
        if (!this.form.smartphone) {
          this.errors.smartphone = 'Please select one of the above options'
        }

        if (!this.form.bankAccount) {
          this.errors.bankAccount = 'Please select one of the above options'
        } else if (this.form.bankAccount === 'Yes') {
          if (!this.form.bankName) {
            this.errors.bankName = 'Bank name is required'
          }
          if (!this.form.bankAccountNumber) {
            this.errors.bankAccountNumber = 'Bank account number is required'
          } else if (!/^\d+$/.test(this.form.bankAccountNumber)) {
            this.errors.bankAccountNumber =
              'Bank account number must be numeric'
          }
        }
      }

      if (this.step === 4) {
        // Validate Farm Name (Only text, no numbers or special characters)
        const farmNameRegex = /^[A-Za-z\s]+$/
        if (!this.form.farmName) {
          this.errors.farmName = 'Farm name is required'
        } else if (!farmNameRegex.test(this.form.farmName)) {
          this.errors.farmName = 'Farm name can only contain letters and spaces'
        } else {
          this.errors.farmName = ''
          delete this.errors.farmName
        }

        // Validate Latitude & Longitude (Optional but must be valid coordinates)
        const latLngRegex = /^-?([1-8]?[0-9]|90)(\.\d+)?$/ // For latitude (-90 to 90)
        const lngRegex = /^-?((1[0-7][0-9])|([1-9]?[0-9]))(\.\d+)?$/ // For longitude (-180 to 180)

        if (this.form.latitude && !latLngRegex.test(this.form.latitude)) {
          this.errors.latitude = 'Invalid latitude format'
        } else {
          this.errors.latitude = ''
          delete this.errors.latitude
        }

        if (this.form.longitude && !lngRegex.test(this.form.longitude)) {
          this.errors.longitude = 'Invalid longitude format'
        } else {
          this.errors.longitude = ''
          delete this.errors.longitude
        }

        // Validate crop details
        this.form.crops.forEach((crop, index) => {
          if (!crop.name) {
            this.errors[`crop_${index}_name`] = 'Crop name is required'
          } else {
            this.errors[`crop_${index}_name`] = ''
            delete this.errors[`crop_${index}_name`]
          }

          if (!crop.volume) {
            this.errors[`crop_${index}_volume`] = 'Volume is required'
          } else if (!/^\d+$/.test(crop.volume)) {
            this.errors[`crop_${index}_volume`] =
              'Volume must be a positive number'
          } else {
            this.errors[`crop_${index}_volume`] = ''
            delete this.errors[`crop_${index}_volume`]
          }

          if (!crop.startMonth) {
            this.errors[`crop_${index}_startMonth`] = 'Start month is required'
          } else {
            this.errors[`crop_${index}_startMonth`] = ''
            delete this.errors[`crop_${index}_startMonth`]
          }

          if (!crop.endMonth) {
            this.errors[`crop_${index}_endMonth`] = 'End month is required'
          } else {
            this.errors[`crop_${index}_endMonth`] = ''
            delete this.errors[`crop_${index}_endMonth`]
          }
        })
      }

      return Object.keys(this.errors).length === 0 // Return true if no errors
    },
    addAnotherCrop() {
      console.log('this.crops', this.form.crops)
      this.form.crops.push({
        name: '',
        volume: '',
        volumeUnit: 'Unit',
        startMonth: '',
        endMonth: '',
      })
    },
    removeCrop(index) {
      this.form.crops.splice(index, 1)
    },
    nextStep() {
      // if (this.step <= 3) this.step++
      console.log('checking error', this.errors)
      if (!this.validateStep()) {
        return // Stop execution if validation fails
      } else if (this.step < 4) {
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
        // this.form.crops = ''
        // this.form.currentEquipment = ''
        // this.form.desiredEquipment = ''
        // this.form.quantity = ''
        // this.form.quantityUnit = 'Unit'
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
    triggerFileInput() {
      this.$refs.fileInput.click() // Triggers hidden input when clicked
    },
    handleFileUpload(event, flag) {
      const file = event.target.files[0]
      if (file) {
        if (file.type !== 'application/pdf') {
          alert('Only PDF files are allowed!')
          return
        }
        if (file.size > 10 * 1024 * 1024) {
          alert('File size must be less than 10MB!')
          return
        }
        if (flag == 'ID') {
          this.form.idDocument = file
          console.log('ID')
        } else {
          this.form.farmDocument = file
          console.log('Document')
        }

        // let formData = new FormData()
        // formData.append('file', file, file.name)
        // this.upload_file(formData)
      }
    },
    handleFileDrop(event) {
      event.preventDefault()
      const file = event.dataTransfer.files[0]
      if (file) {
        this.handleFileUpload({ target: { files: [file] } })
      }
    },
    changeProfilePicture(event) {
      const file = event.target.files[0]
      this.form.profilePicture = file

      const reader = new FileReader()
      reader.onload = (e) => {
        this.profilePictureUrl = e.target.result
      }
      reader.readAsDataURL(file)
      // this.profilePictureUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrsaTeFqurvUDvMYOcgZAd-JPf-dtLogrrog&s' // Change to uploaded image

      // handleFileUpload()
    },
    async handleSubmit() {
      if (this.validateStep()) {
        if (this.step === 4) {
          try {
            const respo = await this.registerUser() // Call registerUser and get response
            console.log({ respo })

            if (respo && respo.message === 'User Created Successfully') {
              this.response.user_id = respo.data.user_id
              this.response.farm_id = respo.data.farm_id
              this.response.farmer_id = respo.data.farmer_id

              const is_uploaded = await this.upload_file()

              if (is_uploaded) {
                console.log('Redirecting to login...')
                window.location.href = '/login' // Redirect to Frappe login page
              } else {
                console.error('Registration failed: Due to File Upload')
              }
            } else {
              console.error('Registration failed:', respo.message)
            }
          } catch (error) {
            console.error('Failed to register. Please try again!', error)
          }
        }
      } else {
        console.log('Form validation failed:', this.errors, this.validateStep())
      }
    },
  },
  name: 'farmerRegister',
}
</script>
