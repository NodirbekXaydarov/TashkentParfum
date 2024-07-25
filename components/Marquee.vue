<script setup>
import {
  defineProps,
  ref,
  reactive,
  computed,
  nextTick,
  onMounted,
  onUnmounted,
  watch,
} from "vue";

const props = defineProps({
  list: { type: Array, default: () => ["Education", "purposes"] },
  time: { type: [String, Number], default: 6 },
});

const marqueeArea = ref(null);
const marqueeBox = ref(null);

const states = reactive({
  copyTimes: 2,
  movingDistance: 0,
  time: props.time,
});

const setMarquee = () => {
  states.copyTimes = 1;

  nextTick(() => {
    const areaWidth = marqueeArea
      ? Math.floor(marqueeArea.value.offsetWidth)
      : 0;
    const boxWidth = marqueeBox ? Math.floor(marqueeBox.value.offsetWidth) : 0;

    states.copyTimes = Math.max(2, Math.ceil((areaWidth * 2) / boxWidth)) || 2;
    states.movingDistance = boxWidth * Math.floor(states.copyTimes / 2);

    states.time = parseFloat(
      ((props.time * states.movingDistance) / 375).toFixed(2),
    );
  });
};

const boxStyles = computed(() => ({
  transform: `translateX(-${states.movingDistance}px)`,
  animationDuration: `${states.time}s`,
}));

onMounted(() => {
  setMarquee();
});

// composables start
const useWindowWidth = () => {
  const windowWidth = ref(window?.innerWidth);
  const width = computed(() => windowWidth.value);

  const onWidthChange = () => {
    windowWidth.value = window?.innerWidth;
  };

  onMounted(() => {
    window.addEventListener("resize", onWidthChange);
  });

  onUnmounted(() => window.removeEventListener("resize", onWidthChange));

  return { width };
};

const { width } = useWindowWidth();
// composables end

watch(width, () => {
  setMarquee();
});
</script>

<template>
  <div ref="marqueeArea" class="marqueeArea">
    <div ref="marqueeBox" class="marqueeBox" :style="boxStyles">
      <template
        v-for="index in states.copyTimes"
        :key="`marqueeItemCopy-${index}`"
      >
        <div
          v-for="(item, listIndex) in list"
          :key="`marqueeItem-${index}-${listIndex}`"
          class="marqueeItem"
        >
          {{ item }}
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
@keyframes boxMove {
  from {
    transform: translateX(0);
  }
}

.marqueeArea {
  position: relative;
  overflow: hidden;
}

.marqueeBox {
  display: inline-block;
  white-space: nowrap;
  animation: boxMove 10s linear infinite;
}

.marqueeBox:hover {
  animation-play-state: paused;
}

.marqueeItem {
  display: inline-block;
  margin-right: 2rem;
}
</style>

<!-- demo style -->
<style>
:root {
  --bg: #fff;
}

#app {
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
}

.marqueeArea {
  padding: 10px 0;
  background-color: white;
}

.marqueeArea::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image: linear-gradient(
    to right,
    var(--bg),
    transparent 20%,
    transparent 80%,
    var(--bg)
  );
}
</style>
