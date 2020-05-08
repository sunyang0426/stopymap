var config = {
    style: 'mapbox://styles/mapbox/dark-v10',
    accessToken: 'pk.eyJ1Ijoic3VueWFuZzA0MjYiLCJhIjoiY2s5a2JqN2hoMGZ2aDNkczFqOWt2Z3hyaCJ9.s_LZtXFv94iOkufYiMT8gg',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'beijing',
            title: '',
            image: 'images/beijing.jpg',
            description: 'I\'ve spent ten years living in Beijing, and had some of my best days there.',
            location: {
                center: [116.41752, 39.94204],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [ ],
            onChapterExit: []
        },
        {
            id: 'missouri',
            title: '',
            image: 'images/mizzou.jpg',
            description: 'I moved to Missouri in 2015 for graduate school. Not the best place for a woman of color, but I still enjoyed my days there.',
            location: {
                center: [-92.28431, 38.93338],
                zoom: 10.22,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'dc',
            title: '',
            image: 'images/dc.jpg',
            description: 'After graduate school, I accepted a journalism fellowship to work in a non-profit investigtive news organization in Washington D.C. Living in Washington D.C. as a journalist during Trump Administration was full of excitment and disappointment.',
            location: {
                center: [-77.05877, 38.85676],
                zoom: 10.22,
                pitch: 0,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'toronto',
            title: '',
            image: 'images/toronto.jpg',
            description: 'I now reside in the north shore of Lake Ontario. Toronto may not be the most exciting city I have ever visited, but its inclusiveness and diversity make me feel at home.',
            location: {
                center: [-79.37638, 43.70809],
                zoom: 10.22,
                pitch: 0,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        },

    ]
};
