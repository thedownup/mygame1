class Cat extends egret.Sprite {

    private _res: egret.Texture;

    get res(): egret.Texture {
        return this._res;
    }

    set res(value: egret.Texture) {
        this._res = value;
    }

    constructor() {
        super();

    }

}
