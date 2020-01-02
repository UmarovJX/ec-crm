export default function (to, from, next) {
    next(vm => {
        if (to.query.editing) {
            const [current] = vm.$store.state.appData[vm.$data.collection].filter(
                e => e.id === to.query.id
            );
            vm.$data.edited = { ...current };
        }
    });
}