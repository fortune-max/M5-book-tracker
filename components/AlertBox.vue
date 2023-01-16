<script setup lang="ts">
    type AlertBoxTypes = "error" | "success" | "info" | "warning";
    const props = defineProps<{
        type: AlertBoxTypes
    }>();

    const computedClasses = computed(() => {
        switch (props.type) {
            case "error":
                return "red";
            case "warning":
                return "orange";
            case "info":
                return "blue";
            case "success":
                return "green";
        }
    });
</script>

<template>
    <div :class="computedClasses">
        <slot/>
    </div>
</template>

<style scoped>
.red {  /* error */
    color: red;
}

.blue { /* default */
    color: blue;
}

.success { /* success */
    color: green;
}

.orange {   /* warning */
    color: orange;
}

.green { /* success */
    color: green;
}

</style>