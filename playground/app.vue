<script setup>
const alert = (msg) => window.alert(msg) // vue why
</script>
<template>
    <div>
        <HButton
            kind="filled"
            content="Press me!"
            @click="alert('yippee')"
        />
    </div>
</template>

<script setup>
</script>
