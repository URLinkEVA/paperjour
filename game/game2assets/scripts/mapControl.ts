const {ccclass, property} = cc._decorator;

@ccclass
export default class mapControl extends cc.Component {
    map: cc.TiledMap;
    player: cc.Node = null;

    // onLoad () {}

    start () {
        // 获取地图信息
        this.map = this.getComponent(cc.TiledMap);

        let playerLayer = this.map.getObjectGroup("player");

        // 获取某个对象
        let playerObj = playerLayer.getObject("startpos");

        // 判断是不是玩家对象
        if(playerObj.isplayer == true){
            // 加载玩家预设体
            cc.loader.loadRes('player',cc.Prefab,(res,playerPre)=>{
                // 创建玩家
                this.player = cc.instantiate(playerPre); 
                this.player.setParent(this.node.children[2].children[0]);
                this.player.x = playerObj.x;
                this.player.y = playerObj.y;
            });

        }
    }

    update (dt) {
        // 摄像头跟随玩家
        if(this.player != null){
            cc.Camera.main.node.x = this.player.x - 1024;
            cc.Camera.main.node.y = this.player.y - 800;
        }
    }
}