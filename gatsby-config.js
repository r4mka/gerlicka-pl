module.exports = {
  siteMetadata: {
    title: `Klaudia Gerlicka Make-Up and Brows`,
    siteUrl: `https://www.gerlicka.pl`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Klaudia Gerlicka Make-Up and Brows',
        short_name: 'Klaudia Gerlicka Make-Up',
        start_url: '/',
        background_color: '#F0E7DE',
        theme_color: '#F0E7DE',
        icon: 'src/images/icon.png',
      },
    },
    `gatsby-plugin-emotion`,
  ],
};
