

export default () => {
    return {
        version: '3.3',
        services: {
            nginx: {
                build: {
                    context: '.',
                    dockerfile: 'Dockerfile',
                },
            },
        },
    };
};
