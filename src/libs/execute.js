const Execute = {};
import {_alert,_confrim,_openimg} from './ui';
import {Toast} from 'mint-ui';
import util  from './util';
Execute.install = function (Vue, options) {
     //computed rem
    Vue.prototype.computed_rem = () => {
        var docEl = document.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            docEl.style.fontSize = clientWidth / 25 + 'px';
        };
    if (!document.addEventListener) return;
    window.addEventListener(resizeEvt, recalc, false);
    document.addEventListener('DOMContentLoaded', recalc, false);
    }
    Vue.prototype._alert=_alert;
    Vue.prototype._confrim=_confrim;
    Vue.prototype._openimg=_openimg;
    Vue.prototype.util=util;
    Vue.prototype.Toast=Toast;
   
}
export default Execute;

