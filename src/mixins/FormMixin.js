import { v4 as genId } from "uuid";

export default {
    beforeRouteEnter(to, from, next) {
        next(vm => {
            if (to.query.editing) {
                const [current] = vm.$store.state.appData[vm.$data.collection].filter(
                    e => e.id === to.query.id
                );
                vm.$data.edited = { ...current };
            }
        });
    },
    methods: {
        saveItem() {
            this.$store.commit(this.$route.query.editing ? "editItem" : "addItem", {
                collection: this.collection,
                data: {
                    ...this.edited,
                    ...(this.$route.query.editing ? {} : { id: genId() }),
                    ...this.additionalFields
                }
            });
            this.edited = { ...this.default, days: Array(0) };
            this.$router.push({ name: this.collection });
        },
        deleteItem() {
            const check = confirm("Do you really wan't delete this item?");
            if (check) {
                this.$store.commit('deleteItem', { collection: this.collection, id: this.edited.id })
                this.$router.push({ name: this.collection });
            }
        },
        cancel() {
            this.$router.push({ name: this.collection });
        }
    }
}