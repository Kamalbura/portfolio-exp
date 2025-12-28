(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Experience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$src$2f$components$2f$ui$2f$TextAnimations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/src/components/ui/TextAnimations.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const experiences = [
    {
        id: 1,
        role: 'B.Tech Student',
        company: 'Undergraduate Program',
        period: '2022 - 2026',
        description: 'Pursuing B.Tech with focus on embedded systems and AI research.',
        highlights: [
            'Specialization in embedded systems and AI',
            'Coursework in robotics, signals, and ML'
        ],
        color: 'systems'
    },
    {
        id: 2,
        role: 'Research Intern',
        company: 'IIIT Hyderabad',
        period: 'Summer 2024',
        description: 'Research internship in computer vision and machine learning.',
        highlights: [
            'Worked on ML model experiments and datasets',
            'Collaborated with faculty on project deliverables'
        ],
        color: 'ai'
    },
    {
        id: 3,
        role: 'Projects & Open Source',
        company: 'Personal',
        period: '2023 - Present',
        description: 'Building robotics, IoT, and ML projects; maintaining prototypes and repos.',
        highlights: [
            'Developed multiple proof-of-concept systems',
            'Published code and documentation for community use'
        ],
        color: 'iot'
    }
];
const colorMap = {
    ai: {
        line: 'bg-[#00d4ff]',
        dot: 'bg-[#00d4ff]',
        glow: 'shadow-[0_0_20px_rgba(0,212,255,0.5)]',
        tag: 'text-[#00d4ff] border-[#00d4ff]/30'
    },
    iot: {
        line: 'bg-[#00ffc8]',
        dot: 'bg-[#00ffc8]',
        glow: 'shadow-[0_0_20px_rgba(0,255,200,0.5)]',
        tag: 'text-[#00ffc8] border-[#00ffc8]/30'
    },
    systems: {
        line: 'bg-[#8b5cf6]',
        dot: 'bg-[#8b5cf6]',
        glow: 'shadow-[0_0_20px_rgba(139,92,246,0.5)]',
        tag: 'text-[#8b5cf6] border-[#8b5cf6]/30'
    }
};
function Experience() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timelineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Experience.useEffect": ()=>{
            const timeline = timelineRef.current;
            if (!timeline) return;
            const items = timeline.querySelectorAll('.timeline-item');
            items.forEach({
                "Experience.useEffect": (item, index)=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(item, {
                        opacity: 0,
                        x: index % 2 === 0 ? -50 : 50
                    }, {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse'
                        }
                    });
                }
            }["Experience.useEffect"]);
            // Animate timeline line
            const line = timeline.querySelector('.timeline-line');
            if (line) {
                __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(line, {
                    scaleY: 0
                }, {
                    scaleY: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: timeline,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        scrub: 1
                    }
                });
            }
        }
    }["Experience.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "experience",
        className: "relative section-spacing overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/3 -right-32 w-64 h-64 bg-[#00d4ff]/5 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-1/3 -left-32 w-64 h-64 bg-[#8b5cf6]/5 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container relative max-w-5xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$src$2f$components$2f$ui$2f$TextAnimations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "section-label",
                                    children: "Journey"
                                }, void 0, false, {
                                    fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$src$2f$components$2f$ui$2f$TextAnimations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                                delay: 0.1,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "section-title",
                                    children: [
                                        "Professional ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gradient",
                                            children: "Experience"
                                        }, void 0, false, {
                                            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx",
                                            lineNumber: 140,
                                            columnNumber: 28
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$src$2f$components$2f$ui$2f$TextAnimations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                                delay: 0.2,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "section-description mx-auto mt-4",
                                    children: "Building expertise through impactful work"
                                }, void 0, false, {
                                    fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: timelineRef,
                        className: "relative max-w-4xl mx-auto px-2 sm:px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-px bg-[#2a2d34]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "timeline-line absolute inset-0 bg-gradient-to-b from-[#00d4ff] via-[#00ffc8] to-[#8b5cf6] origin-top",
                                    style: {
                                        transform: 'scaleY(0)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-16",
                                children: experiences.map((exp, index)=>{
                                    const colors = colorMap[exp.color];
                                    const isLeft = index % 2 === 0;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `timeline-item relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `absolute left-6 sm:left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full ${colors.dot} ${colors.glow} z-10`
                                            }, void 0, false, {
                                                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx",
                                                lineNumber: 174,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-full md:w-1/2 pl-8 sm:pl-10 md:pl-0 ${isLeft ? 'md:pr-16' : 'md:pl-16'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "glass-card rounded-xl p-6 group hover:scale-[1.02] transition-transform duration-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start justify-between mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "text-xl font-semibold text-[#f4f4f5] mb-1",
                                                                            children: exp.role
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx",
                                                                            lineNumber: 188,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: `text-sm ${colors.tag}`,
                                                                            children: exp.company
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx",
                                                                            lineNumber: 191,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx",
                                                                    lineNumber: 187,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-[#71717a] whitespace-nowrap",
                                                                    children: exp.period
                                                                }, void 0, false, {
                                                                    fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx",
                                                                    lineNumber: 193,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx",
                                                            lineNumber: 186,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#a1a1aa] text-sm leading-relaxed mb-4",
                                                            children: exp.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "space-y-2",
                                                            children: exp.highlights.map((highlight, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-center gap-2 text-sm text-[#71717a]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `w-1.5 h-1.5 rounded-full ${colors.dot}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx",
                                                                            lineNumber: 210,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        highlight
                                                                    ]
                                                                }, i, true, {
                                                                    fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx",
                                                                    lineNumber: 206,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx",
                                                            lineNumber: 204,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx",
                                                lineNumber: 179,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden md:block w-1/2"
                                            }, void 0, false, {
                                                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx",
                                                lineNumber: 219,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, exp.id, true, {
                                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx",
                                        lineNumber: 167,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
_s(Experience, "Bnx/s7jGeGmKx7XVQSc1+Uc5iKo=");
_c = Experience;
var _c;
__turbopack_context__.k.register(_c, "Experience");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ExperienceSection.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=22799_kamal-portfolio_src_components_sections_ExperienceSection_tsx_83a6fcc4._.js.map