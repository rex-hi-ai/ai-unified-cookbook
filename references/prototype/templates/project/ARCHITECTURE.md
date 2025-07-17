---
trigger: always_on
---

# System Architecture

## Overview
This project adopts a frontend-backend separation architecture. The backend is implemented with Go/Kratos (REST/WebSocket API), the frontend with Flutter (BLoC), and MongoDB is used for storage. The system supports multi-tenancy and end-to-end encryption.

- `backend/` : Backend project, Go + Go-Kratos ＋ WebSocket + Cryptography Messaging + MongoDB
- `flutter/` : Flutter project, Flutter + BLoC
- `database/` : MongoDB Schema + Config + Init data with Docker Compose file

## Backend
- Go/Kratos framework with REST + WebSocket API
- Multi-tenant middleware (all requests require X-Tenant-ID)
- Data access layer ensures tenant isolation
- Cryptography module (ed25519, AES-GCM)
- Layered structure: Dockerfile, config.yaml, repo/service/server

## Frontend
- Flutter with BLoC architecture
- Supports dart-define BRAND_ID for tenant selection
- WebSocket connection, message send/receive, offline cache

## Database (MongoDB)
- Schema designed for multi-tenancy and key storage
- Collections: personalChats, groupChats, users, tenants, keys
- Initialization scripts and index setup

## Deployment
- One-click startup with docker-compose.yml (backend + mongo)
- Centralized configuration via configs/config.yaml

## Security
- End-to-end encryption: both messages and session keys are encrypted
- User keys use ed25519, session keys use AES-GCM
- Detailed key management and encryption flow examples

## Extensibility
- Multi-brand (multi-tenant) support
- Pluggable S3/GCS for image/file upload
- Extendable for more message types and push notifications
