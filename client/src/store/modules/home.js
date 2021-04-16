const Home = {
    state: {
        headerTop: {
            featuredProject: 'Test one',
            location: 'Ain Shams - Egypt'
        },
        headerContent: {
            left: {
                type: 'leftSlider',
                title: '01.Civil',
                content: 'Award winning civil contractors that partner with all levels of government.',
                play: true,
                img: 'header1.jpg',
                active: true
            },
            right: {
                type: 'rightSlider',
                title: '02.Build',
                content: 'Commercial builders with pride – workmanship that values quality.',
                play: false,
                img: 'header2.jpg',
                active: false
            }
        }
    },
    getters: {
        headerTop(state) {
            return state.headerTop
        },
        headerContent(state) {
            return state.headerContent
        }
    },
    mutations: {
    },
    actions: {
    },
};

export default Home;
