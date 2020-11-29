export const tokyoNumber = {
    data() {
        return {
            title:"Welcome To Tokyo",
            tmpData: "home"
        }
    },
    methods: {
        lowerCase(value) {
            return value.toLowerCase()
        }
    },
    created() {
        console.log("created in mixin")
    }

} 