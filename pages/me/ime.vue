<template>
    <div>
this is me

<h1>{{ foo }}</h1>
<h1>{{ data?.message }}</h1>
    </div>
</template>
<script lang="ts" setup>
const foo = useFoo();
const {data} = await useFetch('/api/hello');
</script>