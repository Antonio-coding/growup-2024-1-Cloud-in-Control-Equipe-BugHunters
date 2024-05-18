# Use uma imagem base do PHP com FPM
FROM php:8.3-cli


# Instalar dependências adicionais (se necessário)
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    && docker-php-ext-install pdo_mysql

# Instalar o Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Verificar a versão do Composer para garantir que foi instalado corretamente
RUN composer --version

# Definir o diretório de trabalho
WORKDIR /usr/src/myapp

# Copiar os arquivos do projeto
COPY . /usr/src/myapp

# Expor a porta 80
EXPOSE 80

# Iniciar o servidor PHP-FPM
CMD [ "php", "./index.php" ]
