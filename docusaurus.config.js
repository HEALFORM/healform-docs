/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'HEALFORM Support',
    tagline: 'Die coole Therapie.',
    url: 'https://support.healform.de',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/logo.svg',
    organizationName: 'HEALFORM',
    projectName: 'healform',
    plugins: ['@ionic-internal/docusaurus-plugin-tag-manager', '@chatwoot/docusaurus-plugin'],
    themeConfig: {
        prism: {
            additionalLanguages: ['java', 'csharp', 'ruby', 'rust', 'swift', 'dart', 'php'],
        },
        chatwoot: {
            websiteToken: "esD6qmc4MUrJ7hJQQEk69CHM",
            baseURL: "https://chat.healform.de",
            enableInDevelopment: true
        },
        /*
        typesense: {
            typesenseCollectionName: 'flagsmith-docs',
            typesenseServerConfig: {
                apiKey: 'OY1ZDfWfrqSPcioQKuMP7hDd4o99BzKnhIVSOIP3nvn1GUih',
                nodes: [
                    {
                        host: 'typesense.flagsmith.com',
                        port: 443,
                        protocol: 'https',
                    },
                ],
            },
        },
        */
        algolia: {
            // The application ID provided by Algolia
            appId: 'GZAPCBLIEE',
            // Public API key: it is safe to commit it
            apiKey: '00987f2d774d7787dcae25294463294c',
            indexName: 'flagsmith',
        },
        tagManager: {
            trackingID: 'GTM-5ZV5K5G',
        },
        navbar: {
            title: 'HEALFORM',
            logo: {
                alt: 'HEALFORM Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: 'Support',
                },
                {
                    href: 'https://healform.de',
                    label: 'HEALFORM.de',
                    position: 'left',
                },
                {
                    href: 'https://github.com/flagsmith/flagsmith',
                    label: 'GitHub',
                    position: 'left',
                },
                {
                    label: 'Discord',
                    href: 'https://discord.gg/hFhxNtXzgm',
                    position: 'left',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'HEALFORM',
                    items: [
                        {
                            label: 'HEALFORM.de',
                            to: 'https://healform.de/',
                        },
                        {
                            label: 'Facebook',
                            href: 'https://facebook.com/healform',
                        },
                    ],
                },
                {
                    title: 'Open Source',
                    items: [
                        {
                            label: 'Github',
                            href: 'https://github.com/HEALFORM',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/hFhxNtXzgm',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: 'https://flagsmith.com/blog/',
                        },
                        {
                            label: 'Podcast',
                            href: 'https://flagsmith.com/podcast/',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} HEALFORM GmbH. Built with Docusaurus.`,
        },
        announcementBar: {
            id: 'support_us',
            content: `If you like Flagsmith, give us a star 🌟 on <a target="_blank" rel="noopener noreferrer" href="https://github.com/Flagsmith/flagsmith">GitHub</a> and follow us ❤️ on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/getflagsmith">Twitter</a>`,
            backgroundColor: '#ff0000',
            textColor: '#ffffff',
            isCloseable: true,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/',
                    // Please change this to your repo.
                    editUrl: 'https://github.com/flagsmith/flagsmith-docs/tree/main',
                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    i18n: {
        defaultLocale: 'de',
        locales: ['de'],
        localeConfigs: {
            de: {
                label: 'Deutsch',
                direction: 'ltr',
            },
        },
    },
};
