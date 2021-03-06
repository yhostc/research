BMap.register(function (T) {
    if (T.config && T.config.isOverviewMap) {
        return
    }
    if (T.isLoaded()) {
        bh(T)
    } else {
        T.addEventListener("load", function () {
            bh(this)
        })
    }
});

function bh(cK) {
    if (cK.temp.copyadded) {
        return
    }
    cK.temp.copyadded = true;
    var cM = new BMap.Size(81, 2);
    var cJ = "11px";
    if (ay()) {
        if (cK.highResolutionEnabled()) {
            cM.width = 148;
            cJ = "21px"
        } else {
            cM.width = 72;
            cM.height = 0
        }
    }
    var cL = new ak({
        offset: cM,
        printable: true
    });
    var cI = '<span style="font-size:' + cJ + '">&copy; 2012 Baidu</span>';
    if (cK.getMapType() == BMAP_PERSPECTIVE_MAP) {
        cI = '<span style="color:#fff;font-size:' + cJ + '">&copy;2012 Baidu - Data &copy; </span><a style="font-size:' + cJ + '" href="http://o.cn" target="_blank" style="color:#fff">\u90fd\u5e02\u5708</a>'
    }
    cL.addCopyright({
        content: cI,
        id: 1
    });
    cK.addEventListener("maptypechange", function () {
        var cN = cK.getMapType();
        switch (cN) {
        case BMAP_SATELLITE_MAP:
        case BMAP_HYBRID_MAP:
            cL.addCopyright({
                id: 1,
                content: '<span style="color:#fff;font-size:' + cJ + ';text-shadow:0 1px 3px black">&copy; 2012 Baidu - Image &copy; DigitalGlobe & </span><a href="http://www.chinasiwei.com" target="_blank" style="color:#fff;font-size:' + cJ + ';text-shadow:0 1px 3px black">chinasiwei</a>'
            });
            break;
        case BMAP_PERSPECTIVE_MAP:
            cL.addCopyright({
                id: 1,
                content: '<span style="color:#fff;font-size:' + cJ + ';text-shadow:0 1px 3px black">&copy; 2012 Baidu - Data &copy; </span><a href="http://o.cn" target="_blank" style="color:#fff;font-size:' + cJ + ';text-shadow:0 1px 3px black">\u90fd\u5e02\u5708</a>'
            });
            break;
        default:
            cL.addCopyright({
                id: 1,
                content: '<span style="font-size:' + cJ + '">&copy; 2012 Baidu</span>'
            });
            break
        }
    });
    cK.addControl(cL);
    var T = new bY();
    T._opts = {
        printable: true
    };
    cK.addControl(T);
    cK.addEventListener("resize", function () {
        if (this.getSize().width >= 220 && cK.getSize().height >= 100) {
            T.show();
            cL.setOffset(cM)
        } else {
            T.hide();
            cL.setOffset(new aF(4, 2))
        }
    });
    if (cK.getSize().width >= 220 && cK.getSize().height >= 100) {
        T.show()
    } else {
        T.hide();
        cL.setOffset(new aF(4, 2))
    }
    if (cK.highResolutionEnabled()) {
        T.setOffset(new aF(3, 2))
    }
}
function bY(T) {
    this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
    this.defaultOffset = new aF(1, 0);
    this.IMG_URL = b9.imgPath + (ay() ? "copyright_logo_s.png" : "copyright_logo.png")
}
bY.prototype = new cm();
bY.prototype.initialize = function (cI) {
    this._map = cI;
    var cJ = Y("div");
    cJ.style.height = "32px";
    var T = Y("a", {
        title: "\u5230\u767e\u5ea6\u5730\u56fe\u67e5\u770b\u6b64\u533a\u57df",
        target: "_blank",
        href: "http://map.baidu.com/?sr=1"
    });
    T.style.outline = "none";
    if (a5.browser.ie == 6) {
        T.innerHTML = "<div style='cursor:pointer;width:77px;height:32px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + this.IMG_URL + ")'></div>"
    } else {
        T.innerHTML = "<img style='border:none;width:77px;height:32px' src='" + this.IMG_URL + "' />"
    }
    if (ay()) {
        if (this._map.highResolutionEnabled()) {
            cJ.style.height = "50px";
            T.href = "#";
            this.IMG_URL = b9.imgPath + "copyright_logo_hd.png";
            T.innerHTML = "<img style='border:none;width:136px;height:50px' src='" + this.IMG_URL + "' />"
        } else {
            cJ.style.height = "25px";
            T.href = "#";
            T.innerHTML = "<img style='border:none;width:68px;height:25px' src='" + this.IMG_URL + "' />"
        }
    }
    cJ.appendChild(T);
    cI.getContainer().appendChild(cJ);
    return cJ
};
a5.extend(bw.prototype, {
    _draw: function () {
        this._bind()
    },
    _bind: function () {
        var T = this;
        T._watchSize = function () {
            var cJ = T.getSize();
            if (T.width != cJ.width || T.height != cJ.height) {
                var cL = new aF(T.width, T.height);
                var cN = new bd("onbeforeresize");
                cN.size = cL;
                T.dispatchEvent(cN);
                T._updateCenterPoint((cJ.width - T.width) / 2, (cJ.height - T.height) / 2);
                T.maskLayer.style.width = (T.width = cJ.width) + "px";
                T.maskLayer.style.height = (T.height = cJ.height) + "px";
                var cK = new bd("onresize");
                cK.size = cJ;
                T.dispatchEvent(cK);
                var cI = parseInt(T.platform.style.left) || 0;
                var cM = parseInt(T.platform.style.top) || 0;
                if (T.currentOperation != 0 && (T.offsetX != cI || T.offsetY != cM)) {
                    T._setPlatformPosition(cI, cM)
                }
            }
        };
        a5.on(T.maskLayer, "mouseover", function (cI) {
            T.dispatchEvent(new bd("onmouseover"))
        });
        a5.on(T.maskLayer, "mouseout", function (cI) {
            T.dispatchEvent(new bd("onmouseout"))
        })
    },
    _setPlatformPosition: function (T, cK, cI, cJ) {
        if (isNaN(T) || isNaN(cK)) {
            return
        }
        if (this.offsetX == T && this.offsetY == cK) {
            return
        }
        this._updateCenterPoint(this.offsetX - T, this.offsetY - cK, cI);
        T = Math.round(T);
        cK = Math.round(cK);
        this.offsetX = T;
        this.offsetY = cK;
        this.platform.style.left = T + "px";
        this.platform.style.top = cK + "px";
        this.maskLayer.style.left = -T + "px";
        this.maskLayer.style.top = -cK + "px";
        if (cJ != false) {
            this.dispatchEvent(new bd("onmoving"))
        }
    },
    panTo: function (cI, cK) {
        if (!(cI instanceof ca)) {
            return
        }
        var cJ = this.pointToPixel(cI);
        var T = Math.round(this.width / 2);
        var cL = Math.round(this.height / 2);
        cK = cK || {};
        if (Math.abs(T - cJ.x) > this.width || Math.abs(cL - cJ.y) > this.height || cK.noAnimation) {
            this._panTo(T - cJ.x, cL - cJ.y, cI)
        } else {
            this._panBy(T - cJ.x, cL - cJ.y, {
                duration: cK.duration
            })
        }
    },
    _panTo: function (cI, T, cK) {
        var cJ = this.temp;
        if (cJ.operating == true) {
            return
        }
        if (cJ.dragAni) {
            cJ.dragAni.stop()
        }
        this.dispatchEvent(new bd("onmovestart"));
        this._setPlatformPosition(this.offsetX + cI, this.offsetY + T, cK);
        this.dispatchEvent(new bd("onmoveend"))
    },
    panBy: function (cI, T, cJ) {
        cI = Math.round(cI) || 0;
        T = Math.round(T) || 0;
        cJ = cJ || {};
        if (Math.abs(cI) <= this.width && Math.abs(T) <= this.height && (!cJ.noAnimation)) {
            this._panBy(cI, T)
        } else {
            this._panTo(cI, T)
        }
    },
    _panBy: function (cI, T, cL) {
        if (this.temp.operating == true) {
            return
        }
        cL = cL || {};
        this.dispatchEvent(new bd("onmovestart"));
        var cK = this,
            cJ = cK.temp;
        cJ.pl = cK.offsetX;
        cJ.pt = cK.offsetY;
        if (cJ.tlPan) {
            cJ.tlPan.cancel()
        }
        if (cJ.dragAni) {
            cJ.dragAni.stop()
        }
        cJ.tlPan = new g({
            fps: cL.fps || cK.config.fps,
            duration: cL.duration || cK.config.actionDuration,
            transition: cL.transition || au.easeInOutQuad,
            render: function (cM) {
                this.terminative = cK.temp.operating;
                if (cK.temp.operating) {
                    return
                }
                cK._setPlatformPosition(cJ.pl + Math.ceil(cI * cM), cJ.pt + Math.ceil(T * cM))
            },
            finish: function (cM) {
                cK.dispatchEvent(new bd("onmoveend"));
                cK.temp.tlPan = false;
                if (cK.temp.stopArrow == true) {
                    cK.temp.stopArrow = false;
                    if (cK.temp.arrow != 0) {
                        cK._arrow()
                    }
                }
            }
        })
    }
});