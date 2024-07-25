<template>
  <div class="cursor-pointer">
    <input
      :id="id"
      type="checkbox"
      class="cursor-pointer w-4.5 h-4.5 relative outline outline-2 outline-gray-400 rounded rotate-90 checked:rotate-0 checked:outline-none checked:before:flex"
    />
  </div>
</template>


<script setup lang="ts">
interface IProps {
  id: number
};

defineProps<IProps>()
</script>


<style scoped>
input {
  appearance: none;
  transition: transform 0.175s linear;
}

input::before,
input::after {
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 4px;
  display: none;
  justify-content: center;
  align-items: center;
  background: #f62559;
  font-family: icomoon !important;
  color: white;
  font-size: 24px;
}

input::before {
  content: "\e90f" !important;
}

input::after {
  content: "\e910" !important;
  font-size: 16px;
}
</style>
