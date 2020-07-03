<template>
    <v-app>
        <main-header></main-header>
        <main-menu></main-menu>
        <v-content>
            <router-view />
        </v-content>
    </v-app>
</template>

<script>
    import MainMenu from '@/components/MainMenu';
    import MainHeader from '@/components/MainHeader';
    import HelloWorld from './components/HelloWorld';

    export default {
        name: 'App',
        components: {
            'main-menu': MainMenu,
            'main-header': MainHeader,
            HelloWorld,
        },


        data: () => ({
            //
        }),
    };
</script>
