# librp

**Disclaimer:** This library and the author are not associated with RP, and this project is purely an individual effort. You may only use this library at your own risk, and the author bears no liability or obligation.

`librp` exposes an API for generating the `XYZ` header found in RP API requests. APIs like `RP.Leasing.AppService.WebHost` use these tokens to poorly prevent scraping of their contents.

The only API exposed is `getToken(siteID, userAgent)`. You must pass in a string of the given site ID you are making API calls to, and the exact user agent you are making requests with.

Place the result of the API call into the `XYZ` header and your requests should work successfully.