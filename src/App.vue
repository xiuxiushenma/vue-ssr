<template>
    <div id="app">
        头部 －－－－－－ 头部
        <br>
        <router-link to="/">bar</router-link>
        <router-link to="/foo">foo</router-link>
        <router-view></router-view>
    </div>
</template>


<script>
export default {
    components:{
    },
    metaInfo: {
      title: 'DefaultTitle',
    }
}
</script>
