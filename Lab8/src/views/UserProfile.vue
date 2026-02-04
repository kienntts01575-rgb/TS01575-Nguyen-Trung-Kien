<!-- <template>
  <div>
    <h2>Thông tin người dùng</h2>
    <p>Tên: Nguyễn Trung Kiên</p>
    <p>Email: kien@gmail.com</p>
  </div>
</template> -->


<template>
  <div>
    <h2>Trang cá nhân</h2>

    <nav>
      <router-link to="/profile/info">Thông tin</router-link> |
      <router-link to="/profile/settings">Cài đặt</router-link>
    </nav>

    <router-view />
  </div>
</template>
