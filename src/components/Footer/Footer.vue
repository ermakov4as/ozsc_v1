<template>
    <v-card>
        <v-row justify="center" no-gutters>
            <v-btn
                v-for="link in links"
                :key="link.name"
                class="mx-2"
                color="orange-darken-2"
                rounded="s"
                variant="text"
                :to="link.path"
            >
                {{ link.name }}
            </v-btn>
        </v-row>
        <v-card>
            <v-card-text class="text-center" cols="12">
                {{ text }}
                {{ new Date().getFullYear()  }}
            </v-card-text>
        </v-card>
    </v-card>
  </template>
  
  <script>
    export default {
      data () {
        return {
          tab: null,
          text: 'ООО "ОЗСК", 2023 - ',
          links: [
                {
                    name: 'О компании',
                    path: '/company/'
                },
                {
                    name: 'Щебень',
                    path: '/production/'
                },
                {
                    name: 'Как купить',
                    path: '/sales/'
                },
                {
                    name: 'Контакты',
                    path: '/contacts'
                }
            ]
        }
      },
    }
  </script>
