
CreateReactAppで作成されたまま起動
起動コマンド実行して実際に写るまで５０秒ぐらいかかったと思う
```
Microsoft Windows [Version 10.0.22621.2861]
(c) Microsoft Corporation. All rights reserved.

C:\tools\napagit\FeeManage_Front>git branch
* master

C:\tools\napagit\FeeManage_Front>git branch -a
* master
  remotes/origin/HEAD -> origin/master
  remotes/origin/develop
  remotes/origin/gh-pages
  remotes/origin/master

C:\tools\napagit\FeeManage_Front>git checkout -b develop   remotes/origin/develop
Switched to a new branch 'develop'
branch 'develop' set up to track 'origin/develop'.

C:\tools\napagit\FeeManage_Front>git branch
* develop
  master

C:\tools\napagit\FeeManage_Front>npm i
npm ERR! code ERESOLVE
npm ERR! ERESOLVE could not resolve
npm ERR! 
npm ERR! While resolving: @material-ui/core@4.12.4
npm ERR! Found: react@18.2.0
npm ERR! node_modules/react
npm ERR!   react@"^18.2.0" from the root project
npm ERR!   peer react@">=16.8.0" from @emotion/react@11.11.1
npm ERR!   node_modules/@emotion/react
npm ERR!     @emotion/react@"^11.11.1" from the root project
npm ERR!     peer @emotion/react@"^11.0.0-rc.0" from @emotion/styled@11.11.0
npm ERR!     node_modules/@emotion/styled
npm ERR!       @emotion/styled@"^11.11.0" from the root project
npm ERR!       3 more (@mui/material, @mui/styled-engine, @mui/system)
npm ERR!     3 more (@mui/material, @mui/styled-engine, @mui/system)
npm ERR!   19 more (@emotion/styled, ...)
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer react@"^16.8.0 || ^17.0.0" from @material-ui/core@4.12.4
npm ERR! node_modules/@material-ui/core
npm ERR!   @material-ui/core@"^4.12.4" from the root project
npm ERR!   peer @material-ui/core@"^4.0.0" from @material-ui/pickers@3.3.10
npm ERR!   node_modules/@material-ui/pickers
npm ERR!     @material-ui/pickers@"^3.2.2" from material-table@1.66.0
npm ERR!     node_modules/material-table
npm ERR!       material-table@"^1.66.0" from the root project
npm ERR!   1 more (material-table)
npm ERR!
npm ERR! Conflicting peer dependency: react@17.0.2
npm ERR! node_modules/react
npm ERR!   peer react@"^16.8.0 || ^17.0.0" from @material-ui/core@4.12.4
npm ERR!   node_modules/@material-ui/core
npm ERR!     @material-ui/core@"^4.12.4" from the root project
npm ERR!     peer @material-ui/core@"^4.0.0" from @material-ui/pickers@3.3.10
npm ERR!     node_modules/@material-ui/pickers
npm ERR!       @material-ui/pickers@"^3.2.2" from material-table@1.66.0
npm ERR!       node_modules/material-table
npm ERR!         material-table@"^1.66.0" from the root project
npm ERR!     1 more (material-table)
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR!
npm ERR! For a full report see:
npm ERR! C:\Users\shino\AppData\Local\npm-cache\_logs\2023-12-20T01_33_27_460Z-eresolve-report.txt

npm ERR! A complete log of this run can be found in: C:\Users\shino\AppData\Local\npm-cache\_logs\2023-12-20T01_33_27_460Z-debug-0.log

C:\tools\napagit\FeeManage_Front>npm i --legacy-peer-deps
npm WARN deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm WARN deprecated rollup-plugin-terser@7.0.2: This package has been deprecated and is no longer maintained. Please use @rollup/plugin-terser
npm WARN deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
npm WARN deprecated w3c-hr-time@1.0.2: Use your platform's native performance.now() and performance.timeOrigin.
npm WARN deprecated xmldom@0.1.31: Deprecated due to CVE-2021-21366 resolved in 0.5.0
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated workbox-cacheable-response@6.6.0: workbox-background-sync@6.6.0
npm WARN deprecated svgo@1.3.2: This SVGO version is no longer supported. Upgrade to v2.x.x.
npm WARN deprecated @material-ui/styles@4.11.5: Material UI v4 doesn't receive active development since September 2021. See the guide https://mui.com/material-ui/migration/migration-v4/ to upgrade to v5.
npm WARN deprecated @material-ui/pickers@3.3.10: Material UI Pickers v3 doesn't receive active development since January 2020. See the guide https://mui.com/material-ui/guides/pickers-migration/ to upgrade.
npm WARN deprecated @material-ui/core@4.12.4: Material UI v4 doesn't receive active development since September 2021. See the guide https://mui.com/material-ui/migration/migration-v4/ to upgrade to v5.

added 1625 packages, and audited 1626 packages in 3m

241 packages are looking for funding
  run `npm fund` for details

19 vulnerabilities (10 moderate, 7 high, 2 critical)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

C:\tools\napagit\FeeManage_Front>npm npm run dev
Unknown command: "npm"

To see a list of supported npm commands, run:
  npm help

C:\tools\napagit\FeeManage_Front>npm start

Starting the development server...

One of your dependencies, babel-preset-react-app, is importing the
Compiled with warnings.

[eslint]
src\Dashbord.jsx
  Line 2:18:   'createTheme' is defined but never used    no-unused-vars
  Line 2:31:   'ThemeProvider' is defined but never used  no-unused-vars
  Line 18:8:   'Worker' is defined but never used         no-unused-vars
  Line 19:10:  'useState' is defined but never used       no-unused-vars

src\components\ApiFetch.jsx
  Line 7:12:   'fees' is assigned a value but never used                                                                                                                                                                                                                                                                                    
                                  no-unused-vars
  Line 7:18:   'setFees' is assigned a value but never used                                                                                                           
                                                                                                                                                                      
                                  no-unused-vars
  Line 8:12:   'reports' is assigned a value but never used                                                                                                           
                                                                                                                                                                      
                                  no-unused-vars
  Line 8:21:   'setReports' is assigned a value but never used                                                                                                        
                                                                                                                                                                      
                                  no-unused-vars
  Line 9:12:   'efforts' is assigned a value but never used                                                                                                           
                                                                                                                                                                      
                                  no-unused-vars
  Line 9:21:   'setEfforts' is assigned a value but never used                                                                                                        
                                                                                                                                                                      
                                  no-unused-vars
  Line 13:11:  'filtermonths' is assigned a value but never used                                                                                                      
                                                                                                                                                                      
                                  no-unused-vars
  Line 19:11:  'newTargetday' is assigned a value but never used                                                                                                      
                                                                                                                                                                      
                                  no-unused-vars
  Line 22:12:  'alignment' is assigned a value but never used                                                                                                         
                                                                                                                                                                      
                                  no-unused-vars
  Line 24:11:  'handleChange' is assigned a value but never used                                                                                                      
                                                                                                                                                                      
                                  no-unused-vars
  Line 65:5:   React Hook useEffect has missing dependencies: 'EffortGetUrl', 'FeeGetUrl', 'ReportGetUrl', and 'props'. Either include them or remove the dependency array. However, 'props' will change when *any* prop changes, so the preferred fix is to destructure the 'props' object outside of the useEffect call and refer to those specific props inside useEffect  react-hooks/exhaustive-deps

src\components\AttendanceRecord.jsx
  Line 2:18:   'Table' is defined but never used                                                                                              no-unused-vars
  Line 2:25:   'ButtonGroup' is defined but never used                                                                                        no-unused-vars
  Line 5:10:   'QrCodeScannerOutlined' is defined but never used                                                                              no-unused-vars
  Line 8:28:   'Avatar' is defined but never used                                                                                             no-unused-vars
  Line 9:8:    'TrainIcon' is defined but never used                                                                                          no-unused-vars
  Line 20:12:  'yearmonth' is assigned a value but never used                                                                                 no-unused-vars
  Line 20:24:  'setYearmonth' is assigned a value but never used                                                                              no-unused-vars
  Line 47:15:  'dates' is assigned a value but never used                                                                                     no-unused-vars
  Line 47:23:  The object literal notation {} is preferable                                                                                   no-new-object
  Line 49:28:  Expected '!==' and instead saw '!='                                                                                            eqeqeq
  Line 62:7:   React Hook useEffect has missing dependencies: 'days' and 'props.efforts'. Either include them or remove the dependency array  react-hooks/exhaustive-deps

src\components\Effort.jsx
  Line 1:17:   'useState' is defined but never used         no-unused-vars
  Line 1:27:   'useEffect' is defined but never used        no-unused-vars
  Line 1:38:   'useLayoutEffect' is defined but never used  no-unused-vars
  Line 13:10:  'Button' is defined but never used           no-unused-vars
  Line 34:29:  Expected '===' and instead saw '=='          eqeqeq
  Line 34:52:  Expected '===' and instead saw '=='          eqeqeq

src\components\Fee.jsx
  Line 1:17:   'useState' is defined but never used               no-unused-vars
  Line 1:27:   'useEffect' is defined but never used              no-unused-vars
  Line 1:38:   'useLayoutEffect' is defined but never used        no-unused-vars
  Line 25:10:  'alignment' is assigned a value but never used     no-unused-vars
  Line 27:9:   'handleChange' is assigned a value but never used  no-unused-vars
  Line 36:29:  Expected '===' and instead saw '=='                eqeqeq
  Line 36:50:  Expected '===' and instead saw '=='                eqeqeq
  Line 39:21:  Expected '===' and instead saw '=='                eqeqeq
  Line 65:48:  Expected '===' and instead saw '=='                eqeqeq

src\components\Filter.jsx
  Line 2:8:    'classNames' is defined but never used                            no-unused-vars
  Line 4:8:    'FilterAltIcon' is defined but never used                         no-unused-vars
  Line 6:8:    'Title' is defined but never used                                 no-unused-vars
  Line 11:11:  'value' is assigned a value but never used                        no-unused-vars
  Line 27:29:  Array.prototype.map() expects a return value from arrow function  array-callback-return
  Line 36:9:   'distincttest' is assigned a value but never used                 no-unused-vars

src\components\InputWorker.jsx
  Line 3:10:  'ButtonBase' is defined but never used  no-unused-vars
  Line 4:8:   'Title' is defined but never used       no-unused-vars
  Line 7:8:   'DeleteIcon' is defined but never used  no-unused-vars

src\components\Report.jsx
  Line 1:27:   'useEffect' is defined but never used        no-unused-vars
  Line 1:38:   'useLayoutEffect' is defined but never used  no-unused-vars
  Line 12:3:   'ButtonBase' is defined but never used       no-unused-vars
  Line 15:18:  'InputBase' is defined but never used        no-unused-vars
  Line 16:10:  'Label' is defined but never used            no-unused-vars
  Line 81:30:  Expected '===' and instead saw '=='          eqeqeq
  Line 81:54:  Expected '===' and instead saw '=='          eqeqeq

src\components\Worker.jsx
  Line 2:8:    'Link' is defined but never used                                                                          no-unused-vars
  Line 3:8:    'Table' is defined but never used                                                                         no-unused-vars
  Line 4:8:    'TableBody' is defined but never used                                                                     no-unused-vars
  Line 5:8:    'TableCell' is defined but never used                                                                     no-unused-vars
  Line 6:8:    'TableHead' is defined but never used                                                                     no-unused-vars
  Line 7:8:    'TableRow' is defined but never used                                                                      no-unused-vars
  Line 8:8:    'Title' is defined but never used                                                                         no-unused-vars
  Line 9:32:   'useRef' is defined but never used                                                                        no-unused-vars
  Line 11:10:  'Button' is defined but never used                                                                        no-unused-vars
  Line 11:18:  'ButtonBase' is defined but never used                                                                    no-unused-vars
  Line 11:30:  'ButtonGroup' is defined but never used                                                                   no-unused-vars
  Line 11:43:  'Input' is defined but never used                                                                         no-unused-vars
  Line 13:8:   'Dashboard' is defined but never used                                                                     no-unused-vars
  Line 15:8:   'PersonIcon' is defined but never used                                                                    no-unused-vars
  Line 16:18:  'Box' is defined but never used                                                                           no-unused-vars
  Line 22:10:  'preventDefault' is defined but never used                                                                no-unused-vars
  Line 26:18:  Read-only global 'Worker' should not be modified                                                          no-global-assign
  Line 61:9:   'getKey' is assigned a value but never used                                                               no-unused-vars
  Line 66:10:  'allfilters' is assigned a value but never used                                                           no-unused-vars
  Line 66:23:  'setAllfilters' is assigned a value but never used                                                        no-unused-vars
  Line 74:5:   React Hook useEffect has a missing dependency: 'props'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
  Line 76:48:  Array.prototype.filter() expects a value to be returned at the end of arrow function                      array-callback-return
  Line 77:40:  Comparing to itself is potentially pointless                                                              no-self-compare
  Line 77:52:  Expected '===' and instead saw '=='                                                                       eqeqeq

src\index.js
  Line 6:8:  'Fee' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

WARNING in [eslint] 
src\Dashbord.jsx
  Line 2:18:   'createTheme' is defined but never used    no-unused-vars
  Line 2:31:   'ThemeProvider' is defined but never used  no-unused-vars
  Line 18:8:   'Worker' is defined but never used         no-unused-vars
  Line 19:10:  'useState' is defined but never used       no-unused-vars

src\components\ApiFetch.jsx
  Line 7:12:   'fees' is assigned a value but never used                                                                                                              
                                                                                                                                                                      
                                  no-unused-vars
  Line 7:18:   'setFees' is assigned a value but never used                                                                                                           
                                                                                                                                                                      
                                  no-unused-vars
  Line 8:12:   'reports' is assigned a value but never used                                                                                                           
                                                                                                                                                                      
                                  no-unused-vars
  Line 8:21:   'setReports' is assigned a value but never used                                                                                                        
                                                                                                                                                                      
                                  no-unused-vars
  Line 9:12:   'efforts' is assigned a value but never used                                                                                                           
                                                                                                                                                                      
                                  no-unused-vars
  Line 9:21:   'setEfforts' is assigned a value but never used                                                                                                        
                                                                                                                                                                      
                                  no-unused-vars
  Line 13:11:  'filtermonths' is assigned a value but never used                                                                                                      
                                                                                                                                                                      
                                  no-unused-vars
  Line 19:11:  'newTargetday' is assigned a value but never used                                                                                                      
                                                                                                                                                                      
                                  no-unused-vars
  Line 22:12:  'alignment' is assigned a value but never used                                                                                                         
                                                                                                                                                                      
                                  no-unused-vars
  Line 24:11:  'handleChange' is assigned a value but never used                                                                                                      
                                                                                                                                                                      
                                  no-unused-vars
  Line 65:5:   React Hook useEffect has missing dependencies: 'EffortGetUrl', 'FeeGetUrl', 'ReportGetUrl', and 'props'. Either include them or remove the dependency array. However, 'props' will change when *any* prop changes, so the preferred fix is to destructure the 'props' object outside of the useEffect call and refer to those specific props inside useEffect  react-hooks/exhaustive-deps

src\components\AttendanceRecord.jsx
  Line 2:18:   'Table' is defined but never used                                                                                              no-unused-vars
  Line 2:25:   'ButtonGroup' is defined but never used                                                                                        no-unused-vars
  Line 5:10:   'QrCodeScannerOutlined' is defined but never used                                                                              no-unused-vars
  Line 8:28:   'Avatar' is defined but never used                                                                                             no-unused-vars
  Line 9:8:    'TrainIcon' is defined but never used                                                                                          no-unused-vars
  Line 20:12:  'yearmonth' is assigned a value but never used                                                                                 no-unused-vars
  Line 20:24:  'setYearmonth' is assigned a value but never used                                                                              no-unused-vars
  Line 47:15:  'dates' is assigned a value but never used                                                                                     no-unused-vars
  Line 47:23:  The object literal notation {} is preferable                                                                                   no-new-object
  Line 49:28:  Expected '!==' and instead saw '!='                                                                                            eqeqeq
  Line 62:7:   React Hook useEffect has missing dependencies: 'days' and 'props.efforts'. Either include them or remove the dependency array  react-hooks/exhaustive-deps

src\components\Effort.jsx
  Line 1:17:   'useState' is defined but never used         no-unused-vars
  Line 1:27:   'useEffect' is defined but never used        no-unused-vars
  Line 1:38:   'useLayoutEffect' is defined but never used  no-unused-vars
  Line 13:10:  'Button' is defined but never used           no-unused-vars
  Line 34:29:  Expected '===' and instead saw '=='          eqeqeq
  Line 34:52:  Expected '===' and instead saw '=='          eqeqeq

src\components\Fee.jsx
  Line 1:17:   'useState' is defined but never used               no-unused-vars
  Line 1:27:   'useEffect' is defined but never used              no-unused-vars
  Line 1:38:   'useLayoutEffect' is defined but never used        no-unused-vars
  Line 25:10:  'alignment' is assigned a value but never used     no-unused-vars
  Line 27:9:   'handleChange' is assigned a value but never used  no-unused-vars
  Line 36:29:  Expected '===' and instead saw '=='                eqeqeq
  Line 36:50:  Expected '===' and instead saw '=='                eqeqeq
  Line 39:21:  Expected '===' and instead saw '=='                eqeqeq
  Line 65:48:  Expected '===' and instead saw '=='                eqeqeq

src\components\Filter.jsx
  Line 2:8:    'classNames' is defined but never used                            no-unused-vars
  Line 4:8:    'FilterAltIcon' is defined but never used                         no-unused-vars
  Line 6:8:    'Title' is defined but never used                                 no-unused-vars
  Line 11:11:  'value' is assigned a value but never used                        no-unused-vars
  Line 27:29:  Array.prototype.map() expects a return value from arrow function  array-callback-return
  Line 36:9:   'distincttest' is assigned a value but never used                 no-unused-vars

src\components\InputWorker.jsx
  Line 3:10:  'ButtonBase' is defined but never used  no-unused-vars
  Line 4:8:   'Title' is defined but never used       no-unused-vars
  Line 7:8:   'DeleteIcon' is defined but never used  no-unused-vars

src\components\Report.jsx
  Line 1:27:   'useEffect' is defined but never used        no-unused-vars
  Line 1:38:   'useLayoutEffect' is defined but never used  no-unused-vars
  Line 12:3:   'ButtonBase' is defined but never used       no-unused-vars
  Line 15:18:  'InputBase' is defined but never used        no-unused-vars
  Line 16:10:  'Label' is defined but never used            no-unused-vars
  Line 81:30:  Expected '===' and instead saw '=='          eqeqeq
  Line 81:54:  Expected '===' and instead saw '=='          eqeqeq

src\components\Worker.jsx
  Line 2:8:    'Link' is defined but never used                                                                          no-unused-vars
  Line 3:8:    'Table' is defined but never used                                                                         no-unused-vars
  Line 4:8:    'TableBody' is defined but never used                                                                     no-unused-vars
  Line 5:8:    'TableCell' is defined but never used                                                                     no-unused-vars
  Line 6:8:    'TableHead' is defined but never used                                                                     no-unused-vars
  Line 7:8:    'TableRow' is defined but never used                                                                      no-unused-vars
  Line 8:8:    'Title' is defined but never used                                                                         no-unused-vars
  Line 9:32:   'useRef' is defined but never used                                                                        no-unused-vars
  Line 11:10:  'Button' is defined but never used                                                                        no-unused-vars
  Line 11:18:  'ButtonBase' is defined but never used                                                                    no-unused-vars
  Line 11:30:  'ButtonGroup' is defined but never used                                                                   no-unused-vars
  Line 11:43:  'Input' is defined but never used                                                                         no-unused-vars
  Line 13:8:   'Dashboard' is defined but never used                                                                     no-unused-vars
  Line 15:8:   'PersonIcon' is defined but never used                                                                    no-unused-vars
  Line 16:18:  'Box' is defined but never used                                                                           no-unused-vars
  Line 22:10:  'preventDefault' is defined but never used                                                                no-unused-vars
  Line 26:18:  Read-only global 'Worker' should not be modified                                                          no-global-assign
  Line 61:9:   'getKey' is assigned a value but never used                                                               no-unused-vars
  Line 66:10:  'allfilters' is assigned a value but never used                                                           no-unused-vars
  Line 66:23:  'setAllfilters' is assigned a value but never used                                                        no-unused-vars
  Line 74:5:   React Hook useEffect has a missing dependency: 'props'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
  Line 76:48:  Array.prototype.filter() expects a value to be returned at the end of arrow function                      array-callback-return
  Line 77:40:  Comparing to itself is potentially pointless                                                              no-self-compare
  Line 77:52:  Expected '===' and instead saw '=='                                                                       eqeqeq

src\index.js
  Line 6:8:  'Fee' is defined but never used  no-unused-vars

webpack compiled with 1 warning
Proxy error: Could not proxy request /favicon.ico from localhost:3000 to http://localhost:8080/.
See https://nodejs.org/api/errors.html#errors_common_system_errors for more information (ECONNREFUSED).


```
