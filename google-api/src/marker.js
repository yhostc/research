var NB = "stop",
    OB = [],
    PB = k,
    QB = {
        linear: function (a) {
            return a
        },
        "ease-out": function (a) {
            return 1 - n.pow(a - 1, 2)
        },
        "ease-in": function (a) {
            return n.pow(a, 2)
        }
    };

function RB() {
    for (var a = [], b = 0; b < OB[E]; b++) {
        var c = OB[b];
        SB(c);
        c.vb || a[B](c)
    }
    OB = a;
    0 == OB[E] && (m[Nj](PB), PB = k)
}

function TB(a, b, c) {
    fe(function () {
        a[x].WebkitAnimationDuration = c[ik] ? c[ik] + "ms" : k;
        a[x].WebkitAnimationIterationCount = c.wb;
        a[x].WebkitAnimationName = b
    })
}
function UB(a, b, c) {
    this.e = a;
    this.d = b;
    this.b = -1;
    "infinity" != c.wb && (this.b = c.wb || 1);
    this.j = c[ik] || 1E3;
    this.vb = l
}
UB[F].B = function () {
    OB[B](this);
    PB || (PB = m[jk](RB, 10));
    this.f = Xd();
    SB(this)
};
Si(UB[F], function () {
    this.vb || (this.vb = j, VB(this, 1), Q[o](this, "done"))
});
UB[F].stop = function () {
    this.vb || (this.b = 1)
};

function SB(a) {
    if (!a.vb) {
        var b = Xd();
        VB(a, (b - a.f) / a.j);
        b >= a.f + a.j && (a.f = Xd(), "infinite" != a.b && (a.b--, a.b || a[Sj]()))
    }
}
function VB(a, b) {
    var c = 1,
        d = a.d.b[WB(a.d, b)],
        e = a.d.b[WB(a.d, b) + 1];
    e && (c = (b - d[Cj]) / (e[Cj] - d[Cj]));
    var f = !a.e ? k : a.e.__gm_at || rf,
        g = a.e;
    if (e) var c = (0, QB[d.na || "linear"])(c),
        d = d[iq],
        e = e[iq],
        h = c * e[1] - c * d[1] + d[1],
        c = new T(n[C](c * e[0] - c * d[0] + d[0]), n[C](h));
    else c = new T(d[iq][0], d[iq][1]);
    c = g.__gm_at = c;
    g = c.x - f.x;
    f = c.y - f.y;
    if (0 != g || 0 != f) c = a.e, e = new T(Bl(c[x].left) || 0, Bl(c[x].top) || 0), e.x = e.x + g, e.y += f, fm(c, e);
    Q[o](a, "tick")
}

function XB(a, b, c) {
    this.b = a;
    this.d = b;
    this.f = c;
    this.vb = l
}
XB[F].B = function () {
    this.f.wb = this.f.wb || 1;
    this.f.duration = this.f[ik] || 1;
    Q.addDomListenerOnce(this.b, "webkitAnimationEnd", N(this, function () {
        this.vb = j;
        Q[o](this, "done")
    }));
    var a = this.b,
        b;
    b = this.d;
    if (b.d) b = b.d;
    else {
        b.d = "_gm" + n[C](1E4 * n[Rb]());
        var c, d = [];
        d[B]("@-webkit-keyframes ", b.d, " {");
        L(b.b, function (a) {
            d[B](100 * a[Cj], "% { ");
            d[B]("-webkit-transform: translate3d(", a[iq][0], "px,", a[iq][1], "px,0); ");
            d[B]("-webkit-animation-timing-function: ", a.na, "; ");
            d[B]("}")
        });
        d[B]("}");
        c = d[Kc]("");
        YB || (YB = ea[qb]("style"), Ra(YB, "text/css"), Tq()[Za](YB));
        YB.textContent += c;
        b = b.d
    }
    TB(a, b, this.f)
};
Si(XB[F], function () {
    TB(this.b, k, {});
    Q[o](this, "done")
});
XB[F].stop = function () {
    this.vb || Q.addDomListenerOnce(this.b, "webkitAnimationIteration", N(this, this[Sj]))
};
var YB;

function ZB(a, b, c) {
    var d;
    if (d = c.Eg != l) d = am, d = 5 == d.d.b || 6 == d.d.b || 3 == d.d[sc] && 7 <= d.d[lj] ? j : l;
    a = d ? new XB(a, b, c) : new UB(a, b, c);
    a.B();
    return a
}

function $B(a) {
    this.b = a
}
function WB(a, b) {
    for (var c = 0; c < a.b[E] - 1; c++) {
        var d = a.b[c + 1];
        if (b >= a.b[c][Cj] && b < d[Cj]) return c
    }
    return a.b[E] - 1
}
var aC = {};
aC[1] = {
    options: {
        duration: 700,
        wb: "infinite"
    },
    Kb: new $B([{
        time: 0,
        translate: [0, 0],
        na: "ease-out"
    }, {
        time: 0.5,
        translate: [0, -20],
        na: "ease-in"
    }, {
        time: 1,
        translate: [0, 0],
        na: "ease-out"
    }]),
    Lb: new $B([{
        time: 0,
        translate: [0, 0],
        na: "ease-out"
    }, {
        time: 0.5,
        translate: [15, -15],
        na: "ease-in"
    }, {
        time: 1,
        translate: [0, 0],
        na: "ease-out"
    }])
};
aC[2] = {
    options: {
        duration: 500,
        wb: 1
    },
    Kb: new $B([{
        time: 0,
        translate: [0, -500],
        na: "ease-in"
    }, {
        time: 0.5,
        translate: [0, 0],
        na: "ease-out"
    }, {
        time: 0.75,
        translate: [0, -20],
        na: "ease-in"
    }, {
        time: 1,
        translate: [0, 0],
        na: "ease-out"
    }]),
    Lb: new $B([{
        time: 0,
        translate: [375, -375],
        na: "ease-in"
    }, {
        time: 0.5,
        translate: [0, 0],
        na: "ease-out"
    }, {
        time: 0.75,
        translate: [15, -15],
        na: "ease-in"
    }, {
        time: 1,
        translate: [0, 0],
        na: "ease-out"
    }])
};
aC[3] = {
    options: {
        duration: 200,
        kd: 20,
        wb: 1,
        Eg: l
    },
    Kb: new $B([{
        time: 0,
        translate: [0, 0],
        na: "ease-in"
    }, {
        time: 1,
        translate: [0, -20],
        na: "ease-out"
    }]),
    Lb: new $B([{
        time: 0,
        translate: [0, 0],
        na: "ease-in"
    }, {
        time: 1,
        translate: [15, -15],
        na: "ease-out"
    }])
};
aC[4] = {
    options: {
        duration: 500,
        kd: 20,
        wb: 1,
        Eg: l
    },
    Kb: new $B([{
        time: 0,
        translate: [0, -20],
        na: "ease-in"
    }, {
        time: 0.5,
        translate: [0, 0],
        na: "ease-out"
    }, {
        time: 0.75,
        translate: [0, -10],
        na: "ease-in"
    }, {
        time: 1,
        translate: [0, 0],
        na: "ease-out"
    }]),
    Lb: new $B([{
        time: 0,
        translate: [15, -15],
        na: "ease-in"
    }, {
        time: 0.5,
        translate: [0, 0],
        na: "ease-out"
    }, {
        time: 0.75,
        translate: [7.5, -7.5],
        na: "ease-in"
    }, {
        time: 1,
        translate: [0, 0],
        na: "ease-out"
    }])
};

function bC() {
    this.Kb = new ag(Gl("markers2/marker_sprite"), new U(20, 34), new T(0, 0), new T(10, 34));
    this.Lb = new ag(Gl("markers2/marker_sprite"), new U(37, 34), new T(20, 0), new T(10, 34));
    this.b = new ag(Gl("drag_cross_67_16"), new U(16, 16), new T(0, 0), new T(7, 9));
    this.shape = {
        coords: [9, 0, 6, 1, 4, 2, 2, 4, 0, 8, 0, 12, 1, 14, 2, 16, 5, 19, 7, 23, 8, 26, 9, 30, 9, 34, 11, 34, 11, 30, 12, 26, 13, 24, 14, 21, 16, 18, 18, 16, 20, 12, 20, 8, 18, 4, 16, 2, 15, 1, 13, 0],
        type: "poly"
    }
};

function cC(a) {
    Vg[Ec](this);
    this.b = a;
    dC || (dC = new bC)
}
var dC;
J(cC, Vg);
Qa(cC[F], function (a) {
    ("modelIcon" == a || "modelShadow" == a || "modelShape" == a || "modelCross" == a) && this.O()
});
cC[F].aa = function () {
    var a = this.get("modelIcon");
    eC(this, "viewIcon", a || dC.Kb);
    var b = this.get("useDefaults"),
        c = this.get("modelShadow");
    if (!c && (!a || b)) c = dC.Lb;
    eC(this, "viewShadow", c);
    eC(this, "viewCross", dC.b);
    c = this.get("modelShape");
    if (!c && (!a || b)) c = dC[kj];
    this.get("viewShape") != c && this.set("viewShape", c)
};

function eC(a, b, c) {
    var d = c;
    d && d[fq] != k ? (c = a.b(d), a.set(b, c)) : !d || d[Ej] ? a.set(b, d) : (d.url || (d = new ag(d)), c = d.url, Sd(Um).ua[Uj](c, function (c) {
        Ea(d, c && c[Ej] || new U(24, 24));
        a.set(b, d)
    }))
};

function fC(a, b, c) {
    Vi(b, "");
    var d = em(b)[qb]("canvas");
    pa(d, c[Ej][s]);
    Ja(d, c[Ej][A]);
    Wg(b, c[Ej]);
    b[Za](d);
    fm(d, rf);
    nm(d);
    b = d[gq]("2d");
    a = a(b);
    b[dq]();
    a.rb(c.b, c[qq].x, c[qq].y, c[Ap] || 0, c[Oj]);
    c[lq] && (Wo(b, c[sp]), ap(b, c[lq]), b[Dp]());
    c[Np] && (dp(b, c[Np]), hp(b, c[tp]), ap(b, c[Ep]), b[Bp]())
};

function gC(a, b, c) {
    Vi(b, "");
    Wg(b, c[Ej]);
    b = Or("gm_v:shape", b);
    nm(b);
    fm(b, c[qq]);
    Wg(b, new U(1, 1));
    pp(b, "1000 1000");
    b.coordorigin = "0 0";
    a = a.rb(c.b, c[Oj]);
    jp(b, a);
    Vo(b[x], n[C](Md(c[Ap] || 0)));
    Sr(b, c[sp], c[lq]);
    Tr(b, c[tp], c[Ep], c[Np])
};
var hC;

function iC(a) {
    return new ms(a)
}
hC = Rq() ? N(k, fC, iC) : N(k, gC, new os);

function jC() {
    Vg[Ec](this);
    this.Cb = this.Bb = this.ib = l;
    this.va = new T(0, 0);
    this.ka = new U(0, 0);
    this.ra = new T(0, 0);
    this.ta = j;
    this.ad = l;
    this.ab = [Q[y](this, ll, this.Bk), Q[y](this, jl, this.Ak), Q[y](this, ol, this.J)];
    this.d = k
}
J(jC, Vg);
H = jC[F];
Yo(H, function () {
    kC(this);
    this.O()
});
Qa(H, function (a) {
    "anchorPoint" == a || ("size" == a || "mapPixelBounds" == a || "panningEnabled" == a || "animating" == a) || (("shape" == a || "clickable" == a || "draggable" == a) && lC(this), this.O())
});
H.aa = function () {
    var a = this.get("panes"),
        b = this.get("scale");
    if (!a || !this[Rp]() || !this.Jh() || K(b) && 0.1 > b && !this.get("dragging")) kC(this);
    else {
        var c = a.overlayImage;
        if (b = this.Gf()) {
            var d = !! b.url;
            this.e && this.ib == d && (al(this.e, j), this.e = k);
            this.ib = !d;
            this.e = mC(c, this.e, b);
            c = am.b ? n.min(1, this.get("scale") || 1) : 1;
            d = b[Ej];
            pa(this.ka, c * d[s]);
            Ja(this.ka, c * d[A]);
            b = b[qq];
            this.ra.x = c * (b ? d[s] / 2 - b.x : 0);
            this.ra.y = -c * (b ? b.y : d[A]);
            this.set("size", this.ka);
            this.set("anchorPoint", this.ra)
        }
        b = a.overlayShadow;
        c = this.Lh();
        !c || this.getFlat() ? (this.b && al(this.b, j), this.b = k) : (d = !! c.url, this.b && this.Cb == d && (al(this.b, j), this.b = k), this.Cb = !d, this.b = mC(b, this.b, c), 2 == Z[sc] && $q(this.b));
        if (!this.ad && (d = this.Gf())) if (b = this.Kh(), c = this[up](), b || c) {
            var e = d.url || Hl,
                f = !! d.url,
                g = {};
            if (Wl()) var f = d[Ej][s],
                h = d[Ej][A],
                i = new U(f + 16, h + 16),
                d = new ag(e, i, k, d[qq] ? new T(d[qq].x + 8, d[qq].y + 8) : new T(yd(f / 2) + 8, h + 8), i);
            else if (Z.f || Z.d) if (g.shape = this.get("shape"), g[kj] || !f) d = new ag(e, k, k, d[qq], d[eq] || d[Ej]);
            f = !! d.url;
            this.Bb == f && lC(this);
            this.Bb = !f;
            d = this.K = mC(this[Kj]()[qp], this.K, d, g);
            Rl() || om(d, 0.01);
            $q(d);
            var e = d,
                p;
            if ((g = e[rq]("usemap") || e[rb] && e[rb][rq]("usemap")) && g[E])(e = em(e)[Xp](g[Cb](1))) && (p = e[rb]);
            d = p || d;
            d.title = this.get("title") || "";
            c && !this.d && (p = this.d = new Ar(d), p[q]("position", this), p[q]("containerPixelBounds", this, "mapPixelBounds"), p[q]("anchorPoint", this), p[q]("size", this), p[q]("panningEnabled", this), p && !this.A && (this.A = [Q.Ga(p, Te, this), Q.Ga(p, wl, this), Q[u](p, tl, this, function (a) {
                this.ad = l;
                Q[o](this, tl, a)
            }), Q[u](p, vl, this, function (a) {
                this.ad = j;
                Q[o](this, vl, a)
            }), Q[v](p, ll, this), Q[v](p, kl, this), Q[v](p, jl, this), Q[v](p, ol, this)]));
            p = this.get("cursor") || "pointer";
            c ? this.d.set("draggableCursor", p) : lm(d, b ? p : "");
            p = d;
            this[up]() ? (nC(this.C), this.C = k) : p && !this.C && (this.C = [Q.Ga(p, Te, this), Q.Ga(p, wl, this), Q.Ga(p, tl, this), Q.Ga(p, vl, this)]);
            p && !this.Q && (this.Q = [Q.Ga(p, Gk, this), Q.Ga(p, Fk, this), Q.T(p, Ue, this, function (a) {
                ae(a);
                Q[o](this, "rightclick", a)
            })])
        }
        a = a.overlayLayer;
        p = this.get("cross");
        !p || !oC(this) || !this.get("dragging") ? (this.l && al(this.l, j), this.l = k) : this.l = mC(a, this.l, p);
        this.sa = [this.e, this.b, this.l, this.K];
        for (a = 0; a < this.sa[E]; ++a) if (b = this.sa[a]) p = b, c = b.d, d = (!b ? k : b.__gm_at || rf) || rf, b = am.b ? n.min(1, this.get("scale") || 1) : 1, f = c, c = b, e = this[Rp](), g = f[Ej], f = f[qq], h = yd((f ? f.x : g[s] / 2) - ((f ? f.x : g[s] / 2) - g[s] / 2) * (1 - c)), this.va.x = e.x + d.x - h, c = yd((f ? f.y : g[A]) - ((f ? f.y : g[A]) - g[A] / 2) * (1 - c)), this.va.y = e.y + d.y - c, fm(p, this.va), (c = am.b) && (p[x][c] = 1 != b ? "scale(" + b + ") " : ""), b = this.get("zIndex"), this.get("dragging") && (b = 1E6), K(b) || (b = n.min(this[Rp]().y, 999999)), mm(p, b);
        pC(this);
        for (a = 0; a < this.sa[E]; ++a)(p = this.sa[a]) && im(p)
    }
};

function kC(a) {
    a.e && al(a.e, j);
    a.e = k;
    a.b && al(a.b, j);
    a.b = k;
    a.l && al(a.l, j);
    a.l = k;
    lC(a);
    a.sa = k
}

function lC(a) {
    a.ad ? a.Ba = j : (nC(a.A), a.A = k, nC(a.C), a.C = k, nC(a.Q), a.Q = k, a.K && al(a.K, j), a.K = k, a.d && (a.d[tj](), a.d.P(), a.d = k, nC(a.A), a.A = k))
}
function mC(a, b, c, d) {
    if (c.url) {
        var e = b,
            b = c[rp] || rf;
        e ? (e[rb].__src__ != c.url && $m(e[rb], c.url), Xq(e, c[Ej], b, c[eq])) : (d = d || {}, d.ne = 2 != Z[sc], np(d, j), d.b = j, e = Yq(c.url, k, b, c[Ej], k, c[eq], d), cr(e), a[Za](e));
        a = e
    } else a = b || $("div", a), hC(a, c);
    b = a;
    b.d = c;
    return b
}

function nC(a) {
    if (a) for (var b = 0, c = a[E]; b < c; b++) Q[jb](a[b])
}
H.getPosition = Jf("position");
H.getPanes = Jf("panes");
H.Jh = Jf("visible");
H.Kh = Jf("clickable");
H.getDraggable = Jf("draggable");
H.getFlat = Jf("flat");
H.P = function () {
    this.hb && this.hb[NB]();
    this.nb && this.nb[NB]();
    this.n && (Q[jb](this.n), this.n = k);
    this.nb = this.hb = k;
    nC(this.ab);
    this.ab = k;
    kC(this);
    lC(this)
};

function oC(a) {
    return !Rl() && a[up]() && a.get("raiseOnDrag") != l
}
H.Bk = function () {
    this.set("dragging", j);
    oC(this) && this.set("animation", 3)
};
H.Ak = function () {
    this.Ba && (this.Ba = l, lC(this), this.aa());
    oC(this) && this.set("animation", 4);
    this.set("dragging", l)
};

function pC(a) {
    if (!Rl() && !a.ta) {
        a.hb && (a.n && Q[jb](a.n), a.hb[Sj](), a.hb = k);
        a.nb && (a.nb[Sj](), a.nb = k);
        var b = a.get("animation");
        if (b = aC[b]) {
            var c = b.options;
            a.e && (a.ta = j, a.set("animating", j), a.hb = ZB(a.e, b.Kb, c), a.n = Q[wb](a.hb, "done", N(a, function () {
                this.set("animating", l);
                this.nb = this.hb = k;
                this.set("animation", k)
            })), a.b && (a.nb = ZB(a.b, b.Lb, c)))
        }
    }
}
H.animation_changed = function () {
    this.ta = l;
    this.get("animation") ? pC(this) : (this.set("animating", l), this.hb && this.hb[NB](), this.nb && this.nb[NB]())
};
H.Gf = Jf("icon");
H.Lh = Jf("shadow");

function qC(a, b, c) {
    function d(a) {
        e[Gf(a)] = {};
        if (b instanceof Xf || !a.get("mapOnly")) {
            var d = e[Gf(a)],
                h = d.Ic = d.Ic || new cC(c);
            h[q]("modelIcon", a, "icon");
            h[q]("modelShadow", a, "shadow");
            h[q]("modelCross", a, "cross");
            h[q]("modelShape", a, "shape");
            h[q]("useDefaults", a, "useDefaults");
            var i = d.cf = d.cf || new jC;
            i[q]("icon", h, "viewIcon");
            i[q]("shadow", h, "viewShadow");
            i[q]("cross", h, "viewCross");
            i[q]("shape", h, "viewShape");
            i[q]("title", a);
            i[q]("cursor", a);
            i[q]("draggable", a);
            i[q]("dragging", a);
            i[q]("clickable", a);
            i[q]("visible", a);
            i[q]("flat", a);
            i[q]("zIndex", a);
            i[q]("anchorPoint", a);
            i[q]("animation", a);
            i[q]("raiseOnDrag", a);
            i[q]("animating", a);
            h = b.N();
            i[q]("mapPixelBounds", h, "pixelBounds");
            i[q]("panningEnabled", b, "draggable");
            var p = d.dc || new vs;
            i[q]("scale", p);
            i[q]("position", p, "pixelPosition");
            p[q]("latLngPosition", a, "position");
            p[q]("focus", b, "position");
            p[q]("zoom", h);
            p[q]("offset", h);
            p[q]("center", h, "projectionCenterQ");
            p[q]("projection", b);
            d.dc = p;
            i[q]("panes", h);
            L(d.Fd, Q[jb]);
            delete d.Fd;
            var r = d.Fd = [Q[v](i, ol, b.N()), Q[v](b, Ve, i)];
            L([Te, wl, tl, vl, Gk, Fk, "rightclick", ll, kl, jl], function (b) {
                r[B](Q[y](i, b, function (c) {
                    c = new dl(a[Rp](), c, i[Rp]());
                    Q[o](a, b, c)
                }))
            })
        }
    }
    var e = {};
    Q[y](a, Ze, d);
    Q[y](a, $e, function (a) {
        var b = e[Gf(a)],
            c = b.cf;
        c && (c.set("animation", k), c[tj](), c.set("panes", k), c.P(), delete b.cf);
        if (c = b.dc) c[tj](), delete b.dc;
        if (c = b.Ic) c[tj](), c.P(), delete b.Ic;
        L(b.Fd, Q[jb]);
        delete b.Fd;
        delete e[Gf(a)]
    });
    a[sb](d)
};

function rC(a, b, c) {
    var d = this;
    this.e = b;
    this.f = c;
    this.b = {};
    var e = {
        animation: 1,
        animating: 1,
        clickable: 1,
        cursor: 1,
        draggable: 1,
        flat: 1,
        icon: 1,
        optimized: 1,
        position: 1,
        shadow: 1,
        shape: 1,
        title: 1,
        visible: 1,
        zIndex: 1
    };
    d.j = function (a) {
        a in e && (delete this[rc], d.b[Gf(this)] = this, sC(d))
    };
    a.b = function (a) {
        d.b[Gf(a)] = a;
        sC(d)
    };
    mp(a, function (a) {
        d.La(a)
    });
    var a = a.sa,
        f;
    for (f in a) b = a[f], this.b[Gf(b)] = b, sC(this)
}
rC[F].La = function (a) {
    delete a[rc];
    delete this.b[Gf(a)];
    this.e[pb](a);
    this.f[pb](a)
};

function sC(a) {
    a.d || (a.d = fe(function () {
        delete a.d;
        var b = a.b;
        a.b = {};
        for (var c in b) {
            var d = b[c];
            Qa(d, a.j);
            if (!d.get("animating")) if (a.e[pb](d), !d.get("position") || d.get("visible") == l) a.f[pb](d);
            else {
                var e = d.get("optimized") != l,
                    f = !! d.get("draggable"),
                    g = !! d.get("animation"),
                    h = d.get("icon"),
                    i = d.get("shadow"),
                    h = !! h && h[fq] != k || !! i && i[fq] != k;
                e && !f && !g && !h ? (a.f[pb](d), a.e.W(d)) : a.f.W(d)
            }
        }
    }))
};

function tC(a, b, c, d) {
    this.b = a;
    this.d = b;
    this.B = c;
    Z.f && (this.f = d[qb]("div"), pa(this.f[x], "1px"), Ja(this.f[x], "1px"))
}
tC[F].j = function (a, b) {
    return b ? uC(this, a, -8, 0) || uC(this, a, 0, -8) || uC(this, a, 8, 0) || uC(this, a, 0, 8) : uC(this, a, 0, 0)
};

function uC(a, b, c, d) {
    var e = b.X,
        f = k,
        g = new T(0, 0),
        h = new T(0, 0),
        a = a.b,
        i;
    for (i in a) {
        var p = a[i],
            r = 1 << p[wk];
        h.x = 256 * p.oa.x;
        h.y = 256 * p.oa.y;
        var t = g.x = e.x * r + c - h.x,
            r = g.y = e.y * r + d - h.y;
        if (0 <= t && 256 > t && 0 <= r && 256 > r) {
            f = p;
            break
        }
    }
    if (!f) return k;
    var w = [];
    f.qa[sb](function (a) {
        w[B](a)
    });
    w[sk](function (a, b) {
        return b[jq] - a[jq]
    });
    c = k;
    for (e = 0; d = w[e]; ++e) if (f = d.Ib, f[Lp] != l) {
        f = f.Qd;
        if (d.Ja > g.x || d.Ka > g.y || d.Ja + d.Wa < g.x || d.Ka + d.Va < g.y) h = 0;
        else a: switch (p = d.Ib[kj], i = g.x - d.Ja, h = g.y - d.Ka, a = p.coords, p[sc][Lc]()) {
        case "rect":
            h = a[0] <= i && i <= a[2] && a[1] <= h && h <= a[3];
            break a;
        case "circle":
            p = a[2];
            i -= a[0];
            h -= a[1];
            h = i * i + h * h <= p * p;
            break a;
        default:
            p = a[E], a[0] == a[p - 2] && a[1] == a[p - 1] || a[B](a[0], a[1]), h = 0 != ws(i, h, a)
        }
        if (h) {
            c = f;
            break
        }
    }
    c && (b.f = d);
    return c
}
tC[F].e = function (a, b, c) {
    var d = b.f;
    if (a == Fk) this.B.set("cursor", ""), this.B.set("title", k);
    else if (a == Gk) {
        var e = d.Ib;
        this.B.set("cursor", e.cursor);
        this.f && (fm(this.f, new T(b.b.layerX, b.b.layerY)), b.b[Cc][Ic][Za](this.f));
        (e = e[kq]) && this.B.set("title", e)
    }
    d = d && a != Fk ? d.Ib.ma : b.latLng;
    de(b.b);
    Q[o](c, a, new dl(d))
};
aj(tC[F], 40);

function vC(a) {
    this.b = a
}
Ui(vC[F], function (a, b) {
    return this.b[Uj](a.url, function (c) {
        if (c) {
            var d = c[Ej],
                e = Ea(a, a[Ej] || d),
                f = a[qq] || new T(e[s] / 2, e[A]),
                g = {};
            g.pa = c;
            var c = a[eq] || d,
                h = c[s] / d[s],
                i = c[A] / d[A];
            g.Qb = a[rp] ? a[rp].x / h : 0;
            g.Rb = a[rp] ? a[rp].y / i : 0;
            g.Ja = -f.x;
            g.Ka = -f.y;
            g.Qb * h + e[s] > c[s] ? (g.pc = d[s] - g.Qb * h, g.Wa = c[s]) : (g.pc = e[s] / h, g.Wa = e[s]);
            g.Rb * i + e[A] > c[A] ? (g.oc = d[A] - g.Rb * i, g.Va = c[A]) : (g.oc = e[A] / i, g.Va = e[A]);
            b(g)
        } else b(k)
    })
});
Si(vC[F], function (a) {
    this.b[Sj](a)
});

function wC(a, b) {
    this.f = b;
    var c = this;
    a.b = function (a) {
        xC(c, a, j)
    };
    mp(a, function (a) {
        c.La(a)
    });
    this.d = k;
    this.j = N(this, this.e);
    this.b = l;
    this.B = 0;
    Fq(a) && (this.b = j, this.e())
}
wC[F].La = function (a) {
    xC(this, a, l)
};

function xC(a, b, c) {
    4 > a.B++ ? c ? a.f.f(b) : a.f.e(b) : a.b = j;
    a.d || (a.d = fe(a.j))
}
wC[F].e = function () {
    this.b && this.f.B();
    this.b = l;
    this.d = k;
    this.B = 0
};

function yC(a, b, c) {
    this.b = a;
    a = uf(-100, -300, 100, 300);
    this.d = new Ur(a, ba);
    a = uf(-90, -180, 90, 180);
    this.e = new xs(a, function (a, b) {
        return a.X == b.X
    });
    this.j = c;
    var d = this;
    b.b = function (a) {
        var b = a.ma,
            b = new T(b.lat(), b.lng());
        a.X = b;
        b.Ib = a;
        d.e.W({
            X: b
        });
        for (var b = Wr(d.d, b), c = d.get("projection"), h = 0, i = b[E]; h < i; ++h) {
            var p = b[h],
                r = p.ga;
            if (p = zC(r, p.b, a, c)) a.qa[Gf(p)] = p, r.qa.W(p)
        }
    };
    mp(b, function (a) {
        d.e[pb]({
            X: a.X
        });
        Gd(a.qa, function (b, c) {
            delete a.qa[b];
            c.ga.qa[pb](c)
        })
    })
}
J(yC, V);
Mi(yC[F], k);
xa(yC[F], new U(256, 256));
Ba(yC[F], function (a, b, c) {
    c = c[qb]("div");
    Wg(c, this[vb]);
    Ua(c[x], "hidden");
    var d = {
        fa: c,
        zoom: b,
        oa: a,
        tb: {},
        qa: new If
    };
    c.ga = d;
    this.b[Gf(d)] = d;
    var e = this.get("projection"),
        b = d.oa,
        f = 1 << d[wk],
        a = new T(256 * b.x / f, 256 * b.y / f),
        b = uf((256 * b.x - 64) / f, (256 * b.y - 64) / f, (256 * (b.x + 1) + 64) / f, (256 * (b.y + 1) + 64) / f),
        g = this;
    ys(b, e, a, function (a, b) {
        a.b = b;
        a.ga = d;
        d.tb[Gf(a)] = a;
        g.d.W(a);
        for (var c = g.e[Pp](a), f = 0, t = c[E]; f < t; ++f) {
            var w = c[f].X.Ib,
                z = zC(d, a.b, w, e);
            z && (w.qa[Gf(z)] = z, d.qa.W(z))
        }
    });
    this.j(d.fa, d.qa);
    return c
});
Xa(yC[F], function (a) {
    var b = a.ga;
    a.ga = k;
    delete this.b[Gf(b)];
    b.qa[sb](function (a) {
        b.qa[pb](a);
        delete a.Ib.qa[Gf(a)]
    });
    var c = this.d;
    Gd(b.tb, function (a, b) {
        c[pb](b)
    });
    Vi(a, "")
});

function zC(a, b, c, d) {
    b = d[db](b);
    d = d[db](c.ma);
    d.x -= b.x;
    d.y -= b.y;
    b = 1 << a[wk];
    d.x *= b;
    d.y *= b;
    b = c[jq];
    K(b) || (b = d.y);
    var b = n[C](1E3 * b) + Gf(c) % 1E3,
        e = c.ic,
        a = {
            pa: e.pa,
            Qb: e.Qb,
            Rb: e.Rb,
            pc: e.pc,
            oc: e.oc,
            Ja: n[C](e.Ja + d.x),
            Ka: n[C](e.Ka + d.y),
            Wa: e.Wa,
            Va: e.Va,
            zIndex: b,
            ga: a,
            Ib: c
        };
    return 256 < a.Ja || 256 < a.Ka || 0 > a.Ja + a.Wa || 0 > a.Ka + a.Va ? k : a
};

function AC(a, b, c, d, e, f) {
    var g = this;
    a.b = function (a) {
        var b = a.get("position"),
            c = a.get("zIndex"),
            d = a.ee = {
                Qd: a,
                clickable: a.get("clickable") != l,
                title: a.get("title") || k,
                cursor: a.get("cursor") || "pointer",
                ma: b,
                zIndex: c,
                qa: {}
            },
            e = a.fe = {
                ma: b,
                zIndex: 0,
                qa: {}
            },
            f = a.get("useDefaults"),
            z = a.get("icon"),
            D = a.get("shadow");
        if (!D && (!z || f)) D = g.b.Lb;
        a.get("flat") && (D = k);
        var G = D ? g.e(D) : k,
            O = a.get("shape");
        if (!O && (!z || f)) O = g.b[kj];
        var M = z ? g.e(z) : g.b.Kb,
            X, R, ta = Yd(G ? 2 : 1, function () {
                d == a.ee && e == a.fe && X && (d.ic = X, e.ic = R, g.Ac(a, d, e, M, G, O, b, c))
            });
        g.d[Uj](M, function (a) {
            X = a;
            ta()
        });
        G && g.d[Uj](G, function (a) {
            R = a;
            ta()
        })
    };
    mp(a, function (a) {
        g.La(a)
    });
    this.f = b;
    this.B = c;
    this.b = d;
    this.e = e;
    this.d = f
}
AC[F].La = function (a) {
    this.f[pb](a.ee);
    this.B[pb](a.fe);
    delete a.ee;
    delete a.fe
};
AC[F].Ac = function (a, b, c, d, e, f) {
    d = d[Ej];
    e = b.ic;
    a.set("anchorPoint", new T(d[s] / 2 + e.Ja, e.Ka));
    f ? f.coords = f.coords || f.coord : f = {
        type: "rect",
        coords: [0, 0, d[s], d[A]]
    };
    b.shape = f;
    $o(b, a.get("clickable") != l);
    b.title = a.get("title") || k;
    b.cursor = a.get("cursor") || "pointer";
    BC(b.ic) ? (this.f.W(b), c.ic && (BC(c.ic) ? this.B.W(c) : a.set("optimized", l))) : a.set("optimized", l)
};

function BC(a) {
    return -64 <= a.Ja && -64 <= a.Ka && 64 >= a.Ja + a.Wa && 64 >= a.Ka + a.Va
};

function CC(a, b, c) {
    this.b = a;
    this.j = b;
    this.I = c
}

function DC(a) {
    if (!a.d) {
        var b = a.b,
            c = b[Ij][qb]("canvas");
        Li(c[x], "absolute");
        c[x].top = ip(c[x], "0px");
        pa(c, Ja(c, 256));
        b[Za](c);
        a.d = c.context = c[gq]("2d")
    }
    return a.d
}
CC[F].f = CC[F].e = function (a) {
    var b = EC(this),
        c = DC(this),
        d = a.Ja,
        e = a.Ka,
        f = n[fb](a.Wa),
        a = n[fb](a.Va),
        g = this.I;
    pa(g, f);
    Ja(g, a);
    var h = g[gq]("2d");
    h[iq](-d, -e);
    b[sb](function (a) {
        h[nq](a.pa, a.Qb, a.Rb, a.pc, a.oc, a.Ja, a.Ka, a.Wa, a.Va)
    });
    c[cq](d, e, f, a);
    c[nq](g, d, e)
};
CC[F].B = function () {
    var a = EC(this),
        b = DC(this);
    b[cq](0, 0, 256, 256);
    a[sb](function (a) {
        b[nq](a.pa, a.Qb, a.Rb, a.pc, a.oc, a.Ja, a.Ka, a.Wa, a.Va)
    })
};

function EC(a) {
    var b = [];
    a.j[sb](function (a) {
        b[B](a)
    });
    b[sk](function (a, b) {
        return a[jq] - b[jq]
    });
    return b
};

function FC(a, b) {
    this.b = a;
    this.d = b
}
FC[F].f = function (a) {
    var b = [];
    GC(a, b);
    this.b.insertAdjacentHTML("BeforeEnd", b[Kc](""))
};
FC[F].e = function (a) {
    (a = em(this.b)[Xp]("gm_marker_" + Gf(a))) && a[Ic][Ac](a)
};
FC[F].B = function () {
    var a = [];
    this.d[sb](function (b) {
        GC(b, a)
    });
    Vi(this.b, a[Kc](""))
};

function GC(a, b) {
    var c = a.pa,
        d = c.src,
        e = a[jq],
        f = Gf(a),
        g = a.Wa / a.pc,
        h = a.Va / a.oc;
    b[B]("<div id=gm_marker_", f, ' style="', "  position:absolute;", "  overflow:hidden;", "  width:", Y(a.Wa), ";height:", Y(a.Va), ";", "  top:", Y(a.Ka), ";", "  left:", Y(a.Ja), ";", "  z-index:", e, ";", '">');
    b[B]('<img src="', d, '"', ' style="', "  position:absolute;", "  top:", Y(-a.Rb * h), ";", "  left:", Y(-a.Qb * g), ";", "  width:", Y(c[s] * g), ";", "  height:", Y(c[A] * h), ";", '"/>');
    b[B]("</div>")
};

function HC(a) {
    if (Td(a)) {
        var b = HC.b;
        return b[a] = b[a] || new ag(a)
    }
    return a
}
HC.b = {};
lf[Je] = function (a) {
    eval(a)
};

function IC() {}
IC[F].b = function (a, b) {
    var c = Js();
    if (b instanceof Rf || 2 == Z[sc] && 7 > Z[lj]) qC(a, b, c);
    else {
        var d = new If;
        qC(d, b, c);
        var c = new If,
            e = new If,
            f = new If;
        new AC(c, e, f, new bC, HC, new vC(Sd(Um).ua));
        var g = em(b[Gj]()),
            h;
        if (Uq()) {
            var i = g[qb]("canvas");
            h = function (a, b) {
                return new CC(a, b, i)
            }
        } else h = function (a, b) {
            return new FC(a, b)
        };
        var p = h;
        h = function (a, b) {
            var c = p(a, b);
            return new wC(b, c)
        };
        var r = {},
            t = new yC(r, e, h);
        t[q]("projection", b);
        var w = new yC({}, f, h);
        w[q]("projection", b);
        e = new tC(r, new U(256, 256), b.N(), g);
        Eq(b.j, e);
        S(Ie, function (a) {
            a.Wb(b, t, "overlayImage", -1);
            a.Wb(b, w, "overlayShadow")
        });
        new rC(a, c, d)
    }
};
of(Je, new IC);