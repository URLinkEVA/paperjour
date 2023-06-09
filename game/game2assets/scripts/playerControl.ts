import Input from "./Input";

const {ccclass, property} = cc._decorator;

@ccclass
export default class playerControl extends cc.Component {
    // 速度
    speed: number = 20;

    // onLoad () {}

    start () {

    }

    update (dt) {
        // 移动 帧问题
        this.node.x = this.speed * dt * Input.Instane.horizontal; 
        this.node.y = this.speed * dt * Input.Instane.vertical; 
    }
}
