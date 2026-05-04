FROM node:20-alpine
WORKDIR /app

# Kita arahkan Docker untuk mengambil package.json dari dalam folder backend
COPY backend/package*.json ./
RUN npm install

# Kita arahkan Docker untuk mengambil semua kode dari dalam folder backend
COPY backend/ .

EXPOSE 3000
CMD ["node", "app.js"]