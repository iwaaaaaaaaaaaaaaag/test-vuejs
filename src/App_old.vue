<template>
<LikeHeader>
        <h3>はじめまして</h3>
</LikeHeader>
<LikeNumber :totalNumber="number" @my-click="incrementNumber"></LikeNumber>
<button @click="currentComponent = 'Home'">Home</button>
<button @click="currentComponent = 'About'">About</button>
<keep-alive>
<component :is="currentComponent"></component>
</keep-alive>
<div>
    <h2>イベントのフォーム</h2>
    <EventTitle v-model="eventData.title"></EventTitle>

    <label for="maxNumber">最大数</label>
    <input 
        id="maxNumber" 
        type="number"
        v-model.number="eventData.maxNumber"
    >
    <p>{{eventData.maxNumber}}</p>

    <label for="host">主催者</label>
    <input 
        id="host" 
        type="text"
        v-model.trim="eventData.host"
    >
    <p>{{eventData.host}}</p>


    <label for="detail">イベントの内容</label>
    <textarea id="detail" cols="30" rows="10" v-model="eventData.detail"></textarea>
    <pre>{{eventData.detail}}</pre>

    <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
    <label for="isPrivate">非公開</label>
    <p>{{eventData.isPrivate}}</p>

    <p>参加条件</p>
    <input type="checkbox" value="10代" id="10" v-model="eventData.target">
    <label for="10">10代</label>
    <input type="checkbox" value="20代" id="20" v-model="eventData.target">
    <label for="20">20代</label>
    <input type="checkbox" value="30代" id="30" v-model="eventData.target">
    <label for="30">30代</label>
    <p>{{eventData.target}}</p>

    <p>参加費</p>
    <input type="radio" id="free" value="無料" v-model="eventData.price">
    <label for="free">無料</label>
    <input type="radio" id="paid" value="有料" v-model="eventData.price">
    <label for="paid">有料</label>
    <p>{{eventData.price}}</p>

    <p>開催場所</p>
    <select v-model="eventData.location">
        <option v-for="location in locations" :key="location">{{location}}</option>
    </select>
    <p>{{eventData.location}}</p>
</div>

</template>

<script>
import LikeHeader from "./components/LikeHeader.vue"
import About from "./components/About.vue"
import Home from "./components/Home.vue"
import EventTitle from "./components/EventTitle.vue"


export default {
    data(){
        return {
         number: 14,
         currentComponent: 'Home',
         locations: ["東京","大阪","名古屋"],
         eventData: {
             title: "タイトル",
             maxNumber: 0,
             host:"s  ",
             detail: "",
             isPrivate: false,
             target:[],
             price:"",
             location:"東京"
         }
         }
    },
    components: {
        LikeHeader,
        About,
        Home,
        EventTitle
    },
    methods: {
        incrementNumber(value) {
            this.number = value
        }
    }
}
</script>
