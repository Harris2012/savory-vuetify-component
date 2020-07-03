<template>
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
        <v-toolbar-title style="width: 300px" class="pl-0">
            <v-btn :to="{ name: 'welcome' }" text x-large>Google Contacts</v-btn>
        </v-toolbar-title>
        <v-spacer />
        <v-btn icon>
            <v-icon>mdi-apps</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-bell</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
    export default {

    }
</script>

<style>
    .v-btn:before {
        background-color: inherit !important;
    }
</style>
