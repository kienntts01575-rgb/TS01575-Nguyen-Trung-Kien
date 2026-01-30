<template>
  <div class="container mt-5">
  <h1 class="text-center mb-4">Kiến thức sức khỏe cộng đồng</h1>

  <div class="row">
    <div
      class="col-sm-4 mb-3"
      v-for="(item, index) in items"
      :key="index"
    >
      <div class="card w-100">
        <img :src="item.image" class="card-img-top">
        <div class="card-body text-start">
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text">{{ item.content }}</p>
          <button class="btn btn-info">Xem chi tiết</button>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script setup>
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'

const items = [
  {
    title: '8 loại rau củ quả giàu canxi',
    content:
      'Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi...',
    image: img1
  },
  {
    title: 'Các loại gia vị tốt cho sức khỏe',
    content:
      'Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn...',
    image: img2
  },
  {
    title: '9 loại đậu bổ dưỡng nên dùng nhiều',
    content:
      'Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ...',
    image: img3
  }
]
</script>
