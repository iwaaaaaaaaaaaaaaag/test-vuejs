<template>
    <p v-border:solid.round.shadow="{width: '5px', color: 'red'}">{{tmpData}}</p>
    <h2>{{lowerCase(title)}}</h2>
    <CountNumber></CountNumber>
</template>

<script>
import CountNumber from "./CountNumber.vue"
import { tokyoNumber } from "@/tokyoNumber"


export default {
    mixins: [tokyoNumber],
    components: {
        CountNumber
    },
    computed: {
        upperCaseTitle() {
            return this.title.toUpperCase()      
        }
    },
    directives: {
        border(el, binding) {
        el.style.borderWidth = binding.value.width
        el.style.borderColor = binding.value.color
        el.style.borderStyle = binding.arg
        if (binding.modifiers.round) {
            el.style.borderRadius = "0.5rem"
        }

        if (binding.modifiers.shadow) {
            el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.26)"
        }
   
        }
    }
}
</script>
