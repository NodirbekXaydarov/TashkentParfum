<template>
  <section class="bg-white rounded-xl p-6 flex justify-center mb-6">
    <div class="w-full">
      <div class="w-full flex justify-between items-center mb-[17px]">
        <h3
          class="leading-130 md:text-32 sm:text-2xl text-lg text-black font-bold"
        >
          Отзывы
        </h3>
        <BaseButton
          text="Добавить отзыв"
          wrapper-class="!py-2 !px-4 text-xs leading-5"
        />
      </div>

      <div class="flex flex-col text-center items-center">
        <img class="mb-4" src="/images/no-comment.svg" alt="empty" >
        <div>
          <h4 class="text-2xl text-black">Ещё нет отзывов</h4>
          <p class="text-sm font-sfpro tracking-[-0.15px] text-[#D5D5D5]">
            Оставленные отзывы будут видны тут
          </p>
        </div>
      </div>
    </div>
  </section>
</template>



<style lang="scss" scoped></style>
