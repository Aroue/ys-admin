<template>
  <a-carousel autoplay>
    <div> <img src="../assets/images/carousel/1.jpg" height="160" width="1305"/></div>
    <div><img src="../assets/images/carousel/2.jpg" height="160" width="1305"/></div>
    <div><img src="../assets/images/carousel/3.jpg" height="160" width="1305"/></div>
    <div><img src="../assets/images/carousel/4.jpg" height="160" width="1305"/></div>
  </a-carousel>
</template>

<script>
  export default {
    name: "Carousel"
  }
</script>

<style scoped>
  .ant-carousel >>> .slick-slide {
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
  }

  .ant-carousel >>> .slick-slide h3 {
    color: #fff;
  }
</style>
