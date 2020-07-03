<template>
    <div class="border" :class="{'component':component}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            component: Boolean
        }
    }
</script>

<style>
    .border {
        border: 1px solid #0094ff;
        margin: 5px;
        padding: 5px;
    }

    .component {
        border-color: #ff6a00;
    }
</style>
