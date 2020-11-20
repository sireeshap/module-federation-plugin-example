const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, '../../tsconfig.json'));

module.exports = {
  output: {
    uniqueName: "booking"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      
        // For remotes (please adjust)
        // name: "booking",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './projects/booking/src/app/app.component.ts',
        // },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "mfe1": "mfe1@http://localhost:undefined/remoteEntry.js",
        //     "shell": "shell@http://localhost:undefined/remoteEntry.js",
        //     "admin-app": "admin-app@http://localhost:undefined/remoteEntry.js",
        //     "boarding": "boarding@http://localhost:3001/remoteEntry.js",

        // },

        shared: {
          "@angular/core": { singleton: true, strictVersion: true }, 
          "@angular/common": { singleton: true, strictVersion: true }, 
          "@angular/router": { singleton: true, strictVersion: true },

          // Uncomment for sharing lib of an Angular CLI or Nx workspace
          // ...sharedMappings.getDescriptors()
        }
        
    }),
    // Uncomment for sharing lib of an Angular CLI or Nx workspace
    // sharedMappings.getPlugin(),
  ],
};