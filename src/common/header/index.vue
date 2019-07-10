<template>
    <div id="header">

        <div class="top">
            <a href="javascript:;" class="logo"></a>
            <a href="javascript:;" class="btn-1 iconfont icon-sousuo"></a>
            <a href="javascript:;" class="btn-2">充值</a>
            <a href="javascript:;" class="btn-3">打开APP</a>
        </div>
        <div class="nav">
            <ul>
                <li v-for="(item,index) in title " :key="index">{{item}}</li>

            </ul>
        </div>
    </div>

</template>
<script>
export default {
    name:'headernav',
    data(){
        return{
            
                    title:["首页","赛事","体育","视频","资讯","英雄联盟","绝地求生"],
                   


       
        }
    }
}
</script>
<style>
    #header{
    width: 100%;
    background: #f2f2f2;
}
.top{
    width: 100%;
    background: #f2f2f2;
    padding: .12rem;
    overflow: hidden;
}
.top .logo{
    background: url('../img/logo.png');
    background-size: 100%;
    display: block;
    width: 1.5rem;
    height: .88rem;
    float: left;
}
.top .btn-1{
    float: left;
    margin-left: 1.56rem;
    font-size: .4rem;
    color: #c5c6c7;
    padding: .1rem;
    margin-top: .14rem;
}
.top .btn-2{
    float:left;
    margin-left: .24rem;
    border:1px solid #da4136;
    border-radius: .36rem;
    width: 1.2rem;
    height: .6rem;
    line-height: .6rem;
    text-align: center;
    font-size: .16rem;
    color: #da4136;
    margin-top: .14rem;
}
.top .btn-3{
    float: left;
    margin-left: .24rem;
    width: 1.9rem;
    height: .6rem;
    border-radius: .32rem;
    background: #da4136;
    line-height: .6rem;
    text-align: center;
    font-size: .16rem;
    color: #fff;
    margin-top: .14rem;
}
.nav{
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: .1rem;
}
.nav ul{
    display: flex;
    justify-content: space-between;
    width:120%;

}
.nav ul li{
    padding: 1%;
    text-align: center;
}
</style>


