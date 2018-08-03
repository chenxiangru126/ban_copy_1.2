let Ui = {
    alert() {

    },
    confirm() {

    }
}

function __generateUiId__() {
    return 'ui-' + new Date().getTime();
}

function UI(___) {
    this.__id__ = __generateUiId__();
    var $ = document.querySelector;
    this.__create__ = function () {}
    this.getId = function () {
        return this.__id__;
    }
    this.close = function () {
        var layer = document.getElementsByClassName("dialog_layer")[0];
        document.getElementById("app").removeChild(layer);
    }
    this.surn_fn = function () {
        if (___ && ___.yes) {
            ___.yes();
        }
        this.close();
    }
    this.cancel_fn = function () {
        if (___ && ___.cancel) {
            ___.cancel();
        }
        this.close();
    }
    this.__init__ = function () {
        this.__create__();

        var _self = this;
        const ui_yes = document.querySelector(".ui_yes");
        const ui_cancel = document.querySelector(".ui_cancel");
        if (ui_yes) ui_yes.addEventListener('click', this.surn_fn.bind(this), false);
        if (ui_cancel) ui_cancel.addEventListener('click', this.cancel_fn.bind(this), false);
    }


}

function Log_alert(__) {
    UI.call(this, __);
    this.__create__ = function () {
        const app = document.getElementById("app");
        const sureTxt = __.sureTxt ? __.sureTxt : '完成';
        let el_html = ` 
                <div class="${__.title?'layer_title':''}">· ${__.title?__.title:''} ·</div>
                <p class="${__.title?'c1':'c6'} font-3 w t-c over-h p-l p-r">${__.content}</p>
                </div>
        `;
        if (__.html) el_html = __.html;
        var alert_dom = `
        <div class="dialog_layer">
        <div class="layer_cont_1 cont_1_alert">
            <div class="p-b ${__.html?'p-t':'p-t-2'}">
            ${el_html}
            <div class="layer_cont_btn">
                <div class="layer_cont_alert ui_yes">
                ${sureTxt}
                </div>
            </div>
        </div>
        </div>
            `;
        console.log(parseDom(alert_dom))
        app.appendChild(parseDom(alert_dom));
    }
    this.__init__();
}

function Log_confrim(__) {
    UI.call(this, __);
    this.__create__ = function () {
        const app = document.getElementById("app");
        const cancelTxt = __.cancelTxt ? __.sureTxt : '取消';
        const sureTxt = __.sureTxt ? __.sureTxt : '完成'
        var confirm_dom = `
        <div class="dialog_layer">
        <div class="layer_cont_1 cont_1_alert">
            <div class="p-b p-t-2">
            <div class="${__.title?'layer_title':''}">· ${__.title?__.title:''} ·</div>
                <p class="${__.title?'c1':'c6'} font-3 w t-c over-h p-l p-r">${__.content}</p>
            </div>
            <div class="layer_cont_btn">
                <div class="layer_cont_confirm flex-h flex-j-c">
                    <p class='ui_cancel'>${cancelTxt}</p>
                    <p class='ui_yes'>${sureTxt}</p>
                </div>
            </div>
        </div>
        </div>
        `;
        app.appendChild(parseDom(confirm_dom));
    }
    this.__init__();
}

function Open_img(__) {
    UI.call(this, __);
    this.__create__ = function () {
        const app = document.getElementById("app");
        var confirm_dom = `
        <div class="dialog_layer flex-v flex-j-c flex-a-c ui_cancel">
            <img src="${__}" class="w90 block" />
        </div>
        `;
        app.appendChild(parseDom(confirm_dom));
    }
    this.__init__();
}

function parseDom(arg) {　　
    var objE = document.createElement("div");　　
    objE.innerHTML = arg;　　
    return objE.childNodes[1];
};
export const _alert = _ => {
    return new Log_alert(_);
};
export const _confrim = _ => {
    return new Log_confrim(_);
};
export const _openimg = _ => {
    return new Open_img(_);
};

/**
 * 使用方法
 *   this._alert({
                title:'我是标题',// 选填
                content:'点点滴滴',
                sureTxt:'确定按钮1',
                yes(){
                    alert(1);
                }
            })
    this._confrim({
                 title:'我是标题',// 选填
                content:'点点滴滴点点滴滴点点滴滴点点滴滴点点滴滴点点滴滴点点滴滴点点滴滴点点滴滴点点滴滴点点滴滴点点滴滴点点滴滴点点滴滴点点滴滴点点滴滴点点滴滴点点滴滴',//必填
                // sureTxt:'确定文案',//选填
                // cancelTxt:'取消文案',//选填
                yes(){ //选填
                    alert(1);
                },
                no(){
                }
    })
 * 
*/