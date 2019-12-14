//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

import tr = egret.sys.tr;
import Timer = egret.Timer;

class Main extends egret.DisplayObjectContainer {


    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.loadResource, this);
    }


    public async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/")
            await RES.loadGroup("preload")
            this.stage.removeChild(loadingView);
            this.createGameScene();
        } catch (e) {
            console.log(e);
        }
    }

    private createGameScene() {
        // var sprite: egret.Sprite = new egret.Sprite();
        // sprite.graphics.beginFill(0xff0000);
        // sprite.graphics.drawRect(0, 0, 100, 100);
        // sprite.graphics.endFill();
        // this.addChild(sprite);
        let bgImg: egret.Texture = RES.getRes("bg_jpg");
        var bitmap: egret.Bitmap = new egret.Bitmap(bgImg);
        this.addChild(bitmap);

        let textField = new egret.TextField();
        textField.text = "测试白鹭";
        textField.$setText("测试白鹭测试白鹭测试白鹭");
        console.log(textField.$getText());
        textField.x = 200;
        textField.y = 200;
        textField.$setTextAlign(egret.HorizontalAlign.CENTER);
        textField.verticalAlign = egret.VerticalAlign.MIDDLE;
        //设置粗体与斜体
        textField.bold = true;
        textField.italic = true;
        this.addChildAt(textField, 1);

        let shape = new egret.Shape();
        shape.graphics.beginFill(0x01cccc);
        shape.graphics.drawRect(0, 0, 50, 50);
        shape.graphics.endFill();
        shape.x = this.stage.stageWidth / 2 - 25;
        this.addChild(shape);
        shape.touchEnabled = true;
        shape.addEventListener(egret.TouchEvent.TOUCH_END, touch, this);
        // egret.localStorage.setItem("2", "2");
        console.log(egret.localStorage.getItem("2"));

        function touch() {
            console.log("点击了");
            shape.$setAnchorOffsetX(shape.anchorOffsetX + Math.random() * 100);
        }

    }

    private onComplete(event: any): void {
        var img: egret.Texture = <egret.Texture>event;
        var bitmap: egret.Bitmap = new egret.Bitmap(img);
        this.scaleX = 2;
        this.addChild(bitmap);
    }

}
