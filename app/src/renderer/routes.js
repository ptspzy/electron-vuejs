export default [
    {
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
        component: function (resolve) {
            require(["components/Page1"], resolve);
        }
    },
]
