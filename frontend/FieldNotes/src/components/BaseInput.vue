<script setup>
    defineProps({
        label:String,
        modelValue:String,
        type: {
            type: String,
            default:'text'
        },
        id:String,
        name: String,
        placeholder: String
    })

    defineEmits(['update:modelValue'])
</script>
<template>
    <div class="form-group">
        <label :for="id">{{ label }}</label>
        <input :id="id" :name="name" :type="type" :placeholder="placeholder" :value="modelValue" @input="$emit('update:modelValue',$event.target.value)">
    </div>
</template>
<style scoped>
.form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    gap: 0.4rem;
    width: 100%;
}

label {
    font-size: 0.95rem;
    font-weight: 600;
    color: #2f2f2f;
}

input {
    width: 100%;
    padding: 0.8rem 0.9rem;
    border: 1px solid #d8d3ca;
    border-radius: 10px;
    font-size: 1rem;
    background-color: #fff;
    box-sizing: border-box;
}

input:focus {
    outline: none;
    border-color: #4f6f5f;
    box-shadow: 0 0 0 3px rgba(79, 111, 95, 0.12);
}
</style>