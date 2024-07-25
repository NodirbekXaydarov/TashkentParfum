<template>
  <div class="relative w-full">
    <FormInput
      id="search"
      v-model="form.search"
      type="search"
      placeholder="search"
      wrapper-class="focus-within:!border-black flex-grow"
    >
      <template #prefix>
        <i class="icon-search text-gray" />
      </template>
      <template #suffix>
        <button
          v-if="form.search"
          class="icon-close-circle cursor-pointer text-xl leading-5 text-gray-500 hover:text-red transition-300"
          @click="clearSearch"
        />
      </template>
    </FormInput>
    <div
      class="absolute bg-white z-20 rounded-xl w-full shadow-black-shadow mt-2"
    >
      <ul v-if="searchResults.length">
        <li
          v-for="search of searchResults"
          :key="search.id"
          class="flex items-center gap-x-2.5 py-2 px-3 transition-all delay-100 duration-100 hover:bg-gray-200 cursor-pointer rounded-xl"
          @click="$router.push(`/${search.id}`)"
        >
          <img
            class="p-[3px] rounded-10 border border-gray-300"
            :src="search.img"
            :alt="search.title"
          >
          <span v-html="wrapTextInSpan(search.title, form.search)" />
          <i class="icon-chevron-right text-gray" />
        </li>
      </ul>
      <div
        v-if="!searchResults.length && form.search !== ''"
        ref="target"
        class="flex flex-col items-center py-[52px]"
      >
        <img src="/images/empty/search.svg" alt="not found" >
        <h2 class="mt-4">По вашему запросу ничего не найдено</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHeader } from "~/composables/header";

const { form, clearSearch } = useHeader();
const target = ref(null);

// onClickOutside(target, (event) => console.log(event));

function wrapTextInSpan(fullText, searchText) {
  const regex = new RegExp("(" + searchText + ")", "gi");
  return fullText.replace(
    regex,
    "<span class='bg-yellow-200 rounded pl-0.5'>$1</span>",
  );
}

const props = defineProps({
  searchData: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const searchResults = computed(() => {
  if (form.search === "") {
    return [];
  }

  return props.searchData.filter((item) => {
    if (item.title.toLowerCase().includes(form.search.toLowerCase())) {
      return item;
    }
  });
});
</script>
