<script setup lang="ts">
import InputNumber from '@/features/ageCalculatorApp/components/InputNumber.vue';
import { toTypedSchema } from '@vee-validate/zod';
import dayjs from "dayjs";
import { useForm } from 'vee-validate';
import { ref } from 'vue';
import { z } from 'zod';

const schema = z.object({
  day: z.coerce.number().min(1, 'Must be a valid day').max(31, 'Must be a valid day'),
  month: z.coerce.number().min(1, 'Must be a valid month').max(12, 'Must be a valid month'),
  year: z.coerce
    .number()
    .min(1, 'Must be a valid year')
    .max(new Date().getFullYear(), 'Must be in the past')
})

const { handleSubmit, handleReset } = useForm({
  validationSchema: toTypedSchema(schema)
})
const age = ref<{
  years: number | null,
  months: number | null,
  days: number | null
}>()

const onSubmit = handleSubmit((data) => {
  const birthDate = dayjs(`${data.year}-${data.month}-${data.day}`)
  const currentDate = dayjs(Date.now())
  const years = currentDate.diff(birthDate, "year")
  const months = currentDate.diff(birthDate, "month") - years * 12
  const days = currentDate.diff(birthDate.add(years, "year").add(months, "month"), "day")

  age.value = { years, months, days }
  // handleReset()

})
</script>

<template>
  <main class="flex h-screen items-start justify-center bg-lightGrey font-poppins md:items-center">
    <div class="custom-radius mx-auto mt-16 w-full max-w-xs bg-white px-4 py-12 md:max-w-lg md:px-8 lg:max-w-xl">
      <form id="age-form" class="flex items-center justify-between gap-4 md:justify-start md:gap-8" @submit="onSubmit">
        <InputNumber name="day" />
        <InputNumber name="month" />
        <InputNumber name="year" />
      </form>
      <div class="my-14 flex items-center justify-center md:my-0 md:mt-4">
        <hr class="w-full max-w-xs md:max-w-none" />
        <button form="age-form"
          class="absolute z-10 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-primary-purple transition hover:bg-offBlack active:scale-95 md:static md:h-20 md:w-20 md:shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="40" viewBox="0 0 46 44">
            <g fill="none" stroke="#FFF" stroke-width="2">
              <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
            </g>
          </svg>
        </button>
      </div>
      <div class="text-4xl font-extrabold italic md:text-7xl">
        <p><span class="text-primary-purple">{{ age?.years ?? "- -" }}</span> years</p>
        <p><span class="text-primary-purple">{{ age?.months ?? "- -" }}</span> months</p>
        <p><span class="text-primary-purple">{{ age?.days ?? "- -" }}</span> days</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.custom-radius {
  border-radius: 25px 25px 100px 25px;
}
</style>
