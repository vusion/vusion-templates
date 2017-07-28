<template>
<div :class="$style.root">
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

<style module>
$height: 15px;
.root {
    height: calc($height - 5px);
}
</style>
