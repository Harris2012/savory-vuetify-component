<template>
    <div>
        <p>echarts</p>

        <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
    </div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        methods: {
            drawLine() {

                var myChart = echarts.init(document.getElementById('myChart'))

                myChart.setOption({
                    title: { text: '在Vue中使用echarts' },
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                });
            }
        },
        mounted() {
            this.drawLine();
        }
    }
</script>
