var n = null;

function r(e) {
    function l(e, t) {
        return e << t | e >>> 32 - t
    }
    function d(e, t) {
        var n, r, o, i, a;
        return o = 2147483648 & e,
        i = 2147483648 & t,
        a = (1073741823 & e) + (1073741823 & t),
        (n = 1073741824 & e) & (r = 1073741824 & t) ? 2147483648 ^ a ^ o ^ i : n | r ? 1073741824 & a ? 3221225472 ^ a ^ o ^ i : 1073741824 ^ a ^ o ^ i : a ^ o ^ i
    }
    function t(e, t, n, r, o, i, a) {
        var s;
        return d(l(e = d(e, d(d((s = t) & n | ~s & r, o), a)), i), t)
    }
    function n(e, t, n, r, o, i, a) {
        var s;
        return d(l(e = d(e, d(d(t & (s = r) | n & ~s, o), a)), i), t)
    }
    function r(e, t, n, r, o, i, a) {
        return d(l(e = d(e, d(d(t ^ n ^ r, o), a)), i), t)
    }
    function o(e, t, n, r, o, i, a) {
        return d(l(e = d(e, d(d(n ^ (t | ~r), o), a)), i), t)
    }
    function i(e) {
        var t, n = "", r = "";
        for (t = 0; t <= 3; t++)
            r = "0" + (e >>> 8 * t & 255).toString(16),
            n += r.substr(r.length - 2, 2);
        return n
    }
    var a, s, u, c, p, m, f, h, g, v = Array();
    for (e = function(e) {
        e = e.replace(/\r\n/g, "\n");
        for (var t = "", n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            r < 128 ? t += String.fromCharCode(r) : (127 < r && r < 2048 ? t += String.fromCharCode(r >> 6 | 192) : (t += String.fromCharCode(r >> 12 | 224),
            t += String.fromCharCode(r >> 6 & 63 | 128)),
            t += String.fromCharCode(63 & r | 128))
        }
        return t
    }(e),
    v = function(e) {
        var t, n = e.length, r = n + 8, o = 16 * ((r - r % 64) / 64 + 1), i = Array(o - 1), a = 0, s = 0;
        for (; s < n; )
            a = s % 4 * 8,
            i[t = (s - s % 4) / 4] = i[t] | e.charCodeAt(s) << a,
            s++;
        return a = s % 4 * 8,
        i[t = (s - s % 4) / 4] = i[t] | 128 << a,
        i[o - 2] = n << 3,
        i[o - 1] = n >>> 29,
        i
    }(e),
    m = 1732584193,
    f = 4023233417,
    h = 2562383102,
    g = 271733878,
    a = 0; a < v.length; a += 16)
        m = t(s = m, u = f, c = h, p = g, v[a + 0], 7, 3614090360),
        g = t(g, m, f, h, v[a + 1], 12, 3905402710),
        h = t(h, g, m, f, v[a + 2], 17, 606105819),
        f = t(f, h, g, m, v[a + 3], 22, 3250441966),
        m = t(m, f, h, g, v[a + 4], 7, 4118548399),
        g = t(g, m, f, h, v[a + 5], 12, 1200080426),
        h = t(h, g, m, f, v[a + 6], 17, 2821735955),
        f = t(f, h, g, m, v[a + 7], 22, 4249261313),
        m = t(m, f, h, g, v[a + 8], 7, 1770035416),
        g = t(g, m, f, h, v[a + 9], 12, 2336552879),
        h = t(h, g, m, f, v[a + 10], 17, 4294925233),
        f = t(f, h, g, m, v[a + 11], 22, 2304563134),
        m = t(m, f, h, g, v[a + 12], 7, 1804603682),
        g = t(g, m, f, h, v[a + 13], 12, 4254626195),
        h = t(h, g, m, f, v[a + 14], 17, 2792965006),
        f = t(f, h, g, m, v[a + 15], 22, 1236535329),
        m = n(m, f, h, g, v[a + 1], 5, 4129170786),
        g = n(g, m, f, h, v[a + 6], 9, 3225465664),
        h = n(h, g, m, f, v[a + 11], 14, 643717713),
        f = n(f, h, g, m, v[a + 0], 20, 3921069994),
        m = n(m, f, h, g, v[a + 5], 5, 3593408605),
        g = n(g, m, f, h, v[a + 10], 9, 38016083),
        h = n(h, g, m, f, v[a + 15], 14, 3634488961),
        f = n(f, h, g, m, v[a + 4], 20, 3889429448),
        m = n(m, f, h, g, v[a + 9], 5, 568446438),
        g = n(g, m, f, h, v[a + 14], 9, 3275163606),
        h = n(h, g, m, f, v[a + 3], 14, 4107603335),
        f = n(f, h, g, m, v[a + 8], 20, 1163531501),
        m = n(m, f, h, g, v[a + 13], 5, 2850285829),
        g = n(g, m, f, h, v[a + 2], 9, 4243563512),
        h = n(h, g, m, f, v[a + 7], 14, 1735328473),
        f = n(f, h, g, m, v[a + 12], 20, 2368359562),
        m = r(m, f, h, g, v[a + 5], 4, 4294588738),
        g = r(g, m, f, h, v[a + 8], 11, 2272392833),
        h = r(h, g, m, f, v[a + 11], 16, 1839030562),
        f = r(f, h, g, m, v[a + 14], 23, 4259657740),
        m = r(m, f, h, g, v[a + 1], 4, 2763975236),
        g = r(g, m, f, h, v[a + 4], 11, 1272893353),
        h = r(h, g, m, f, v[a + 7], 16, 4139469664),
        f = r(f, h, g, m, v[a + 10], 23, 3200236656),
        m = r(m, f, h, g, v[a + 13], 4, 681279174),
        g = r(g, m, f, h, v[a + 0], 11, 3936430074),
        h = r(h, g, m, f, v[a + 3], 16, 3572445317),
        f = r(f, h, g, m, v[a + 6], 23, 76029189),
        m = r(m, f, h, g, v[a + 9], 4, 3654602809),
        g = r(g, m, f, h, v[a + 12], 11, 3873151461),
        h = r(h, g, m, f, v[a + 15], 16, 530742520),
        f = r(f, h, g, m, v[a + 2], 23, 3299628645),
        m = o(m, f, h, g, v[a + 0], 6, 4096336452),
        g = o(g, m, f, h, v[a + 7], 10, 1126891415),
        h = o(h, g, m, f, v[a + 14], 15, 2878612391),
        f = o(f, h, g, m, v[a + 5], 21, 4237533241),
        m = o(m, f, h, g, v[a + 12], 6, 1700485571),
        g = o(g, m, f, h, v[a + 3], 10, 2399980690),
        h = o(h, g, m, f, v[a + 10], 15, 4293915773),
        f = o(f, h, g, m, v[a + 1], 21, 2240044497),
        m = o(m, f, h, g, v[a + 8], 6, 1873313359),
        g = o(g, m, f, h, v[a + 15], 10, 4264355552),
        h = o(h, g, m, f, v[a + 6], 15, 2734768916),
        f = o(f, h, g, m, v[a + 13], 21, 1309151649),
        m = o(m, f, h, g, v[a + 4], 6, 4149444226),
        g = o(g, m, f, h, v[a + 11], 10, 3174756917),
        h = o(h, g, m, f, v[a + 2], 15, 718787259),
        f = o(f, h, g, m, v[a + 9], 21, 3951481745),
        m = d(m, s),
        f = d(f, u),
        h = d(h, c),
        g = d(g, p);
    var b = i(m) + i(f) + i(h) + i(g);
    return b.toUpperCase()
}

function o(e) {
    for (var t = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = 0; r < e; r++)
        t += n.charAt(Math.floor(Math.random() * n.length));
    return t
}

var t = function(a, b) {
    //
}

exports.getToken = function(siteID, userAgent) {
    return e ? (false || (n = window.btoa(o(1) + r(e) + o(3) + r(userAgent) + o(5) + window.btoa((new Date).getTime().toString()) + o(7)),
    t(function() {
        n = null
    }, 9e5)),
    n) : e
}