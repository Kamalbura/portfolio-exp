(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/ptojects/portfolio/kamal-portfolio/src/components/layout/NavbarSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$src$2f$components$2f$providers$2f$SmoothScrollProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/src/components/providers/SmoothScrollProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const navItems = [
    {
        name: 'Home',
        href: '#home'
    },
    {
        name: 'About',
        href: '#about'
    },
    {
        name: 'Skills',
        href: '#skills'
    },
    {
        name: 'Projects',
        href: '#projects'
    },
    {
        name: 'Experience',
        href: '#experience'
    },
    {
        name: 'Contact',
        href: '#contact'
    }
];
function Navbar() {
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('home');
    const { lenis } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$src$2f$components$2f$providers$2f$SmoothScrollProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSmoothScroll"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 50);
                    // Determine active section
                    const sections = navItems.map({
                        "Navbar.useEffect.handleScroll.sections": (item)=>document.querySelector(item.href)
                    }["Navbar.useEffect.handleScroll.sections"]);
                    const scrollPosition = window.scrollY + window.innerHeight / 3;
                    sections.forEach({
                        "Navbar.useEffect.handleScroll": (section, index)=>{
                            if (section) {
                                const sectionTop = section.offsetTop;
                                const sectionHeight = section.offsetHeight;
                                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                                    setActiveSection(navItems[index].name.toLowerCase());
                                }
                            }
                        }
                    }["Navbar.useEffect.handleScroll"]);
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const handleNavClick = (e, href)=>{
        e.preventDefault();
        const target = document.querySelector(href);
        if (target && lenis) {
            lenis.scrollTo(target, {
                offset: 0,
                duration: 1.5
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'py-2 glass-strong' : 'py-3 bg-transparent'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "container flex items-center justify-between gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#home",
                    onClick: (e)=>handleNavClick(e, '#home'),
                    className: "relative group ml-1 sm:ml-2 md:ml-0",
                    "data-cursor": "Home",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-2xl font-bold text-gradient",
                            children: "KB"
                        }, void 0, false, {
                            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/layout/NavbarSection.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00d4ff] to-[#00ffc8] transition-all duration-300 group-hover:w-full"
                        }, void 0, false, {
                            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/layout/NavbarSection.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/layout/NavbarSection.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:flex items-center gap-6",
                    children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: item.href,
                            onClick: (e)=>handleNavClick(e, item.href),
                            className: `relative px-6 py-2 text-sm transition-colors duration-200 ${activeSection === item.name.toLowerCase() ? 'text-[#00d4ff]' : 'text-[#a1a1aa] hover:text-[#f4f4f5]'}`,
                            "data-cursor": item.name,
                            children: [
                                item.name,
                                activeSection === item.name.toLowerCase() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00d4ff]"
                                }, void 0, false, {
                                    fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/layout/NavbarSection.tsx",
                                    lineNumber: 95,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, item.name, true, {
                            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/layout/NavbarSection.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/layout/NavbarSection.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#contact",
                    onClick: (e)=>handleNavClick(e, '#contact'),
                    className: "magnetic-btn text-sm py-2 px-6",
                    "data-cursor": "Contact",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Let's Talk"
                    }, void 0, false, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/layout/NavbarSection.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/layout/NavbarSection.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/layout/NavbarSection.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/layout/NavbarSection.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(Navbar, "Wirm3tTLAzMLyHG67XFQ0BwcRc8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$src$2f$components$2f$providers$2f$SmoothScrollProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSmoothScroll"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ptojects/portfolio/kamal-portfolio/src/components/ui/TextAnimations.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CharReveal",
    ()=>CharReveal,
    "FadeIn",
    ()=>FadeIn,
    "LineReveal",
    ()=>LineReveal,
    "ScaleIn",
    ()=>ScaleIn,
    "TextReveal",
    ()=>TextReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$split$2d$type$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/split-type/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function TextReveal({ children, className = '', delay = 0, stagger = 0.03, trigger }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextReveal.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            const split = new __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$split$2d$type$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](container, {
                types: 'lines,words',
                lineClass: 'split-parent',
                wordClass: 'split-child'
            });
            // Wrap each line's content
            split.lines?.forEach({
                "TextReveal.useEffect": (line)=>{
                    const wrapper = document.createElement('div');
                    wrapper.className = 'split-parent overflow-hidden';
                    line.parentNode?.insertBefore(wrapper, line);
                    wrapper.appendChild(line);
                }
            }["TextReveal.useEffect"]);
            const words = container.querySelectorAll('.split-child');
            __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(words, {
                y: '110%',
                opacity: 0
            });
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                scrollTrigger: trigger ? {
                    trigger: trigger,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                } : {
                    trigger: container,
                    start: 'top 85%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            });
            tl.to(words, {
                y: '0%',
                opacity: 1,
                duration: 1,
                stagger: stagger,
                delay: delay,
                ease: 'power3.out'
            });
            return ({
                "TextReveal.useEffect": ()=>{
                    tl.kill();
                    split.revert();
                }
            })["TextReveal.useEffect"];
        }
    }["TextReveal.useEffect"], [
        delay,
        stagger,
        trigger
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/ui/TextAnimations.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_s(TextReveal, "8puyVO4ts1RhCfXUmci3vLI3Njw=");
_c = TextReveal;
function LineReveal({ children, className = '', delay = 0, duration = 1 }) {
    _s1();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LineReveal.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            const split = new __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$split$2d$type$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](container, {
                types: 'lines',
                lineClass: 'split-line-inner'
            });
            // Wrap each line
            split.lines?.forEach({
                "LineReveal.useEffect": (line)=>{
                    const wrapper = document.createElement('div');
                    wrapper.className = 'split-line overflow-hidden';
                    line.parentNode?.insertBefore(wrapper, line);
                    wrapper.appendChild(line);
                }
            }["LineReveal.useEffect"]);
            const lines = container.querySelectorAll('.split-line-inner');
            __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(lines, {
                y: '100%',
                opacity: 0
            });
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                scrollTrigger: {
                    trigger: container,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            });
            tl.to(lines, {
                y: '0%',
                opacity: 1,
                duration: duration,
                stagger: 0.1,
                delay: delay,
                ease: 'power3.out'
            });
            return ({
                "LineReveal.useEffect": ()=>{
                    tl.kill();
                    split.revert();
                }
            })["LineReveal.useEffect"];
        }
    }["LineReveal.useEffect"], [
        delay,
        duration
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/ui/TextAnimations.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
_s1(LineReveal, "8puyVO4ts1RhCfXUmci3vLI3Njw=");
_c1 = LineReveal;
function CharReveal({ text, className = '', delay = 0, stagger = 0.02 }) {
    _s2();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CharReveal.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            const split = new __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$split$2d$type$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](container, {
                types: 'chars',
                charClass: 'split-char'
            });
            const chars = container.querySelectorAll('.split-char');
            __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(chars, {
                y: '100%',
                opacity: 0,
                rotateX: -90
            });
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                scrollTrigger: {
                    trigger: container,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            });
            tl.to(chars, {
                y: '0%',
                opacity: 1,
                rotateX: 0,
                duration: 0.8,
                stagger: stagger,
                delay: delay,
                ease: 'power3.out'
            });
            return ({
                "CharReveal.useEffect": ()=>{
                    tl.kill();
                    split.revert();
                }
            })["CharReveal.useEffect"];
        }
    }["CharReveal.useEffect"], [
        text,
        delay,
        stagger
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: className,
        style: {
            perspective: '1000px'
        },
        children: text
    }, void 0, false, {
        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/ui/TextAnimations.tsx",
        lineNumber: 216,
        columnNumber: 5
    }, this);
}
_s2(CharReveal, "8puyVO4ts1RhCfXUmci3vLI3Njw=");
_c2 = CharReveal;
function FadeIn({ children, className = '', delay = 0, duration = 1, direction = 'up', distance = 60 }) {
    _s3();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FadeIn.useEffect": ()=>{
            const element = ref.current;
            if (!element) return;
            const directionMap = {
                up: {
                    y: distance,
                    x: 0
                },
                down: {
                    y: -distance,
                    x: 0
                },
                left: {
                    x: distance,
                    y: 0
                },
                right: {
                    x: -distance,
                    y: 0
                },
                none: {
                    x: 0,
                    y: 0
                }
            };
            const { x, y } = directionMap[direction];
            __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(element, {
                opacity: 0,
                y,
                x
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(element, {
                opacity: 1,
                y: 0,
                x: 0,
                duration: duration,
                delay: delay,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            });
        }
    }["FadeIn.useEffect"], [
        delay,
        duration,
        direction,
        distance
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/ui/TextAnimations.tsx",
        lineNumber: 277,
        columnNumber: 5
    }, this);
}
_s3(FadeIn, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c3 = FadeIn;
function ScaleIn({ children, className = '', delay = 0, duration = 1 }) {
    _s4();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScaleIn.useEffect": ()=>{
            const element = ref.current;
            if (!element) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(element, {
                opacity: 0,
                scale: 0.8
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(element, {
                opacity: 1,
                scale: 1,
                duration: duration,
                delay: delay,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            });
        }
    }["ScaleIn.useEffect"], [
        delay,
        duration
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/ui/TextAnimations.tsx",
        lineNumber: 322,
        columnNumber: 5
    }, this);
}
_s4(ScaleIn, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c4 = ScaleIn;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "TextReveal");
__turbopack_context__.k.register(_c1, "LineReveal");
__turbopack_context__.k.register(_c2, "CharReveal");
__turbopack_context__.k.register(_c3, "FadeIn");
__turbopack_context__.k.register(_c4, "ScaleIn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ptojects/portfolio/kamal-portfolio/src/components/layout/FooterSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$src$2f$components$2f$ui$2f$TextAnimations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/src/components/ui/TextAnimations.tsx [app-client] (ecmascript)");
'use client';
;
;
function Footer() {
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative py-16 border-t border-[#1a1d24]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row items-center justify-between gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$src$2f$components$2f$ui$2f$TextAnimations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center md:items-start gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl font-bold text-gradient",
                                        children: "KB"
                                    }, void 0, false, {
                                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/layout/FooterSection.tsx",
                                        lineNumber: 15,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#52525b] text-sm",
                                        children: [
                                            "© ",
                                            currentYear,
                                            " Kamal Bura. Crafted with precision."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/layout/FooterSection.tsx",
                                        lineNumber: 16,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/layout/FooterSection.tsx",
                                lineNumber: 14,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/layout/FooterSection.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$src$2f$components$2f$ui$2f$TextAnimations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                            delay: 0.1,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-6",
                                children: [
                                    'About',
                                    'Projects',
                                    'Contact'
                                ].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `#${link.toLowerCase()}`,
                                        className: "text-[#71717a] hover:text-[#00d4ff] text-sm transition-colors duration-300",
                                        children: link
                                    }, link, false, {
                                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/layout/FooterSection.tsx",
                                        lineNumber: 26,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/layout/FooterSection.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/layout/FooterSection.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$src$2f$components$2f$ui$2f$TextAnimations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                            delay: 0.2,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 rounded-full bg-[#00ffc8] animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/layout/FooterSection.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#71717a] text-sm",
                                        children: "Available for work"
                                    }, void 0, false, {
                                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/layout/FooterSection.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/layout/FooterSection.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/layout/FooterSection.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/layout/FooterSection.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 pt-8 border-t border-[#1a1d24]/50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-[#52525b] text-xs",
                        children: "Built with Next.js, Three.js & GSAP • Designed in Hyderabad, India"
                    }, void 0, false, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/layout/FooterSection.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/layout/FooterSection.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/layout/FooterSection.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/layout/FooterSection.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$split$2d$type$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/split-type/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
// PERF: Batch ScrollTrigger refresh to avoid layout thrashing
let scrollTriggerRefreshQueued = false;
const queueScrollTriggerRefresh = ()=>{
    if (scrollTriggerRefreshQueued) return;
    scrollTriggerRefreshQueued = true;
    requestAnimationFrame(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
        scrollTriggerRefreshQueued = false;
    });
};
function Hero({ isLoaded = true }) {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const subtitleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ctaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollIndicatorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sideNavRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const socialRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timelineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollTriggersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const initAnimations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Hero.useCallback[initAnimations]": ()=>{
            const section = sectionRef.current;
            const title = titleRef.current;
            const subtitle = subtitleRef.current;
            const cta = ctaRef.current;
            const scrollIndicator = scrollIndicatorRef.current;
            const sideNav = sideNavRef.current;
            const social = socialRef.current;
            if (!section || !title) return;
            // Clear any existing animations
            if (timelineRef.current) {
                timelineRef.current.kill();
            }
            scrollTriggersRef.current.forEach({
                "Hero.useCallback[initAnimations]": (st)=>st.kill()
            }["Hero.useCallback[initAnimations]"]);
            scrollTriggersRef.current = [];
            // PERF: Use requestIdleCallback for SplitType to avoid blocking LCP
            // SplitType causes ~150ms forced reflow - defer it
            const splitCallback = {
                "Hero.useCallback[initAnimations].splitCallback": ()=>{
                    // Split title text for kinetic typography
                    const titleSplit = new __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$split$2d$type$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](title, {
                        types: 'chars,lines',
                        charClass: 'hero-char'
                    });
                    // PERF: Batch all initial states in single RAF to minimize reflows
                    requestAnimationFrame({
                        "Hero.useCallback[initAnimations].splitCallback": ()=>{
                            // Initial hidden states
                            __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(titleSplit.chars, {
                                y: 120,
                                opacity: 0,
                                rotateX: -80
                            });
                            if (subtitle) __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(subtitle, {
                                opacity: 0,
                                y: 60
                            });
                            if (cta) __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(cta, {
                                opacity: 0,
                                y: 50
                            });
                            if (scrollIndicator) __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(scrollIndicator, {
                                opacity: 0,
                                y: 30
                            });
                            if (sideNav) __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(sideNav.children, {
                                opacity: 0,
                                x: -20
                            });
                            if (social) __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(social.children, {
                                opacity: 0,
                                x: 20
                            });
                            // Master entrance timeline - synced with LoadingScreen exit
                            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                                delay: 0.1,
                                defaults: {
                                    ease: 'power4.out'
                                }
                            });
                            timelineRef.current = tl;
                            // Title chars stagger reveal with 3D effect
                            tl.to(titleSplit.chars, {
                                y: 0,
                                opacity: 1,
                                rotateX: 0,
                                duration: 0.8,
                                stagger: {
                                    each: 0.02,
                                    from: 'start'
                                },
                                ease: 'power3.out'
                            }, '-=0.3');
                            // Subtitle entrance
                            if (subtitle) {
                                tl.to(subtitle, {
                                    opacity: 1,
                                    y: 0,
                                    duration: 0.7
                                }, '-=0.5');
                            }
                            // CTA buttons entrance
                            if (cta) {
                                tl.to(cta, {
                                    opacity: 1,
                                    y: 0,
                                    duration: 0.6
                                }, '-=0.4');
                            }
                            // Scroll indicator
                            if (scrollIndicator) {
                                tl.to(scrollIndicator, {
                                    opacity: 1,
                                    y: 0,
                                    duration: 0.5
                                }, '-=0.3');
                            }
                            // Side navigation
                            if (sideNav) {
                                tl.to(sideNav.children, {
                                    opacity: 1,
                                    x: 0,
                                    duration: 0.4,
                                    stagger: 0.08
                                }, '-=0.4');
                            }
                            // Social links
                            if (social) {
                                tl.to(social.children, {
                                    opacity: 1,
                                    x: 0,
                                    duration: 0.4,
                                    stagger: 0.08
                                }, '-=0.4');
                            }
                            // PERF: Defer ScrollTrigger creation to avoid layout thrashing during LCP
                            requestAnimationFrame({
                                "Hero.useCallback[initAnimations].splitCallback": ()=>{
                                    // Parallax scroll effects
                                    const parallaxTitle = __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                                        trigger: section,
                                        start: 'top top',
                                        end: 'bottom top',
                                        scrub: 1.5,
                                        animation: __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(title, {
                                            y: -150,
                                            ease: 'none'
                                        })
                                    });
                                    scrollTriggersRef.current.push(parallaxTitle);
                                    if (subtitle) {
                                        const parallaxSubtitle = __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                                            trigger: section,
                                            start: 'top top',
                                            end: 'bottom top',
                                            scrub: 1.5,
                                            animation: __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(subtitle, {
                                                y: -80,
                                                ease: 'none'
                                            })
                                        });
                                        scrollTriggersRef.current.push(parallaxSubtitle);
                                    }
                                    // Fade out scroll indicator on scroll
                                    if (scrollIndicator) {
                                        const fadeIndicator = __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                                            trigger: section,
                                            start: 'top top',
                                            end: '20% top',
                                            scrub: true,
                                            animation: __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(scrollIndicator, {
                                                opacity: 0,
                                                y: -20
                                            })
                                        });
                                        scrollTriggersRef.current.push(fadeIndicator);
                                    }
                                    // Queue batched refresh
                                    queueScrollTriggerRefresh();
                                }
                            }["Hero.useCallback[initAnimations].splitCallback"]);
                        }
                    }["Hero.useCallback[initAnimations].splitCallback"]);
                    return ({
                        "Hero.useCallback[initAnimations].splitCallback": ()=>{
                            titleSplit.revert();
                        }
                    })["Hero.useCallback[initAnimations].splitCallback"];
                }
            }["Hero.useCallback[initAnimations].splitCallback"];
            // PERF: Use requestIdleCallback if available, else setTimeout
            let cleanup;
            if ('requestIdleCallback' in window) {
                const idleId = requestIdleCallback({
                    "Hero.useCallback[initAnimations].idleId": ()=>{
                        cleanup = splitCallback();
                    }
                }["Hero.useCallback[initAnimations].idleId"], {
                    timeout: 100
                }); // Max 100ms wait
                return ({
                    "Hero.useCallback[initAnimations]": ()=>{
                        cancelIdleCallback(idleId);
                        cleanup?.();
                    }
                })["Hero.useCallback[initAnimations]"];
            } else {
                const timeoutId = setTimeout({
                    "Hero.useCallback[initAnimations].timeoutId": ()=>{
                        cleanup = splitCallback();
                    }
                }["Hero.useCallback[initAnimations].timeoutId"], 16); // Next frame
                return ({
                    "Hero.useCallback[initAnimations]": ()=>{
                        clearTimeout(timeoutId);
                        cleanup?.();
                    }
                })["Hero.useCallback[initAnimations]"];
            }
        }
    }["Hero.useCallback[initAnimations]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            if (isLoaded) {
                const cleanup = initAnimations();
                return ({
                    "Hero.useEffect": ()=>{
                        cleanup?.();
                        if (timelineRef.current) {
                            timelineRef.current.kill();
                        }
                        scrollTriggersRef.current.forEach({
                            "Hero.useEffect": (st)=>st.kill()
                        }["Hero.useEffect"]);
                        scrollTriggersRef.current = [];
                    }
                })["Hero.useEffect"];
            }
        }
    }["Hero.useEffect"], [
        isLoaded,
        initAnimations
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "home",
        className: "hero-section min-h-screen flex items-center justify-center relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0b0d10_70%)] pointer-events-none z-[2]"
            }, void 0, false, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0b0d10] to-transparent pointer-events-none z-[5]"
            }, void 0, false, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-content container text-center relative z-10 max-w-4xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        ref: titleRef,
                        className: "hero-title mb-8",
                        style: {
                            perspective: '1000px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block text-[#f4f4f5]",
                                children: "KAMAL"
                            }, void 0, false, {
                                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block text-gradient",
                                children: "BURA"
                            }, void 0, false, {
                                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: subtitleRef,
                        className: "hero-subtitle mb-14",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-3 mb-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gradient-ai font-semibold",
                                        children: "AI"
                                    }, void 0, false, {
                                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#52525b]",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                                        lineNumber: 254,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gradient-iot font-semibold",
                                        children: "IoT"
                                    }, void 0, false, {
                                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                                        lineNumber: 255,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#52525b]",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                                        lineNumber: 256,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gradient-systems font-semibold",
                                        children: "Systems"
                                    }, void 0, false, {
                                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                                        lineNumber: 257,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                                lineNumber: 252,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#a1a1aa] text-lg lg:text-xl tracking-normal normal-case max-w-xl mx-auto leading-relaxed",
                                children: [
                                    "Computer Science Engineering Student at",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#f4f4f5]",
                                        children: "Vasavi College of Engineering"
                                    }, void 0, false, {
                                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                                        lineNumber: 261,
                                        columnNumber: 13
                                    }, this),
                                    ", specializing in Artificial Intelligence and Internet of Things."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: ctaRef,
                        className: "flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 md:gap-6 lg:gap-8 mt-8 md:mt-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#projects",
                                className: "magnetic-btn magnetic-btn-primary group w-full sm:w-auto md:min-w-[220px] lg:min-w-[280px]",
                                "data-cursor": "View",
                                "data-cursor-text": "View",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Explore My Work"
                                    }, void 0, false, {
                                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                                        lineNumber: 274,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4 transition-transform duration-300 group-hover:translate-x-1",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                        }, void 0, false, {
                                            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                                            lineNumber: 281,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                                        lineNumber: 275,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                className: "magnetic-btn group w-full sm:w-auto md:min-w-[220px] lg:min-w-[280px]",
                                "data-cursor": "Contact",
                                "data-cursor-text": "Contact",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Get in Touch"
                                    }, void 0, false, {
                                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                                        lineNumber: 295,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        }, void 0, false, {
                                            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                                            lineNumber: 302,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                                        lineNumber: 296,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollIndicatorRef,
                className: "absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] text-[#52525b] tracking-[0.3em] uppercase font-medium",
                        children: "Scroll to explore"
                    }, void 0, false, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-6 h-10 rounded-full border border-[#3f3f46] flex items-start justify-center p-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-1 h-2.5 bg-gradient-to-b from-[#00d4ff] to-[#00ffc8] rounded-full animate-bounce"
                        }, void 0, false, {
                            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                            lineNumber: 322,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                        lineNumber: 321,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                lineNumber: 314,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: sideNavRef,
                className: "absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-5 z-10",
                children: [
                    {
                        num: '01',
                        id: 'home',
                        label: 'Home'
                    },
                    {
                        num: '02',
                        id: 'about',
                        label: 'About'
                    },
                    {
                        num: '03',
                        id: 'projects',
                        label: 'Projects'
                    },
                    {
                        num: '04',
                        id: 'contact',
                        label: 'Contact'
                    }
                ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `#${item.id}`,
                        className: `group flex items-center gap-3 text-xs tracking-widest transition-all duration-300 ${i === 0 ? 'text-[#00d4ff]' : 'text-[#52525b] hover:text-[#a1a1aa]'}`,
                        "data-cursor-text": item.label,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono",
                                children: item.num
                            }, void 0, false, {
                                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                                lineNumber: 345,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `h-px transition-all duration-300 bg-current ${i === 0 ? 'w-8' : 'w-0 group-hover:w-8'}`
                            }, void 0, false, {
                                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                                lineNumber: 346,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.num, true, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                        lineNumber: 337,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: socialRef,
                className: "absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-10",
                children: [
                    {
                        name: 'GitHub',
                        href: 'https://github.com/kamalbura',
                        icon: 'GH'
                    },
                    {
                        name: 'LinkedIn',
                        href: 'https://linkedin.com/in/kamalbura',
                        icon: 'LI'
                    },
                    {
                        name: 'Twitter',
                        href: 'https://twitter.com/kamalbura',
                        icon: 'TW'
                    }
                ].map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: social.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-xs tracking-widest text-[#52525b] hover:text-[#00d4ff] transition-colors duration-300 [writing-mode:vertical-rl] font-medium",
                        "data-cursor-text": social.name,
                        children: social.name
                    }, social.name, false, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                        lineNumber: 363,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
                lineNumber: 354,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx",
        lineNumber: 227,
        columnNumber: 5
    }, this);
}
_s(Hero, "hgYYc3QUZ+0xQDt5wJ/ujMjRWFA=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ptojects/portfolio/kamal-portfolio/src/components/ui/LoadingScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoadingScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/@react-three/fiber/dist/events-1eccaf1c.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
// PERF: Reduced timing constants for faster LCP
const TIMING = {
    MORPH_START_DELAY: 100,
    MORPH_DURATION: 350,
    TEXT_HOLD: 300,
    FADE_DURATION: 400,
    VISIBILITY_DELAY: 200
};
function ParticleMorph({ onComplete }) {
    _s();
    const pointsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // PERF: Further reduced particle count for faster rendering
    const count = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ParticleMorph.useMemo[count]": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return window.innerWidth < 768 ? 2500 : 4000;
        }
    }["ParticleMorph.useMemo[count]"], []);
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('sphere');
    const startTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const textPositionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const spherePositionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Create text positions from canvas
    const createTextPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ParticleMorph.useCallback[createTextPoints]": ()=>{
            const text = 'KAMAL BURA';
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            if (!ctx) return new Float32Array(count * 3);
            const fontSize = 120;
            const padding = 40;
            ctx.font = `bold ${fontSize}px Arial, sans-serif`;
            const textMetrics = ctx.measureText(text);
            const textWidth = textMetrics.width;
            const textHeight = fontSize;
            canvas.width = textWidth + padding * 2;
            canvas.height = textHeight + padding * 2;
            ctx.fillStyle = 'white';
            ctx.font = `bold ${fontSize}px Arial, sans-serif`;
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'center';
            ctx.fillText(text, canvas.width / 2, canvas.height / 2);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const pixels = imageData.data;
            const points = [];
            const threshold = 128;
            for(let i = 0; i < pixels.length; i += 4){
                if (pixels[i] > threshold) {
                    const x = i / 4 % canvas.width;
                    const y = Math.floor(i / 4 / canvas.width);
                    if (Math.random() < 0.25) {
                        points.push({
                            x: (x - canvas.width / 2) / 12,
                            y: -(y - canvas.height / 2) / 12
                        });
                    }
                }
            }
            const positions = new Float32Array(count * 3);
            for(let i = 0; i < count; i++){
                if (i < points.length) {
                    positions[i * 3] = points[i].x;
                    positions[i * 3 + 1] = points[i].y;
                    positions[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
                } else {
                    const angle = Math.random() * Math.PI * 2;
                    const radius = 15 + Math.random() * 20;
                    positions[i * 3] = Math.cos(angle) * radius;
                    positions[i * 3 + 1] = Math.sin(angle) * radius;
                    positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
                }
            }
            return positions;
        }
    }["ParticleMorph.useCallback[createTextPoints]"], [
        count
    ]);
    // Create sphere positions
    const createSpherePositions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ParticleMorph.useCallback[createSpherePositions]": ()=>{
            const positions = new Float32Array(count * 3);
            for(let i = 0; i < count; i++){
                const phi = Math.acos(-1 + 2 * i / count);
                const theta = Math.sqrt(count * Math.PI) * phi;
                const radius = 8;
                positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi) + (Math.random() - 0.5) * 0.3;
                positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi) + (Math.random() - 0.5) * 0.3;
                positions[i * 3 + 2] = radius * Math.cos(phi) + (Math.random() - 0.5) * 0.3;
            }
            return positions;
        }
    }["ParticleMorph.useCallback[createSpherePositions]"], [
        count
    ]);
    // Initialize geometry
    const geometry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ParticleMorph.useMemo[geometry]": ()=>{
            const spherePositions = createSpherePositions();
            spherePositionsRef.current = spherePositions;
            const colors = new Float32Array(count * 3);
            for(let i = 0; i < count; i++){
                const color = new __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]();
                const depth = Math.random();
                color.setHSL(0.5 + depth * 0.15, 0.8, 0.5 + depth * 0.2);
                colors[i * 3] = color.r;
                colors[i * 3 + 1] = color.g;
                colors[i * 3 + 2] = color.b;
            }
            const geo = new __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            geo.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](spherePositions.slice(), 3));
            geo.setAttribute('color', new __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](colors, 3));
            return geo;
        }
    }["ParticleMorph.useMemo[geometry]"], [
        count,
        createSpherePositions
    ]);
    // Start morph sequence
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticleMorph.useEffect": ()=>{
            textPositionsRef.current = createTextPoints();
            const timer = setTimeout({
                "ParticleMorph.useEffect.timer": ()=>{
                    setPhase('morphing');
                    startTimeRef.current = performance.now();
                }
            }["ParticleMorph.useEffect.timer"], TIMING.MORPH_START_DELAY);
            return ({
                "ParticleMorph.useEffect": ()=>clearTimeout(timer)
            })["ParticleMorph.useEffect"];
        }
    }["ParticleMorph.useEffect"], [
        createTextPoints
    ]);
    // Animation loop
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "ParticleMorph.useFrame": (state)=>{
            if (!pointsRef.current) return;
            const positions = pointsRef.current.geometry.attributes.position.array;
            const spherePos = spherePositionsRef.current;
            const textPos = textPositionsRef.current;
            if (!spherePos || !textPos) return;
            if (phase === 'sphere') {
                pointsRef.current.rotation.y += 0.003;
                pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
            } else if (phase === 'morphing') {
                const elapsed = performance.now() - startTimeRef.current;
                const t = Math.min(elapsed / TIMING.MORPH_DURATION, 1);
                const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
                pointsRef.current.rotation.y *= 0.97;
                pointsRef.current.rotation.x *= 0.97;
                for(let i = 0; i < count * 3; i++){
                    positions[i] = spherePos[i] + (textPos[i] - spherePos[i]) * eased;
                }
                pointsRef.current.geometry.attributes.position.needsUpdate = true;
                if (t >= 1) {
                    setPhase('text');
                    startTimeRef.current = performance.now();
                }
            } else if (phase === 'text') {
                const elapsed = performance.now() - startTimeRef.current;
                for(let i = 0; i < count; i++){
                    const i3 = i * 3;
                    positions[i3 + 2] = textPos[i3 + 2] + Math.sin(state.clock.elapsedTime * 2 + i * 0.01) * 0.1;
                }
                pointsRef.current.geometry.attributes.position.needsUpdate = true;
                if (elapsed > TIMING.TEXT_HOLD) {
                    setPhase('fadeOut');
                    startTimeRef.current = performance.now();
                }
            } else if (phase === 'fadeOut') {
                const elapsed = performance.now() - startTimeRef.current;
                const t = Math.min(elapsed / TIMING.FADE_DURATION, 1);
                const material = pointsRef.current.material;
                material.opacity = 0.8 * (1 - t);
                for(let i = 0; i < count; i++){
                    const i3 = i * 3;
                    const expandFactor = 1 + t * 2;
                    positions[i3] = textPos[i3] * expandFactor;
                    positions[i3 + 1] = textPos[i3 + 1] * expandFactor;
                    positions[i3 + 2] = textPos[i3 + 2] + (Math.random() - 0.5) * t * 5;
                }
                pointsRef.current.geometry.attributes.position.needsUpdate = true;
                if (t >= 1) {
                    onComplete();
                }
            }
        }
    }["ParticleMorph.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
        ref: pointsRef,
        geometry: geometry,
        frustumCulled: false,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointsMaterial", {
            size: 0.06,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
            depthWrite: false,
            sizeAttenuation: true
        }, void 0, false, {
            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/ui/LoadingScreen.tsx",
            lineNumber: 219,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/ui/LoadingScreen.tsx",
        lineNumber: 218,
        columnNumber: 5
    }, this);
}
_s(ParticleMorph, "f266exFWiJ+1y19hNaJjPuzGlqU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = ParticleMorph;
function LoadingScreen({ onComplete: externalOnComplete }) {
    _s1();
    const [isComplete, setIsComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const handleComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LoadingScreen.useCallback[handleComplete]": ()=>{
            setIsComplete(true);
            setTimeout({
                "LoadingScreen.useCallback[handleComplete]": ()=>{
                    setIsVisible(false);
                    externalOnComplete?.();
                }
            }["LoadingScreen.useCallback[handleComplete]"], TIMING.VISIBILITY_DELAY);
        }
    }["LoadingScreen.useCallback[handleComplete]"], [
        externalOnComplete
    ]);
    if (!isVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed inset-0 z-[9999] bg-[#0a0a0f] transition-opacity duration-500 ${isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                camera: {
                    position: [
                        0,
                        0,
                        25
                    ],
                    fov: 75
                },
                gl: {
                    antialias: true,
                    alpha: false
                },
                style: {
                    background: '#0a0a0f'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("color", {
                        attach: "background",
                        args: [
                            '#0a0a0f'
                        ]
                    }, void 0, false, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/ui/LoadingScreen.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                        intensity: 0.5
                    }, void 0, false, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/ui/LoadingScreen.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParticleMorph, {
                        onComplete: handleComplete
                    }, void 0, false, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/ui/LoadingScreen.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/ui/LoadingScreen.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#0a0a0f]/50"
                }, void 0, false, {
                    fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/ui/LoadingScreen.tsx",
                    lineNumber: 267,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/ui/LoadingScreen.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 text-sm tracking-widest transition-opacity duration-500 ${isComplete ? 'opacity-0' : 'opacity-100'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "animate-pulse",
                    children: "LOADING"
                }, void 0, false, {
                    fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/ui/LoadingScreen.tsx",
                    lineNumber: 273,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/ui/LoadingScreen.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/ui/LoadingScreen.tsx",
        lineNumber: 251,
        columnNumber: 5
    }, this);
}
_s1(LoadingScreen, "aQiEed0o2STYlANBkh7uOEbllzo=");
_c1 = LoadingScreen;
var _c, _c1;
__turbopack_context__.k.register(_c, "ParticleMorph");
__turbopack_context__.k.register(_c1, "LoadingScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ptojects/portfolio/kamal-portfolio/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$src$2f$components$2f$layout$2f$NavbarSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/src/components/layout/NavbarSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$src$2f$components$2f$layout$2f$FooterSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/src/components/layout/FooterSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$src$2f$components$2f$sections$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/Hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$src$2f$components$2f$ui$2f$LoadingScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/src/components/ui/LoadingScreen.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
// PERF: Dynamically import below-fold sections to avoid ScrollTrigger layout thrashing during LCP
// These sections create ScrollTriggers that cause 600ms+ forced reflows
const About = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/AboutSection.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/AboutSection.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "min-h-screen",
            "aria-busy": "true"
        }, void 0, false, {
            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/app/page.tsx",
            lineNumber: 14,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c = About;
const Skills = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/SkillsSection.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/SkillsSection.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "min-h-screen",
            "aria-busy": "true"
        }, void 0, false, {
            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/app/page.tsx",
            lineNumber: 19,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c1 = Skills;
const Projects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "min-h-screen",
            "aria-busy": "true"
        }, void 0, false, {
            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/app/page.tsx",
            lineNumber: 24,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c2 = Projects;
const Experience = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "min-h-screen",
            "aria-busy": "true"
        }, void 0, false, {
            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/app/page.tsx",
            lineNumber: 29,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c3 = Experience;
const Contact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ContactSection.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ContactSection.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "min-h-screen",
            "aria-busy": "true"
        }, void 0, false, {
            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/app/page.tsx",
            lineNumber: 34,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c4 = Contact;
const GlobalScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/ptojects/portfolio/kamal-portfolio/src/components/three/GlobalScene.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/GlobalScene.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>null
});
_c5 = GlobalScene;
function Home() {
    _s();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showScene, setShowScene] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleLoadingComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleLoadingComplete]": ()=>{
            setIsLoading(false);
            // PERF: Defer GlobalScene mount until after LCP to reduce render delay
            // Use requestIdleCallback for non-critical 3D rendering
            if ('requestIdleCallback' in window) {
                requestIdleCallback({
                    "Home.useCallback[handleLoadingComplete]": ()=>setShowScene(true)
                }["Home.useCallback[handleLoadingComplete]"], {
                    timeout: 500
                });
            } else {
                setTimeout({
                    "Home.useCallback[handleLoadingComplete]": ()=>setShowScene(true)
                }["Home.useCallback[handleLoadingComplete]"], 100);
            }
        }
    }["Home.useCallback[handleLoadingComplete]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$src$2f$components$2f$ui$2f$LoadingScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onComplete: handleLoadingComplete
            }, void 0, false, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/app/page.tsx",
                lineNumber: 59,
                columnNumber: 21
            }, this),
            showScene && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlobalScene, {}, void 0, false, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/app/page.tsx",
                lineNumber: 60,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$src$2f$components$2f$layout$2f$NavbarSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/app/page.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$src$2f$components$2f$sections$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        isLoaded: !isLoading
                    }, void 0, false, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/app/page.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(About, {}, void 0, false, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/app/page.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Skills, {}, void 0, false, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/app/page.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Projects, {}, void 0, false, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/app/page.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Experience, {}, void 0, false, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/app/page.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Contact, {}, void 0, false, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/app/page.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/app/page.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$src$2f$components$2f$layout$2f$FooterSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/app/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Home, "gs/yGzWUB/a6IOUKWl+Y1YQWRgI=");
_c6 = Home;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "About");
__turbopack_context__.k.register(_c1, "Skills");
__turbopack_context__.k.register(_c2, "Projects");
__turbopack_context__.k.register(_c3, "Experience");
__turbopack_context__.k.register(_c4, "Contact");
__turbopack_context__.k.register(_c5, "GlobalScene");
__turbopack_context__.k.register(_c6, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=ptojects_portfolio_kamal-portfolio_src_52a8ba92._.js.map