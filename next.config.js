module.exports = {
  async headers() {
    return [
      {
        source: '/about',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
};
