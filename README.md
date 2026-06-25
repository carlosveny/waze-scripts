# Waze Scripts

This repository currently contains the following scripts to use in Waze Map Editor (WME):
| Name | Description | Links |
|------------------------|-------------|------------------------------|
| WME Reduced Speed Checker | Show in WME the nodes where the reduced speed warning will appear when using the app | [Greasyfork](https://greasyfork.org/es/scripts/528909-wme-reduced-speed-checker) / [Waze Discuss](https://www.waze.com/discuss/t/script-wme-reduced-speed-checker/380253) |
| WME Gas Station Checker | Analyze spanish gas stations and detect problems with the prices bot | [Greasyfork](https://greasyfork.org/es/scripts/536410-wme-gas-stations-checker) |

## Local development

In order to run this scripts locally follow this instructions:

1. Configure Tampermonkey update interval to "Always".
2. Create a new empty script in Tampermonkey with the UserScript header of the real script and the following line of code:

   ```
   // @require      http://127.0.0.1:5500/your-script-file-name.js
   ```

3. Launch **_Live Server_** in VSCode in order to serve your scripts.
4. Reload **twice** the browser page in order to see changes.
