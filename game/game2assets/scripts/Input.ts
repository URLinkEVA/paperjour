const {ccclass, property} = cc._decorator;

// 单例
export default class Input{
    private static instance: Input = null;
    // 水平轴
    horizontal: number = 0;
    // 垂直轴
    vertical: number = 0;

    static get Instane(){
        if(this.instance == null){
            this.instance = new Input();
        }
        return this.instance;
    }

    constructor(){
        // 键盘按下
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,(event)=>{
            if(event.keycode == cc.macro.KEY.w){
                this.vertical = 1;
            }else if(event.keycode == cc.macro.KEY.s){
                this.vertical = -1;
            }
            if(event.keycode == cc.macro.KEY.a){
                this.horizontal = -1;
            }else if(event.keycode == cc.macro.KEY.d){
                this.horizontal = 1;
            }

        });
        // 键盘抬起
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,(event)=>{
            if(event.keycode == cc.macro.KEY.w && this.vertical == 1){
                this.vertical = 0;
            }else if(event.keycode == cc.macro.KEY.s && this.vertical == -1){
                this.vertical = 0;
            }
            if(event.keycode == cc.macro.KEY.a && this.horizontal == -1){
                this.horizontal = 0;
            }else if(event.keycode == cc.macro.KEY.d && this.horizontal == 1){
                this.horizontal = 0;
            }

        });
    }

}
