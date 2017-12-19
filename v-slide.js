(function(){
    Vue.component("v-unicorn",{
        template:`
            <div class='v-unicorn'>
                <slot></slot>
            </div>
        `,
        props:{
            currentpage: 1
        }
        ,
        methods:{
            clamp:function(value,min,max){
                if(value < min) return min;
                else if(value > max) return max;
                else return value;
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
                }
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
                required:true
            },
            currentPage:{
                type:Number,
                default:0
            }
        }
    })
})()