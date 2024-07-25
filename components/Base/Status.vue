<template>
  <div
    class="flex-center gap-1.5 rounded-lg p-2 self-start"
    :class="statusInfo(status).background"
  >
    <i
      class="text-xl leading-5 flex-center"
      :class="[statusInfo(status).icon, statusInfo(status).iconColor]"
    />
    <span class="text-sm text-black">{{ statusInfo(status).text }}</span>
  </div>
</template>

<script setup>
interface Props {
  status: string;
}

const props = defineProps({
  status: {
    type: String,
    required: true,
  }
});

const statusInfo = computed(() => (key: string) => {
  const icon = {
    canceled: "icon-close-circle-solid",
    delivering: "icon-history",
    delivered: "icon-check-circle",
  };

  const background = {
    canceled: "bg-red-10",
    delivering: "bg-yellow-50",
    delivered: "bg-green-50",
  };

  const iconColor = {
    canceled: "text-red",
    delivering: "text-yellow",
    delivered: "text-green",
  };

  const text = {
    canceled: "Отменено",
    delivering: "В процессе доставки",
    delivered: "Доставлено",
  };

  return {
    icon: icon[key],
    iconColor: iconColor[key],
    background: background[key],
    text: text[key],
  };
});
</script>
