(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Projects
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
const projects = [
    {
        id: 1,
        title: 'Air Quality Monitoring System',
        category: 'IoT / Environmental',
        description: 'End-to-end sensor network and dashboard for urban air quality monitoring with edge aggregation and anomaly alerts.',
        tech: [
            'ESP32',
            'MQTT',
            'LoRaWAN',
            'InfluxDB'
        ],
        color: 'iot',
        link: '#',
        github: '#'
    },
    {
        id: 2,
        title: 'Cyber Truck (Prototype)',
        category: 'Embedded / Systems',
        description: 'Custom vehicle control stack and telemetry system for rugged autonomous platform development.',
        tech: [
            'C++',
            'ROS2',
            'CAN',
            'Python'
        ],
        color: 'systems',
        link: '#',
        github: '#'
    },
    {
        id: 3,
        title: 'Quadcopter Autonomy',
        category: 'Robotics',
        description: 'Autonomous flight stack with SLAM-based navigation and obstacle avoidance for compact UAVs.',
        tech: [
            'PX4',
            'OpenCV',
            'C++',
            'Python'
        ],
        color: 'ai',
        link: '#',
        github: '#'
    },
    {
        id: 4,
        title: 'AI-powered Blogging Platform (TCC)',
        category: 'Full Stack / AI',
        description: 'A content platform using ML to assist writing, SEO suggestions, and personalized feeds.',
        tech: [
            'Next.js',
            'Python',
            'Transformer Models'
        ],
        color: 'systems',
        link: '#',
        github: '#'
    },
    {
        id: 5,
        title: 'Forest Fire Detection',
        category: 'AI / Computer Vision',
        description: 'Early detection pipeline using satellite imagery and edge inference to trigger alerts for firefighting teams.',
        tech: [
            'PyTorch',
            'Satellite Imagery',
            'Edge TPU'
        ],
        color: 'ai',
        link: '#',
        github: '#'
    },
    {
        id: 6,
        title: "Blind Assistance Device",
        category: 'Assistive Tech',
        description: 'Wearable device combining computer vision and haptic feedback to help visually impaired users navigate.',
        tech: [
            'Embedded C',
            'OpenCV',
            'Haptics'
        ],
        color: 'iot',
        link: '#',
        github: '#'
    }
];
const colorMap = {
    ai: {
        gradient: 'from-[#00d4ff]/20 to-[#0066ff]/20',
        border: 'border-[#00d4ff]/30',
        glow: 'hover:shadow-[0_0_60px_-15px_rgba(0,212,255,0.5)]',
        tag: 'bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/20'
    },
    iot: {
        gradient: 'from-[#00ffc8]/20 to-[#00d4a0]/20',
        border: 'border-[#00ffc8]/30',
        glow: 'hover:shadow-[0_0_60px_-15px_rgba(0,255,200,0.5)]',
        tag: 'bg-[#00ffc8]/10 text-[#00ffc8] border-[#00ffc8]/20'
    },
    systems: {
        gradient: 'from-[#8b5cf6]/20 to-[#6d28d9]/20',
        border: 'border-[#8b5cf6]/30',
        glow: 'hover:shadow-[0_0_60px_-15px_rgba(139,92,246,0.5)]',
        tag: 'bg-[#8b5cf6]/10 text-[#8b5cf6] border-[#8b5cf6]/20'
    }
};
function Projects() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Store reference to this component's ScrollTrigger for scoped cleanup
    const scrollTriggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Projects.useEffect": ()=>{
            const section = sectionRef.current;
            const container = containerRef.current;
            const wrapper = wrapperRef.current;
            if (!section || !container || !wrapper) return;
            const viewportWidth = window.innerWidth;
            const isMobile = viewportWidth < 900;
            const totalWidth = wrapper.scrollWidth;
            const scrollDistance = Math.max(0, totalWidth - viewportWidth);
            // For mobile and short tracks, allow native horizontal scroll instead of pinning
            if (isMobile || scrollDistance === 0) {
                container.classList.add('overflow-x-auto', 'snap-x', 'snap-mandatory');
                return ({
                    "Projects.useEffect": ()=>{
                        container.classList.remove('overflow-x-auto', 'snap-x', 'snap-mandatory');
                    }
                })["Projects.useEffect"];
            }
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: {
                        "Projects.useEffect.tl": ()=>`+=${scrollDistance}`
                    }["Projects.useEffect.tl"],
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                    invalidateOnRefresh: true
                }
            });
            scrollTriggerRef.current = tl.scrollTrigger || null;
            tl.to(wrapper, {
                x: -scrollDistance,
                ease: 'none'
            });
            return ({
                "Projects.useEffect": ()=>{
                    if (scrollTriggerRef.current) {
                        scrollTriggerRef.current.kill();
                        scrollTriggerRef.current = null;
                    }
                    tl.kill();
                }
            })["Projects.useEffect"];
        }
    }["Projects.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "projects",
        className: "relative overflow-hidden section-spacing",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 md:top-0 left-0 right-0 z-20 container pt-12 md:pt-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$src$2f$components$2f$ui$2f$TextAnimations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "section-label",
                            children: "Portfolio"
                        }, void 0, false, {
                            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$src$2f$components$2f$ui$2f$TextAnimations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeIn"], {
                        delay: 0.1,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: [
                                "Featured ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gradient",
                                    children: "Projects"
                                }, void 0, false, {
                                    fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                                    lineNumber: 163,
                                    columnNumber: 22
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "min-h-[80vh] md:min-h-screen md:h-screen flex items-center pt-40 md:pt-44",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: wrapperRef,
                    className: "horizontal-scroll-container pl-[5vw] pr-[10vw] md:pr-[16vw] snap-x snap-mandatory md:snap-none",
                    children: [
                        projects.map((project, index)=>{
                            const colors = colorMap[project.color];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: `project-card glass-card ${colors.glow} transition-shadow duration-500 snap-start focus:outline-none focus:ring-2 focus:ring-[var(--color-ai)]`,
                                tabIndex: 0,
                                role: "article",
                                "aria-labelledby": `project-title-${project.id}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-50`,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                                        lineNumber: 189,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-full p-6 md:p-8 flex flex-col justify-between z-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-grow",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-4 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-xs px-3 py-1 rounded-full border ${colors.tag} flex-shrink-0`,
                                                                children: project.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                                                                lineNumber: 199,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[var(--color-text-muted)] text-sm flex-shrink-0",
                                                                "aria-hidden": "true",
                                                                children: [
                                                                    "0",
                                                                    index + 1
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                                                                lineNumber: 204,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        id: `project-title-${project.id}`,
                                                        className: "text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-[var(--color-text-primary)] line-clamp-2",
                                                        children: project.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[var(--color-text-secondary)] text-sm md:text-base leading-relaxed line-clamp-2 md:line-clamp-3",
                                                        children: project.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                                                lineNumber: 197,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0 mt-4 md:mt-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-2 mb-4 md:mb-6",
                                                        children: project.tech.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs px-2 py-1 rounded bg-[#1a1d24] text-[#a1a1aa] border border-[#2a2d34]",
                                                                children: tech
                                                            }, tech, false, {
                                                                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                                                                lineNumber: 226,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 md:gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: project.link,
                                                                className: "magnetic-btn text-xs md:text-sm py-2 px-3 md:px-4",
                                                                "data-cursor": "View",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "View Project"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                                                                        lineNumber: 242,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "w-3 h-3 md:w-4 md:h-4",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 2,
                                                                            d: "M14 5l7 7m0 0l-7 7m7-7H3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                                                                            lineNumber: 249,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                                                                        lineNumber: 243,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                                                                lineNumber: 237,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: project.github,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "text-[#71717a] hover:text-[#f4f4f5] transition-colors",
                                                                "data-cursor": "GitHub",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-4 h-4 md:w-5 md:h-5",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                                                                        lineNumber: 269,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                                                                    lineNumber: 264,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                                                                lineNumber: 257,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                                                lineNumber: 222,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                                        lineNumber: 195,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 right-0 w-32 h-32 overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `absolute -top-16 -right-16 w-32 h-32 rounded-full bg-gradient-to-br ${colors.gradient} blur-2xl`
                                        }, void 0, false, {
                                            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                                            lineNumber: 278,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                                        lineNumber: 277,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, project.id, true, {
                                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                                lineNumber: 181,
                                columnNumber: 15
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0 w-[20vw]"
                        }, void 0, false, {
                            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                            lineNumber: 287,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#52525b] text-xs tracking-widest uppercase",
                        children: "Drag to explore"
                    }, void 0, false, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-4 h-4 text-[#52525b]",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M17 8l4 4m0 0l-4 4m4-4H3"
                        }, void 0, false, {
                            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                            lineNumber: 302,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                        lineNumber: 296,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx",
        lineNumber: 151,
        columnNumber: 5
    }, this);
}
_s(Projects, "9IrXxjejsTOO2BB1vhuuf8itaWo=");
_c = Projects;
var _c;
__turbopack_context__.k.register(_c, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/ProjectsSection.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=9d29e_portfolio_kamal-portfolio_src_components_sections_ProjectsSection_tsx_bdada813._.js.map