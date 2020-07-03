<template>
    <p>{{now}}</p>
</template>
<script>
    import moment from 'moment';

    export default {
        data: () => ({
            now: null
        }),
        methods: {
            refresh: function () {
                this.now = moment().format('YYYY-MM-DD HH:mm:ss');
            }
        },
        mounted: function () {
            setInterval(this.refresh, 1000);
        }
    }
</script>