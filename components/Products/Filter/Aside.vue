<template>
  <div class="w-[278px] rounded-xl bg-white sticky !bottom-5">
    <div class="py-4 px-4">
      <div class="flex items-center justify-between font-proxima-nova">
        <p class="text-xl leading-[25px]">Фильтр</p>
        <BaseButton
          text="очистить"
          size="large"
          variant="transparent"
          wrapper-class="!text-gray-500 hover:!text-black !p-0"
        />
      </div>
      <div class="flex items-center justify-between mt-5 cursor-pointer">
        <h3 class="text-base font-bold leading-125">Разделы</h3>
        <i class="icon-chevron-down transition ease-in-out delay-75 text-2xl" />
      </div>
      <ul class="mt-3">
        <li
          class="py-2 border-b border-gray-200"
          v-for="(filter, idx) of items"
          :key="idx"
        >
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
              <input
                type="checkbox"
                :id="filter.id"
                v-model="filter.checked"
                @change="handleChange(idx)"
                class="cursor-pointer w-4.5 h-4.5 relative outline outline-2 outline-gray-400 rounded rotate-90 checked:rotate-0 checked:outline-none checked:before:flex"
              />
              <label
                :for="filter.id"
                class="leading-130 text-sm font-semibold text-gray-51 font-proxima-nova flex gap-2 flex-row-reverse cursor-pointer"
                >{{ filter.label }}
              </label>
            </div>
          </div>
          <ul class="">
            <li
              class="py-2 border-b border-gray-200 last:border-none"
              v-for="(child, childIndex) in filter?.children"
              :key="childIndex"
            >
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-2 mt-2">
                  <input
                    type="checkbox"
                    :id="child.id"
                    v-model="child.checked"
                    class="cursor-pointer w-4.5 h-4.5 relative outline outline-2 outline-gray-400 rounded rotate-90 checked:rotate-0 checked:outline-none checked:before:flex"
                    @change="handleChange(idx, childIndex)"
                  />
                  <label
                    :for="child.id"
                    class="leading-130 text-sm font-semibold text-gray-51 font-proxima-nova flex gap-2 flex-row-reverse"
                  >
                    {{ child.label }}
                  </label>
                </div>
                <i
                  v-if="filter?.children"
                  :class="{
                    'rotate-0': !filter.checked,
                    'rotate-180': filter.checked,
                  }"
                  class="icon-chevron-down transition ease-in-out delay-75 text-2xl"
                />
              </div>
              <ul class="ml-6">
                <li
                  class="py-2 border-b border-gray-200"
                  v-for="(grandChild, grandChildIndex) in child?.children"
                  :key="grandChildIndex"
                >
                  <div class="flex items-center gap-2">
                    <input
                      type="checkbox"
                      :id="grandChild.id"
                      v-model="grandChild.checked"
                      @change="handleChange(idx, childIndex, grandChildIndex)"
                      class="cursor-pointer w-4.5 h-4.5 relative outline outline-2 outline-gray-400 rounded rotate-90 checked:rotate-0 checked:outline-none checked:before:flex"
                    />
                    <label
                      :for="grandChild.id"
                      class="leading-130 text-sm font-semibold text-gray-51 font-proxima-nova flex items-center gap-2 flex-row-reverse"
                    >
                      {{ grandChild.label }}
                    </label>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <!-- <div v-for="filter of filterProducts" :key="filter.id" class="mt-5">
        <div
          class="w-full flex justify-between group !items-center border-b border-gray-200 py-2"
        >
          <FormGroup
            :id="filter.title"
            :for="filter?.id"
            v-model:checked="checkFilter"
            :label="filter.title"
            wrapper-class="!flex-row-reverse"
            label-class="font-proxima-nova !text-black hover:!text-red"
            @click="handleClickCheck(filter.title)"
          >
            <FormCheckbox :id="filter?.id" />
          </FormGroup>
          <i
            v-if="filter.child"
            :class="{ 'rotate-0': !checkId, 'rotate-180': checkId }"
            class="icon-chevron-down"
          />
        </div>
      </div> -->
      <div
        class="flex items-center justify-between py-5 cursor-pointer border-b border-gray-200"
      >
        <h3 class="text-base font-bold leading-125">Производители</h3>
        <i class="icon-chevron-down transition ease-in-out delay-75 text-2xl" />
      </div>
      <div
        class="flex items-center justify-between py-5 cursor-pointer border-b border-gray-200"
      >
        <h3 class="text-base font-bold leading-125">Скидочные товары</h3>
        <FormToggle />
      </div>
      <div class="mt-5 cursor-pointer">
        <h3 class="text-base font-bold leading-125">
          Диапазон цены <span class="text-sm text-gray-500">(сум)</span>
        </h3>
        <div class="mt-1.5 flex items-center w-full !gap-x-1.5">
          <div class="w-2/4">
            <p class="text-sm leading-130 text-gray font-semibold">от</p>
            <FormInput id="1" placeholder="0" inputClass="!w-full" />
          </div>
          <div class="!w-2 h-0.5 bg-gray-500" />
          <div class="w-2/4">
            <p class="text-sm leading-130 text-gray font-semibold">до</p>
            <FormInput id="2" placeholder="0" inputClass="!w-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { filterProducts } from "~/mocks/aside-filter";
import type { IItem } from "~/types/aside";

const items = toRef(filterProducts);

const handleChange = (
  index: number,
  childIndex: number | null = null,
  grandChildIndex: number | null = null,
) => {
  const parent = items.value[index];
  console.log(items.value, index);

  const child: IItem | null =
    childIndex && parent ? parent.children[childIndex] : null;
  const grandChild =
    grandChildIndex !== null ? child?.children?.[grandChildIndex] : null;

  const target = grandChild || child || parent;
  updateCheckStatus(target, target.checked);
  console.log(child, grandChild);

  if (grandChild) checkParent(child);
  if (child) checkParent(parent);
};

const updateCheckStatus = (item: IItem, status: boolean) => {
  item.checked = status;
  if (item.children) {
    item.children.forEach((child) => updateCheckStatus(child, status));
  }
};

const checkParent = (parent: IItem | null) => {
  if (parent) {
    parent.checked = parent.children?.every((child) => child.checked) ?? false;
    let parentElement = document.getElementById(parent.id) as HTMLInputElement;
    parentElement.indeterminate =
      (parent.children?.some((child) => child.checked) && !parent.checked) ??
      false;
  }
};
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

input[type="checkbox"]:indeterminate::after {
  content: "\e910" !important;
  display: block;
  color: white;
  transform: rotate(90deg);
  display: block;
  background: #f62559;
}
</style>
