FROM php:8.2-fpm

COPY composer.* /var/www/html/

WORKDIR /var/www/html

RUN apt-get update && apt-get install -y \
    build-essential \
    libicu-dev \
    libmcrypt-dev \
    mariadb-client \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl \
    libzip-dev \
    zip \
    npm

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-install pdo pdo_mysql gd zip intl

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www

COPY . .

RUN composer install

RUN #php artisan migrate --seed

WORKDIR /var/www/html/resources

RUN npm install

RUN npm run build

WORKDIR /var/www/html

# RUN cp -r /var/www/html/resources/build /var/www/html/public/

COPY --chown=www:www . .

USER www

EXPOSE 9000

CMD ["php-fpm"]

