<script setup lang="ts"></script>

<template>
  <main class="flex h-screen items-start justify-center bg-lightGrey font-poppins">
    <div
      class="custom-radius mx-auto mt-16 w-full max-w-xs bg-white px-4 py-12 md:max-w-md md:px-8 lg:max-w-lg"
    >
      <form class="flex items-center justify-between gap-4 md:justify-start md:gap-8">
        <label class="flex flex-col gap-1">
          <span class="text-sm uppercase text-smokeGrey">day</span>
          <input
            type="number"
            placeholder="DD"
            class="w-20 rounded-lg border-lightGrey focus:border-primary-purple focus:ring-primary-purple md:w-24 md:text-xl"
          />
        </label>
        <label class="flex flex-col gap-1">
          <span class="text-sm uppercase text-smokeGrey">month</span>
          <input
            type="number"
            placeholder="MM"
            class="w-20 rounded-lg border-lightGrey focus:border-primary-purple focus:ring-primary-purple md:w-24 md:text-xl"
          />
        </label>
        <label class="flex flex-col gap-1">
          <span class="text-sm uppercase text-smokeGrey">year</span>
          <input
            type="number"
            placeholder="YYYY"
            class="w-20 rounded-lg border-lightGrey focus:border-primary-purple focus:ring-primary-purple md:w-24 md:text-xl"
          />
        </label>
      </form>
      <div class="my-14 flex items-center justify-center md:my-0">
        <hr class="w-full max-w-xs md:max-w-none" />
        <button
          class="absolute z-10 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-primary-purple transition hover:bg-offBlack active:scale-95 md:static md:shrink-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="40" viewBox="0 0 46 44">
            <g fill="none" stroke="#FFF" stroke-width="2">
              <path
                d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"
              />
            </g>
          </svg>
        </button>
      </div>
      <div class="text-4xl font-extrabold italic md:text-5xl">
        <p><span class="text-primary-purple">- -</span> years</p>
        <p><span class="text-primary-purple">- -</span> months</p>
        <p><span class="text-primary-purple">- -</span> days</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
  appearance: textfield;
}
.custom-radius {
  border-radius: 25px 25px 100px 25px;
}
</style>
