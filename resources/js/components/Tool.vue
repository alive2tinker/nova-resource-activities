<template>
    <card class="w-1/2 px-6 py-3">
        <h4>Activity Log</h4>
        <ul class="my-3 p-0">
            <li
                class="flex flex-row my-2 overflow-hidden"
                v-for="(activity, index) in activities"
                :key="activity.id"
            >
                <div class="flex-col px-3">
                    <p class="rounded-full border-2 border-gray-500 px-3 py-2">
                        {{ index }}
                    </p>
                    <div
                        v-show="index != activities.length - 1"
                        class="timeline-link bg-gray-500"
                    ></div>
                    <div
                        v-show="index == activities.length - 1"
                        class="timeline-dot bg-gray-500"
                    ></div>
                </div>
                <div class="flex-col">
                    <h4 class="text-gray-800">{{ activity.description }}</h4>
                    <p>{{ activity.createdAt }}</p>
                </div>
            </li>
        </ul>
    </card>
</template>

<script>
export default {
    props: ["resourceName", "resourceId", "panel"],

    data() {
        return {
            activities: []
        };
    },
    mounted() {
        Nova.request()
            .get(
                `/nova-vendor/resource-activities/${this.resourceName}/${this.resourceId}`
            )
            .then(response => {
                this.activities = response.data.data;
            });
    }
};
</script>
<style scoped>
.timeline-link {
    width: 0.2rem;
    border-radius: 1rem;
    margin-left: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    min-height: 30px;
    height: 100%;
}
.timeline-dot{
  width: 0.3rem;
  aspect-ratio: 1;
  border-radius: 1rem;
  margin-left: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.border-gray-500 {
    --tw-border-opacity: 1;
    border-color: rgba(107, 114, 128, var(--tw-border-opacity));
}
.bg-gray-500 {
    --tw-bg-opacity: 1;
    background-color: rgba(107, 114, 128, var(--tw-bg-opacity));
}
</style>
