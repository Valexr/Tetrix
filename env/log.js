export default {
    name: 'log',
    setup(build) {
        build.onEnd(result => {
            const { errors, warnings } = result;
            const time = new Date().toLocaleTimeString();
            console.dir(`${time} builded with ${errors.length} errors / ${warnings.length} warnings`);
        });
    },
};