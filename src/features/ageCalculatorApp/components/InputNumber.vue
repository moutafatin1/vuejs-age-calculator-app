<script lang="ts" setup>
import { useField } from 'vee-validate'

const props = defineProps<{
  name: string
}>()

const { errorMessage, value } = useField(() => props.name)
</script>

<template>
  <div class="relative flex flex-col gap-1">
    <label class="flex flex-col gap-1">
      <span
        class="text-sm uppercase text-smokeGrey"
        :class="{ 'text-primary-lightRed': errorMessage }"
        >{{ name }}</span
      >
      <input
        type="number"
        v-model="value"
        class="h-14 w-20 rounded-lg border-lightGrey focus:border-primary-purple focus:ring-primary-purple md:w-24 md:text-xl lg:w-28"
        :class="{ 'border-primary-lightRed': errorMessage }"
      />
    </label>
    <p
      v-if="errorMessage"
      class="absolute top-full mt-1 font-sans text-sm font-normal italic text-primary-lightRed"
    >
      {{ errorMessage }}
    </p>
  </div>
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
</style>
