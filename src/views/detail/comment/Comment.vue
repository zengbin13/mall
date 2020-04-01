<template>
  <div class="comment after" v-if="Object.keys(comment).length !== 0">
    <div class="header">
      <div class="total">商品评价 ({{ comment.cRate }})</div>
      <a href="#" class="more">
        <div>查看更多 &gt;</div>
      </a>
    </div>
    <div class="content">
      <div class="avatar">
        <img :src="commendInfo.user.avatar" :alt="commendInfo.user.avatar" />
        <span>{{ commendInfo.user.uname }}</span>
      </div>
      <div class="info">{{ commendInfo.content }}</div>
      <div class="img">
        <img
          :src="item"
          :alt="item"
          v-for="item in commendInfo.images"
          :key="item.id"
        />
      </div>
      <div class="date">
        <span class="created">{{commendInfo.created | dateformat}} </span>
        <span class="style"> {{ commendInfo.style }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    comment: {
      type: Object
    }
  },
  computed: {
    commendInfo() {
      return this.comment.list[0];
    }
  }
};
</script>

<style lang="scss" scoped>
.comment {
  padding: 10px;
}
.header {
  font-size: 14px;
  color: $mainText;
  display: flex;
  justify-content: space-between;
  .more {
    color: $mainColor;
  }
}
.content {
  color: $mainText;
  font-size: 13px;
}
.avatar {
  padding: 15px 0;
  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    float: left;
  }
  span {
    font-size: 13px;
    line-height: 25px;
    display: inline-block;
    padding-left: 8px;
  }
}
.info {
  line-height: 20px;
  font-size: 14px;
  // height: 60px;
  // text-overflow: ellipsis;
  // overflow: hidden;
  // display: -webkit-box;
  // -webkit-line-clamp: 3;
  // -webkit-box-orient: vertical;
}
.img {
  padding: 10px 0;
  display: flex;
  justify-content: start;
  img {
    width: 30%;
    height: 160px;
    object-fit: cover;
    border-radius: 6px;
    margin-right: 15px;
  }
}
.date {
  font-size: 12px;
}
</style>
