define(function () {
    /**
     * Definitions of the paths and app dependences.
     * (Config placed in a separated file to allow test load the same require configuration)
     */
    require.config({
        paths: {
            'class': 'core/class.inheritance',
            'jquery': '../lib/jquery.min',
        },
        shim: {
            'class': {
                exports: 'Class'
            },
        },
        waitSeconds: 20
    });
});