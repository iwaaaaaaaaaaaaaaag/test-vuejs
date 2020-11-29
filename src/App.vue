<template>
    <router-view name="header"></router-view>
    <transition
        name="fade"
        mode="out-in"
        @before-enter="beforeEnter"
    >
        <router-view></router-view>
    </transition>
</template>

<script>
export default {
    methods: {
        beforeEnter(){
            //難しすぎてスキップ
         this.$emit('')
        }
    }
}
</script>

<style scoped>
.link {
    margin-right: 10px;
}
.link--active {
    font-size: 20px;
}


.fade-enter-from {
    /* 現れる時の最初の状態 */
    opacity: 0;
}
.fade-enter-active{
    /* 現れる時のトランジションの状態 */
    transition: opacity 0.5s;
}
.fade-enter-to{
    /* 現れる時の最後の状態 */
    opacity: 1;
}
.fade-leave-from{
    /* 消える時の最初の状態 */
    opacity: 1;
}
.fade-leave-active{
    /* 消える時のトランジションの状態 */
    transition: opacity 0.5s;
}
.fade-leave-to{
    /* 消える時の最後の状態 */
    opacity: 0;
}
</style>