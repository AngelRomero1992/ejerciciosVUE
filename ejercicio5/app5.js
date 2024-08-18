const { createApp, ref } = Vue;

createApp({
    setup() {
        const tasks = ref([]);
        const newTask = ref('');

        const addTask = () => {
            if (newTask.value.trim()) {
                tasks.value.push(newTask.value);
                newTask.value = '';
            }
        };

        const removeTask = (index) => {
            tasks.value.splice(index, 1);
        };

        return {
            tasks,
            newTask,
            addTask,
            removeTask
        };
    }
}).mount('#app');