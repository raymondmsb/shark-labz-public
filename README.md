# shark-labz-public

Use this theme in your own environment:
1. Navigate to the directory with your terminal
The following Steps are for Windows operating systems, for linux or Mac OS please refer to: https://shopify.dev/docs/themes/tools/theme-kit/configuration-reference
2. Install chocolatey by running this command in your terminal with admin priveleges:
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol =  [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
3. Install shopify theme kit with the following command running your terminal with admin priveleges:
choco install themekit
4. Generate your config.yml file with this command: theme get --password=[your-password] --store="[your-store.myshopify.com]" --themeid=[your-theme-id]
5. Upload your theme as a zip file via the shopify admin GUI
6. Publish your theme
7. Run this command to automatically upload updates from your file to your live theme: theme watch --allow-live
8. Congratulations, you did it!



   
