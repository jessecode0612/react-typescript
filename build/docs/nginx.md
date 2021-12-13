#### Nginx Configuration
- go to etc/nginx/site-available
- make a config file with domain name you are going to add.
```
include forge-conf/bizinabox.com/before/*;

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name bhusan.bizinabox.com;
    server_tokens off;
    root /home/forge/bhusan.bizinabox.com;

    # FORGE SSL (DO NOT REMOVE!)
    ssl_certificate /etc/nginx/ssl/bizinabox.com/955599/server.crt;
    ssl_certificate_key /etc/nginx/ssl/bizinabox.com/955599/server.key;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers TLS13-AES-256-GCM-SHA384:TLS13-CHACHA20-POLY1305-SHA256:TLS_AES_256_GCM_SHA384:TLS-AES-256-GCM-SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS-CHACHA20-POLY1305-SHA256:ECDHE-ECDSA-A>
    ssl_prefer_server_ciphers on;
    ssl_dhparam /etc/nginx/dhparams.pem;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";

    index index.html index.htm index.php;

    charset utf-8;

    # FORGE CONFIG (DO NOT REMOVE!)
    include forge-conf/bizinabox.com/server/*;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    access_log off;
    error_log  /var/log/nginx/bizinabox.com-error.log error;

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/var/run/php/php8.0-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
            fastcgi_connect_timeout 3000;
        fastcgi_send_timeout 3000;
        fastcgi_read_timeout 3000;
        client_max_body_size 200M;
    }

    location ~ /\.(?!well-known).* {
      deny all;
    }
}

# FORGE CONFIG (DO NO REMOVE)
include forge-conf/biainzbox.com/after/*
```
#### Commands
- restart `sudo systemctl restart nginx` or `service nginx restart`