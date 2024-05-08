<template>
    <v-card>
        <v-toolbar color="blue-grey-lighten-4">
            <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
            <v-card-title class="text-center justify-center py-6">
                <h1 class="font-weight-bold text-h3 text-ozsc">
                    ОБЪЕДИНЁННЫЕ ЗАВОДЫ СТРОИТЕЛЬНОГО КАМНЯ
                </h1>
            </v-card-title>
            <v-spacer></v-spacer>
            <template v-slot:extension>
                <v-tabs
                    v-model="currentItem"
                    fixed-tabs
                    color="orange-darken-2"
                    grow
                >
                    <v-tab
                        v-for="item in fixedItems"
                        :key="item.name"
                        :text="item.name"
                        :value="'tab-' + item.name"
                        :to="item.path"
                    ></v-tab>
                    <v-tab
                        v-for="item in items"
                        :key="item.name"
                        :text="item.name"
                        :value="'tab-' + item.name"
                        :to="item.path"
                    ></v-tab>
                    <!-- TODO: нужно сделать, чтобы клик по любому месту v-tab ниже открывал "Другое" -->
                    <v-tab>
                        <v-menu v-if="more.length">
                            <template v-slot:activator="{ props }">
                                <v-btn
                                    class="align-self-center me-4"
                                    rounded="0"
                                    variant="plain"
                                    v-bind="props"
                                >
                                    Другое
                                </v-btn>
                            </template>

                            <v-list class="bg-ozsc">
                                <v-list-item
                                    v-for="item in more"
                                    :key="item.name"
                                    :title="item.name"
                                    :to="item.path"
                                    @click="addItem(item)"
                                ></v-list-item>
                            </v-list>
                        </v-menu>
                    </v-tab>
                </v-tabs>
            </template>
        </v-toolbar>

        <v-tabs-window v-model="currentItem">
        <v-tabs-window-item
            v-for="item in items"
            :key="item"
            :value="'tab-' + item"
        >
            <v-card flat>
            <v-card-text>
                {{ text }}
            </v-card-text>
            </v-card>
        </v-tabs-window-item>
        </v-tabs-window>
    </v-card>
  </template>

<script>
export default {
  data () {
    return {
        currentItem: 'tab-Web',
        fixedItems: [
            {
                name: 'Главная',
                path: '/'
            },
            {
                name: 'Наша продукция',
                path: '/production/'
            }
        ],
        items: [
            {
                name: 'О компании',
                path: '/company/'
            },
            {
                name: 'Контакты',
                path: '/contacts'
            }
        ],
        more: [
            {
                name: 'Сертификаты, декларации',
                path: '/sertificates/'
            },
            {
                name: 'Лабораторные испытания',
                path: 'laboratory-tests'
            },
            {
                name: 'Как это работает',
                path: 'how-does-it-work'
            },
            {
                name: 'Как купить',
                path: 'sales'
            },
            {
                name: 'Наши клиенты',
                path: 'clients'
            }
        ],
        text: 'Здесь можно написать первичный текст / новости про ОЗСК.'
    }
  },
  methods: {
        addItem (item) {
            const removed = this.items.splice(0, 1)
            this.items.push(
            ...this.more.splice(this.more.indexOf(item), 1),
            )
            this.more.push(...removed)
            this.$nextTick(() => { this.currentItem = 'tab-' + item })
        }
    }
}
</script>
