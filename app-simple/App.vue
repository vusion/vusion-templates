<template lang="html">
<div>
    <u-button>Hello World</u-button>
</div>
</template>

<script>
import Button from 'u-button.vue';

export default {
    components: {
        [Button.options.name]: Button,
    },
};
</script>

<style lang="css">
</style>
