import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.kiro.youtube',
  appName: 'YouTube Clone',
  webDir: 'public',
  bundledWebRuntime: false,
  server: {
    url: 'https://kiro-youtube-app-frontend.onrender.com/',
    cleartext: true
  }
};

export default config;
