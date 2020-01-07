<template>
    <div>Hello vue.js 
        <p>你好的</p>
       <router-view /> 
    </div>
</template>
<script>
export default{
        name:'App',
    }
</script>
<style scoped>
p{
    color:red;
}
</style>