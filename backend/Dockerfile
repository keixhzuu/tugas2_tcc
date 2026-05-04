FROM node:20-alpine
WORKDIR /app


COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000
# Pastikan entry point sesuai nama filemu
CMD ["node", "app.js"]