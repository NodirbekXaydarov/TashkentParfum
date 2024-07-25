<template>
  <section class="bg-white text-black rounded-xl p-6 mb-6">
    <!-- Header part -->
    <div class="flex justify-between mb-5 relative">
      <div class="flex">
        <h3 class="leading-130 sm:text-32 text-xl font-bold">Отзывы</h3>
        <span class="ml-2 sm:ml-[9px] sm:mt-1 text-gray-500 text-xl"
          >({{ productComments.length }})</span
        >
      </div>
      <BaseButton
        text="Добавить отзыв"
        wrapper-class="!py-2 !px-4 !hidden sm:!flex"
        :disabled="isButtonDisabled"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      />
      <Transition>
        <div
          v-if="showBtnTooltip"
          class="absolute top-[-90px] right-0 lg:right-[-55px] !-ml-4 px-3 py-2 text-center bg-gray-50 bg-opacity-80 w-64 rounded-lg"
        >
          <p class="text-white font-rubik">
            Отзыв можно оставить только после приобретения данного продукта
          </p>
        </div>
      </Transition>
    </div>

    <!-- Statistics part -->
    <div
      v-if="productComments.length !== 0"
      class="flex flex-col sm:flex-row p-4 mb-5 bg-gray-100 rounded-lg"
    >
      <!-- Info -->
      <div
        class="flex sm:block mb-[7px] sm:pr-5 sm:mr-5 sm:my-2 sm:border-r border-gray-300"
      >
        <span class="text-[40px] font-semibold mr-4 sm:mr-0">{{
          productDetails.rate
        }}</span>
        <div>
          <CommonStars
            :rating="productDetails.rate"
            icon-class="min-w-4 min-h-4"
            :stars-gap="'gap-2'"
            wrapper-class="my-1"
          />
          <p class="text-xs text-gray-500 mt-1 sm:mt-0">
            ({{ productCommentRates.total }} отзыва)
          </p>
        </div>
      </div>

      <!-- Show on mobile only Btn -->
      <div class="sm:hidden pt-3 !border-t border-gray-300">
        <BaseButton
          text="Добавить отзыв"
          wrapper-class="!py-2 !px-4 w-full"
          :disabled="false"
        />
        <Transition>
          <div
            v-if="showBtnTooltip"
            class="absolute top-[-90px] right-[-55px] !-ml-4 px-3 py-2 text-center bg-gray-50 bg-opacity-80 w-64 rounded-lg"
          >
            <p class="text-white font-rubik">
              Отзыв можно оставить только после приобретения данного продукта
            </p>
          </div>
        </Transition>
      </div>

      <!-- Progress Bar -->
      <div class="hidden sm:grid gap-2 w-full">
        <div
          v-for="i in [5, 4, 3, 2, 1]"
          :key="i"
          class="flex flex-row h-4.5 items-center grid-column-start"
        >
          <p class="text-sm w-3 font-semibold mr-0.5">{{ i }}</p>
          <span class="text-xs text-gray-500 w-[28px]">
            {{ getRatingIndex(i)?.percent }}%
          </span>
          <img
            class="w-3 h-3 mx-1"
            src="/images/stars/star.svg"
            alt="star-image"
          />
          <div
            class="bg-gray-300 w-full h-3 rounded-full relative"
            @mousemove="updateMousePosition"
          >
            <div
              class="bg-yellow h-full rounded-full hover:bg-yellow-100 cursor-pointer"
              :style="'width: ' + getRatingIndex(i)?.percent + '%'"
              @mouseover="showTooltip(i)"
              @mouseleave="hideTooltip"
            />
            <span
              v-if="tooltipVisible && hoveredIndex === i"
              class="absolute z-20 bg-gray-50 text-white bg-opacity-80 rounded-lg px-2 py-1"
              :style="{ top: mouseY - 35 + 'px', left: mouseX - 10 + 'px' }"
            >
              {{ getRatingIndex(i)?.count }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Reviews part -->
    <div v-if="productComments.length !== 0">
      <ProductReview
        v-for="(comment, index) in productComments"
        :key="index"
        :review="comment"
        :class="{ 'pt-4 border-t': index !== 0 }"
      />

      <!-- Show more btn -->
      <BaseButton
        v-if="productComments.length > 10"
        variant="secondary"
        :text="'Load More'"
        icon-position="left"
        :icon="'icon-arrow-down'"
        wrapper-class="!py-2 !gap-1 m-auto font-semibold"
      />
    </div>

    <div v-if="productComments.length === 0">
      <div class="flex flex-col text-center items-center">
        <img class="mb-4" src="/images/no-comment.svg" alt="empty" />
        <div>
          <h4 class="text-2xl text-black font-bold">Ещё нет отзывов</h4>
          <p class="text-sm font-sfpro tracking-[-0.15px] text-[#D5D5D5]">
            Оставленные отзывы будут видны тут
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type {
  TProductDetails,
  TProductComment,
  TProductCommentRates,
} from "~/types/products.types";

interface Props {
  productDetails: TProductDetails;
  productComments: TProductComment[];
  productCommentRates: TProductCommentRates;
}

const props = defineProps<Props>();

const { productComments } = toRefs(props);

function getRatingIndex(i: number) {
  return props.productCommentRates.rates.find((rateObj) => rateObj.rate === i);
}

// const ReviewsShown = ref(5);
// const averageRating = ref(0);

// Filtering data and getting necessary information
// const ratings = productComments.value.map(
//   (comment: TProductComment) => comment.rating,
// );

// if (ratings.length !== 0) {
//   averageRating.value = parseFloat(
//     (ratings.reduce((acc, curr) => acc + curr) / ratings.length).toFixed(1),
//   );
// }
// const reorderedReviews = productComments.value.sort((a, b) =>
//   a.time > b.time ? -1 : b.time > a.time ? 1 : 0,
// );

// function getIndexRating(i: number) {
//   return ratings.filter((x) => x == i).length;
// }

// function getPercentRating(i: number) {
//   return (
//     Math.round((ratings.filter((x) => x == i).length / ratings.length) * 100) +
//     "%"
//   );
// }

// Button tooltip
const isButtonDisabled = ref(true);
const showBtnTooltip = ref(false);

const handleMouseEnter = () => {
  if (isButtonDisabled.value) {
    showBtnTooltip.value = true;
  }
};

const handleMouseLeave = () => {
  showBtnTooltip.value = false;
};

// // Show more button
// const handleShowMore = () => {
//   if (ReviewsShown.value !== productReviews.value.length) {
//     ReviewsShown.value = productReviews.value.length;
//   } else {
//     ReviewsShown.value = 5;
//   }
// };

// Progress bar tooltips
const hoveredIndex = ref(0);
const tooltipVisible = ref(false);
const mouseX = ref(0);
const mouseY = ref(0);

const showTooltip = (index: number) => {
  hoveredIndex.value = index;
  tooltipVisible.value = true;
};

const hideTooltip = () => {
  tooltipVisible.value = false;
  hoveredIndex.value = 0;
};

const updateMousePosition = (event: any) => {
  mouseX.value = event.offsetX;
  mouseY.value = event.offsetY;
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
