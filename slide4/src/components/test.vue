<template>
  <div class="container mt-5">
    <div class="card shadow">
      <div class="card-body">
        <h4 class="text-center mb-4">KIỂM TRA ĐỘ TUỔI</h4>

        <input type="number" class="form-control mb-3"
               placeholder="Nhập năm sinh"
               v-model="namSinh">

        <button class="btn btn-primary w-100" @click="tinhTuoi">
          Xem kết quả
        </button>

        <div v-if="hienThi" class="alert alert-success mt-3">
          <p>Năm sinh: <b>{{ namSinh }}</b></p>
          <p>Tuổi: <b>{{ tuoi }}</b></p>
          <p>Phân loại: <b>{{ nhomTuoi }}</b></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      namSinh: "",
      tuoi: 0,
      nhomTuoi: "",
      hienThi: false
    }
  },
  methods: {
    tinhTuoi() {
      const year = new Date().getFullYear();
      this.tuoi = year - this.namSinh;

      if (this.tuoi <= 11) this.nhomTuoi = "Trẻ em";
      else if (this.tuoi <= 17) this.nhomTuoi = "Thiếu niên";
      else if (this.tuoi <= 35) this.nhomTuoi = "Thanh niên";
      else if (this.tuoi <= 59) this.nhomTuoi = "Trung niên";
      else this.nhomTuoi = "Lớn tuổi";

      this.hienThi = true;
    }
  }
}
</script>
