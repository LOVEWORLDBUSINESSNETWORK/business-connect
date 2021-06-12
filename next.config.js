module.exports ={
    experimental: {
        async redirects(){
            return [
                { source: '/', destination: '/connect-home', permanent: true }, 
            ];
        },
    },
};