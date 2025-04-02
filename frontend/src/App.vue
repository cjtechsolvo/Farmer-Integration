<template>
  <div>
    <router-view />
  </div>
</template>
<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
/* @import url('https://cdn.tailwindcss.com'); */
</style>
<script>
window.onload = function () {
  var loginContent = document.querySelector('.for-signup .login-content')
  if (loginContent) {
    loginContent.classList.add('full-width-login')
  }

  // For hiding .page-card-head
  var pageCardHead = document.querySelector('.for-signup .page-card-head')
  if (pageCardHead) {
    pageCardHead.classList.add('hide-page-card-head')
  }

  var pageCardHead = document.querySelector('.container.my-4')
  if (pageCardHead) {
    pageCardHead.classList.add('custom-container')
  }
}
</script>
