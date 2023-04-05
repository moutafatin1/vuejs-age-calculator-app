<script setup lang="ts">
import { MyButton } from '@/components/elements'
import InputField from '@/components/forms/InputField.vue'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { z } from 'zod'
const formSchema = z.object({
  username: z.string().min(1, 'Username is required')
})
const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(formSchema)
})
const onSubmit = handleSubmit((data) => {
  console.log(data)
})
</script>

<template>
  <main>
    <h1 class="mt-8 text-center text-5xl text-violet-600">Home Page</h1>
    <form @submit="onSubmit" class="mx-auto mt-8 max-w-xl">
      <InputField name="username" placeholder="Username" />
      <MyButton class="mt-2 w-full">Submit</MyButton>
    </form>
  </main>
</template>
