(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/SkillsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Skills
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
// Deep engineering vocabulary - no generic AI copy
const skillWords = [
    // AI / Machine Learning
    {
        text: 'PyTorch',
        category: 'ai',
        weight: 5
    },
    {
        text: 'TensorFlow',
        category: 'ai',
        weight: 4
    },
    {
        text: 'Neural Networks',
        category: 'ai',
        weight: 5
    },
    {
        text: 'Transformers',
        category: 'ai',
        weight: 4
    },
    {
        text: 'CUDA',
        category: 'ai',
        weight: 3
    },
    {
        text: 'Computer Vision',
        category: 'ai',
        weight: 4
    },
    {
        text: 'CNNs',
        category: 'ai',
        weight: 3
    },
    {
        text: 'GANs',
        category: 'ai',
        weight: 3
    },
    {
        text: 'Reinforcement Learning',
        category: 'ai',
        weight: 4
    },
    {
        text: 'NLP',
        category: 'ai',
        weight: 4
    },
    {
        text: 'LLMs',
        category: 'ai',
        weight: 5
    },
    {
        text: 'Hugging Face',
        category: 'ai',
        weight: 3
    },
    {
        text: 'Scikit-learn',
        category: 'ai',
        weight: 3
    },
    {
        text: 'OpenCV',
        category: 'ai',
        weight: 3
    },
    {
        text: 'YOLO',
        category: 'ai',
        weight: 3
    },
    {
        text: 'Attention',
        category: 'ai',
        weight: 3
    },
    {
        text: 'Backpropagation',
        category: 'ai',
        weight: 2
    },
    {
        text: 'Gradient Descent',
        category: 'ai',
        weight: 2
    },
    {
        text: 'Feature Extraction',
        category: 'ai',
        weight: 2
    },
    {
        text: 'Model Quantization',
        category: 'ai',
        weight: 2
    },
    // IoT / Embedded Systems
    {
        text: 'MQTT',
        category: 'iot',
        weight: 4
    },
    {
        text: 'ESP32',
        category: 'iot',
        weight: 5
    },
    {
        text: 'Arduino',
        category: 'iot',
        weight: 4
    },
    {
        text: 'Raspberry Pi',
        category: 'iot',
        weight: 4
    },
    {
        text: 'LoRaWAN',
        category: 'iot',
        weight: 3
    },
    {
        text: 'Zigbee',
        category: 'iot',
        weight: 3
    },
    {
        text: 'Edge Computing',
        category: 'iot',
        weight: 4
    },
    {
        text: 'Sensor Fusion',
        category: 'iot',
        weight: 3
    },
    {
        text: 'I2C',
        category: 'iot',
        weight: 2
    },
    {
        text: 'SPI',
        category: 'iot',
        weight: 2
    },
    {
        text: 'UART',
        category: 'iot',
        weight: 2
    },
    {
        text: 'PWM',
        category: 'iot',
        weight: 2
    },
    {
        text: 'FreeRTOS',
        category: 'iot',
        weight: 3
    },
    {
        text: 'Embedded C',
        category: 'iot',
        weight: 3
    },
    {
        text: 'CoAP',
        category: 'iot',
        weight: 2
    },
    {
        text: 'OTA Updates',
        category: 'iot',
        weight: 2
    },
    {
        text: 'GPIO',
        category: 'iot',
        weight: 2
    },
    {
        text: 'Bluetooth LE',
        category: 'iot',
        weight: 3
    },
    {
        text: 'WiFi Mesh',
        category: 'iot',
        weight: 3
    },
    // Systems / DevOps / Languages
    {
        text: 'Python',
        category: 'systems',
        weight: 5
    },
    {
        text: 'TypeScript',
        category: 'systems',
        weight: 4
    },
    {
        text: 'Rust',
        category: 'systems',
        weight: 3
    },
    {
        text: 'C++',
        category: 'systems',
        weight: 4
    },
    {
        text: 'Linux',
        category: 'systems',
        weight: 4
    },
    {
        text: 'Docker',
        category: 'systems',
        weight: 4
    },
    {
        text: 'Kubernetes',
        category: 'systems',
        weight: 3
    },
    {
        text: 'WebGL',
        category: 'systems',
        weight: 4
    },
    {
        text: 'Three.js',
        category: 'systems',
        weight: 4
    },
    {
        text: 'React',
        category: 'systems',
        weight: 4
    },
    {
        text: 'Next.js',
        category: 'systems',
        weight: 4
    },
    {
        text: 'Node.js',
        category: 'systems',
        weight: 3
    },
    {
        text: 'PostgreSQL',
        category: 'systems',
        weight: 3
    },
    {
        text: 'Redis',
        category: 'systems',
        weight: 2
    },
    {
        text: 'GraphQL',
        category: 'systems',
        weight: 3
    },
    {
        text: 'REST APIs',
        category: 'systems',
        weight: 3
    },
    {
        text: 'WebSockets',
        category: 'systems',
        weight: 3
    },
    {
        text: 'Git',
        category: 'systems',
        weight: 3
    },
    {
        text: 'CI/CD',
        category: 'systems',
        weight: 3
    },
    {
        text: 'AWS',
        category: 'systems',
        weight: 3
    },
    {
        text: 'GCP',
        category: 'systems',
        weight: 2
    },
    {
        text: 'Shell',
        category: 'systems',
        weight: 2
    },
    {
        text: 'WebGPU',
        category: 'systems',
        weight: 3
    }
];
const categoryColors = {
    ai: {
        color: '#00d4ff',
        glow: '0 0 40px rgba(0, 212, 255, 0.9)',
        label: 'AI/ML'
    },
    iot: {
        color: '#00ffc8',
        glow: '0 0 40px rgba(0, 255, 200, 0.9)',
        label: 'IoT'
    },
    systems: {
        color: '#8b5cf6',
        glow: '0 0 40px rgba(139, 92, 246, 0.9)',
        label: 'Systems'
    }
};
// Deterministic seeded random for consistent SSR/CSR
function seededRandom(seed) {
    return ()=>{
        seed = seed * 1103515245 + 12345 & 0x7fffffff;
        return seed / 0x7fffffff;
    };
}
function Skills() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wordsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const scrollTriggersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Generate word positions with useMemo for performance
    const wordData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Skills.useMemo[wordData]": ()=>{
            const random = seededRandom(42);
            return skillWords.map({
                "Skills.useMemo[wordData]": (word)=>{
                    // Calculate font size based on weight (1rem to 4rem)
                    const fontSize = 0.9 + word.weight / 5 * 3;
                    // Base opacity varies by depth (0.06 to 0.2)
                    const baseOpacity = 0.06 + random() * 0.14;
                    return {
                        ...word,
                        category: word.category,
                        fontSize,
                        baseOpacity,
                        rotation: (random() - 0.5) * 4
                    };
                }
            }["Skills.useMemo[wordData]"]);
        }
    }["Skills.useMemo[wordData]"], []);
    const setWordRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Skills.useCallback[setWordRef]": (el, index)=>{
            if (el) {
                wordsRef.current.set(index, el);
            } else {
                wordsRef.current.delete(index);
            }
        }
    }["Skills.useCallback[setWordRef]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Skills.useEffect": ()=>{
            const section = sectionRef.current;
            const container = containerRef.current;
            if (!section || !container) return;
            // Cleanup
            scrollTriggersRef.current.forEach({
                "Skills.useEffect": (st)=>st.kill()
            }["Skills.useEffect"]);
            scrollTriggersRef.current = [];
            const words = Array.from(wordsRef.current.values());
            // Set initial states
            words.forEach({
                "Skills.useEffect": (word, i)=>{
                    const data = wordData[i];
                    if (!data) return;
                    __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(word, {
                        opacity: 0,
                        y: 60 + Math.random() * 40
                    });
                }
            }["Skills.useEffect"]);
            // Entrance animation - staggered reveal
            const entranceSt = __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                trigger: section,
                start: 'top 80%',
                onEnter: {
                    "Skills.useEffect.entranceSt": ()=>{
                        words.forEach({
                            "Skills.useEffect.entranceSt": (word, i)=>{
                                const data = wordData[i];
                                if (!data) return;
                                __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(word, {
                                    opacity: data.baseOpacity,
                                    y: 0,
                                    duration: 1 + Math.random() * 0.5,
                                    delay: i * 0.02,
                                    ease: 'power3.out'
                                });
                            }
                        }["Skills.useEffect.entranceSt"]);
                    }
                }["Skills.useEffect.entranceSt"],
                onLeaveBack: {
                    "Skills.useEffect.entranceSt": ()=>{
                        words.forEach({
                            "Skills.useEffect.entranceSt": (word)=>{
                                __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(word, {
                                    opacity: 0,
                                    y: 40,
                                    duration: 0.4
                                });
                            }
                        }["Skills.useEffect.entranceSt"]);
                    }
                }["Skills.useEffect.entranceSt"]
            });
            scrollTriggersRef.current.push(entranceSt);
            // The "Scanning Light" effect - words glow as they enter viewport center
            const scanTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.3,
                onUpdate: {
                    "Skills.useEffect.scanTrigger": ()=>{
                        const viewportCenter = window.innerHeight / 2;
                        words.forEach({
                            "Skills.useEffect.scanTrigger": (word, i)=>{
                                const data = wordData[i];
                                if (!data || !word) return;
                                const wordRect = word.getBoundingClientRect();
                                const wordCenter = wordRect.top + wordRect.height / 2;
                                // Distance from viewport center (normalized 0-1)
                                const distanceFromCenter = Math.abs(wordCenter - viewportCenter) / (window.innerHeight * 0.5);
                                const proximity = Math.max(0, 1 - distanceFromCenter);
                                // Enhanced glow for words near center
                                const glowIntensity = proximity * proximity * proximity; // Cubic falloff for tighter focus
                                const targetOpacity = data.baseOpacity + (1 - data.baseOpacity) * glowIntensity * 0.9;
                                const targetScale = 1 + glowIntensity * 0.06;
                                __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(word, {
                                    opacity: targetOpacity,
                                    scale: targetScale,
                                    duration: 0.2,
                                    ease: 'power1.out',
                                    overwrite: 'auto'
                                });
                            }
                        }["Skills.useEffect.scanTrigger"]);
                    }
                }["Skills.useEffect.scanTrigger"]
            });
            scrollTriggersRef.current.push(scanTrigger);
            return ({
                "Skills.useEffect": ()=>{
                    scrollTriggersRef.current.forEach({
                        "Skills.useEffect": (st)=>st.kill()
                    }["Skills.useEffect"]);
                    scrollTriggersRef.current = [];
                }
            })["Skills.useEffect"];
        }
    }["Skills.useEffect"], [
        wordData
    ]);
    // Hover handlers
    const handleWordHover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Skills.useCallback[handleWordHover]": (index)=>{
            const word = wordsRef.current.get(index);
            const data = wordData[index];
            if (!word || !data) return;
            const colors = categoryColors[data.category];
            __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(word, {
                color: colors.color,
                textShadow: colors.glow,
                scale: 1.2,
                opacity: 1,
                duration: 0.25,
                ease: 'power2.out'
            });
            // Dispatch custom event for cursor
            window.dispatchEvent(new CustomEvent('skillHover', {
                detail: {
                    category: colors.label,
                    color: colors.color
                }
            }));
        }
    }["Skills.useCallback[handleWordHover]"], [
        wordData
    ]);
    const handleWordLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Skills.useCallback[handleWordLeave]": (index)=>{
            const word = wordsRef.current.get(index);
            const data = wordData[index];
            if (!word || !data) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(word, {
                color: '#f4f4f5',
                textShadow: 'none',
                scale: 1,
                opacity: data.baseOpacity,
                duration: 0.35,
                ease: 'power2.out'
            });
            // Clear cursor
            window.dispatchEvent(new CustomEvent('skillHover', {
                detail: {
                    category: '',
                    color: ''
                }
            }));
        }
    }["Skills.useCallback[handleWordLeave]"], [
        wordData
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "skills",
        className: "relative min-h-screen section-spacing overflow-hidden",
        "data-section": "skills",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0b0d10] to-transparent z-10"
                    }, void 0, false, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/SkillsSection.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0d10] to-transparent z-10"
                    }, void 0, false, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/SkillsSection.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[radial-gradient(ellipse_120%_30%_at_50%_50%,rgba(0,212,255,0.04)_0%,transparent_60%)] pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/SkillsSection.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/SkillsSection.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container relative z-20 mb-16 lg:mb-20 max-w-5xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "section-label inline-flex items-center gap-3 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-12 h-px bg-gradient-to-r from-[#00d4ff] to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/SkillsSection.tsx",
                                    lineNumber: 290,
                                    columnNumber: 13
                                }, this),
                                "Technical Depth"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/SkillsSection.tsx",
                            lineNumber: 289,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: [
                                "The Stack That",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/SkillsSection.tsx",
                                    lineNumber: 295,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gradient",
                                    children: "Powers Innovation"
                                }, void 0, false, {
                                    fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/SkillsSection.tsx",
                                    lineNumber: 296,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/SkillsSection.tsx",
                            lineNumber: 293,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "section-description mt-6 mx-auto text-center",
                            children: "A constellation of technologies mastered through building real systems— from neural architectures to embedded firmware, from cloud infrastructure to real-time graphics."
                        }, void 0, false, {
                            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/SkillsSection.tsx",
                            lineNumber: 298,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/SkillsSection.tsx",
                    lineNumber: 288,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/SkillsSection.tsx",
                lineNumber: 287,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "relative w-full min-h-[70vh] flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "skill-wall relative max-w-5xl mx-auto px-4 md:px-8 lg:px-12 text-center",
                    children: wordData.map((word, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            ref: (el)=>setWordRef(el, index),
                            className: "skill-word relative cursor-default select-none font-semibold tracking-tight text-[#f4f4f5] transition-colors will-change-transform whitespace-normal break-words",
                            style: {
                                fontSize: `clamp(${word.fontSize * 0.5}rem, ${word.fontSize * 0.8}vw, ${word.fontSize}rem)`,
                                transform: `rotate(${word.rotation}deg)`
                            },
                            "data-category": word.category,
                            "data-cursor-text": categoryColors[word.category].label,
                            onMouseEnter: ()=>handleWordHover(index),
                            onMouseLeave: ()=>handleWordLeave(index),
                            children: word.text
                        }, `${word.text}-${index}`, false, {
                            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/SkillsSection.tsx",
                            lineNumber: 313,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/SkillsSection.tsx",
                    lineNumber: 311,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/SkillsSection.tsx",
                lineNumber: 307,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/3 -left-40 w-80 h-80 bg-[#00d4ff]/5 rounded-full blur-[120px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/SkillsSection.tsx",
                lineNumber: 333,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-1/3 -right-40 w-80 h-80 bg-[#8b5cf6]/5 rounded-full blur-[120px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/SkillsSection.tsx",
                lineNumber: 334,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-2/3 left-1/4 w-60 h-60 bg-[#00ffc8]/3 rounded-full blur-[100px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/SkillsSection.tsx",
                lineNumber: 335,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/SkillsSection.tsx",
        lineNumber: 271,
        columnNumber: 5
    }, this);
}
_s(Skills, "PNaQJEDRCIrrU+ev0oL/ydUo2Ak=");
_c = Skills;
var _c;
__turbopack_context__.k.register(_c, "Skills");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/SkillsSection.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/src/components/sections/SkillsSection.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=9d29e_portfolio_kamal-portfolio_src_components_sections_SkillsSection_tsx_769c98c0._.js.map