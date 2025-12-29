(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/ptojects/portfolio/kamal-portfolio/src/components/providers/SmoothScrollProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmoothScrollProvider,
    "useSmoothScroll",
    ()=>useSmoothScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f40$studio$2d$freight$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/@studio-freight/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const TOTAL_SECTIONS = 6;
const SmoothScrollContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    lenis: null,
    scrollProgress: 0,
    currentSection: 0,
    getScrollProgress: ()=>0
});
const useSmoothScroll = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SmoothScrollContext);
};
_s(useSmoothScroll, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function SmoothScrollProvider({ children }) {
    _s1();
    const lenisRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // High-frequency scroll value stored in ref (no re-renders)
    const scrollProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Coarse section index for components that need React reactivity (0-5 sections)
    const [currentSection, setCurrentSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const rafCallbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Stable getter for high-frequency access (e.g., useFrame in R3F)
    const getScrollProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SmoothScrollProvider.useCallback[getScrollProgress]": ()=>scrollProgressRef.current
    }["SmoothScrollProvider.useCallback[getScrollProgress]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmoothScrollProvider.useEffect": ()=>{
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f40$studio$2d$freight$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                duration: 1.8,
                easing: {
                    "SmoothScrollProvider.useEffect": (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t))
                }["SmoothScrollProvider.useEffect"],
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smoothWheel: true,
                wheelMultiplier: 1.2,
                touchMultiplier: 2,
                infinite: false
            });
            lenisRef.current = lenis;
            // Sync Lenis with GSAP ScrollTrigger
            lenis.on('scroll', {
                "SmoothScrollProvider.useEffect": (e)=>{
                    // Update ref (no re-render)
                    scrollProgressRef.current = e.progress;
                    // Only update React state when section boundary changes (coarse-grained)
                    const newSection = Math.min(TOTAL_SECTIONS - 1, Math.floor(e.progress * TOTAL_SECTIONS));
                    setCurrentSection({
                        "SmoothScrollProvider.useEffect": (prev)=>prev !== newSection ? newSection : prev
                    }["SmoothScrollProvider.useEffect"]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].update();
                }
            }["SmoothScrollProvider.useEffect"]);
            // Store the callback so we can remove it properly
            rafCallbackRef.current = ({
                "SmoothScrollProvider.useEffect": (time)=>{
                    lenis.raf(time * 1000);
                }
            })["SmoothScrollProvider.useEffect"];
            // Add Lenis to GSAP ticker for smooth synchronization
            __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.add(rafCallbackRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.lagSmoothing(0);
            // Set up ScrollTrigger to use Lenis
            __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].scrollerProxy(document.body, {
                scrollTop (value) {
                    if (arguments.length && value !== undefined) {
                        lenis.scrollTo(value, {
                            immediate: true
                        });
                    }
                    return lenis.scroll;
                },
                getBoundingClientRect () {
                    return {
                        top: 0,
                        left: 0,
                        width: window.innerWidth,
                        height: window.innerHeight
                    };
                },
                pinType: 'transform'
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].defaults({
                scroller: document.body
            });
            // Refresh ScrollTrigger after setup
            __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
            return ({
                "SmoothScrollProvider.useEffect": ()=>{
                    lenis.destroy();
                    if (rafCallbackRef.current) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.remove(rafCallbackRef.current);
                    }
                // Note: We do NOT kill all ScrollTriggers here - that's each component's responsibility
                }
            })["SmoothScrollProvider.useEffect"];
        }
    }["SmoothScrollProvider.useEffect"], []);
    // Derive scrollProgress from section for backwards compatibility
    // Components needing precise values should use getScrollProgress()
    const scrollProgress = currentSection / Math.max(1, TOTAL_SECTIONS - 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SmoothScrollContext.Provider, {
        value: {
            lenis: lenisRef.current,
            scrollProgress,
            currentSection,
            getScrollProgress
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/providers/SmoothScrollProvider.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
_s1(SmoothScrollProvider, "EtXgvPhGtH6fZCd+Zmr8YozORLQ=");
_c = SmoothScrollProvider;
var _c;
__turbopack_context__.k.register(_c, "SmoothScrollProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ptojects/portfolio/kamal-portfolio/src/components/ui/CustomCursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function CustomCursor() {
    _s();
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cursorDotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cursorTextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Check if custom cursor should be enabled
    const [isEnabled, setIsEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            // Check for fine pointer (desktop) and user preference for motion
            const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            setIsEnabled(hasFinePointer && !prefersReducedMotion);
        }
    }["CustomCursor.useEffect"], []);
    // UI state (non-position)
    const [hoverText, setHoverText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [hoverColor, setHoverColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSkillHover, setIsSkillHover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Position refs to avoid re-renders
    const mouse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: -9999,
        y: -9999,
        initialized: false
    });
    const outerPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: -9999,
        y: -9999
    });
    const dotPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: -9999,
        y: -9999
    });
    // Quick setters (created on mount)
    const setOuterX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const setOuterY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const setDotX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const setDotY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // NOTE: keep hooks stable — guard inside effects rather than early returning
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            if (!isEnabled) return;
            const cursor = cursorRef.current;
            const dot = cursorDotRef.current;
            if (!cursor || !dot) return;
            // Initially hide to prevent top-left jump
            cursor.style.display = 'none';
            dot.style.display = 'none';
            // Create quickSetters for performant updates
            setOuterX.current = __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].quickSetter(cursor, 'x', 'px');
            setOuterY.current = __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].quickSetter(cursor, 'y', 'px');
            setDotX.current = __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].quickSetter(dot, 'x', 'px');
            setDotY.current = __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].quickSetter(dot, 'y', 'px');
            const onFirstMove = {
                "CustomCursor.useEffect.onFirstMove": (e)=>{
                    // reveal cursor at first reliable position
                    mouse.current.x = e.clientX;
                    mouse.current.y = e.clientY;
                    outerPos.current.x = e.clientX;
                    outerPos.current.y = e.clientY;
                    dotPos.current.x = e.clientX;
                    dotPos.current.y = e.clientY;
                    cursor.style.display = 'block';
                    dot.style.display = 'block';
                    mouse.current.initialized = true;
                    window.removeEventListener('mousemove', onFirstMove);
                }
            }["CustomCursor.useEffect.onFirstMove"];
            window.addEventListener('mousemove', onFirstMove, {
                passive: true
            });
            return ({
                "CustomCursor.useEffect": ()=>{
                    window.removeEventListener('mousemove', onFirstMove);
                }
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], [
        isEnabled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            if (!isEnabled) return;
            const tick = {
                "CustomCursor.useEffect.tick": ()=>{
                    // If mouse not initialized yet, skip
                    if (!mouse.current.initialized) return;
                    // lerp outer and dot positions
                    outerPos.current.x += (mouse.current.x - outerPos.current.x) * 0.14;
                    outerPos.current.y += (mouse.current.y - outerPos.current.y) * 0.14;
                    dotPos.current.x += (mouse.current.x - dotPos.current.x) * 0.33;
                    dotPos.current.y += (mouse.current.y - dotPos.current.y) * 0.33;
                    // apply via quickSetters (very fast)
                    setOuterX.current?.(outerPos.current.x - 20);
                    setOuterY.current?.(outerPos.current.y - 20);
                    setDotX.current?.(dotPos.current.x - 4);
                    setDotY.current?.(dotPos.current.y - 4);
                }
            }["CustomCursor.useEffect.tick"];
            __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.add(tick);
            return ({
                "CustomCursor.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.remove(tick);
                }
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], [
        isEnabled
    ]);
    // Mouse move subscription updates the mouse ref only
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            if (!isEnabled) return;
            const onMove = {
                "CustomCursor.useEffect.onMove": (e)=>{
                    mouse.current.x = e.clientX;
                    mouse.current.y = e.clientY;
                }
            }["CustomCursor.useEffect.onMove"];
            const onDown = {
                "CustomCursor.useEffect.onDown": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(cursorRef.current, {
                        scale: 0.78,
                        duration: 0.12,
                        overwrite: 'auto',
                        ease: 'power2.out'
                    });
                }
            }["CustomCursor.useEffect.onDown"];
            const onUp = {
                "CustomCursor.useEffect.onUp": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(cursorRef.current, {
                        scale: isSkillHover || hoverText ? 2 : 1,
                        duration: 0.12,
                        overwrite: 'auto',
                        ease: 'power2.out'
                    });
                }
            }["CustomCursor.useEffect.onUp"];
            window.addEventListener('mousemove', onMove, {
                passive: true
            });
            window.addEventListener('mousedown', onDown);
            window.addEventListener('mouseup', onUp);
            return ({
                "CustomCursor.useEffect": ()=>{
                    window.removeEventListener('mousemove', onMove);
                    window.removeEventListener('mousedown', onDown);
                    window.removeEventListener('mouseup', onUp);
                }
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], [
        isEnabled,
        isSkillHover,
        hoverText
    ]);
    // Interactive element hover handlers (scale cursor without changing position refs)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            if (!isEnabled) return;
            const handleMouseEnter = {
                "CustomCursor.useEffect.handleMouseEnter": (e)=>{
                    const target = e.target;
                    const text = target.dataset && (target.dataset.cursorText || target.dataset.cursor) || '';
                    setHoverText(text);
                    __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(cursorRef.current, {
                        scale: 1.4,
                        duration: 0.18,
                        overwrite: 'auto',
                        ease: 'power2.out'
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(cursorDotRef.current, {
                        scale: 0.4,
                        duration: 0.18,
                        overwrite: 'auto',
                        ease: 'power2.out'
                    });
                }
            }["CustomCursor.useEffect.handleMouseEnter"];
            const handleMouseLeave = {
                "CustomCursor.useEffect.handleMouseLeave": ()=>{
                    setHoverText('');
                    __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(cursorRef.current, {
                        scale: 1,
                        duration: 0.18,
                        overwrite: 'auto',
                        ease: 'power2.out'
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(cursorDotRef.current, {
                        scale: 1,
                        duration: 0.18,
                        overwrite: 'auto',
                        ease: 'power2.out'
                    });
                }
            }["CustomCursor.useEffect.handleMouseLeave"];
            const interactiveElements = document.querySelectorAll('a, button, [data-cursor], [data-cursor-text], .magnetic-btn, input, textarea');
            interactiveElements.forEach({
                "CustomCursor.useEffect": (el)=>{
                    el.addEventListener('mouseenter', handleMouseEnter);
                    el.addEventListener('mouseleave', handleMouseLeave);
                }
            }["CustomCursor.useEffect"]);
            const observer = new MutationObserver({
                "CustomCursor.useEffect": ()=>{
                    interactiveElements.forEach({
                        "CustomCursor.useEffect": (el)=>{
                            el.removeEventListener('mouseenter', handleMouseEnter);
                            el.removeEventListener('mouseleave', handleMouseLeave);
                        }
                    }["CustomCursor.useEffect"]);
                    const next = document.querySelectorAll('a, button, [data-cursor], [data-cursor-text], .magnetic-btn, input, textarea');
                    next.forEach({
                        "CustomCursor.useEffect": (el)=>{
                            el.addEventListener('mouseenter', handleMouseEnter);
                            el.addEventListener('mouseleave', handleMouseLeave);
                        }
                    }["CustomCursor.useEffect"]);
                }
            }["CustomCursor.useEffect"]);
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
            return ({
                "CustomCursor.useEffect": ()=>{
                    interactiveElements.forEach({
                        "CustomCursor.useEffect": (el)=>{
                            el.removeEventListener('mouseenter', handleMouseEnter);
                            el.removeEventListener('mouseleave', handleMouseLeave);
                        }
                    }["CustomCursor.useEffect"]);
                    observer.disconnect();
                }
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], [
        isEnabled
    ]);
    // Skill hover event listener (for category-aware cursor)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            if (!isEnabled) return;
            const onSkill = {
                "CustomCursor.useEffect.onSkill": (e)=>{
                    const ev = e;
                    const { category, color } = ev.detail || {
                        category: '',
                        color: ''
                    };
                    setIsSkillHover(!!category);
                    setHoverText(category || '');
                    setHoverColor(color || '');
                    if (category) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(cursorRef.current, {
                            scale: 1.6,
                            duration: 0.22,
                            overwrite: 'auto',
                            ease: 'power2.out'
                        });
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(cursorRef.current, {
                            scale: 1,
                            duration: 0.22,
                            overwrite: 'auto',
                            ease: 'power2.out'
                        });
                    }
                }
            }["CustomCursor.useEffect.onSkill"];
            window.addEventListener('skillHover', onSkill);
            return ({
                "CustomCursor.useEffect": ()=>window.removeEventListener('skillHover', onSkill)
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], [
        isEnabled
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: cursorRef,
                style: {
                    willChange: 'transform',
                    display: 'none'
                },
                className: "jsx-ee398d367c4f2654" + " " + "fixed top-0 left-0 w-10 h-10 pointer-events-none z-[10000] mix-blend-difference",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        borderColor: isSkillHover && hoverColor ? hoverColor : undefined,
                        boxShadow: isSkillHover && hoverColor ? `0 0 20px ${hoverColor}, inset 0 0 20px ${hoverColor}40` : undefined
                    },
                    className: "jsx-ee398d367c4f2654" + " " + `w-full h-full rounded-full border-2 transition-colors duration-300 flex items-center justify-center`,
                    children: (hoverText || isSkillHover) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        ref: cursorTextRef,
                        style: {
                            color: isSkillHover ? hoverColor : 'white',
                            textShadow: isSkillHover ? `0 0 10px ${hoverColor}` : undefined
                        },
                        className: "jsx-ee398d367c4f2654" + " " + "text-[7px] font-bold uppercase tracking-wider whitespace-nowrap",
                        children: hoverText
                    }, void 0, false, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/ui/CustomCursor.tsx",
                        lineNumber: 220,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/ui/CustomCursor.tsx",
                    lineNumber: 212,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/ui/CustomCursor.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: cursorDotRef,
                style: {
                    willChange: 'transform',
                    display: 'none'
                },
                className: "jsx-ee398d367c4f2654" + " " + "fixed top-0 left-0 w-2 h-2 pointer-events-none z-[10001] mix-blend-difference",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        backgroundColor: isSkillHover && hoverColor ? hoverColor : undefined,
                        boxShadow: isSkillHover && hoverColor ? `0 0 10px ${hoverColor}` : undefined
                    },
                    className: "jsx-ee398d367c4f2654" + " " + "w-full h-full rounded-full bg-white"
                }, void 0, false, {
                    fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/ui/CustomCursor.tsx",
                    lineNumber: 236,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/ui/CustomCursor.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "ee398d367c4f2654",
                children: "@media (pointer:fine) and (prefers-reduced-motion:no-preference){*{cursor:none!important}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
_s(CustomCursor, "WipJgUwyMIVEeL3kVbmeVCxI/1Y=");
_c = CustomCursor;
var _c;
__turbopack_context__.k.register(_c, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=ptojects_portfolio_kamal-portfolio_src_components_b0346389._.js.map