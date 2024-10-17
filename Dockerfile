
      FROM node:18-alpine AS deps
      WORKDIR /app
      COPY package*.json ./
      RUN npm install
  
      FROM node:18-alpine AS build
      WORKDIR /app
      COPY . .
      RUN npm run build
  
      FROM node:18-alpine AS runner
      WORKDIR /app
      COPY --from=build /app/.next ./.next
      COPY --from=build /app/node_modules ./node_modules
      EXPOSE 3000
      CMD ["npm", "run", "start"]
    