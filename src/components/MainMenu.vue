<template>
    <v-navigation-drawer :clipped="$vuetify.breakpoint.lgAndUp" app>
        <v-list dense>
            <v-list-item-group>
                <div v-for="(item, i) in items" :key="i">
                    <v-list-item :to="{name: item.route}" exact-active-class="router-link-exact-active">
                        <v-list-item-icon class="mr-4">
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>{{ item.text }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item :to="{name: child.route}" exact-active-class="router-link-exact-active" v-for="(child, j) in item.children" :key="j">
                        <v-list-item-icon class="mr-4">
                            <v-icon>{{ child.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content class="ml-4">
                            <v-list-item-title>{{ child.text }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </div>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        props: {
            drawer: null,
        },
        data: () => ({
            items: [
                { icon: 'mdi-apps', text: '首页', route: 'welcome' },
                { icon: 'mdi-apps', text: '时间', route: 'time' },
                { icon: 'mdi-apps', text: 'ECharts', route: 'echarts' },
            ],
        })
    }
</script>

<!--<style>
    .theme--light.v-list-item.v-list-item--active {
        color: rgba(0, 0, 0, 0.87) !important;
    }

        .theme--light.v-list-item.v-list-item--active .v-icon {
            color: rgba(0, 0, 0, 0.54) !important;
        }

    .theme--light.v-list-item:before {
        background-color: inherit !important;
    }

    .theme--light.v-list-item:hover:before {
        background-color: currentColor !important;
    }

    .theme--light.router-link-exact-active {
        color: inherit !important;
    }

        .theme--light.router-link-exact-active:before {
            background-color: currentColor !important;
            color: rgba(0, 0, 0, 0.87) !important;
        }

        .theme--light.router-link-exact-active .v-icon {
            color: rgba(0, 0, 0, 0.87) !important;
        }
</style>-->

