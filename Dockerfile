# Builder Stage
FROM node:20-alpine AS builder

# 1. Install pnpm
RUN npm i -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

# Production Stage 

FROM node:20-alpine AS production

WORKDIR /app

# Copy the built artifacts from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Set the environment variables (if needed)
ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "server.js"]