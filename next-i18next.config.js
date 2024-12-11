// next-i18next.config.js

module.exports = {
    i18n: {
      locales: ['en', 'fr'], // Languages you want to support
      defaultLocale: 'en',    // Default language
    },
    react: {
      useSuspense: false,  // Set to false if you want to avoid Suspense issues
    },
  };
  