new Vue({

el:"#vue-app",
data: {
health:100,
phase2:false,
ended:false, 
aalert:""
},
methods:{

hit:function(){
    this.health -= 7.5;
    if(this.health<=40){
        this.phase2=true;
    }
    if(this.health<=0){
        this.ended=true;
        this.aalert="it was Margaret Thatcher all along , Tarnished .."
    }
},


restart:function(){
    this.health = 100;
    this.ended = false
    this.phase2=false;
    this.aalert="";
}

},
computed:{

}

})