export default [{
        path: '/',
        name: 'landing-page',
        component: require('components/LandingPageView')
    },
    {
        path: '*',
        redirect: '/'
    },
    {
        path: "/page1",
        component: function(resolve) {
            require(["components/Page1"], resolve);
        }
    },
    {
        path: "/page2",
        component: function(resolve) {
            require(["components/Page2"], resolve);
        }
    },
]