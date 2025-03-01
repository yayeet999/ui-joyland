// Data for button components
export const buttons = [
  { 
    id: 1, 
    name: "Facebook Auth Button", 
    code: "<button class=\"facebook-auth-btn\">\n  <div class=\"facebook-icon-wrapper\">\n    <svg class=\"facebook-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n      <path fill=\"#ffffff\" d=\"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z\"/>\n    </svg>\n  </div>\n  <span class=\"button-text\">Sign in with Facebook</span>\n</button>",
    html: "<button class=\"facebook-auth-btn\">\n  <div class=\"facebook-icon-wrapper\">\n    <svg class=\"facebook-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n      <path fill=\"#ffffff\" d=\"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z\"/>\n    </svg>\n  </div>\n  <span class=\"button-text\">Sign in with Facebook</span>\n</button>",
    css: ".facebook-auth-btn {\n  width: 240px;\n  height: 42px;\n  background-color: #1877F2;\n  border-radius: 4px;\n  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  border: none;\n  position: relative;\n}\n\n.facebook-auth-btn:active {\n  background-color: #0b5fcc;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);\n  transform: translateY(1px);\n}\n\n.facebook-auth-btn:hover {\n  background-color: #166fe5;\n  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);\n}\n\n.facebook-icon-wrapper {\n  position: absolute;\n  left: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.facebook-icon {\n  width: 20px;\n  height: 20px;\n}\n\n.button-text {\n  margin-left: 30px;\n  color: white;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  letter-spacing: 0.2px;\n}",
    type: "social"
  },
  { 
    id: 2, 
    name: "X Auth Button", 
    code: "<button class=\"x-auth-btn\">\n  <div class=\"x-icon-wrapper\">\n    <svg class=\"x-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n      <path fill=\"#ffffff\" d=\"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z\"/>\n    </svg>\n  </div>\n  <span class=\"button-text\">Sign in with X</span>\n</button>",
    html: "<button class=\"x-auth-btn\">\n  <div class=\"x-icon-wrapper\">\n    <svg class=\"x-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n      <path fill=\"#ffffff\" d=\"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z\"/>\n    </svg>\n  </div>\n  <span class=\"button-text\">Sign in with X</span>\n</button>",
    css: ".x-auth-btn {\n  width: 240px;\n  height: 42px;\n  background-color: #000000;\n  border-radius: 4px;\n  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  border: none;\n  position: relative;\n}\n\n.x-auth-btn:active {\n  background-color: #333333;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);\n  transform: translateY(1px);\n}\n\n.x-auth-btn:hover {\n  background-color: #222222;\n  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);\n}\n\n.x-icon-wrapper {\n  position: absolute;\n  left: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.x-icon {\n  width: 18px;\n  height: 18px;\n}\n\n.button-text {\n  color: white;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  letter-spacing: 0.2px;\n}",
    type: "social"
  },
  { 
    id: 3, 
    name: "Github Auth Button", 
    code: "<button class=\"github-auth-btn\">\n  <div class=\"github-icon-wrapper\">\n    <svg class=\"github-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n      <path fill=\"#ffffff\" d=\"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z\"/>\n    </svg>\n  </div>\n  <span class=\"button-text\">Sign in with GitHub</span>\n</button>",
    html: "<button class=\"github-auth-btn\">\n  <div class=\"github-icon-wrapper\">\n    <svg class=\"github-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n      <path fill=\"#ffffff\" d=\"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z\"/>\n    </svg>\n  </div>\n  <span class=\"button-text\">Sign in with GitHub</span>\n</button>",
    css: ".github-auth-btn {\n  width: 240px;\n  height: 42px;\n  background-color: #24292e;\n  border-radius: 6px;\n  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  border: none;\n  position: relative;\n}\n\n.github-auth-btn:active {\n  background-color: #1a1e22;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);\n  transform: translateY(1px);\n}\n\n.github-auth-btn:hover {\n  background-color: #2b3137;\n  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);\n}\n\n.github-icon-wrapper {\n  position: absolute;\n  left: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.github-icon {\n  width: 20px;\n  height: 20px;\n}\n\n.button-text {\n  color: white;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  letter-spacing: 0.2px;\n}",
    type: "social"
  },
  { 
    id: 4, 
    name: "Google Auth Button", 
    code: "<button class=\"google-auth-btn\">\n  <div class=\"google-icon-wrapper\">\n    <svg class=\"google-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\">\n      <path fill=\"#EA4335\" d=\"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z\"/>\n      <path fill=\"#4285F4\" d=\"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z\"/>\n      <path fill=\"#FBBC05\" d=\"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z\"/>\n      <path fill=\"#34A853\" d=\"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z\"/>\n    </svg>\n  </div>\n  <span class=\"button-text\">Sign in with Google</span>\n</button>",
    html: "<button class=\"google-auth-btn\">\n  <div class=\"google-icon-wrapper\">\n    <svg class=\"google-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\">\n      <path fill=\"#EA4335\" d=\"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z\"/>\n      <path fill=\"#4285F4\" d=\"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z\"/>\n      <path fill=\"#FBBC05\" d=\"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z\"/>\n      <path fill=\"#34A853\" d=\"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z\"/>\n    </svg>\n  </div>\n  <span class=\"button-text\">Sign in with Google</span>\n</button>",
    css: ".google-auth-btn {\n  width: 240px;\n  height: 42px;\n  background-color: #4285f4;\n  border-radius: 2px;\n  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  border: none;\n  position: relative;\n}\n\n.google-auth-btn:active {\n  background-color: #3367d6;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);\n  transform: translateY(1px);\n}\n\n.google-auth-btn:hover {\n  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);\n}\n\n.google-icon-wrapper {\n  position: absolute;\n  left: 1px;\n  top: 1px;\n  width: 40px;\n  height: 40px;\n  border-radius: 2px;\n  background-color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.google-icon {\n  width: 18px;\n  height: 18px;\n}\n\n.button-text {\n  margin-left: 30px;\n  color: white;\n  font-size: 14px;\n  font-weight: 500;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  letter-spacing: 0.2px;\n}",
    type: "social"
  },
  { 
    id: 5, 
    name: "Google Auth2 Button", 
    code: "<button class=\"google-auth2-btn-card\">\n  <div class=\"google-icon2-wrapper-card\">\n    <svg class=\"google-icon2-card\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\">\n      <path fill=\"#EA4335\" d=\"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z\"/>\n      <path fill=\"#4285F4\" d=\"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z\"/>\n      <path fill=\"#FBBC05\" d=\"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z\"/>\n      <path fill=\"#34A853\" d=\"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z\"/>\n    </svg>\n  </div>\n  <span class=\"button-text2-card\">Sign in with Google</span>\n</button>",
    html: "<button class=\"google-auth2-btn-card\">\n  <div class=\"google-icon2-wrapper-card\">\n    <svg class=\"google-icon2-card\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\">\n      <path fill=\"#EA4335\" d=\"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z\"/>\n      <path fill=\"#4285F4\" d=\"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z\"/>\n      <path fill=\"#FBBC05\" d=\"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z\"/>\n      <path fill=\"#34A853\" d=\"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z\"/>\n    </svg>\n  </div>\n  <span class=\"button-text2-card\">Sign in with Google</span>\n</button>",
    css: ".google-auth2-btn-card {\n  display: inline-flex;\n  align-items: center;\n  background-color: #ffffff;\n  color: #555;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 12px 20px;\n  font-family: Arial, sans-serif;\n  cursor: pointer;\n  transition: box-shadow 0.3s ease;\n  font-size: 16px;\n  font-weight: bold;\n  width: 220px;\n  height: 42px;\n}\n\n.google-auth2-btn-card:hover {\n  box-shadow: 0 3px 6px rgba(0,0,0,0.2);\n}\n\n.google-icon2-wrapper-card {\n  display: flex;\n  margin-right: 12px;\n}\n\n.google-icon2-card {\n  width: 24px;\n  height: 24px;\n}\n\n.button-text2-card {\n  color: #555;\n  font-size: 14px;\n  font-weight: bold;\n  font-family: Arial, sans-serif;\n}",
    type: "social"
  },
  { 
    id: 6, 
    name: "Apple Auth Button", 
    code: "<button class=\"apple-auth-btn-card\">\n  <div class=\"apple-icon-wrapper-card\">\n    <svg class=\"apple-icon-card\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\">\n      <path d=\"M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z\"/>\n      <path d=\"M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z\"/>\n    </svg>\n  </div>\n  <span class=\"button-text-card\">Sign in with Apple</span>\n</button>",
    html: "<button class=\"apple-auth-btn-card\">\n  <div class=\"apple-icon-wrapper-card\">\n    <svg class=\"apple-icon-card\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\">\n      <path d=\"M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z\"/>\n      <path d=\"M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z\"/>\n    </svg>\n  </div>\n  <span class=\"button-text-card\">Sign in with Apple</span>\n</button>",
    css: ".apple-auth-btn-card {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 20px;\n  background-color: #000000;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.apple-auth-btn-card:hover {\n  background-color: #1a1a1a;\n}\n\n.apple-icon-wrapper-card {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 10px;\n}\n\n.apple-icon-card {\n  width: 20px;\n  height: 20px;\n  fill: #ffffff;\n}\n\n.button-text-card {\n  color: #ffffff;\n  font-size: 16px;\n  font-weight: 500;\n}",
    type: "social"
  },
  {
    id: 8,
    name: "Add-to-Cart Button",
    code: `<button class="cart-btn">
  <span class="cart-icon">
    <svg viewBox="0 0 24 24">
      <path d="M4 4h2l3.6 10h10l2.4-7H5.5M9 19.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm9 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </svg>
  </span>
  <span class="text">Add to Cart</span>
  <span class="checkmark">
    <svg viewBox="0 0 24 24">
      <path d="M6 12l4 4L18 6" />
    </svg>
  </span>
</button>`,
    html: `<button class="cart-btn">
  <span class="cart-icon">
    <svg viewBox="0 0 24 24">
      <path d="M4 4h2l3.6 10h10l2.4-7H5.5M9 19.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm9 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </svg>
  </span>
  <span class="text">Add to Cart</span>
  <span class="checkmark">
    <svg viewBox="0 0 24 24">
      <path d="M6 12l4 4L18 6" />
    </svg>
  </span>
</button>`,
    css: `/* Add to Cart Button Styles */
.cart-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 15px 32px;
  background: linear-gradient(135deg, #8a3ffc, #4f46e5);
  color: #fff;
  text-decoration: none;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0.3px;
  border: none;
  border-radius: 12px;
  box-shadow: 
    0 10px 20px rgba(79, 70, 229, 0.3),
    0 3px 6px rgba(0, 0, 0, 0.1),
    inset 0 1px 1px rgba(255, 255, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  overflow: hidden;
  transform: translateZ(0);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.cart-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.cart-btn:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 14px 26px rgba(79, 70, 229, 0.35),
    0 4px 8px rgba(0, 0, 0, 0.12),
    inset 0 1px 1px rgba(255, 255, 255, 0.2);
}

.cart-btn:active {
  transform: translateY(1px);
  box-shadow: 
    0 6px 16px rgba(79, 70, 229, 0.25),
    0 2px 4px rgba(0, 0, 0, 0.1),
    inset 0 1px 1px rgba(255, 255, 255, 0.15);
}

/* Cart icon */
.cart-icon {
  width: 22px;
  height: 22px;
  position: relative;
  transform-origin: center;
  transition: transform 0.2s ease;
}

.cart-icon svg {
  width: 100%;
  height: 100%;
  stroke: #fff;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}

.cart-btn:hover .cart-icon {
  transform: scale(1.1) translateX(-2px);
}

/* Ultra-smooth cart animation */
.cart-btn.clicked .cart-icon {
  animation: cartMove 1.5s ease-out forwards;
  will-change: transform, opacity;
}

@keyframes cartMove {
  0% { transform: translateX(0px); opacity: 1; }
  50% { transform: translateX(100px); opacity: 1; }
  100% { transform: translateX(200px); opacity: 0; }
}

/* Text and checkmark */
.text {
  display: inline-block;
  transform: translateZ(0);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.checkmark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 34px;
  height: 34px;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  background-color: #10b981;
  border-radius: 50%;
  box-shadow: 
    0 4px 8px rgba(16, 185, 129, 0.35),
    0 2px 4px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkmark svg {
  width: 65%;
  height: 65%;
  stroke: #fff;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.2));
}

.cart-btn.clicked .text {
  opacity: 0;
  transform: translateY(10px);
}

.cart-btn.clicked .checkmark {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
  transition-delay: 0.3s;
  animation: checkPop 0.5s cubic-bezier(0.17, 0.89, 0.32, 1.49) forwards 0.3s;
}

@keyframes checkPop {
  0% { transform: translate(-50%, -50%) scale(0.8); }
  40% { transform: translate(-50%, -50%) scale(1.15); }
  60% { transform: translate(-50%, -50%) scale(0.95); }
  100% { transform: translate(-50%, -50%) scale(1); }
}

/* Sparkle burst with improved particles */
.sparkle {
  position: absolute;
  pointer-events: none;
  opacity: 0;
  z-index: 10;
}

.sparkle::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: currentColor;
  border-radius: 50%;
  box-shadow: 0 0 6px currentColor;
}

@keyframes sparkleBurst {
  0% { transform: translate(0, 0) scale(0); opacity: 1; }
  50% { opacity: 1; }
  100% { transform: translate(var(--x), var(--y)) scale(1); opacity: 0; }
}

/* Button pulse with ripple effect */
.cart-btn.clicked {
  animation: pulse 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);
}

@keyframes pulse {
  0% { transform: scale(1); }
  30% { transform: scale(1.05); }
  50% { transform: scale(1.03); }
  100% { transform: scale(1); }
}

/* Ripple effect */
.ripple {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  transform: scale(0);
  animation: ripple 0.6s linear;
  pointer-events: none;
}

@keyframes ripple {
  to {
    transform: scale(2.5);
    opacity: 0;
  }
}`,
    type: "functional"
  },
  {
    id: 9,
    name: "Download Progress Button",
    code: "<div class=\"button-container\">\n  <button class=\"download-progress-button\">\n    <span class=\"button-content\">\n      <span class=\"button-text\">Download</span>\n      <span class=\"button-icon\">\n        <svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path class=\"arrow-path\" d=\"M12 4L12 16M12 16L7 11M12 16L17 11\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n          <path class=\"progress-path\" d=\"M3 20H21\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </svg>\n      </span>\n    </span>\n    <div class=\"progress-indicator\">\n      <div class=\"progress-bar\"></div>\n    </div>\n  </button>\n</div>",
    html: "<div class=\"button-container\">\n  <button class=\"download-progress-button\">\n    <span class=\"button-content\">\n      <span class=\"button-text\">Download</span>\n      <span class=\"button-icon\">\n        <svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path class=\"arrow-path\" d=\"M12 4L12 16M12 16L7 11M12 16L17 11\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n          <path class=\"progress-path\" d=\"M3 20H21\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </svg>\n      </span>\n    </span>\n    <div class=\"progress-indicator\">\n      <div class=\"progress-bar\"></div>\n    </div>\n  </button>\n</div>",
    css: "@keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(29, 78, 216, 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 10px rgba(29, 78, 216, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(29, 78, 216, 0);\n  }\n}\n\n@keyframes progress {\n  0% {\n    width: 0%;\n  }\n  20% {\n    width: 35%;\n  }\n  50% {\n    width: 65%;\n  }\n  80% {\n    width: 85%;\n  }\n  100% {\n    width: 100%;\n  }\n}\n\n@keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-6px);\n  }\n  60% {\n    transform: translateY(-3px);\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes drawCheck {\n  0% {\n    stroke-dashoffset: 100;\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n\n.button-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem;\n  background: linear-gradient(145deg, #f7f9fc, #e6eaf0);\n  border-radius: 16px;\n}\n\n.download-progress-button {\n  position: relative;\n  width: 180px;\n  height: 56px;\n  padding: 0;\n  border: none;\n  outline: none;\n  border-radius: 12px;\n  background: linear-gradient(135deg, #3b82f6, #1d4ed8);\n  color: white;\n  font-family: 'Inter', -apple-system, sans-serif;\n  font-weight: 600;\n  font-size: 16px;\n  letter-spacing: 0.3px;\n  cursor: pointer;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  box-shadow: \n    0 4px 12px rgba(59, 130, 246, 0.3),\n    0 2px 4px rgba(0, 0, 0, 0.1),\n    inset 0 2px 1px rgba(255, 255, 255, 0.15);\n}\n\n.download-progress-button:hover {\n  transform: translateY(-2px);\n  box-shadow: \n    0 6px 20px rgba(59, 130, 246, 0.4),\n    0 2px 8px rgba(0, 0, 0, 0.15),\n    inset 0 2px 1px rgba(255, 255, 255, 0.15);\n  background: linear-gradient(135deg, #4f8df9, #2152e2);\n}\n\n.download-progress-button:active {\n  transform: translateY(1px);\n  background: linear-gradient(135deg, #3674e7, #193ec5);\n  box-shadow: \n    0 2px 8px rgba(59, 130, 246, 0.3),\n    0 1px 2px rgba(0, 0, 0, 0.1),\n    inset 0 2px 1px rgba(255, 255, 255, 0.1);\n}\n\n.button-content {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n}\n\n.button-text {\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n.button-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n.button-icon svg {\n  width: 100%;\n  height: 100%;\n  stroke: currentColor;\n}\n\n.arrow-path, .progress-path {\n  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n.progress-indicator {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 4px;\n  background-color: rgba(0, 0, 0, 0.15);\n  border-radius: 0 0 12px 12px;\n  overflow: hidden;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  z-index: 1;\n}\n\n.progress-bar {\n  height: 100%;\n  width: 0%;\n  background: linear-gradient(90deg, #38bdf8, #818cf8);\n  border-radius: 0 0 12px 12px;\n}\n\n/* Downloading state */\n.download-progress-button.downloading {\n  pointer-events: none;\n}\n\n.download-progress-button.downloading .button-text {\n  opacity: 0.7;\n}\n\n.download-progress-button.downloading .button-icon {\n  animation: bounce 1.5s infinite;\n}\n\n.download-progress-button.downloading .progress-indicator {\n  opacity: 1;\n}\n\n.download-progress-button.downloading .progress-bar {\n  animation: progress 3s cubic-bezier(0.11, 0.84, 0.58, 1) forwards;\n}\n\n/* Complete state */\n.download-progress-button.complete {\n  background: linear-gradient(135deg, #10b981, #047857);\n  box-shadow: \n    0 4px 12px rgba(16, 185, 129, 0.3),\n    0 2px 4px rgba(0, 0, 0, 0.1),\n    inset 0 2px 1px rgba(255, 255, 255, 0.15);\n  animation: pulse 0.8s;\n}\n\n.download-progress-button.complete .button-text {\n  transform: translateY(30px);\n  opacity: 0;\n}\n\n.download-progress-button.complete .button-icon {\n  transform: scale(1.2);\n}\n\n.download-progress-button.complete .arrow-path {\n  opacity: 0;\n}\n\n.download-progress-button.complete .progress-path {\n  stroke-dasharray: 100;\n  stroke-dashoffset: 100;\n  animation: drawCheck 0.5s 0.2s forwards;\n  d: path('M5 13L9 17L19 7');\n}\n\n.download-progress-button.complete .progress-indicator {\n  opacity: 0;\n}",
    type: "functional"
  },
  {
    id: 10,
    name: "X Auth2 Button",
    code: "<button class=\"x-auth2-btn-card\">\n  <div class=\"x-icon2-wrapper-card\">\n    <svg class=\"x-icon2-card\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n      <path d=\"M13.317 10.846 19.3 4h-1.418l-5.193 5.943L8.071 4H3l6.291 8.988L3 20h1.418l5.51-6.308L15.929 20H21l-7.683-10.154Zm-1.953 2.235-.635-.903L5.659 5.04h1.814l4.502 6.402.635.903 5.289 7.521h-1.814l-4.721-6.785Z\"/>\n    </svg>\n  </div>\n  <span class=\"button-text2-card\">Continue with X</span>\n</button>",
    html: "<button class=\"x-auth2-btn-card\">\n  <div class=\"x-icon2-wrapper-card\">\n    <svg class=\"x-icon2-card\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n      <path d=\"M13.317 10.846 19.3 4h-1.418l-5.193 5.943L8.071 4H3l6.291 8.988L3 20h1.418l5.51-6.308L15.929 20H21l-7.683-10.154Zm-1.953 2.235-.635-.903L5.659 5.04h1.814l4.502 6.402.635.903 5.289 7.521h-1.814l-4.721-6.785Z\"/>\n    </svg>\n  </div>\n  <span class=\"button-text2-card\">Continue with X</span>\n</button>",
    css: ".x-auth2-btn-card {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #ffffff;\n  color: #000;\n  border: 2px solid #000;\n  border-radius: 50px;\n  padding: 12px 24px;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  cursor: pointer;\n  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;\n  font-size: 16px;\n  font-weight: 600;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n  width: 220px;\n  height: 42px;\n}\n\n.x-auth2-btn-card:hover {\n  background-color: #000;\n  color: #ffffff;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0,0,0,0.2);\n}\n\n.x-icon2-wrapper-card {\n  display: flex;\n  margin-right: 12px;\n}\n\n.x-icon2-card {\n  width: 22px;\n  height: 22px;\n}\n\n.button-text2-card {\n  font-size: 14px;\n  font-weight: 600;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}",
    type: "social"
  },
  {
    id: 11,
    name: "Animated Submit Button",
    code: "<div class=\"magnetic-btn\" id=\"magneticBtn\">\n  <div class=\"button-container\">\n    <button class=\"submit-button\" id=\"submitBtn\">\n      <div class=\"splash\" id=\"splash\"></div>\n      <div class=\"button-content\">\n        <div class=\"button-label-container\">\n          <div class=\"button-label\">\n            <span class=\"label-text\">Submit</span>\n            <span class=\"label-text\">Ready</span>\n          </div>\n        </div>\n        <div class=\"btn-icon\">\n          <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M3.33337 8H12.6667\" stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n            <path d=\"M8 3.33331L12.6667 7.99998L8 12.6666\" stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n          </svg>\n        </div>\n        <div class=\"loader\"></div>\n        <div class=\"success-icon\">\n          <svg width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M18 7L9.5 15.5L6 12\" stroke=\"white\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n          </svg>\n        </div>\n      </div>\n    </button>\n  </div>\n</div>\n<div class=\"particles\" id=\"particles\"></div>\n<div class=\"custom-cursor\" id=\"customCursor\"></div>",
    html: "<div class=\"magnetic-btn\" id=\"magneticBtn\">\n  <div class=\"button-container\">\n    <button class=\"submit-button\" id=\"submitBtn\">\n      <div class=\"splash\" id=\"splash\"></div>\n      <div class=\"button-content\">\n        <div class=\"button-label-container\">\n          <div class=\"button-label\">\n            <span class=\"label-text\">Submit</span>\n            <span class=\"label-text\">Ready</span>\n          </div>\n        </div>\n        <div class=\"btn-icon\">\n          <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M3.33337 8H12.6667\" stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n            <path d=\"M8 3.33331L12.6667 7.99998L8 12.6666\" stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n          </svg>\n        </div>\n        <div class=\"loader\"></div>\n        <div class=\"success-icon\">\n          <svg width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M18 7L9.5 15.5L6 12\" stroke=\"white\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n          </svg>\n        </div>\n      </div>\n    </button>\n  </div>\n</div>\n<div class=\"particles\" id=\"particles\"></div>\n<div class=\"custom-cursor\" id=\"customCursor\"></div>",
    css: "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background-color: #f9fafb;\n  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;\n}\n\n.button-container {\n  position: relative;\n  z-index: 1;\n}\n\n.submit-button {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 180px;\n  height: 54px;\n  padding: 0;\n  background-color: #3b82f6;\n  border: none;\n  border-radius: 4px;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  cursor: pointer;\n  overflow: hidden;\n  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);\n  will-change: transform, width, background-color;\n}\n\n.button-content {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n}\n\n.btn-text {\n  margin-right: 8px;\n  transition: transform 0.3s ease, opacity 0.3s ease;\n}\n\n.btn-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n.submit-button::after {\n  content: \"\";\n  position: absolute;\n  top: -4px;\n  left: -4px;\n  right: -4px;\n  bottom: -4px;\n  background: linear-gradient(45deg, #4f46e5, #3b82f6, #60a5fa);\n  z-index: -1;\n  border-radius: 8px;\n  opacity: 0;\n  filter: blur(8px);\n  transition: opacity 0.3s ease;\n}\n\n.submit-button:hover::after {\n  opacity: 0.6;\n}\n\n.submit-button:hover {\n  background-color: #2563eb;\n}\n\n.submit-button:hover::before {\n  opacity: 1;\n  transform: scaleX(1);\n}\n\n.submit-button::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%);\n  z-index: 1;\n  opacity: 0;\n  transform: scaleX(0.5);\n  transition: transform 0.6s ease, opacity 0.6s ease;\n}\n\n.submit-button:hover .btn-text {\n  transform: translateX(-4px);\n}\n\n.submit-button:hover .btn-icon {\n  transform: translateX(4px);\n}\n\n.submit-button:active .btn-text,\n.submit-button:active .btn-icon {\n  transform: scale(0.95);\n}\n\n.submit-button.processing {\n  width: 54px;\n  border-radius: 27px;\n}\n\n.submit-button.processing .button-label-container {\n  opacity: 0;\n  transform: translateX(-20px);\n}\n\n.submit-button.processing .btn-icon {\n  transform: rotate(0deg);\n}\n\n.loader {\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  border-top-color: #fff;\n  opacity: 0;\n  transform: scale(0);\n  transition: opacity 0.3s ease, transform 0.3s ease;\n}\n\n.submit-button.processing .loader {\n  opacity: 1;\n  transform: scale(1);\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n.success-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.submit-button.success .success-icon {\n  opacity: 1;\n}\n\n.submit-button.success {\n  width: 54px;\n  border-radius: 27px;\n  background-color: #10B981;\n}\n\n.submit-button.success .button-label-container {\n  opacity: 0;\n}\n\n.submit-button.success .btn-text,\n.submit-button.success .btn-icon,\n.submit-button.success .loader {\n  opacity: 0;\n}\n\n.submit-button.success .success-icon {\n  opacity: 1;\n  transform: scale(1);\n}\n\n.magnetic-btn {\n  position: relative;\n  display: inline-block;\n}\n\n.custom-cursor {\n  position: fixed;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.3);\n  pointer-events: none;\n  mix-blend-mode: difference;\n  z-index: 9999;\n  opacity: 0;\n  transform: translate(-50%, -50%);\n  transition: width 0.3s, height 0.3s, opacity 0.3s;\n}\n\n.splash {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 4px;\n  transform: scale(0);\n  opacity: 0;\n  z-index: 1;\n}\n\n@keyframes splash-animation {\n  0% {\n    transform: scale(0);\n    opacity: 0.7;\n  }\n  100% {\n    transform: scale(1.5);\n    opacity: 0;\n  }\n}\n\n.particles {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: visible;\n  pointer-events: none;\n}\n\n.particle {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  background-color: #10B981;\n  border-radius: 2px;\n  z-index: 1;\n  pointer-events: none;\n}\n\n.button-label-container {\n  overflow: hidden;\n  height: 20px;\n}\n\n.button-label {\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.5s cubic-bezier(0.65, 0, 0.35, 1);\n}\n\n.label-text {\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.submit-button:hover .button-label {\n  transform: translateY(-20px);\n}",
    type: "functional"
  }
];

