# Resmi Node.js 14.x imajını kullan
FROM node:14

# /app dizinini oluştur
RUN mkdir /app

# Çalışma dizinini /app olarak ayarla
WORKDIR /app

# Uygulama dosyalarını /app dizinine kopyala
COPY . .

# Gerekli bağımlılıkları yükle
RUN npm install

# Uygulamayı çalıştır
CMD ["node", "."]
