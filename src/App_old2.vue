<template>
<div>
    <button @click="myAnimation = 'fade'">fade</button>
    <button @click="myAnimation = 'slide'">slide</button>
    <p>{{myAnimation}}</p>
    <br>
    <button @click="add">追加</button>
    <ul style="width: 200px; margin: auto">
        <transition-group name="fade">
            <li v-for="(number, index) in numbers"
            @click="remove(index)"
            :key="number"
            >{{number}}
             </li>
        </transition-group>
    </ul>
    <button @click="show = !show">切り替え</button>
    <br><br>
    <transition :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"

        @before-leave="beforeLeave"
        @leave="Leave"
        @after-leave="afterLeave"
        @leave-cancelled="LeaveCancelled"
    >
        <div class="circle" v-if="show"></div>
    </transition>
    <button @click="myComponent = 'ComponentA'">ComponentA</button>
    <button @click="myComponent = 'ComponentB'">ComponentB</button>
    <transition name="fade">
        <component :is="myComponent"></component>    
    </transition>
    <transition name="fade" mode="out-in">
        <p v-if="show" key="bye">さよなら</p>
        <p v-else key="hello">こんにちは</p>
    </transition>
    <transition name="fade"
    enter-class="" 
    enter-active-class="animate__animated animate__bounce"
    enter-to-class=""
    leave-class=""
    leave-active-class=""
    leave-to-class=""
    >    
    <p v-if="show">hello</p>
    </transition>

    <transition :name="myAnimation" appear>
    <p v-show="show">bye</p>
    </transition>
</div>
</template>

<script>
import ComponentA from "./components/ComponentA.vue"
import ComponentB from "./components/ComponentB.vue"


export default {
    components: {
        ComponentA,
        ComponentB
    },
    data() {
        return {
            numbers: [0,1,2],
            nextNumber: 3,
            show: true,
            myAnimation: 'slide',
            myComponent: "ComponentA"
        }
    },
    methods: {
        randomIndex(){
            return Math.floor(Math.random() * this.numbers.length)
        },
        add() {
            this.numbers.splice(this.randomIndex(), 0, this.nextNumber)
            this.nextNumber += 1
        },
        remove(index) {
            this.numbers.splice(index, 1)
        },
        beforeEnter(el){
                el.style.transform = 'scale(0)'

        },
        enter(el, done){ 
            let scale = 0
            const interval = setInterval(() => {
                el.style.transform = `scale(${scale})`
                scale += 0.1
                if (scale > 1) {
                    clearInterval(interval)
                    done()
                }
            }, 20)
        },
//        afterEnter(el){ },
//        enterCancelled(el){ },

//        beforeLeave(el){ },
        Leave(el, done){
            let scale = 1
            const interval = setInterval(() => {
                el.style.transform = `scale(${scale})`
                scale -= 0.1
                if (scale < 0) {
                    clearInterval(interval)
                    done()
                }
            }, 20)            
        },
//        afterLeave(el){ },
//        leaveCancelled(el){ },

}
}
</script>

<style scoped>
.circle {
    width: 200px;
    height: 200px;
    margin: auto;
    border-radius: 100px;
    background-color: deeppink;
}

.fade-move {
    transition: transform 1s;
}
.fade-enter-from {
    /* 現れる時の最初の状態 */
    opacity: 0;
}
.fade-enter-active{
    /* 現れる時のトランジションの状態 */
    transition: opacity 1s;
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
    transition: opacity 1s;
    position: absolute;
}
.fade-leave-to{
    /* 消える時の最後の状態 */
    opacity: 0;
}



.slide-enter-active {
    animation: slide-in 0.5s;
}
.slide-leave-active {
    animation: slide-in 0.5s reverse;
}

@keyframes slide-in {
    from {
        transform: translateX(100px);
    }
    to {
        transform: translateX(0);
    }
}

.main {
    width: 70%;
    margin: auto;
    padding-top: 5rem;
    text-align: center;
}
</style>