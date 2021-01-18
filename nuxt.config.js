export default {
	ssr: false, // Serve Side Rende: false or true
	srcDir: 'src/', // Path source directory
  // Bootstrap started!
  css: [
    "bootstrap/dist/css/bootstrap-reboot.min.css",
    "bootstrap/dist/css/bootstrap-grid.min.css",
    "bootstrap/dist/css/bootstrap-utilities.min.css"
  ],
	head: {
    titleTemplate: '%s - Template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: 'description', name: 'description', content: 'Template started!' },
      { hid: 'keydwords', name: 'keydwords', content: 'NuxtJS, Template' },
      { hid: 'author', name: 'author', content: 'Walisson Aguirra' },
    ]
  }
}