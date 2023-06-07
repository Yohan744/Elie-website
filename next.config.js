module.exports = {
    webpack: (config) => {
        const fileLoaderRule = config.module.rules.find(
            rule => rule.test && rule.test.test('.svg'));

        fileLoaderRule.exclude = /\.svg$/;

        config.module.rules.push({
            test: /\.svg$/i,
            use: ['@svgr/webpack']
        })

        return config;

    }
}