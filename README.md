# html5-gulp-boilerplate

This is a bit more than a html5 and gulp boilerplate, it also includes setup for

|feature|check|
|--|--|
|express server|:white_check_mark:|
|gzip|:white_check_mark:|
|https*|:white_check_mark:|
|http2*|:white_check_mark:|
|minifies dist html, css, js|:white_check_mark:|
|uglifies dist js|:white_check_mark:|
|prettifies src html, css, js|:white_check_mark:|
|combine css, js|:white_check_mark:|
|precompiles sass, less|coming soon|
|autoprefixing sass|coming soon|
|sourcemaps|coming soon|

###### https and http2 require setup of https for localhost


#### to install
`npm install`

#### start
`gulp`

#### prettify contents in the /src directory
`gulp prettify`


#### to use https://localhost


for mac users
```bash
$ cd && mkdir .ssl
$ openssl version || brew install openssl
$ openssl req -newkey rsa:2048 -x509 -nodes -keyout .ssl/localhost.key -new -out .ssl/localhost.crt -subj /CN=localhost -reqexts SAN -extensions SAN -config <(cat /System/Library/OpenSSL/openssl.cnf <(printf '[SAN]\nsubjectAltName=DNS:localhost')) -sha256 -days 3650
$ sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain .ssl/localhost.crt
```

