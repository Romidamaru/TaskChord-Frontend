export default defineNuxtConfig({
  typescript: {
      strict: true,
  },

  app: {
      head: {
          title: 'TaskChord',
          meta: [
              { name: 'description', content: 'Task management application' },
          ],
      },
  },

  compatibilityDate: '2024-12-09',
});