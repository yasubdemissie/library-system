# NestJS Microservices Library

This project contains a simple NestJS microservices setup with:

- `api-gateway` (HTTP entry point on port `3000`)
- `catalog` microservice (TCP on port `4001`)
- `inventory` microservice (TCP on port `4002`)
- `user` microservice (TCP on port `4003`)

## Prerequisites

- Node.js 18+ (recommended)
- npm

## Installation

```bash
npm install
```

## Run Services (Development)

Open 4 terminals in the `library` folder and start each service:

```bash
npm run start:dev:api-gateway
npm run start:dev:catalog
npm run start:dev:inventory
npm run start:dev:user
```

## API Endpoints (via Gateway)

Once all services are running:

- `GET http://localhost:3000/catalog`
- `GET http://localhost:3000/inventory`
- `GET http://localhost:3000/user`

## Available Scripts

```bash
npm run build
npm run start
npm run start:dev
npm run start:dev:api-gateway
npm run start:dev:catalog
npm run start:dev:inventory
npm run start:dev:user
npm run start:debug
npm run start:prod
npm run test
npm run test:watch
npm run test:cov
npm run test:e2e
```

## Notes

- If the gateway logs `ECONNREFUSED` for ports `4001`, `4002`, or `4003`, start the corresponding microservice.
- `Transport.TCP` is used for service-to-service communication.
