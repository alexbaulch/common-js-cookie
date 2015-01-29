# CommonJS Cookie

A minature CommonJS module for creating, reading and deleting cookies in the browser. Majority of the library hijacked from MDN [here](https://developer.mozilla.org/en-US/docs/Web/API/document.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support)

## Writing a cookie

### Syntax
```javascript
cookie.setItem(key, value, expiryDate, path, domain, secure)
```

### Description
Create/overwrite a cookie.

### Parameters
#### key
The name of the cookie to create/overwrite (string).
#### value
The value of the cookie (string).
#### expiryDate Optional
The max-age in seconds (e.g. 31536e3 for a year, Infinity for a never-expires cookie), or the expires date in GMTString format or as Date object; if not specified the cookie will expire at the end of session (number – finite or Infinity – string, Date object or null).
#### path Optional
The path from where the cookie will be readable. E.g., "/", "/mydir"; if not specified, defaults to the current path of the current document location (string or null). The path must be absolute (see RFC 2965). For more information on how to use relative paths in this argument, see this paragraph.
#### domain Optional
The domain from where the cookie will be readable. E.g., "example.com", ".example.com" (includes all subdomains) or "subdomain.example.com"; if not specified, defaults to the host portion of the current document location (string or null).
#### secure Optional
The cookie will be transmitted only over secure protocol as https (boolean or null).

## Getting a cookie

### Syntax
```javascript
cookie.getItem(key)
```

### Description
Read a cookie. If the cookie doesn't exist a null value will be returned.

### Parameters
#### key
The name of the cookie to read (string).

## Removing a cookie

### Syntax
```javascript
cookie.removeItem(key, path, domain)
```

### Description
Delete a cookie.

### Parameters
#### key
The name of the cookie to remove (string).
#### path Optional
E.g., "/", "/mydir"; if not specified, defaults to the current path of the current document location (string or null). The path must be absolute (see RFC 2965). For more information on how to use relative paths in this argument, see this paragraph.
#### domain Optional
E.g., "example.com", ".example.com" (includes all subdomains) or "subdomain.example.com"; if not specified, defaults to the host portion of the current document location (string or null).
Note: To delete cookies that span over subdomains, you need to explicitate the domain attribute in removeItem() as well as setItem().

## Testing a cookie

### Syntax
```javascript
cookie.hasItem(key)
```

### Description
Check whether a cookie exists in the current position.

### Parameters
#### key
The name of the cookie to test (string).

## Getting the list of all cookies

### Syntax
```javascript
cookie.keys()
```

###Description
Returns an array of all readable cookies from this location.