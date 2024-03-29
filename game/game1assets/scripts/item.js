
cc.Class({
    extends: cc.Component,

    properties: {
        picSprite: cc.Sprite,
        frame: cc.Node,
        cfg: null,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    // update (dt) {},

    initPic(cfg) {
        this.cfg = cfg;

        this.__initNode();
        this.__initSprite();
        this.__initFrame();
        this.__initTouch();
    },

    setItemPosition(x, y) {
        this.cfg.posX = x;
        this.cfg.posY = y;

        this.__resetItemPosition();
    },

    __initNode() {
        let cfg = this.cfg;

        this.node.setPosition(cfg.posX, cfg.posY);

        // 这里要给父 Node 指定大小，因为之后要实现拖动父 Node
        this.node.setContentSize(cfg.w, cfg.h);
    },

    __initSprite() {
        let cfg = this.cfg;
        let rect = cc.rect(cfg.x, cfg.y, cfg.w, cfg.h);
        this.picSprite.spriteFrame = new cc.SpriteFrame(cfg.texture, rect);
        this.picSprite.node.setContentSize(cfg.w, cfg.h);
    },

    __initFrame() {
        let cfg = this.cfg;

        this.frame.setContentSize(cfg.w, cfg.h);
    },

    __initTouch() {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            this.opacity = 100;
            let delta = event.touch.getDelta();
            this.x += delta.x;
            this.y += delta.y;
        }, this.node);

        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            this.opacity = 255;
        }, this.node);
    },

    __resetItemPosition() {
        this.node.setPosition(this.cfg.posX, this.cfg.posY);
    }
});
