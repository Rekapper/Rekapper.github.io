/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bird2',
                            type: 'image',
                            rect: ['93px', '-7px', '225px', '150px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bird2.png",'0px','0px']
                        },
                        {
                            id: 'Rocket_cat_cropped',
                            type: 'image',
                            rect: ['-85px', '-8px', '258px', '177px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Rocket_cat_cropped.jpg",'0px','0px']
                        },
                        {
                            id: 'WBird',
                            type: 'image',
                            rect: ['862px', '118px', '133px', '209px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"WBird.png",'0px','0px']
                        },
                        {
                            id: 'Dog',
                            type: 'image',
                            rect: ['194px', '22px', '208px', '201px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Dog.png",'0px','0px']
                        },
                        {
                            id: 'Subtitle',
                            type: 'text',
                            rect: ['546px', '108px', '354px', '42px', 'auto', 'auto'],
                            text: "Only the best in stock",
                            align: "center",
                            font: ['Tahoma, Geneva, sans-serif', [30, "px"], "rgba(0,0,0,1)", "700", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'TitleText',
                            type: 'text',
                            rect: ['270px', '0px', '368px', '68px', 'auto', 'auto'],
                            text: "Best Pets",
                            align: "center",
                            font: ['Tahoma, Geneva, sans-serif', [50, "px"], "rgba(0,0,0,1)", "700", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '150px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid19",
                            "location",
                            0,
                            2820,
                            "swing",
                            "${WBird}",
                            [[928.62, 222.56, 0, 0, 0, 0,0],[772.94, 104.44, 0, 0, 0, 0,195.42]]
                        ],
                        [
                            "eid20",
                            "location",
                            2820,
                            785,
                            "swing",
                            "${WBird}",
                            [[772.51, 104.5, 0, 0, 0, 0,0],[642.5, 110.06, 0, 0, 0, 0,130.13]]
                        ],
                        [
                            "eid11",
                            "location",
                            0,
                            3000,
                            "easeInSine",
                            "${bird2}",
                            [[1027.9, 12.13, 0, 0, 0, 0,0],[855.85, 76.76, -68.84, 7.71, -264.27, 29.6,185.14],[728.9, 29.64, -459.54, 23.65, -73.21, 3.77,321.3],[463.83, 75.31, 0, 0, 0, 0,590.93]]
                        ],
                        [
                            "eid24",
                            "top",
                            0,
                            4000,
                            "swing",
                            "${Dog}",
                            '22px',
                            '-8px'
                        ],
                        [
                            "eid23",
                            "left",
                            0,
                            4000,
                            "swing",
                            "${Dog}",
                            '194px',
                            '700px'
                        ],
                        [
                            "eid14",
                            "left",
                            0,
                            3000,
                            "easeInElastic",
                            "${Rocket_cat_cropped}",
                            '-85px',
                            '642px'
                        ],
                        [
                            "eid16",
                            "left",
                            3000,
                            1000,
                            "easeInElastic",
                            "${Rocket_cat_cropped}",
                            '642px',
                            '900px'
                        ],
                        [
                            "eid5",
                            "location",
                            0,
                            2000,
                            "easeInSine",
                            "${Subtitle}",
                            [[723, 129.06, 0, 0, 0, 0,0],[468.71, 95.76, -452.3, -2.63, -337.73, -1.96,256.87],[185, 125.94, 0, 0, 0, 0,542.7]]
                        ],
                        [
                            "eid8",
                            "left",
                            0,
                            2000,
                            "easeInSine",
                            "${TitleText}",
                            '270px',
                            '8px'
                        ],
                        [
                            "eid17",
                            "top",
                            4000,
                            0,
                            "easeInElastic",
                            "${Rocket_cat_cropped}",
                            '-8px',
                            '-8px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Petstorev3_edgeActions.js");
})("EDGE-29529260");
