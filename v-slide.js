(function(){
    Vue.component("v-unicorn",{
        template:`
            <div @click='next_slide' class='v-unicorn'>
                <slot></slot>
            </div>
        `,
        props:{
            startPage: {
                type:Number,
                default: 1
            }
        }
        ,
        data:function(){
            return {
                number_of_slide: 0
            }
        },
        methods:{
            clamp:function(value,min,max){
                if(value < min) return max;
                else if(value > max) return min;
                else return value;
            },
            next_slide:function(){
                this.startPage = this.clamp(this.startPage + 1,
                1,this.number_of_slide)
                for(child of this.$children){
                    child.currentPage = this.startPage;
                }
            }
        },
        mounted :function(){
            var i =0;
            for(child of this.$children){
                child.currentPage = this.startPage;
                child.index = ++i;
                this.number_of_slide ++;
            }
        }
    });

    Vue.component("v-slide",{
        template:`
        <transition 
            name='hthdg'
            :enter-active-class='"animated " + enterAnimation'
            :leave-active-class='"animated " + exitAnimation'
        >
            <template v-if='index === currentPage'>
                <div :class='"v-slide " + "v-bg-" + bgColor' v-bind:style='stylex'>
                    <h1 :class='"v-title " + (borderedTitle? "bordered":"")'>{{title}}</h1>
                    <p class='v-content'>
                        <slot></slot>
                    </p>
                </div>
            </template>
        </transition>
            
        `,
        data:function(){
            return {
                stylex:{
                       'background-image':`url(${this.backgroundUrl})`
                },
                currentPage: 0,
                index: 0
            }
        },
        props:{
            backgroundUrl:{
                type:String,
                default:""
            },
            title:{
                type:String
            },
            borderedTitle:{
                type:Boolean,
                default:false
            },
            bgColor:{
                type:String,
                default:"alizarin"
            },
            enterAnimation:{
                type:String,
                default:"fadeinleft"
            },
            exitAnimation:{
                type:String,
                default:"fadeoutright"
            },
            index:{
                type:Number,
                default: 0
            }
        }
    })
})()