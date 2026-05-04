# Gunakan image node
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json dan install dependencies
COPY package*.json ./
RUN npm install

# Copy semua file frontend dan build
COPY . .
RUN npm run build

# Port yang digunakan (App Engine standar biasanya 8080)
EXPOSE 8080

# Jalankan server untuk melayani file statis
CMD ["npm", "start"]