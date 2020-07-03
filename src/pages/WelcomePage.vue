<template>
    <div>
        <p>基础组件测试页面</p>

        <h4>Underline</h4>
        <underline>123</underline>

        <h4>Border</h4>
        <border>1234</border>
        <border :component="true">1234</border>
    </div>


</template>

<script>
    import Border from '../../components/Border.vue'
    import Underline from '../../components/Underline.vue'

    export default {
        components: {
            'underline': Underline,
            'border': Border
        }
    }
</script>

