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
                        v-for="item in items"
                        :key="item"
                        :text="item"
                        :value="'tab-' + item"
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
                                    :key="item"
                                    :title="item"
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
                <h2>{{ item }}</h2>
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
        items: [
            'Главная', 'О компании', 'Наша продукция', 'Контакты'
        ],
        more: [
            'Сертификаты, декларации', 'Лабораторные испытания', 'Как это работает', 'Наши клиенты'
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
