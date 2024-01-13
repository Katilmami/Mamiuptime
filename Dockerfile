# Resmi Node.js 14.x imajını kullan
FROM node:14

# Uygulama dosyalarını /app dizinine kopyala
COPY . /app

# Çalışma dizinini /app olarak ayarla
WORKDIR /app

# Gerekli bağımlılıkları yükle
RUN npm install

# Uygulamayı çalıştır
CMD ["node", "."]
