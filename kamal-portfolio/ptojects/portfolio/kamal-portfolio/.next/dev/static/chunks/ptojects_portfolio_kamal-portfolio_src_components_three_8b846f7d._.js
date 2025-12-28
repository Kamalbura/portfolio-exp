(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/ptojects/portfolio/kamal-portfolio/src/components/three/CoreOrb.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CoreOrb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/@react-three/fiber/dist/events-1eccaf1c.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/@react-three/drei/core/shapes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$MeshTransmissionMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/@react-three/drei/core/MeshTransmissionMaterial.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function CoreOrb() {
    _s();
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const glowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ringRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const innerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pointRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "CoreOrb.useFrame": (state)=>{
            if (meshRef.current) {
                meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
                meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
            }
            if (glowRef.current) {
                glowRef.current.rotation.y = -state.clock.elapsedTime * 0.1;
                const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
                glowRef.current.scale.setScalar(scale);
            }
            if (ringRef.current) {
                ringRef.current.rotation.x = state.clock.elapsedTime * 0.5;
                ringRef.current.rotation.y = state.clock.elapsedTime * 0.2;
            }
            // subtle pulsing inner glow
            if (innerRef.current) {
                const pulse = 0.5 + Math.abs(Math.sin(state.clock.elapsedTime * 2)) * 0.8;
                innerRef.current.material.emissiveIntensity = pulse;
                innerRef.current.material.emissive = new __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]('#00d4ff');
            }
        }
    }["CoreOrb.useFrame"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CoreOrb.useEffect": ()=>{
            const onSkill = {
                "CoreOrb.useEffect.onSkill": (e)=>{
                    const ev = e;
                    if (ev.detail?.category) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(pointRef.current || {}, {
                            intensity: 3.2,
                            duration: 0.45,
                            ease: 'power2.out'
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(meshRef.current?.scale || {}, {
                            x: 1.4,
                            y: 1.4,
                            z: 1.4,
                            duration: 0.6,
                            ease: 'expo.out'
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(innerRef.current?.scale || {}, {
                            x: 1.2,
                            y: 1.2,
                            z: 1.2,
                            duration: 0.6,
                            ease: 'expo.out'
                        });
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(pointRef.current || {}, {
                            intensity: 1.6,
                            duration: 0.45,
                            ease: 'power2.out'
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(meshRef.current?.scale || {}, {
                            x: 1,
                            y: 1,
                            z: 1,
                            duration: 0.6,
                            ease: 'expo.out'
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(innerRef.current?.scale || {}, {
                            x: 1,
                            y: 1,
                            z: 1,
                            duration: 0.6,
                            ease: 'expo.out'
                        });
                    }
                }
            }["CoreOrb.useEffect.onSkill"];
            window.addEventListener('skillHover', onSkill);
            return ({
                "CoreOrb.useEffect": ()=>window.removeEventListener('skillHover', onSkill)
            })["CoreOrb.useEffect"];
        }
    }["CoreOrb.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: meshRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            3,
                            128,
                            128
                        ]
                    }, void 0, false, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/CoreOrb.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$MeshTransmissionMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshTransmissionMaterial"], {
                        color: "#0b1220",
                        thickness: 1.8,
                        chromaticAberration: 0.04,
                        anisotropy: 0.1,
                        roughness: 0.02,
                        ior: 1.6,
                        transmission: 0.95,
                        samples: 10
                    }, void 0, false, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/CoreOrb.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/CoreOrb.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sphere"], {
                ref: glowRef,
                args: [
                    3.6,
                    32,
                    32
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                    color: "#00d4ff",
                    transparent: true,
                    opacity: 0.06,
                    side: __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackSide"]
                }, void 0, false, {
                    fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/CoreOrb.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/CoreOrb.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: innerRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            1.1,
                            64,
                            64
                        ]
                    }, void 0, false, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/CoreOrb.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        emissive: "#00d4ff",
                        emissiveIntensity: 0.8,
                        metalness: 0.3,
                        roughness: 0.2
                    }, void 0, false, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/CoreOrb.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/CoreOrb.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                ref: ringRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("torusGeometry", {
                        args: [
                            5,
                            0.05,
                            16,
                            100
                        ]
                    }, void 0, false, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/CoreOrb.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#00ffcc",
                        transparent: true,
                        opacity: 0.5
                    }, void 0, false, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/CoreOrb.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/CoreOrb.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                rotation: [
                    Math.PI / 2,
                    0,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("torusGeometry", {
                        args: [
                            6,
                            0.03,
                            16,
                            100
                        ]
                    }, void 0, false, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/CoreOrb.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#00ff88",
                        transparent: true,
                        opacity: 0.3
                    }, void 0, false, {
                        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/CoreOrb.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/CoreOrb.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                ref: pointRef,
                position: [
                    0,
                    0,
                    0
                ],
                intensity: 2,
                color: "#00d4ff",
                distance: 40
            }, void 0, false, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/CoreOrb.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/CoreOrb.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(CoreOrb, "fMNlLuN2Pu/MsGr4iM46qUV5omU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = CoreOrb;
var _c;
__turbopack_context__.k.register(_c, "CoreOrb");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ptojects/portfolio/kamal-portfolio/src/components/three/GlobalScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlobalScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/@react-three/fiber/dist/events-1eccaf1c.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/@react-three/fiber/dist/events-1eccaf1c.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/@react-three/drei/core/Environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/@react-three/drei/core/Float.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$src$2f$components$2f$three$2f$CoreOrb$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/src/components/three/CoreOrb.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$src$2f$components$2f$providers$2f$SmoothScrollProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/src/components/providers/SmoothScrollProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
// Adaptive particle count based on device capability
function useAdaptiveParticleCount() {
    _s();
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5000);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAdaptiveParticleCount.useEffect": ()=>{
            const isMobile = window.innerWidth < 768;
            const isLowEnd = window.innerWidth < 768 || typeof navigator !== 'undefined' && navigator.hardwareConcurrency <= 4;
            setCount(isMobile ? 2000 : isLowEnd ? 3500 : 5000);
        }
    }["useAdaptiveParticleCount.useEffect"], []);
    return count;
}
_s(useAdaptiveParticleCount, "lowWM2k7aeXE3FE2nkq3BGr/plI=");
// Particle Field Component
function ParticleField() {
    _s1();
    const pointsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const count = useAdaptiveParticleCount();
    const geometry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ParticleField.useMemo[geometry]": ()=>{
            const positions = new Float32Array(count * 3);
            const colors = new Float32Array(count * 3);
            const sizes = new Float32Array(count);
            for(let i = 0; i < count; i++){
                const i3 = i * 3;
                const radius = 30 + Math.random() * 70;
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos(2 * Math.random() - 1);
                positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
                positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
                positions[i3 + 2] = radius * Math.cos(phi);
                // Color gradient: AI Blue -> IoT Teal -> Systems Violet
                const colorChoice = Math.random();
                if (colorChoice < 0.4) {
                    colors[i3] = 0;
                    colors[i3 + 1] = 0.83;
                    colors[i3 + 2] = 1;
                } else if (colorChoice < 0.7) {
                    colors[i3] = 0;
                    colors[i3 + 1] = 1;
                    colors[i3 + 2] = 0.78;
                } else {
                    colors[i3] = 0.545;
                    colors[i3 + 1] = 0.361;
                    colors[i3 + 2] = 0.965;
                }
                sizes[i] = Math.random() * 2 + 0.5;
            }
            const geo = new __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            geo.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](positions, 3));
            geo.setAttribute('color', new __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](colors, 3));
            geo.setAttribute('size', new __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](sizes, 1));
            return geo;
        }
    }["ParticleField.useMemo[geometry]"], [
        count
    ]);
    // Cleanup geometry on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticleField.useEffect": ()=>{
            return ({
                "ParticleField.useEffect": ()=>{
                    geometry.dispose();
                }
            })["ParticleField.useEffect"];
        }
    }["ParticleField.useEffect"], [
        geometry
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "ParticleField.useFrame": (state)=>{
            if (pointsRef.current) {
                pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015;
                pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.05;
            }
        }
    }["ParticleField.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
        ref: pointsRef,
        geometry: geometry,
        frustumCulled: false,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointsMaterial", {
            size: 0.15,
            vertexColors: true,
            transparent: true,
            opacity: 0.4,
            blending: __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
            depthWrite: false,
            sizeAttenuation: true
        }, void 0, false, {
            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/GlobalScene.tsx",
            lineNumber: 87,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/GlobalScene.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s1(ParticleField, "8CLOdkCD0hHPyPd54m1Mc0+sY20=", false, function() {
    return [
        useAdaptiveParticleCount,
        __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = ParticleField;
// Use externally defined CoreOrb (upgraded crystalline transmission material)
// Camera Controller
const SECTION_COUNT = 6;
const cameraKeyframes = [
    {
        x: 0,
        y: 0,
        z: 30
    },
    {
        x: 4,
        y: 2,
        z: 22
    },
    {
        x: -6,
        y: 1,
        z: 20
    },
    {
        x: 0,
        y: -2,
        z: 32
    },
    {
        x: 2,
        y: 3,
        z: 26
    },
    {
        x: 0,
        y: 5,
        z: 24
    }
];
function CameraController() {
    _s2();
    const { camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const { getScrollProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$src$2f$components$2f$providers$2f$SmoothScrollProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSmoothScroll"])();
    const targetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0,
        z: 30
    });
    const overrideRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Listen for skill hover events to trigger camera zoom-in narrative
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CameraController.useEffect": ()=>{
            const onSkill = {
                "CameraController.useEffect.onSkill": (e)=>{
                    const ev = e;
                    if (ev.detail?.category) {
                        overrideRef.current = {
                            x: -3.5,
                            y: 0.5,
                            z: 16
                        };
                    } else {
                        overrideRef.current = null;
                    }
                }
            }["CameraController.useEffect.onSkill"];
            window.addEventListener('skillHover', onSkill);
            return ({
                "CameraController.useEffect": ()=>window.removeEventListener('skillHover', onSkill)
            })["CameraController.useEffect"];
        }
    }["CameraController.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "CameraController.useFrame": ()=>{
            const absoluteProgress = getScrollProgress() * Math.max(1, SECTION_COUNT - 1);
            const lowerIndex = Math.floor(absoluteProgress);
            const upperIndex = Math.min(cameraKeyframes.length - 1, lowerIndex + 1);
            const blend = absoluteProgress - lowerIndex;
            const lower = cameraKeyframes[lowerIndex] ?? cameraKeyframes[0];
            const upper = cameraKeyframes[upperIndex] ?? cameraKeyframes[cameraKeyframes.length - 1];
            targetRef.current = {
                x: __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(lower.x, upper.x, blend),
                y: __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(lower.y, upper.y, blend),
                z: __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(lower.z, upper.z, blend)
            };
            // If override is active, use it
            const activeTarget = overrideRef.current ?? targetRef.current;
            // Smooth camera movement (reduced lerp for buttery smooth motion)
            camera.position.x += (activeTarget.x - camera.position.x) * 0.02;
            camera.position.y += (activeTarget.y - camera.position.y) * 0.02;
            camera.position.z += (activeTarget.z - camera.position.z) * 0.02;
            camera.lookAt(0, 0, 0);
        }
    }["CameraController.useFrame"]);
    return null;
}
_s2(CameraController, "uz5Vdpb7aP7hFtetQ/3kBHZk28E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$src$2f$components$2f$providers$2f$SmoothScrollProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSmoothScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = CameraController;
// Scene Content
function SceneContent() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                intensity: 0.3
            }, void 0, false, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/GlobalScene.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                position: [
                    10,
                    10,
                    10
                ],
                intensity: 1,
                color: "#00d4ff"
            }, void 0, false, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/GlobalScene.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                position: [
                    -10,
                    -10,
                    -10
                ],
                intensity: 0.5,
                color: "#8b5cf6"
            }, void 0, false, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/GlobalScene.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("spotLight", {
                position: [
                    0,
                    20,
                    0
                ],
                angle: 0.3,
                penumbra: 1,
                intensity: 0.5,
                color: "#00ffc8"
            }, void 0, false, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/GlobalScene.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParticleField, {}, void 0, false, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/GlobalScene.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Float$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float"], {
                speed: 1.5,
                rotationIntensity: 0.2,
                floatIntensity: 0.5,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$src$2f$components$2f$three$2f$CoreOrb$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/GlobalScene.tsx",
                    lineNumber: 179,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/GlobalScene.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CameraController, {}, void 0, false, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/GlobalScene.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"], {
                preset: "night"
            }, void 0, false, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/GlobalScene.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c2 = SceneContent;
// Loading Fallback
function SceneLoader() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                args: [
                    1,
                    16,
                    16
                ]
            }, void 0, false, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/GlobalScene.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                color: "#00d4ff",
                wireframe: true
            }, void 0, false, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/GlobalScene.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/GlobalScene.tsx",
        lineNumber: 191,
        columnNumber: 5
    }, this);
}
_c3 = SceneLoader;
function GlobalScene() {
    _s3();
    const [dpr, setDpr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        1,
        2
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobalScene.useEffect": ()=>{
            const isMobile = window.innerWidth < 768;
            const isLowEnd = typeof navigator !== 'undefined' && navigator.hardwareConcurrency <= 4;
            // Adaptive DPR: mobile gets 1, desktop gets up to 2
            setDpr(isMobile || isLowEnd ? [
                1,
                1
            ] : [
                1,
                2
            ]);
        }
    }["GlobalScene.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "global-canvas",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            camera: {
                position: [
                    0,
                    0,
                    30
                ],
                fov: 60
            },
            gl: {
                antialias: !window.matchMedia('(max-width: 768px)').matches,
                alpha: true,
                powerPreference: 'high-performance'
            },
            dpr: dpr,
            frameloop: "always",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SceneLoader, {}, void 0, false, {
                    fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/GlobalScene.tsx",
                    lineNumber: 222,
                    columnNumber: 29
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ptojects$2f$portfolio$2f$kamal$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SceneContent, {}, void 0, false, {
                    fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/GlobalScene.tsx",
                    lineNumber: 223,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/GlobalScene.tsx",
                lineNumber: 222,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/GlobalScene.tsx",
            lineNumber: 212,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/ptojects/portfolio/kamal-portfolio/src/components/three/GlobalScene.tsx",
        lineNumber: 211,
        columnNumber: 5
    }, this);
}
_s3(GlobalScene, "ynt42Xzecjymarn6l4d5f2m9BR4=");
_c4 = GlobalScene;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "ParticleField");
__turbopack_context__.k.register(_c1, "CameraController");
__turbopack_context__.k.register(_c2, "SceneContent");
__turbopack_context__.k.register(_c3, "SceneLoader");
__turbopack_context__.k.register(_c4, "GlobalScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ptojects/portfolio/kamal-portfolio/src/components/three/GlobalScene.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/ptojects/portfolio/kamal-portfolio/src/components/three/GlobalScene.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=ptojects_portfolio_kamal-portfolio_src_components_three_8b846f7d._.js.map