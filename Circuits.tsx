7:31:53 PM: Netlify Build                                                 
7:31:53 PM: ────────────────────────────────────────────────────────────────
7:31:53 PM: ​
7:31:53 PM: ❯ Version
7:31:53 PM:   @netlify/build 33.0.0
7:31:53 PM: ​
7:31:53 PM: ❯ Flags
7:31:53 PM:   accountId: 681b9f57bf287a6f36e6486f
7:31:53 PM:   baseRelDir: true
7:31:53 PM:   buildId: 682cae6be4f553000893a3cb
7:31:53 PM:   deployId: 682cae6be4f553000893a3cd
7:31:53 PM: ​
7:31:53 PM: ❯ Current directory
7:31:53 PM:   /opt/build/repo
7:31:53 PM: ​
7:31:53 PM: ❯ Config file
7:31:53 PM:   No config file was defined: using default values.
7:31:53 PM: ​
7:31:53 PM: ❯ Context
7:31:53 PM:   production
7:31:53 PM: ​
7:31:53 PM: Build command from Netlify app                                
7:31:53 PM: ────────────────────────────────────────────────────────────────
7:31:53 PM: ​
7:31:53 PM: $ npm run build
7:31:53 PM: > madagascar-tours@0.1.0 build
7:31:53 PM: > vite build
7:31:53 PM: vite v5.4.8 building for production...
7:31:54 PM: Failed during stage 'building site': Build script returned non-zero exit code: 2 (https://ntl.fyi/exit-code-2)
7:31:54 PM: transforming...
7:31:54 PM: Browserslist: caniuse-lite is outdated. Please run:
7:31:54 PM:   npx update-browserslist-db@latest
7:31:54 PM:   Why you should do it regularly: https://github.com/browserslist/update-db#readme
7:31:54 PM: warn - No utility classes were detected in your source files. If this is unexpected, double-check the `content` option in your Tailwind CSS configuration.
7:31:54 PM: warn - https://tailwindcss.com/docs/content-configuration
7:31:54 PM: ✓ 18 modules transformed.
7:31:54 PM: x Build failed in 434ms
7:31:54 PM: error during build:
7:31:54 PM: [vite:esbuild] Transform failed with 1 error:
7:31:54 PM: /opt/build/repo/Circuits.tsx:147:0: ERROR: Unexpected end of file before a closing "button" tag
7:31:54 PM: file: /opt/build/repo/Circuits.tsx:147:0
7:31:54 PM: 
7:31:54 PM: Unexpected end of file before a closing "button" tag
7:31:54 PM: 145|                }`}
146|              >
147|  
   |  ^

    at failureErrorWithLog (/opt/build/repo/node_modules/esbuild/lib/main.js:1472:15)
    at /opt/build/repo/node_modules/esbuild/lib/main.js:755:50
    at responseCallbacks.<computed> (/opt/build/repo/node_modules/esbuild/lib/main.js:622:9)
    at handleIncomingPacket (/opt/build/repo/node_modules/esbuild/lib/main.js:677:12)
    at Socket.readFromStdout (/opt/build/repo/node_modules/esbuild/lib/main.js:600:7)
    at Socket.emit (node:events:518:28)
    at addChunk (node:internal/streams/readable:561:12)
    at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
    at Readable.push (node:internal/streams/readable:392:5)
    at Pipe.onStreamRead (node:internal/stream_base_commons:189:23)
​
7:31:54 PM: "build.command" failed                                        
7:31:54 PM: ────────────────────────────────────────────────────────────────
7:31:54 PM: ​
7:31:54 PM:   Error message
7:31:54 PM:   Command failed with exit code 1: npm run build (https://ntl.fyi/exit-code-1)
7:31:54 PM: ​
7:31:54 PM:   Error location
7:31:54 PM:   In Build command from Netlify app:
7:31:54 PM:   npm run build
7:31:54 PM: ​
7:31:54 PM:   Resolved config
7:31:54 PM:   build:
7:31:54 PM:     command: npm run build
7:31:54 PM:     commandOrigin: ui
7:31:54 PM:     publish: /opt/build/repo/dist
7:31:54 PM:     publishOrigin: ui
7:31:54 PM: Build failed due to a user error: Build script returned non-zero exit code: 2
7:31:54 PM: Failing build: Failed to build site
7:31:54 PM: Finished processing build request in 14.459s
