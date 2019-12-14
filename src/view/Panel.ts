// TypeScript file
class Panel extends egret.EventDispatcher {

    private rootView: egret.DisplayObjectContainer;
    private textures: egret.Texture;

    public constructor(root: egret.DisplayObjectContainer, textures: egret.Texture) {
        super();
        this.rootView = root;
        this.textures = textures;
        let bg = new egret.Bitmap();
        bg.texture = textures;
        root.addChild(bg);
    }

}