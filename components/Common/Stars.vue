<template>
  <div
    class="flex flex-row items-center"
    :class="[
      wrapperClass,
      { '!flex-row-reverse justify-end': ratingPos === 'right' },
    ]"
  >
    <span
      v-if="ratingPos"
      class="mr-1"
      :class="[ratingClass, { '!ml-1 !mr-0': ratingPos === 'right' }]"
    >
      {{ rating }}
    </span>
    <div class="grid grid-cols-5" :class="starsGap">
      <div v-for="i in 5" :key="i">
        <div class="star-rating">
          <span :style="'width: ' + calculateWidth(rating, i)"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  rating?: number;
  ratingPos?: "left" | "right";
  wrapperClass?: string;
  starSize?: string;
  ratingClass?: string;
  starsGap?: string;
}

withDefaults(defineProps<Props>(), {
  starSize: "12px",
  starsGap: "gap-1",
  rating: 0,
});

const calculateWidth = computed(() => {
  return (rating: number, i: number) =>
    (rating > i ? 1 : rating > i - 1 ? rating - i + 1 : 0) * 100 + "%";
});
</script>

<style scoped>
.star-rating {
  --star-size: v-bind("starSize");

  width: var(--star-size);
  height: var(--star-size);
  position: relative;
  &:before {
    background-image: url("/images/stars/star-gray.svg");
    background-size: var(--star-size);
    width: var(--star-size);
    height: var(--star-size);
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  span {
    display: block;
    text-indent: -10000px;
    height: var(--star-size);
    position: absolute;
    overflow: hidden;
    &:before {
      background-image: url("/images/stars/star.svg");
      background-size: var(--star-size);
      width: var(--star-size);
      height: var(--star-size);
      content: "";
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      text-indent: 10000px;
    }
  }
}
</style>
