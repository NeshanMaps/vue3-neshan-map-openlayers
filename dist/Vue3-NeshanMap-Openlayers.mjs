import { ref as p, reactive as oe, computed as O, toRaw as he, defineComponent as I, openBlock as C, createElementBlock as y, normalizeStyle as x, normalizeClass as P, createElementVNode as m, Fragment as ne, renderList as ie, unref as i, toDisplayString as b, pushScopeId as J, popScopeId as Z, getCurrentInstance as Ve, watch as D, withDirectives as q, withModifiers as Ge, vShow as le, isRef as Ye, withKeys as Qe, vModelText as Fe, createVNode as B, createCommentVNode as L, onUpdated as ze, nextTick as Oe, createBlock as F, createTextVNode as X, onMounted as we, renderSlot as Ae } from "vue";
const je = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyLDE4LjU0TDE5LjM3LDEyLjhMMjEsMTQuMDdMMTIsMjEuMDdMMywxNC4wN0w0LjYyLDEyLjgxTDEyLDE4LjU0TTEyLDE2TDMsOUwxMiwyTDIxLDlMMTIsMTZNMTIsNC41M0w2LjI2LDlMMTIsMTMuNDdMMTcuNzQsOUwxMiw0LjUzWiIgLz48L3N2Zz4=", pe = "data:image/png;base64,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", ve = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAALEsAACxLAaU9lqkAAAL3UExURbu7u7i4uKGhoaWlpbOzs729vbq6usPDw0dwTMDAwKmpqbe3t8XFxW9vb6ysrJycnHFxcbCwsLm5ua+vr5iYmKWlpaioqHV1dbi4uKOjo7+/v5+fnrW1taurq8LCwsLCwnh4eL+/v5KSkry8vLy8vLy8vL29vd45Tbi4uH19fcTExLy8vM6Pl+A3S76+vsDAwMTExNdebtxHWb29vcTExNlZaN49UBQWFb+/v8mkqNVoddJ+iPr7+95AU7CwsNtMXL+/v6ysrNNlctra2qmpqd1DVdNxfeipcPX19eDg4P39/Yt9ePn5+dlNX4iIiKOgntpQYuSrethTY9xJWvLy8r6+vsPDw5CQkObm5sOrqc6xofPz8/Dw8Maamfv6+uKkd62VjM94gu6lZMeolb6WgNmUc8qHkO+kYu+5lu2lZsq6qhgYGNVaatmyjuCugryakMfHx9GZe8iYfNiwl+Smg9Okic2EjOe2leymaamgnNenha6Vhuamg9VbaduqjN6zmNyTcLoxMbkmJuDg4J+Kfq9nZ9pVZNyvkc6afl5VVdOUdTc3N1phXf/J/9L///+W0KZL//////+7HOA0Sf////K7lhwcHLoeHvCkYQAAAHBROr7Npu+jYQ9gQeingt2Tb980Sd4zSHZdTW5VRf/pGnlgUHxjUn9mVYJpWHNaSlA+Mq2FaygkInJYRuyviu+2ke2zjuqrhj8yKTksIgYFBTMnHlxKPaN3XOSukPG5lGJQRIxrVHx8e0Y4L61/Y/CkYuShfHd1dDR4WhMODsWWd4gWFrmOcYBcRCJsTYtiR2WWcxAoHzIHB9Ggf9amhU+IZuDcXY1wXdeDXuakgKSAaZd3YtyLi3Wgfl5ZV21pZx5hQ/DOzuexsZ8ZGfXlMF0PD9NubppwVNyif4aumEYLC8E0NMfRk+Ctig5UOUxKSctWVsdISOlxVsuJZ3ldSjtON/fj4wtJMtLWfNvn46K9nLPGoLDLwcLPnalzVXESEuI+S8PXz4J8fQwUsqgAAAD9dFJOU2ZDSkhEQmdAAEFHZ0FfRkxdakJGTW5tW0RvU3BobE1EWkhPYl9YW+loWDhRWfQGITKJuEsnlN7+GE19ZPjRW6wOUaRbZMRxsruG6W7RxlNan5C7zqIUPHlwcVuvlHnezmOQ6ZSf6YH08N9O2LJpfm53xq+p6apw3dN5nob1s7vD9eDtn36Npsa9jL249VpbSKR3/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////2YfrWT1AAAlpUlEQVR42sSbTWwTZxrHJ4k9ZuKRo3wqcYytbOzIsiXHUizVByty5BxiN1IuCRspUcRhOfWS9tbjlu6h26spAgSWKA3I8UooIQGFOlqgFJZNl6DSsEv4SMvHdkGwLF8t6mWf550Ze+yM7fF43sk/RArBHvv/e5+v9x3D7KpGgWi4PxT0+fZYKImRyVXlc/f4gsFQ/0S0Kke7GPXmw6GghbZ6ZQB6tF4kGAoH9AYQ7advHtUnA+Cs5ULBUFQ/AIF+n8UgeWQA7DVeyxcK6AIgGrQYJ7sMgKf2ywUnagYQNtK+xeKUAejT44K+cE0A+u0WY9UjA9CrzyUrICgHIDzAMJyxAFzyPqjXRX0BTQACvpp60Q4MAqVVphyWBBD21N6LahwEBvS7bOk8YMotvw69aMcGAbVBoAwgmuvHboMB2HUcBFRVAkUAIbfepXinBoGCvcKEWgD9dCpR1YOA7tHXrw5AqKASGVwFKQwC5QkwCv7llYg1uAry8ujTfwgJVQYQKkrEPoOLAOX0C1UCECpORKOroJvOIFCSQBGA/u0DqcHDsHxD7LfQJ8Ao+C+MwwFjawC9QUC5EhYAmFCax/zGRoAB9SdcCkBgj9IyeIwFQHUQECeigDKAgE/xXRhcBV0GvLR8KmaKGsD2ccTgKsgb8dIhJQDhUt24iiMBZywenx6fGiGaGp+OT8Zq2hBTO42IbgcQ8JXqxmqGYd4Zm54aTSQVFBmdmp7UOAhQm8PzScAoJIClyuNpZ3xqJllBo1NxlW48hnSgUDGAQOlmVL4WT46PJlVqdFpNQhjUgaJFAHyaNmWT44lkVZqpzMBpzEYkWAggXK4Wu0qk/fRoUoNG4zu5Ic5rogCAr1wtVkpebnIqktSoxEiM41QNAgxFAD45gHC5w0ml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", se = {
  reverse: "https://api.neshan.org/v4/reverse",
  search: "https://api.neshan.org/v1/search",
  map: "https://static.neshan.org/sdk/openlayers/5.3.0/ol.js"
}, j = {
  main: "https://img.icons8.com/color/344/marker--v1.png",
  search: "https://static.neshanmap.ir/poi/square/",
  colorSvg: "https://static.neshanmap.ir/poi/svg/color/",
  greySvg: "https://static.neshanmap.ir/poi/svg/grey/",
  preview256: "https://static.neshanmap.ir/poi/256/",
  searchPrev: "/images/search-marker-prev.png"
}, ge = [
  {
    title: "osm-bright",
    url: "https://static.neshan.org/sdk/examples/maptypes/images/map-types-bright.png"
  },
  {
    title: "standard-night",
    url: "https://static.neshan.org/sdk/examples/maptypes/images/map-types-standard-night.png"
  },
  {
    title: "standard-day",
    url: "https://static.neshan.org/sdk/examples/maptypes/images/map-types-standard-day.png"
  },
  {
    title: "neshan",
    url: "https://static.neshan.org/sdk/examples/maptypes/images/map-types-neshan.png"
  },
  {
    title: "dreamy-gold",
    url: "https://static.neshan.org/sdk/examples/maptypes/images/map-types-dreamy-gold.png"
  },
  {
    title: "dreamy",
    url: "https://static.neshan.org/sdk/examples/maptypes/images/map-types-dreamy.png"
  }
], U = {
  xs: !1,
  sm: !1,
  md: !1,
  lg: !1,
  xl: !1
}, te = {
  xs: 0,
  sm: 600,
  md: 1024,
  lg: 1440,
  xl: 1920
}, E = {
  width: "18em",
  bottomSheetNormalHeight: "5em",
  bottomSheetloadingHeight: "2em",
  bottomSheetBorderRadius: "1em 1em 0 0"
}, Je = {
  width: "700px",
  height: "1000px"
}, W = {
  initialZoom: 12,
  maxZoom: 18.5
}, Y = {
  high: [0, -60],
  short: [0, -40]
}, Ze = () => ({
  breakpoints: {
    ...U,
    lt: { ...U },
    gt: { ...U }
  },
  mapDimensions: Je
}), Ne = Ze(), Ke = () => ({
  selectedMarker: null,
  mainMarker: p(),
  mainMarkerCoords: p(),
  reverseResult: null,
  searchMarkers: p(),
  searchResults: []
}), Xe = Ke(), Ue = () => ({
  overlay: null,
  persistantOverlay: null,
  popupContainer: null,
  persistantContainer: null
}), We = Ue(), qe = () => ({
  drawerActivation: !1,
  drawerShowDetails: !1,
  mobileDrawerShowDetails: !1
}), _e = qe(), $e = () => ({
  mapContainer: null,
  map: null,
  mapType: "neshan",
  zoom: W.initialZoom,
  poiLayer: !0,
  trafficLayer: !0,
  viewType: "desktop"
}), et = $e();
function tt() {
  return oe({
    ...Ne,
    ...Xe,
    ...We,
    ..._e,
    ...et,
    api: null,
    searchLoading: !1,
    reverseLoading: !1
  });
}
const fe = (e) => {
  const s = e.place ? e.place : e.route_name ? e.route_name : "\u0645\u0639\u0628\u0631 \u0628\u062F\u0648\u0646 \u0646\u0627\u0645";
  return e.neighbourhood ? s + `\u060C ${e.neighbourhood}` : s;
}, Me = (e) => e ? e instanceof Object ? [e.longitude, e.latitude] : e : void 0, st = async () => {
  const s = await new Promise(
    (r) => {
      navigator.geolocation.getCurrentPosition((a) => {
        r(a);
      });
    }
  );
  return s && Me(s.coords) || Object.values(ke());
}, ke = () => ({
  longitude: 59.5870851,
  latitude: 36.311559
}), De = (e, s = "EPSG:3857", r = "EPSG:4326") => ol.proj.transform(e, s, r), at = (e, s) => {
  const [{ iconScale: r } = {}] = e, a = yt(
    e,
    s == null ? void 0 : s.markersIconCallback,
    {
      isCluster: s == null ? void 0 : s.cluster,
      ...s == null ? void 0 : s.props
    }
  );
  let o, n;
  if (s != null && s.cluster)
    o = mt(a, s);
  else {
    const { styleFunc: d, style: l } = Be({
      hidePopup: s == null ? void 0 : s.hidePopup,
      iconScale: r,
      anchor: s == null ? void 0 : s.anchor
    });
    n = l;
    const g = Le(a);
    o = ot({ style: d, source: g });
  }
  return { layer: o, style: n };
}, de = ({
  iconScale: e = 0.24,
  src: s = j.main,
  anchor: r = [0.5, 0.5]
} = {}) => new ol.style.Icon({
  src: s,
  scale: e,
  anchor: r
}), rt = ({ image: e, text: s }) => new ol.style.Style({
  image: e,
  text: s
}), Be = ({
  hidePopup: e = !1,
  iconScale: s,
  anchor: r
}) => {
  const a = rt({}), o = ct(a, {
    hidePopup: e,
    iconScale: s,
    anchor: r
  });
  return { style: a, styleFunc: o };
}, Le = (e) => new ol.source.Vector({
  features: e
}), ot = ({
  target: e = "points",
  style: s,
  source: r
}) => new ol.layer.Vector({
  target: e,
  source: r,
  style: s
}), nt = async (e, s) => await Promise.all(
  e.map(async (r) => {
    const a = [r.location.x, r.location.y], o = De(a, "EPSG:4326", "EPSG:3857"), d = (await it(r.type)).url;
    return {
      coords: o,
      text: r.title,
      iconUrl: d,
      iconScale: (s == null ? void 0 : s.iconScale) || 0.25,
      originalItem: r
    };
  })
), it = async (e) => {
  const s = j.search + e + ".png", r = await lt(s);
  return { url: r ? s : j.search + "general.png", exists: r };
}, lt = (e) => new Promise((s) => {
  fetch(e, { method: "head" }).then((r) => s(r.ok)).catch(() => s(!1));
}), ct = (e, { hidePopup: s = !1, iconScale: r, anchor: a }) => (o) => {
  s && e.getText().setText(o.get("text"));
  const n = o.get("iconProps");
  return n ? e.setImage(de(n)) : e.setImage(
    de({ src: o.get("iconUrl"), iconScale: r, anchor: a })
  ), e;
}, He = (e, { minDistance: s = 30, distance: r = 30 } = {}) => new ol.source.Cluster({
  distance: r,
  minDistance: s,
  source: Le(e)
}), ut = (e) => new ol.style.Text({
  text: e.toString(),
  font: "bold 15px serif",
  fill: new ol.style.Fill({
    color: [0, 0, 0, 1]
  })
}), At = () => new ol.style.Circle({
  radius: 15,
  stroke: new ol.style.Stroke({
    color: [255, 255, 255, 0.7],
    width: 4
  }),
  fill: new ol.style.Fill({
    color: [0, 153, 255, 0.7]
  })
}), gt = (e) => new ol.style.Style({
  image: At(),
  text: ut(e)
}), dt = (e) => {
  const s = {};
  return (r) => {
    const a = r.get("features");
    e || r.set(
      "text",
      a.map((d) => d.get("text"))
    ), r.set("isCluster", a[0].get("isCluster"));
    const o = a.length;
    let n = s[o];
    if (!n)
      if (o !== 1)
        n = gt(o), s[o] = n;
      else {
        const d = a[0].get("iconUrl"), { styleFunc: l } = Be({ iconUrl: d, hidePopup: e });
        n = l(a[0], 100);
      }
    return n;
  };
}, mt = (e, s) => new ol.layer.Vector({
  source: He(e, {
    minDistance: s == null ? void 0 : s.clusterDistance,
    distance: s == null ? void 0 : s.clusterDistance
  }),
  style: dt(s == null ? void 0 : s.hidePopup)
}), be = (e) => {
  const s = e.get("features"), r = new ol.extent.createEmpty();
  return s.forEach((a) => {
    ol.extent.extend(r, xe(a));
  }), r;
}, xe = (e) => e.getGeometry().getExtent(), Ct = (e) => {
  const s = ce(e), r = e.getProperties().text;
  return {
    featCoords: s,
    featText: r
  };
}, ce = (e) => e.getGeometry().getCoordinates().slice(0, 2), yt = (e, s, r) => e.map((a) => {
  const o = new ol.Feature({
    geometry: new ol.geom.Point(a.coords),
    text: a.text,
    iconUrl: a.iconUrl,
    iconProps: s && s(a),
    ...a.props,
    ...r
  });
  return o.setId(r.id || a.coords.join("-")), o;
});
function me() {
  let e = !1;
  return function(s) {
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
      s
    ) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      s.substr(0, 4)
    )) && (e = !0);
  }(navigator.userAgent || navigator.vendor || window.opera), e;
}
const ht = oe({
  drawerWidth: O(() => (t.state.viewType ? t.state.viewType === "mobile" : me()) ? t.state.mapDimensions.width : E.width),
  loading: O(() => t.state.searchLoading || t.state.reverseLoading),
  touchPlatform: O(() => me())
}), wt = {
  setBreakPoints(e) {
    this.state.breakpoints = e;
  },
  setMapDimenstions(e) {
    this.state.mapDimensions = e;
  }
}, pt = {
  setSelectedMarker(e) {
    this.state.selectedMarker = e;
  },
  setMainMarker(e) {
    this.state.mainMarker = e;
  },
  setSearchMarkers(e) {
    this.state.searchMarkers = e;
  },
  setMainMarkerCoords(e) {
    this.state.mainMarkerCoords = e;
  },
  setSearchResults(e) {
    this.state.searchResults = e;
  },
  setReverseResult(e) {
    this.state.reverseResult = e;
  }
}, vt = {
  toggleDrawerActivation(e) {
    this.state.drawerActivation = e;
  },
  toggleDrawerShowDetails(e) {
    this.state.drawerShowDetails = e;
  },
  toggleMobileDrawerShowDetails(e) {
    this.state.mobileDrawerShowDetails = e;
  }
}, ft = {
  setMap(e) {
    this.state.map = e;
  },
  setMapContainer(e) {
    this.state.mapContainer = e;
  },
  setZoom(e) {
    this.state.zoom = e;
  },
  setMapType(e) {
    this.state.map.setMapType(e), this.state.mapType = e;
  },
  setViewType(e) {
    this.state.viewType = e;
  },
  togglePoiLayer(e = !this.state.poiLayer) {
    this.state.poiLayer = e;
  },
  toggleTrafficLayer(e = !this.state.trafficLayer) {
    this.state.trafficLayer = e;
  }
}, ae = {
  setOverlay(e) {
    this.state.overlay = e;
  },
  setPersistantOverlay(e) {
    this.state.persistantOverlay = e;
  },
  setPopupContainer(e) {
    this.state.popupContainer = e;
  },
  setPersistantContainer(e) {
    this.state.persistantContainer = e;
  }
}, Mt = {
  toggleSearchLoading(e) {
    this.state.searchLoading = e;
  },
  toggleReverseLoading(e) {
    this.state.reverseLoading = e;
  },
  setApi(e) {
    this.state.api = e;
  },
  ...pt,
  ...wt,
  ...vt,
  ...ft,
  ...ae
}, kt = (e, s) => {
  var o;
  const { layer: r, style: a } = at(e, s);
  return (o = t.state.map) == null || o.addLayer(r), { layer: r, style: a };
}, Se = (e) => {
  var s;
  !e || (s = t.state.map) == null || s.removeLayer(e);
}, Dt = (e, s) => {
  if (!e)
    return;
  const a = he(e).getSource().getFeatures() || [];
  if (!a.some((l) => l.get("isCluster")))
    return;
  const o = a.reduce((l, g) => {
    const c = g.get("features");
    return [...l, ...c];
  }, []), n = s ? 0 : 30, d = He(o, {
    distance: n,
    minDistance: n
  });
  e.setSource(d);
}, Bt = (e) => {
  const s = t.state.searchMarkers.getSource().getFeatures();
  let r;
  const a = s == null ? void 0 : s.find((o) => {
    const n = Ee(o, e);
    return n && (r = n), n;
  });
  return {
    feature: r,
    cluster: a
  };
}, Ee = (e, s) => {
  const r = e.get("features");
  return r == null ? void 0 : r.find((a) => a.getId() === s.join("-"));
}, Lt = (e) => {
  var s;
  return (s = t.state.searchMarkers) == null ? void 0 : s.getSource().getFeatureById(e.join("-"));
}, Ht = (e) => {
  const s = e.get("text");
  return t.state.searchResults.find(
    (r) => r.title === (Array.isArray(s) ? s[0] : s)
  );
}, bt = (e, s) => {
  const r = e.getSource().getExtent();
  K(r, s);
}, K = (e, s) => {
  var a;
  const r = (s == null ? void 0 : s.duration) || 500;
  (a = t.state.map) == null || a.getView().fit(e, {
    size: t.state.map.getSize(),
    duration: r,
    maxZoom: t.state.zoom > W.maxZoom ? t.state.zoom : W.maxZoom,
    padding: [15, t.getters.touchPlatform ? 15 : 300, 15, 15]
  });
}, Ie = (e, s) => {
  const r = xe(e);
  K(r, s);
}, xt = (e, s) => {
  const r = be(e);
  K(r, s);
}, Te = (e, s) => {
  const r = [...e, ...e];
  K(r, s);
}, St = (e, s) => {
  let r = !1, a = s == null ? void 0 : s.coords, o = s == null ? void 0 : s.text;
  "mapCoords" in e ? (a || (a = e.mapCoords), Te(a), "title" in e ? o = e.title : (r = !0, o = fe(e))) : (Ie(e), a || (a = ce(e)), r = e == null ? void 0 : e.getProperties().mainMarker, o || (o = e.getProperties().text), Array.isArray(o) && (o = o[0])), (s == null ? void 0 : s.delay) !== 0 ? setTimeout(() => {
    t.actions.overlays.changeOverlayStats(
      {
        coords: a,
        text: o,
        offset: r ? Y.high : Y.short
      },
      "persistant"
    );
  }, (s == null ? void 0 : s.delay) || 500) : t.actions.overlays.changeOverlayStats(
    {
      coords: a,
      text: o,
      offset: r ? Y.high : Y.short
    },
    "persistant"
  );
  const n = r ? t.state.reverseResult : "mapCoords" in e ? e : t.actions.markers.getSearchResultByFeature(e);
  n && (t.setSelectedMarker(n), t.actions.drawers.toggleResultDrawers(!0));
}, Et = () => {
  t.actions.overlays.changeOverlayStats(void 0, "persistant"), t.actions.markers.clearMarkerLayer(t.state.mainMarker), t.setSelectedMarker(null), t.actions.drawers.toggleResultDrawers(!1);
}, It = (e) => {
  var s;
  return (s = t.state.map) == null ? void 0 : s.forEachFeatureAtPixel(e.pixel, (r) => r);
}, Tt = async (e, { useMarker: s = !0, usePopup: r = !0, customText: a } = {}) => {
  var o;
  try {
    const n = De(e);
    let d = null;
    if (s) {
      const { layer: A } = t.actions.markers.addMarkers(
        [{ coords: e, text: "", iconScale: 0.1, iconUrl: j.main }],
        {
          props: {
            mainMarker: !0,
            isCluster: !1
          },
          anchor: [0.5, 1]
        }
      );
      t.setMainMarkerCoords(n), t.setMainMarker(A), d = A;
    }
    if (!t.state.api)
      throw "No reverse api";
    const l = await t.state.api.REVERSE(...n), g = {
      ...l,
      mapCoords: n
    };
    t.setSelectedMarker(g), t.setReverseResult(g), t.actions.drawers.toggleResultDrawers(!0);
    const c = a || fe(g);
    return (o = t.state.mainMarker) == null || o.getSource().getFeatures()[0].set("text", c), r && t.actions.overlays.changeOverlayStats(
      { coords: e, text: c, offset: Y.high },
      "persistant"
    ), { marker: d, stdPoint: n, data: l };
  } catch (n) {
    return console.log(n), {};
  }
}, Rt = async ({ term: e = "", coords: s }, r) => {
  try {
    if (t.toggleSearchLoading(!0), !t.state.api)
      return;
    const a = await t.state.api.SEARCH(e, s);
    t.toggleDrawerShowDetails(!1), Se(t.state.searchMarkers);
    const o = await nt(a.items), n = o.map((l) => ({
      ...l.originalItem,
      iconUrl: l.iconUrl,
      mapCoords: l.coords
    }));
    t.setSearchResults(n);
    const { layer: d } = t.actions.markers.addMarkers(o, {
      markersIconCallback: r == null ? void 0 : r.markersIconCallback,
      cluster: r == null ? void 0 : r.cluster,
      clusterThreshold: r == null ? void 0 : r.clusterThreshold
    });
    t.actions.overlays.changeOverlayStats(void 0, "persistant"), t.state.searchMarkers = d, setTimeout(() => {
      const l = d.getSource().getFeatures();
      l.length === 1 ? t.actions.markers.zoomToCluster(l[0], { duration: 1500 }) : t.actions.markers.zoomToLayer(d, { duration: 1500 });
    }, 200);
  } catch (a) {
    console.log(a);
  } finally {
    t.toggleSearchLoading(!1);
  }
}, Pt = {
  addMarkers: kt,
  clearMarkerLayer: Se,
  toggleClusterSource: Dt,
  getClusterByCoords: Bt,
  getMarkerInClusterByCoords: Ee,
  getMarkerByCoords: Lt,
  getSearchResultByFeature: Ht,
  zoomToLayer: bt,
  zoomToExtent: K,
  zoomToCoords: Te,
  zoomToMarker: Ie,
  zoomToCluster: xt,
  selectFeauture: St,
  deselectAll: Et,
  getFeatureFromEvent: It,
  reverseOnPoint: Tt,
  search: Rt
}, Vt = () => {
  !t.state.mapContainer || t.setMapDimenstions({
    height: t.state.mapContainer.clientHeight + "px",
    width: t.state.mapContainer.clientWidth + "px"
  });
}, Gt = () => {
  const e = window.innerWidth, s = Object.keys(U), r = JSON.parse(
    JSON.stringify(he(t.state.breakpoints))
  );
  s.forEach((a, o) => {
    const n = s[o + 1];
    e >= te[a] ? (r.lt[a] = !1, !n || e < te[n] ? (r[a] = !0, r.gt[a] = !1) : (r[a] = !1, r.gt[a] = !0)) : e < te[a] && (r.lt[a] = !0, r.gt[a] = !1);
  }), t.setBreakPoints(r);
}, Yt = {
  updateMapDimensions: Vt,
  updateBreakpoints: Gt
}, Qt = () => {
  var r, a;
  if (!t.state.popupContainer || !t.state.persistantContainer)
    return;
  const e = re(t.state.popupContainer);
  ae.setOverlay(e);
  const s = re(t.state.persistantContainer, !0);
  ae.setPersistantOverlay(s), (r = t.state.map) == null || r.addOverlay(e), (a = t.state.map) == null || a.addOverlay(s);
}, Ft = (e, s = "temporary") => {
  const r = s === "temporary" ? t.state.popupContainer : t.state.persistantContainer, a = s === "temporary" ? t.state.overlay : t.state.persistantOverlay;
  if (!!r)
    if (e) {
      const { coords: o, text: n, offset: d } = e;
      r.innerHTML = n, d && (a == null || a.setOffset(d)), a == null || a.setPosition(o);
    } else
      a == null || a.setPosition(void 0);
}, re = (e, s = !1) => {
  const r = new ol.Overlay({
    element: e,
    map: t.state.map,
    positioning: "top-center",
    offset: Y.short
  });
  return r.set("persistant", s), r;
}, zt = {
  setupOverlays: Qt,
  createOverlay: re,
  changeOverlayStats: Ft
}, Ot = (e = !t.state.drawerShowDetails) => {
  t.getters.touchPlatform ? t.toggleMobileDrawerShowDetails(e) : (t.toggleDrawerShowDetails(e), t.toggleDrawerActivation(e));
}, jt = {
  toggleResultDrawers: Ot
}, Jt = (e = 0) => {
  setTimeout(() => {
    var s;
    return (s = t.state.map) == null ? void 0 : s.updateSize();
  }, e);
}, Zt = (e) => {
  var s;
  (s = t.state.map) == null || s.switchPoiLayer(e);
}, Nt = (e) => {
  var s;
  (s = t.state.map) == null || s.switchTrafficLayer(e);
}, Kt = {
  shakeMap: Jt,
  togglePoi: Zt,
  toggleTraffic: Nt
}, Xt = {
  markers: Pt,
  dimensions: Yt,
  overlays: zt,
  drawers: jt,
  map: Kt
}, Ut = () => ({ state: tt(), getters: ht, actions: Xt, ...Mt }), t = Ut(), _ = (e) => (J("data-v-30d45665"), e = e(), Z(), e), Wt = { class: "justify-between d-flex" }, qt = ["onClick", "selected"], _t = ["src"], $t = { class: "text-sm" }, es = { class: "d-flex justify-around poi-traffic" }, ts = ["selected"], ss = /* @__PURE__ */ _(() => /* @__PURE__ */ m("img", { src: pe }, null, -1)), as = /* @__PURE__ */ _(() => /* @__PURE__ */ m("div", { class: "text-sm" }, " Traffic ", -1)), rs = [
  ss,
  as
], os = ["selected"], ns = /* @__PURE__ */ _(() => /* @__PURE__ */ m("img", { src: ve }, null, -1)), is = /* @__PURE__ */ _(() => /* @__PURE__ */ m("div", { class: "text-sm" }, " Poi ", -1)), ls = [
  ns,
  is
], cs = /* @__PURE__ */ I({
  __name: "DesktopLayers",
  props: {
    tiles: {
      type: Array,
      default: () => []
    },
    settingsBoxClass: [Array, Object],
    settingsBoxStyle: Object
  },
  setup(e) {
    return (s, r) => (C(), y("div", {
      style: x(e.settingsBoxStyle),
      class: P(["map-settings o-hidden pos-absolute", e.settingsBoxClass])
    }, [
      m("div", Wt, [
        (C(!0), y(ne, null, ie(e.tiles, (a) => (C(), y("div", {
          key: a.title,
          onClick: (o) => i(t).setMapType(a.title),
          class: "pointer tile",
          selected: a.title == i(t).state.mapType
        }, [
          m("img", {
            src: a.url
          }, null, 8, _t),
          m("div", $t, b(a.title[0].toUpperCase() + a.title.slice(1)), 1)
        ], 8, qt))), 128))
      ]),
      m("div", es, [
        m("div", {
          class: "pointer tile",
          selected: i(t).state.poiLayer,
          onClick: r[0] || (r[0] = (a) => i(t).togglePoiLayer())
        }, rs, 8, ts),
        m("div", {
          class: "pointer tile",
          selected: i(t).state.trafficLayer,
          onClick: r[1] || (r[1] = (a) => i(t).toggleTrafficLayer())
        }, ls, 8, os)
      ])
    ], 6));
  }
});
const V = (e, s) => {
  const r = e.__vccOpts || e;
  for (const [a, o] of s)
    r[a] = o;
  return r;
}, us = /* @__PURE__ */ V(cs, [["__scopeId", "data-v-30d45665"]]), $ = (e) => (J("data-v-eb183cc6"), e = e(), Z(), e), As = ["activated"], gs = { class: "map-layers d-flex justify-center" }, ds = ["selected"], ms = /* @__PURE__ */ $(() => /* @__PURE__ */ m("img", { src: pe }, null, -1)), Cs = /* @__PURE__ */ $(() => /* @__PURE__ */ m("div", { class: "desc text-sm" }, "POI", -1)), ys = [
  ms,
  Cs
], hs = ["selected"], ws = /* @__PURE__ */ $(() => /* @__PURE__ */ m("img", { src: ve }, null, -1)), ps = /* @__PURE__ */ $(() => /* @__PURE__ */ m("div", { class: "desc text-sm" }, "Traffic", -1)), vs = [
  ws,
  ps
], fs = { class: "map-types d-flex justify-center" }, Ms = ["selected", "onClick"], ks = ["src"], Ds = { class: "desc text-sm" }, Bs = /* @__PURE__ */ I({
  __name: "MobileLayers",
  props: {
    modelValue: Boolean,
    tiles: {
      type: Array,
      default: () => []
    },
    settingsBoxClass: [Array, Object],
    settingsBoxStyle: Object
  },
  emits: ["update:modelValue"],
  setup(e, { emit: s }) {
    const r = e, a = Ve(), o = (l) => {
      s("update:modelValue", l);
    }, n = p(!1);
    D(
      () => r.modelValue,
      (l) => {
        l && setTimeout(() => {
          var g;
          n.value = !0, (g = a == null ? void 0 : a.proxy) == null || g.$forceUpdate();
        }, 200);
      }
    );
    const d = () => {
      var l;
      n.value = !1, (l = a == null ? void 0 : a.proxy) == null || l.$forceUpdate(), setTimeout(() => {
        o(!1);
      }, 200);
    };
    return (l, g) => q((C(), y("div", {
      class: P(["mobile-settings-container pos-absolute o-hidden", e.settingsBoxClass]),
      style: x(e.settingsBoxStyle),
      onClick: d
    }, [
      m("div", {
        class: "mobile-settings pos-absolute px-1",
        activated: n.value,
        onClick: g[2] || (g[2] = Ge(() => {
        }, ["prevent", "stop"]))
      }, [
        m("div", gs, [
          m("div", {
            class: "d-flex justify-center align-center tile",
            selected: i(t).state.poiLayer,
            onClick: g[0] || (g[0] = (c) => i(t).togglePoiLayer())
          }, ys, 8, ds),
          m("div", {
            class: "d-flex justify-center align-center tile",
            selected: i(t).state.trafficLayer,
            onClick: g[1] || (g[1] = (c) => i(t).toggleTrafficLayer())
          }, vs, 8, hs)
        ]),
        m("div", fs, [
          (C(!0), y(ne, null, ie(e.tiles, (c) => (C(), y("div", {
            key: c.title,
            selected: c.title == i(t).state.mapType,
            class: "d-flex justify-center align-center tile",
            onClick: (A) => i(t).setMapType(c.title)
          }, [
            m("img", {
              src: c.url
            }, null, 8, ks),
            m("div", Ds, b(c.title[0].toUpperCase() + c.title.slice(1)), 1)
          ], 8, Ms))), 128))
        ])
      ], 8, As)
    ], 6)), [
      [le, e.modelValue]
    ]);
  }
});
const Ls = /* @__PURE__ */ V(Bs, [["__scopeId", "data-v-eb183cc6"]]), N = {
  close: {
    d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
  },
  magnet: {
    d: "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
  },
  neighborhood_landmark: {
    d: "M17,16H15V22H12V17H8V22H5V16H3L10,10L17,16M6,2L10,6H9V9H7V6H5V9H3V6H2L6,2M18,3L23,8H22V12H19V9H17V12H15.34L14,10.87V8H13L18,3Z"
  },
  formal_school: {
    d: "M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"
  },
  university: {
    d: "M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"
  },
  primary: {
    d: "M18.1,4.8C18,4.3 17.6,4 17.1,4H13L13.2,7H10.8L11,4H6.8C6.3,4 5.9,4.4 5.8,4.8L3.1,18.8C3,19.4 3.5,20 4.1,20H10L10.3,15H13.7L14,20H19.8C20.4,20 20.9,19.4 20.8,18.8L18.1,4.8M10.4,13L10.6,9H13.2L13.4,13H10.4Z"
  },
  secondary: {
    d: "M18.1,4.8C18,4.3 17.6,4 17.1,4H13L13.2,7H10.8L11,4H6.8C6.3,4 5.9,4.4 5.8,4.8L3.1,18.8C3,19.4 3.5,20 4.1,20H10L10.3,15H13.7L14,20H19.8C20.4,20 20.9,19.4 20.8,18.8L18.1,4.8M10.4,13L10.6,9H13.2L13.4,13H10.4Z",
    scale: 0.8
  },
  tertiary: {
    d: "M18.1,4.8C18,4.3 17.6,4 17.1,4H13L13.2,7H10.8L11,4H6.8C6.3,4 5.9,4.4 5.8,4.8L3.1,18.8C3,19.4 3.5,20 4.1,20H10L10.3,15H13.7L14,20H19.8C20.4,20 20.9,19.4 20.8,18.8L18.1,4.8M10.4,13L10.6,9H13.2L13.4,13H10.4Z",
    scale: 0.6
  },
  vaccine: {
    d: "M11.15,15.18L9.73,13.77L11.15,12.35L12.56,13.77L13.97,12.35L12.56,10.94L13.97,9.53L15.39,10.94L16.8,9.53L13.97,6.7L6.9,13.77L9.73,16.6L11.15,15.18M3.08,19L6.2,15.89L4.08,13.77L13.97,3.87L16.1,6L17.5,4.58L16.1,3.16L17.5,1.75L21.75,6L20.34,7.4L18.92,6L17.5,7.4L19.63,9.53L9.73,19.42L7.61,17.3L3.08,21.84V19Z"
  },
  subway_station: {
    d: "M8.5,15A1,1 0 0,1 9.5,16A1,1 0 0,1 8.5,17A1,1 0 0,1 7.5,16A1,1 0 0,1 8.5,15M7,9H17V14H7V9M15.5,15A1,1 0 0,1 16.5,16A1,1 0 0,1 15.5,17A1,1 0 0,1 14.5,16A1,1 0 0,1 15.5,15M18,15.88V9C18,6.38 15.32,6 12,6C9,6 6,6.37 6,9V15.88A2.62,2.62 0 0,0 8.62,18.5L7.5,19.62V20H9.17L10.67,18.5H13.5L15,20H16.5V19.62L15.37,18.5C16.82,18.5 18,17.33 18,15.88M17.8,2.8C20.47,3.84 22,6.05 22,8.86V22H2V8.86C2,6.05 3.53,3.84 6.2,2.8C8,2.09 10.14,2 12,2C13.86,2 16,2.09 17.8,2.8Z"
  },
  metro_entrance: {
    d: "M6 11V13H4V11H6M22 5H17V19H22V5M7 5H2L2 19H7V5M22 3C23.11 3 24 3.89 24 5V21H0V5C0 3.89 .894 3 2 3H9V19H15V3H22M20 11H18V13H20V11Z",
    scale: 0.8
  },
  footway: {
    d: "M10.74,11.72C11.21,12.95 11.16,14.23 9.75,14.74C6.85,15.81 6.2,13 6.16,12.86L10.74,11.72M5.71,10.91L10.03,9.84C9.84,8.79 10.13,7.74 10.13,6.5C10.13,4.82 8.8,1.53 6.68,2.06C4.26,2.66 3.91,5.35 4,6.65C4.12,7.95 5.64,10.73 5.71,10.91M17.85,19.85C17.82,20 17.16,22.8 14.26,21.74C12.86,21.22 12.8,19.94 13.27,18.71L17.85,19.85M20,13.65C20.1,12.35 19.76,9.65 17.33,9.05C15.22,8.5 13.89,11.81 13.89,13.5C13.89,14.73 14.17,15.78 14,16.83L18.3,17.9C18.38,17.72 19.89,14.94 20,13.65Z"
  },
  department_store: {
    d: "M12,18H6V14H12M21,14V12L20,7H4L3,12V14H4V20H14V14H18V20H20V14M20,4H4V6H20V4Z"
  },
  internet_cafe: {
    d: "M8.95 13.4H6.58A5.5 5.5 0 0 1 6.58 10.6H8.95A11.56 11.56 0 0 0 8.85 12A11.56 11.56 0 0 0 8.95 13.4M7.16 9.2H9.2A12.06 12.06 0 0 1 10.18 6.71A5.55 5.55 0 0 0 7.16 9.2M16.84 9.2A5.59 5.59 0 0 0 13.81 6.71A10.95 10.95 0 0 1 14.78 9.2M12 17.57A9.5 9.5 0 0 0 13.34 14.8H10.66A9.5 9.5 0 0 0 12 17.57M12 6.42A9.53 9.53 0 0 0 10.66 9.2H13.34A9.53 9.53 0 0 0 12 6.42M7.16 14.8A5.61 5.61 0 0 0 10.18 17.29A12.06 12.06 0 0 1 9.2 14.8M21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19A2 2 0 0 1 21 5M19 12A7 7 0 1 0 12 19A7 7 0 0 0 19 12M15.15 12A11.56 11.56 0 0 1 15.05 13.4H17.42A5.5 5.5 0 0 0 17.42 10.6H15.05A11.56 11.56 0 0 1 15.15 12M13.81 17.29A5.62 5.62 0 0 0 16.84 14.8H14.78A10.95 10.95 0 0 1 13.81 17.29M10.36 10.6A8.81 8.81 0 0 0 10.36 13.4H13.64A10.3 10.3 0 0 0 13.75 12A10.21 10.21 0 0 0 13.64 10.6Z"
  },
  park: {
    d: "M10,21V18H3L8,13H5L10,8H7L12,3L17,8H14L19,13H16L21,18H14V21H10Z"
  },
  hotel: {
    d: "M480 0C497.7 0 512 14.33 512 32C512 49.67 497.7 64 480 64V448C497.7 448 512 462.3 512 480C512 497.7 497.7 512 480 512H304V448H208V512H32C14.33 512 0 497.7 0 480C0 462.3 14.33 448 32 448V64C14.33 64 0 49.67 0 32C0 14.33 14.33 0 32 0H480zM112 96C103.2 96 96 103.2 96 112V144C96 152.8 103.2 160 112 160H144C152.8 160 160 152.8 160 144V112C160 103.2 152.8 96 144 96H112zM224 144C224 152.8 231.2 160 240 160H272C280.8 160 288 152.8 288 144V112C288 103.2 280.8 96 272 96H240C231.2 96 224 103.2 224 112V144zM368 96C359.2 96 352 103.2 352 112V144C352 152.8 359.2 160 368 160H400C408.8 160 416 152.8 416 144V112C416 103.2 408.8 96 400 96H368zM96 240C96 248.8 103.2 256 112 256H144C152.8 256 160 248.8 160 240V208C160 199.2 152.8 192 144 192H112C103.2 192 96 199.2 96 208V240zM240 192C231.2 192 224 199.2 224 208V240C224 248.8 231.2 256 240 256H272C280.8 256 288 248.8 288 240V208C288 199.2 280.8 192 272 192H240zM352 240C352 248.8 359.2 256 368 256H400C408.8 256 416 248.8 416 240V208C416 199.2 408.8 192 400 192H368C359.2 192 352 199.2 352 208V240zM256 288C211.2 288 173.5 318.7 162.1 360.2C159.7 373.1 170.7 384 184 384H328C341.3 384 352.3 373.1 349 360.2C338.5 318.7 300.8 288 256 288z"
  },
  local_government_office: {
    d: "M5,3V21H11V17.5H13V21H19V3H5M7,5H9V7H7V5M11,5H13V7H11V5M15,5H17V7H15V5M7,9H9V11H7V9M11,9H13V11H11V9M15,9H17V11H15V9M7,13H9V15H7V13M11,13H13V15H11V13M15,13H17V15H15V13M7,17H9V19H7V17M15,17H17V19H15V17Z"
  },
  marker: {
    d: "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"
  },
  city: {
    d: "M19,15H17V13H19M19,19H17V17H19M13,7H11V5H13M13,11H11V9H13M13,15H11V13H13M13,19H11V17H13M7,11H5V9H7M7,15H5V13H7M7,19H5V17H7M15,11V5L12,2L9,5V7H3V21H21V11H15Z"
  },
  residential: {
    d: "M17,16H15V22H12V17H8V22H5V16H3L10,10L17,16M6,2L10,6H9V9H7V6H5V9H3V6H2L6,2M18,3L23,8H22V12H19V9H17V12H15.34L14,10.87V8H13L18,3Z"
  },
  back: {
    d: "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
  }
};
N.neighborhood_landmark.d, N.primary.d;
const Hs = ["fill", "d"], R = /* @__PURE__ */ I({
  __name: "IconComponent",
  props: {
    name: {
      type: String,
      default: "close"
    },
    size: {
      type: Number,
      default: 15
    },
    color: String
  },
  setup(e) {
    return (s, r) => (C(), y("svg", {
      style: x(`width: ${e.size}px; height: ${e.size}px`),
      viewBox: "0 0 24 24"
    }, [
      m("path", {
        fill: e.color || "currentColor",
        d: i(N)[e.name].d
      }, null, 8, Hs)
    ], 4));
  }
}), bs = ["activated"], xs = /* @__PURE__ */ I({
  __name: "SearchSection",
  props: {
    searchBoxClass: [String, Array, Object],
    searchBoxStyle: Object,
    typesClass: Array,
    searchText: {
      type: String
    }
  },
  emits: [
    "update:search-text",
    "update:search-coords",
    "submit"
  ],
  setup(e, { emit: s }) {
    const r = e, a = E.width, o = O({
      get: () => r.searchText,
      set: (g) => {
        s("update:search-text", g), l(g);
      }
    }), n = (g = "") => {
      var A;
      const c = g || ((A = o.value) == null ? void 0 : A.trim());
      s("submit", c);
    };
    let d;
    const l = (g = o.value, c = 1e3) => {
      if (clearTimeout(d), g)
        t.state.searchLoading || t.toggleSearchLoading(!0);
      else {
        t.toggleSearchLoading(!1);
        return;
      }
      d = window.setTimeout(() => {
        n(g);
      }, c);
    };
    return (g, c) => (C(), y("div", {
      activated: i(t).state.drawerActivation,
      style: x(`width: ${i(a)}; ${e.searchBoxStyle}`),
      class: P(["map-search-box d-flex justify-between align-center mx-auto", e.searchBoxClass])
    }, [
      q(m("input", {
        type: "search",
        name: "search",
        placeholder: "\u062C\u0633\u062A\u062C\u0648",
        "onUpdate:modelValue": c[0] || (c[0] = (A) => Ye(o) ? o.value = A : null),
        onKeydown: c[1] || (c[1] = Qe((A) => l(i(o), 0), ["enter"])),
        onFocus: c[2] || (c[2] = (A) => i(t).toggleDrawerActivation(!0))
      }, null, 544), [
        [Fe, i(o)]
      ]),
      i(t).state.drawerShowDetails && !i(t).getters.touchPlatform ? (C(), y("button", {
        key: 0,
        onClick: c[3] || (c[3] = (A) => i(t).toggleDrawerShowDetails(!1)),
        class: "pointer"
      }, [
        B(R, {
          name: "back",
          size: 19
        })
      ])) : L("", !0),
      i(t).state.drawerActivation ? (C(), y("button", {
        key: 2,
        class: "pointer",
        onClick: c[5] || (c[5] = (A) => i(t).toggleDrawerActivation(!1))
      }, [
        B(R, {
          name: "close",
          size: 19
        })
      ])) : (C(), y("button", {
        key: 1,
        onClick: c[4] || (c[4] = (A) => i(t).toggleDrawerActivation(!0)),
        class: "pointer"
      }, [
        B(R, {
          name: "magnet",
          size: 19
        })
      ]))
    ], 14, bs));
  }
});
const Ss = /* @__PURE__ */ V(xs, [["__scopeId", "data-v-f4fc2726"]]), Es = (e) => (J("data-v-12fc3b32"), e = e(), Z(), e), Is = {
  key: 0,
  class: "list-item"
}, Ts = { class: "text-lg" }, Rs = { class: "text-caption" }, Ps = /* @__PURE__ */ Es(() => /* @__PURE__ */ m("hr", null, null, -1)), Vs = /* @__PURE__ */ I({
  __name: "ResultItem",
  props: {
    item: Object
  },
  setup(e) {
    return (s, r) => {
      var a, o;
      return C(), y("div", null, [
        e.item ? (C(), y("div", Is, [
          m("b", Ts, b(e.item.title), 1),
          m("div", Rs, b((a = e.item.region) == null ? void 0 : a.split("\u060C").map((n) => " " + n.trim()).reverse().join("\u060C")) + "\u060C " + b((o = e.item.address) == null ? void 0 : o.split("-").join("\u060C")) + " " + b(e.item.neighbourhood ? `(${e.item.neighbourhood})` : ""), 1)
        ])) : L("", !0),
        Ps
      ]);
    };
  }
});
const Gs = /* @__PURE__ */ V(Vs, [["__scopeId", "data-v-12fc3b32"]]), Ys = (e) => (J("data-v-da5d9414"), e = e(), Z(), e), Qs = ["dense"], Fs = /* @__PURE__ */ Ys(() => /* @__PURE__ */ m("div", { class: "loadings" }, null, -1)), zs = [
  Fs
], Os = /* @__PURE__ */ I({
  __name: "LoadingComp",
  props: {
    color: {
      type: String,
      default: "blue"
    },
    dense: Boolean
  },
  setup(e) {
    return (s, r) => (C(), y("div", {
      class: "container",
      dense: e.dense
    }, zs, 8, Qs));
  }
});
const Re = /* @__PURE__ */ V(Os, [["__scopeId", "data-v-da5d9414"]]);
function js({
  emits: e,
  resultHoverCallback: s,
  resultClickCallback: r,
  markerHoverCallback: a,
  zoomOnMarkerClick: o,
  zoomOnResultClick: n,
  popupOnMarkerHover: d,
  popupOnResultHover: l,
  reverseOnClick: g
}) {
  const c = () => {
    A(), v(), f(), S();
  }, A = () => {
    var h;
    (h = t.state.map) == null || h.on("click", (u) => {
      T(u);
    });
  }, v = () => {
    !t.state.map || (t.setZoom(t.state.map.getView().getZoom()), t.state.map.on("moveend", () => {
      if (!t.state.map)
        return;
      const h = t.state.map.getView().getZoom();
      t.state.zoom != h && (e("on-zoom", h), t.setZoom(h));
    }));
  }, f = () => {
    var h;
    t.actions.overlays.setupOverlays(), (h = t.state.map) == null || h.on("pointermove", function(u) {
      const w = t.actions.markers.getFeatureFromEvent(
        u
      );
      if (w) {
        const H = w.getProperties().mainMarker, k = w.get("features"), { featCoords: ue, featText: z } = Ct(w);
        if (!k || k.length === 1) {
          d && t.actions.overlays.changeOverlayStats({
            text: Array.isArray(z) ? z[0] : z,
            coords: ue,
            offset: H ? Y.high : Y.short
          });
          return;
        }
        a && a({
          changeOverlayStats: t.actions.overlays.changeOverlayStats,
          map: t.state.map,
          feature: w
        });
      }
      t.actions.overlays.changeOverlayStats();
    });
  }, S = () => {
    window.addEventListener(
      "resize",
      () => t.actions.dimensions.updateMapDimensions()
    ), window.addEventListener(
      "resize",
      t.actions.dimensions.updateBreakpoints
    );
  }, T = async (h) => {
    var z;
    let u, w, H;
    const k = t.actions.markers.getFeatureFromEvent(h);
    if (!(k == null ? void 0 : k.getProperties().mainMarker) && t.state.mainMarker && ((z = t.state.map) == null || z.removeLayer(t.state.mainMarker)), t.actions.overlays.changeOverlayStats(void 0, "persistant"), k)
      o && M(k);
    else if (t.getters.touchPlatform ? t.toggleMobileDrawerShowDetails(!0) : t.toggleDrawerActivation(!0), g) {
      t.toggleReverseLoading(!0);
      const ee = await t.actions.markers.reverseOnPoint(
        h.coordinate
      );
      u = ee.marker, w = ee.data, H = ee.stdPoint, t.toggleReverseLoading(!1);
    }
    e("on-click", {
      event: h,
      marker: u,
      stdPoint: w,
      data: H,
      map: t.state.map,
      selectedFeature: k
    });
  }, M = (h) => {
    t.actions.overlays.changeOverlayStats();
    const u = h.get("features");
    u && u.length > 1 ? t.actions.markers.zoomToCluster(h) : t.actions.markers.selectFeauture(h, { delay: 0 });
  };
  return {
    setupMapEvents: c,
    setupClickEvent: A,
    setupZoomEvent: v,
    setupMarkerHoverEvent: f,
    handleClickEvent: T,
    handleResultHover: (h) => {
      let u = t.actions.markers.getClusterByCoords(
        h.mapCoords
      ).cluster;
      if (u || (u = t.actions.markers.getMarkerByCoords(h.mapCoords)), !u)
        return;
      const w = ce(u);
      l && t.actions.overlays.changeOverlayStats({
        coords: w,
        text: h.title
      }), s && s({ map: t.state.map, item: h });
    },
    handleResultClick: (h) => {
      t.actions.overlays.changeOverlayStats(), t.toggleDrawerActivation(!1), n && t.actions.markers.selectFeauture(h), r && r({ map: t.state.map, item: h });
    },
    getClusterExtent: be
  };
}
function Js({
  props: e,
  containerRef: s
}) {
  const r = O(() => e.item ? "route_type" in e.item ? e.item.route_type && Object.keys(N).includes(e.item.route_type) ? e.item.route_type : e.item.place ? "local_government_office" : "primary" : e.item.type && Object.keys(N).includes(e.item.type) ? e.item.type : e.item.category === "place" ? "local_government_office" : "primary" : void 0), a = O(() => {
    if (!e.item)
      return;
    const n = "route_type" in e.item, d = n ? e.item.city || e.item.village ? e.item.state ? (e.item.city || e.item.village) + ", " + e.item.state : e.item.city || e.item.village : e.item.state : e.item.region;
    return {
      place: n ? e.item.place : e.item.title,
      address: n ? e.item.formatted_address : e.item.address,
      region: d,
      neighbourhood: n ? "\u0645\u062D\u0644\u0647 " + e.item.neighbourhood : e.item.neighbourhood,
      in_odd_even_zone: n ? e.item.in_odd_even_zone : null,
      in_traffic_zone: n ? e.item.in_traffic_zone : null
    };
  }), { width: o } = Zs({ containerRef: s });
  return {
    iconName: r,
    width: o,
    formattedItem: a
  };
}
function Zs({
  containerRef: e
}) {
  const s = p(0);
  D(
    () => {
      var a;
      return (a = e.value) == null ? void 0 : a.clientWidth;
    },
    (a) => {
      a && (s.value = a);
    }
  );
  const r = () => {
    var o;
    const a = (o = e.value) == null ? void 0 : o.clientWidth;
    a && (s.value = a);
  };
  return ze(() => {
    Oe(() => r());
  }), {
    width: s
  };
}
const Ns = ["src", "width"], Ks = { class: "px-2 text-lg" }, Xs = {
  key: 0,
  class: "d-flex align-center"
}, Us = /* @__PURE__ */ m("br", null, null, -1), Ws = {
  key: 1,
  class: "d-flex align-center"
}, qs = /* @__PURE__ */ m("br", null, null, -1), _s = {
  key: 2,
  class: "d-flex align-center"
}, $s = /* @__PURE__ */ m("br", null, null, -1), ea = {
  key: 3,
  class: "d-flex align-center"
}, ta = /* @__PURE__ */ m("br", null, null, -1), sa = {
  key: 4,
  class: "d-flex align-center"
}, aa = /* @__PURE__ */ m("br", null, null, -1), ra = {
  key: 5,
  class: "d-flex align-center"
}, Pe = /* @__PURE__ */ I({
  __name: "PointDetails",
  props: {
    item: Object,
    collapse: Boolean
  },
  setup(e) {
    const s = e, r = p(), { iconName: a, width: o, formattedItem: n } = Js({
      props: s,
      containerRef: r
    });
    return (d, l) => {
      var g, c, A, v, f, S, T;
      return C(), y("div", {
        ref_key: "pointDetailsContainer",
        ref: r
      }, [
        e.item && "type" in e.item && e.item.iconUrl && !e.item.iconUrl.endsWith("general.png") ? (C(), y("img", {
          key: 0,
          src: (g = e.item) == null ? void 0 : g.iconUrl.replace(i(j).search, i(j).colorSvg).replace(".png", ".svg"),
          width: i(o)
        }, null, 8, Ns)) : (C(), F(R, {
          key: 1,
          name: i(a),
          size: i(o),
          color: "steelblue"
        }, null, 8, ["name", "size"])),
        m("div", Ks, [
          (c = i(n)) != null && c.place ? (C(), y("div", Xs, [
            B(R, {
              name: "marker",
              size: 25,
              color: "steelblue",
              class: "px-1"
            }),
            X(" " + b(i(n).place), 1)
          ])) : L("", !0),
          Us,
          (A = i(n)) != null && A.address ? (C(), y("div", Ws, [
            B(R, {
              name: "secondary",
              size: 25,
              color: "steelblue",
              class: "px-1"
            }),
            X(" " + b(i(n).address), 1)
          ])) : L("", !0),
          qs,
          (v = i(n)) != null && v.neighbourhood ? (C(), y("div", _s, [
            B(R, {
              name: "neighborhood_landmark",
              size: 25,
              color: "steelblue",
              class: "px-1"
            }),
            X(" " + b(i(n).neighbourhood), 1)
          ])) : L("", !0),
          $s,
          (f = i(n)) != null && f.region ? (C(), y("div", ea, [
            B(R, {
              name: "city",
              size: 25,
              color: "steelblue",
              class: "px-1"
            }),
            X(" " + b(i(n).region), 1)
          ])) : L("", !0),
          ta,
          (S = i(n)) != null && S.in_odd_even_zone ? (C(), y("div", sa, b(i(n).in_odd_even_zone ? "\u062F\u0627\u062E\u0644" : "\u062E\u0627\u0631\u062C \u0627\u0632") + " \u0645\u062D\u062F\u0648\u062F\u0647 \u0637\u0631\u062D \u0632\u0648\u062C \u0648 \u0641\u0631\u062F ", 1)) : L("", !0),
          aa,
          (T = i(n)) != null && T.in_traffic_zone ? (C(), y("div", ra, b(i(n).in_traffic_zone ? "\u062F\u0627\u062E\u0644" : "\u062E\u0627\u0631\u062C \u0627\u0632") + " \u0645\u062D\u062F\u0648\u062F\u0647 \u0637\u0631\u062D \u062A\u0631\u0627\u0641\u06CC\u06A9 ", 1)) : L("", !0)
        ])
      ], 512);
    };
  }
}), oa = /* @__PURE__ */ I({
  __name: "ResultsSection",
  props: {
    resultBoxClass: Array,
    resultBoxStyle: Object,
    results: {
      type: Array,
      default: () => []
    }
  },
  emits: ["result-hover", "result-click"],
  setup(e, { emit: s }) {
    const r = e, a = p(), o = (l) => {
      t.getters.touchPlatform || n(l);
    }, n = (l) => {
      s("result-hover", l);
    }, d = (l) => {
      s("result-click", l);
    };
    return D(
      () => t.state.drawerActivation,
      (l) => {
        var c;
        if (!l)
          return;
        const g = t.getters.touchPlatform ? `height: ${t.state.mapDimensions.height}; width: ${t.getters.drawerWidth}; ${r.resultBoxStyle}` : `height: ${t.state.mapDimensions.height}; width: ${t.getters.drawerWidth}; ${r.resultBoxStyle}`;
        (c = a.value) == null || c.setAttribute("style", g);
      }
    ), (l, g) => (C(), y("div", {
      style: x(e.resultBoxStyle),
      class: P([e.resultBoxClass, "map-result-box mx-auto"]),
      ref_key: "resultSection",
      ref: a
    }, [
      (i(t).getters.touchPlatform ? i(t).state.searchLoading : i(t).getters.loading) ? (C(), F(Re, { key: 0 })) : L("", !0),
      !i(t).getters.touchPlatform && i(t).state.drawerShowDetails && i(t).state.selectedMarker ? (C(), F(Pe, {
        key: 1,
        item: i(t).state.selectedMarker
      }, null, 8, ["item"])) : (C(!0), y(ne, { key: 2 }, ie(e.results, (c) => (C(), F(Gs, {
        key: "" + c.location.x + c.location.y,
        item: c,
        onMouseenter: (A) => o(c),
        onClick: (A) => d(c)
      }, null, 8, ["item", "onMouseenter", "onClick"]))), 128))
    ], 6));
  }
});
const na = /* @__PURE__ */ V(oa, [["__scopeId", "data-v-8d314535"]]), ia = ["activated"], la = /* @__PURE__ */ I({
  __name: "DrawerComp",
  props: {
    results: Array,
    searchCoords: {
      type: Object,
      default: () => ke()
    },
    loading: Boolean
  },
  emits: ["search", "result-click", "result-hover"],
  setup(e, { emit: s }) {
    const r = e, a = p(""), o = (A) => {
      const v = (A == null ? void 0 : A.coords) || [
        r.searchCoords.longitude,
        r.searchCoords.latitude
      ], f = {
        term: A.term || "",
        coords: v
      };
      s("search", f);
    }, n = (A) => {
      s("result-click", A);
    }, d = (A) => {
      s("result-hover", A);
    }, l = p(), g = p(), c = (A) => {
      if (!(!g.value || !l.value))
        if (A)
          l.value.style.setProperty("max-height", "100%"), l.value.style.setProperty("max-width", "100%");
        else {
          const v = g.value.$el.clientHeight, f = g.value.$el.clientWidth;
          l.value.style.setProperty("max-height", `${v}px`), l.value.style.setProperty("max-width", `${f}px`);
        }
    };
    return D(
      () => t.state.drawerActivation,
      (A) => {
        c(A);
      }
    ), we(() => {
      c(t.state.drawerActivation);
    }), (A, v) => (C(), y("div", {
      class: P([{
        "map-drawer--mobile": i(t).getters.touchPlatform,
        "map-drawer--desktop": !i(t).getters.touchPlatform,
        "map-drawer--desktop---activated": !i(t).getters.touchPlatform && i(t).state.drawerActivation,
        "box-shadow": !i(t).state.drawerActivation
      }, "d-flex flex-column"]),
      activated: i(t).state.drawerActivation,
      ref_key: "mapDrawer",
      ref: l
    }, [
      B(Ss, {
        ref_key: "searchSection",
        ref: g,
        searchText: a.value,
        "onUpdate:searchText": v[0] || (v[0] = (f) => a.value = f),
        onSubmit: v[1] || (v[1] = (f) => o({ term: f }))
      }, null, 8, ["searchText"]),
      B(na, {
        results: e.results,
        onResultClick: n,
        onResultHover: d
      }, null, 8, ["results"])
    ], 10, ia));
  }
});
const ca = /* @__PURE__ */ V(la, [["__scopeId", "data-v-2f4cd975"]]), ua = (e) => (J("data-v-e9a57230"), e = e(), Z(), e), Aa = /* @__PURE__ */ ua(() => /* @__PURE__ */ m("span", { class: "d-block" }, null, -1)), ga = [
  Aa
], da = /* @__PURE__ */ I({
  __name: "MobileDetailsSection",
  setup(e) {
    const s = p(), r = p(), a = p(!1), o = p(E.bottomSheetNormalHeight), n = p(
      E.bottomSheetBorderRadius
    ), d = p("0"), l = (M) => {
      if (M.preventDefault(), !s.value || !t.state.mapContainer)
        return;
      const G = t.state.mapContainer.getBoundingClientRect().bottom - M.touches[0].clientY;
      o.value = G + "px";
    }, g = () => {
      if (!r.value)
        return;
      v();
      const M = o.value, Q = Number(M.slice(0, M.length - 2)), G = Number(
        t.state.mapDimensions.height.slice(
          0,
          t.state.mapDimensions.height.length - 2
        )
      );
      a.value ? Q < G * 0.8 ? c() : o.value = t.state.mapDimensions.height : Q > G / 4 ? (o.value = `calc(${t.state.mapDimensions.height})`, n.value = "0", a.value = !0) : o.value = E.bottomSheetNormalHeight;
    }, c = () => {
      a.value = !1, v(), n.value = E.bottomSheetBorderRadius, o.value = E.bottomSheetNormalHeight;
    };
    let A;
    const v = (M = 0.5) => {
      clearTimeout(A), d.value = M + "s", A = setTimeout(() => {
        d.value = "none";
      }, M * 1e3);
    }, f = () => {
      t.actions.markers.deselectAll();
    }, S = () => {
      o.value = E.bottomSheetloadingHeight;
    }, T = () => {
      o.value = E.bottomSheetNormalHeight;
    };
    return D(
      () => t.state.reverseLoading,
      (M) => {
        v(0.2), M ? S() : a.value || T();
      }
    ), D(
      () => t.state.selectedMarker,
      (M) => {
        !M || (v(0.4), S(), setTimeout(() => {
          T();
        }, 200));
      }
    ), (M, Q) => (C(), y("div", {
      ref_key: "mobileDetailsSectionContainer",
      ref: s,
      class: P(["mobile-details-section pos-absolute", { fullScreen: a.value }])
    }, [
      m("button", {
        class: "close-modal-button pos-absolute d-flex justify-center align-center",
        onClick: f
      }, [
        B(R, { size: 25 })
      ]),
      m("div", {
        ref_key: "detailsContainer",
        ref: r,
        class: P(a.value ? "o-auto" : "o-hidden"),
        style: x(`
        max-height: ${o.value};
        border-radius: ${n.value};
        transition: ${d.value};`)
      }, [
        q(B(Re, { class: "curved-loading" }, null, 512), [
          [le, i(t).state.reverseLoading]
        ]),
        B(R, {
          name: "close",
          size: 40,
          style: x(`visibility: ${a.value ? "visible" : "hidden"};`),
          class: "close-icon pos-absolute",
          onClick: c
        }, null, 8, ["style"]),
        m("span", {
          class: "drag-button d-block pos-absolute",
          style: x(`padding-top: calc(${i(E).bottomSheetloadingHeight}/2)`),
          onTouchmove: l,
          onTouchend: g
        }, ga, 36),
        m("div", {
          style: x(`
      height: ${i(t).state.mapDimensions.height}px;
      margin-top: ${i(E).bottomSheetloadingHeight};`)
        }, [
          B(Pe, {
            item: i(t).state.selectedMarker
          }, null, 8, ["item"])
        ], 4)
      ], 6)
    ], 2));
  }
});
const ma = /* @__PURE__ */ V(da, [["__scopeId", "data-v-e9a57230"]]), Ce = (e) => ({
  "Api-Key": e
}), ye = (e) => ({
  REVERSE: async (s, r) => {
    const a = `?lat=${r}&lng=${s}`;
    return await (await fetch(se.reverse + a, {
      headers: Ce(e)
    })).json();
  },
  SEARCH: async (s, [r, a]) => {
    const o = `?term=${s}&lat=${a}&lng=${r}`;
    return await (await fetch(se.search + o, {
      headers: Ce(e)
    })).json();
  }
}), Ca = (e) => (J("data-v-45b82167"), e = e(), Z(), e), ya = /* @__PURE__ */ Ca(() => /* @__PURE__ */ m("img", { src: je }, null, -1)), ha = [
  ya
], wa = {
  name: "NeshanMap"
}, pa = /* @__PURE__ */ I({
  ...wa,
  props: {
    mapKey: {
      type: String,
      required: !0
    },
    serviceKey: {
      type: String,
      default: ""
    },
    center: {
      type: Object,
      default: null
    },
    zoom: {
      type: Number,
      default: W.initialZoom
    },
    poi: Boolean,
    traffic: Boolean,
    defaultType: {
      type: String,
      default: "neshan"
    },
    mapTypes: {
      type: Array,
      default: ge.map((e) => e.title)
    },
    desktopSettingsClass: [String, Array, Object],
    mobileSettingsClass: [String, Array, Object],
    desktopSettingsStyle: Object,
    mobileSettingsStyle: Object,
    temporaryPopupContainerClass: [String, Array, Object],
    persistantPopupContainerClass: [String, Array, Object],
    temporaryPopupContainerStyle: Object,
    persistantPopupContainerStyle: Object,
    hideSettings: Boolean,
    typesClass: Array,
    hideSearchBox: Boolean,
    hideSearchContainer: Boolean,
    hideResultBox: Boolean,
    resultHoverCallback: Function,
    resultClickCallback: Function,
    markersIconCallback: Function,
    markerHoverCallback: Function,
    popupOnMarkerHover: {
      type: Boolean,
      default: !0
    },
    popupOnResultHover: {
      type: Boolean,
      default: !0
    },
    zoomOnMarkerClick: {
      type: Boolean,
      default: !0
    },
    zoomOnResultClick: {
      type: Boolean,
      default: !0
    },
    cluster: {
      type: Boolean,
      default: !0
    },
    clusterThreshold: {
      type: Number,
      default: 18
    },
    reverseOnClick: {
      type: Boolean,
      default: !0
    },
    scale: {
      type: Number,
      default: 1
    },
    viewType: String
  },
  emits: ["on-zoom", "on-click"],
  setup(e, { expose: s, emit: r }) {
    const a = e;
    t.setApi(ye(a.serviceKey));
    const o = (u) => {
      t.setApi(ye(u));
    };
    D(
      () => a.serviceKey,
      (u) => {
        o(u);
      }
    );
    const n = p("1rem");
    D(
      () => a.scale,
      (u) => {
        n.value = u + "rem";
      }
    ), t.setViewType(a.viewType), D(
      () => a.viewType,
      (u) => {
        t.setViewType(u);
      }
    );
    const d = p(!1), l = oe(
      ge.filter((u) => a.mapTypes.includes(u.title))
    );
    t.togglePoiLayer(a.poi), t.toggleTrafficLayer(a.traffic), D(
      () => a.traffic,
      (u) => {
        t.toggleTrafficLayer(u);
      }
    ), D(
      () => a.poi,
      (u) => {
        t.togglePoiLayer(u);
      }
    ), D(
      () => t.state.trafficLayer,
      (u) => {
        t.actions.map.toggleTraffic(u);
      }
    ), D(
      () => t.state.poiLayer,
      (u) => {
        t.actions.map.togglePoi(u);
      }
    );
    const g = (u, w = "my-openlayer") => {
      const H = document.getElementById(w);
      if (H)
        return H;
      const k = document.createElement("script");
      return k.src = u, k.id = w, document.getElementsByTagName("head")[0].appendChild(k), k;
    }, c = p(
      Me(a.center)
    ), A = p(), v = async () => {
      if (!A.value)
        return;
      const u = c.value || await st(), w = new ol.Map({
        target: A.value,
        key: a.mapKey,
        poi: t.state.poiLayer,
        traffic: t.state.trafficLayer,
        view: new ol.View({
          center: ol.proj.fromLonLat(u),
          zoom: a.zoom,
          smoothExtentConstraint: !0
        }),
        controls: []
      });
      t.setMap(w), t.setMapType(a.defaultType), t.actions.map.shakeMap(300);
    }, f = p(), S = p(), { setupMapEvents: T, handleResultHover: M, handleResultClick: Q } = js({
      emits: r,
      resultHoverCallback: a.resultHoverCallback,
      resultClickCallback: a.resultClickCallback,
      markerHoverCallback: a.markerHoverCallback,
      zoomOnMarkerClick: a.zoomOnMarkerClick,
      zoomOnResultClick: a.zoomOnResultClick,
      popupOnMarkerHover: a.popupOnMarkerHover,
      popupOnResultHover: a.popupOnResultHover,
      reverseOnClick: a.reverseOnClick
    });
    D(
      () => t.state.zoom,
      (u, w) => {
        u >= a.clusterThreshold && w < a.clusterThreshold ? t.actions.markers.toggleClusterSource(t.state.searchMarkers, !0) : u < a.clusterThreshold && w >= a.clusterThreshold && t.actions.markers.toggleClusterSource(
          t.state.searchMarkers,
          !1
        );
      }
    );
    const G = ({ term: u = "", coords: w }) => {
      const H = w || t.state.mainMarkerCoords || c.value;
      if (!H || !t.state.api)
        return;
      const k = {
        cluster: a.cluster,
        clusterThreshold: a.clusterThreshold,
        markersIconCallback: a.markersIconCallback
      };
      t.actions.markers.search({ term: u, coords: H }, k);
    }, h = (u) => {
      const w = u.composedPath()[1];
      w.classList.add("floaten"), setTimeout(() => w.classList.remove("floaten"), 350), d.value = !0;
    };
    return s({
      search: G
    }), t.actions.dimensions.updateBreakpoints(), we(() => {
      A.value && t.setMapContainer(A.value), f.value && t.setPopupContainer(f.value), S.value && t.setPersistantContainer(S.value);
      const u = g(se.map);
      u.onload = () => {
        v(), T(), t.actions.dimensions.updateMapDimensions();
      };
    }), (u, w) => (C(), y("div", {
      ref_key: "mapContainer",
      ref: A,
      class: P(["map pos-relative o-hidden", {
        touch: i(t).getters.touchPlatform
      }]),
      style: x(`font-size: ${n.value}`)
    }, [
      m("div", {
        ref_key: "popupContainer",
        ref: f,
        class: P(["map-popup-container", e.temporaryPopupContainerClass]),
        style: x(e.temporaryPopupContainerStyle)
      }, null, 6),
      m("div", {
        ref_key: "persistantContainer",
        ref: S,
        class: P(["map-popup-container", e.persistantPopupContainerClass]),
        style: x(e.persistantPopupContainerStyle)
      }, null, 6),
      e.hideSettings ? L("", !0) : Ae(u.$slots, "settings", {
        key: 0,
        tiles: l,
        mapType: i(t).state.mapType,
        poi: i(t).state.poiLayer,
        traffic: i(t).state.trafficLayer
      }, () => [
        i(t).getters.touchPlatform ? (C(), F(Ls, {
          key: 1,
          modelValue: d.value,
          "onUpdate:modelValue": w[0] || (w[0] = (H) => d.value = H),
          tiles: l,
          settingsClass: e.mobileSettingsClass,
          settingsStyle: e.mobileSettingsStyle
        }, null, 8, ["modelValue", "tiles", "settingsClass", "settingsStyle"])) : (C(), F(us, {
          key: 0,
          tiles: l,
          settingsClass: e.desktopSettingsClass,
          settingsStyle: e.desktopSettingsStyle
        }, null, 8, ["tiles", "settingsClass", "settingsStyle"])),
        i(t).getters.touchPlatform ? (C(), y("button", {
          key: 2,
          class: "mobile-layers-button pos-absolute justify-center align-center d-flex",
          onClick: h
        }, ha)) : L("", !0)
      ], !0),
      e.hideSearchContainer ? L("", !0) : Ae(u.$slots, "search-container", { key: 1 }, () => [
        B(ca, {
          results: i(t).state.searchResults,
          onSearch: G,
          onResultClick: i(Q),
          onResultHover: i(M)
        }, null, 8, ["results", "onResultClick", "onResultHover"]),
        i(t).getters.touchPlatform ? q((C(), F(ma, { key: 0 }, null, 512)), [
          [le, i(t).state.mobileDrawerShowDetails]
        ]) : L("", !0)
      ], !0)
    ], 6));
  }
});
const fa = /* @__PURE__ */ V(pa, [["__scopeId", "data-v-45b82167"]]);
export {
  fa as default
};
