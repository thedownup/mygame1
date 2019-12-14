var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
// TypeScript file
var Panel = (function (_super) {
    __extends(Panel, _super);
    function Panel(root, textures) {
        var _this = _super.call(this) || this;
        _this.rootView = root;
        _this.textures = textures;
        var bg = new egret.Bitmap();
        bg.texture = textures;
        root.addChild(bg);
        return _this;
    }
    return Panel;
}(egret.EventDispatcher));
__reflect(Panel.prototype, "Panel");
//# sourceMappingURL=Panel.js.map