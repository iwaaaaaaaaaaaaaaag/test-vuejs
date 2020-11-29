<template>
    <h2>{{lowerCase(title)}}</h2>
</template>

<script>
import { tokyoNumber } from "@/tokyoNumber"

export default {
    mixins: [tokyoNumber],
    created() {
        console.log("created in component")
    }
}
</script>
