<template>
    <div id="rpToast">
        <component v-for="item in items"
                   :key="item.id"
                   :is="item.component"
                   :title="item.title"
                   :description="item.description"
                   class="mb-1"
                   :class="item.class"
        />
    </div>
</template>

<script>
import Vue from "vue";

export default {
    name: "testToaster",
    data() {
        return {
            items: []
        }
    },
    mounted() {
        Vue.prototype.$toast = (description, title = null, icon = "success", timeout = 2500, theme = 'default') => {
            const item = {
                id: Math.random(),
                description,
                title,
                class: "fadeIn",
                component: require(`./themes/${theme}/${icon}`).default
            };

            this.items.push(item);

            this.$nextTick(async () => {
                await new Promise(resolve => setTimeout(resolve, 250));

                this.items.find(x => x.id === item.id).class = null;
            });

            const timer = setTimeout(async () => {
                this.items.find(x => x.id === item.id).class = 'fadeOut';

                await new Promise(resolve => setTimeout(resolve, 600));

                const itemId = this.items.indexOf(item);

                this.items.splice(itemId, 1);

                clearTimeout(timer);
            }, timeout);
        }
    }
}
</script>

<style scoped>
#rpToast {
    position: fixed;
    right: 1rem;
    top: 1rem;
    padding-right: 1rem;
}

@keyframes fade {
    from {
        opacity: 0;
        transform: translateX(30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.fadeIn {
    animation: fade 1s forwards;
}

.fadeOut {
    animation: fade .7s reverse;
}
</style>