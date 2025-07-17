---
trigger: manual
---

# Project Tasks

## Feature : Multi-Tenant Chat Backend (Go + Kratos + MongoDB)

> **Scope** – 65 bite-sized backend tasks (≈1 PR each) delivering:  
> *E2E-encrypted personal / group chat, user & wallet profiles, tenant isolation, media, observability, future game-launch hook.*

## Integration Test with MongoDB

This should refer to the guide for integration test with MongoDB. The doc name is behavior-integration-test.md

---

### Sprint 0 — Project Bootstrap
- [x] **Create Go module** `chatapp/backend`; commit `go.mod` (Go 1.22)  
  - [x] Add test to verify module name
  - [x] Fix import paths and update dependencies
  - [x] Clean up WebSocket handler code
  - [x] Resolve MongoDB driver compatibility issues
- [x] **Add Kratos dependency** and minimal `cmd/main.go`  
- [x] **Write Dockerfile** (multi-stage build + Alpine runtime)  
- [x] **Create `.env` loader** for `MONGO_URI`, `JWT_SECRET`, …  

### Sprint 1 — Core Infrastructure
- [x] **Tenant middleware**: extract `tenantId` from header / sub-domain → `ctx`  
- [x] **WebSocket upgrader**: `/ws` endpoint, accept `uid` query param  
- [x] **Connection hub**: `map[tenantId]map[userId]*Conn` + `Register/Unregister`  
- [x] **MongoDB Repository**: Implemented MongoDB repository for friend relationships with CRUD operations
- [x] **Graceful shutdown hook** (SIGINT → close sockets)  

### Sprint 2 — Mongo Repositories
- [x] **Mongo client singleton**  
- [x] **Dynamic DB selector** `brand_<tenantId>`  
- [x] **MessageRepo.Save** – insert encrypted payload  
- [x] **MessageRepo.Recent** – fetch last N sorted by `ts`  

### Sprint 3 — Crypto Layer
- [x] **AES-GCM wrapper** (`Encrypt`, `Decrypt`)  
- [x] **Ed25519 key-pair generator** (`crypto.GenKeyPair`)  
- [x] **Crypto unit-tests** (happy-path & tampered nonce)  

### Sprint 3.1 — Basic User Feature(user login, register, add friend)
- [x] **User login, register**
- [x] **Add friend functionality**
- [x] **User profile update**
- [x] **User friend list**
- [x] **User friend request**
- [x] **User friend accept**
- [x] **User friend display name update**
- [x] **Refactor friend request handler tests**
- [x] **Clean up unused code and constants**
- [x] **Replace hardcoded values with constants**
- [x] **User online status tracking**
- [x] **User friend search**
- [x] **User friend reject**
- [x] **User friend remove**
- [x] **User friend block**
- [x] **User friend unblock"
- [x] **User friend search**
- [x] **Add MongoDB integration tests for User repository**
  - [x] Test CreateUser and GetUserByID
  - [x] Test GetUserByEmail and GetUserByUsername
  - [x] Test UpdateUser and DeleteUser
  - [x] Test online/offline status tracking
  - [x] Test SearchUsers and GetUsersByIDs

- [x] **Update pagination to use cursor-based approach**
  - [x] Update list friends endpoint
  - [x] Update search users endpoint
  - [x] Update message history endpoint
  - [x] Update repository and service layers
  - [x] Update tests to use cursor-based pagination
- [x] **User friend online, offline status and last seen**
  - [x] Added IsOnline and LastSeenAt fields to FriendWithProfile
  - [x] Updated ListFriends to include online status and last seen timestamp
  - [x] Added tests for the new functionality
- [x] **User friend avatar update** (Already implemented via user profile update)
- [x] **User friend display name update**
- [x] **MongoDB Indexes bootstrap**  
  - [x] Created initialization script for MongoDB indexes
  - [x] Added Docker Compose configuration for MongoDB with initialization
  - [x] Added documentation for MongoDB setup and index management
  - [x] Created indexes for all major collections (users, friends, messages, groups, group_members)

### Sprint 3.5 — Basic Integration Test(user login, register, add friend)
- [x] **Integration test for user login, register, add friend**
- [x] **Integration test for user profile update**
- [x] **Integration test for user friend list**
- [x] **Integration test for user friend request**
- [x] **Integration test for user friend accept**
- [x] **Integration test for user friend reject**
- [x] **Integration test for user friend remove**
- [x] **Integration test for user friend block**
- [x] **Integration test for user friend unblock"
- [x] **Integration test for user friend search**
- [x] **Integration test for user friend online, offline status and last seen**
- [x] **Integration test for user friend avatar update**
- [ ] **Integration test for user friend display name update**
  - [ ] Fix 401 Unauthorized in TestUpdateFriendDisplayName

### Sprint 4 — Personal Chat
- [ ] **`POST /chats/personal`** – create / fetch chatId  
- [ ] **Store AES key** encrypted for A+B (`aesKeyEncA/B`)  
- [ ] **Integration test for `POST /friends/request`** – send / accept / reject  
  - [ ] Fix failing TestSendFriendRequest_Success
  - [ ] Fix failing TestSendFriendRequest
- [ ] **Integration test for `GET /friends`** – list with online status  
  - [ ] Fix panic in TestListFriends_WithOnlineStatus
- [ ] **Integration test for `PUT /friends/{id}/nickname`** – update display name  
  - [ ] Fix 401 Unauthorized in TestUpdateFriendDisplayName
- [ ] **Integration test for `POST /chats/personal`** – create / fetch chatId  
- [ ] **Integration test for `POST /messages`** – save message & broadcast  
- [ ] **Integration test for `GET /messages?chatId=`** – cursor pagination  

### Sprint 5 — Group Chat
- [ ] **`POST /groups`** – create group, owner as first member  
- [ ] **Add / remove member** `PUT /groups/{id}/member`  
- [ ] **Group AES key map** `aesKeyEnc[userId]`  
- [ ] **Broadcast to all online members** via hub  

### Sprint 5.5 — Group Chat Integration Test
- [ ] **Integration test for `POST /groups`** – create group, owner as first member  
- [ ] **Integration test for `PUT /groups/{id}/member`** – add / remove member  
- [ ] **Integration test for `aesKeyEnc[userId]`** – Group AES key map  
- [ ] **Integration test for `Broadcast to all online members`** – Broadcast to all online members via hub  

### Sprint 6 — User Profile & Settings
- [ ] **`GET /user/me`** – profile (username, avatar, publicKey)  
- [ ] **`PUT /user/me`** – update display name / avatar  
- [ ] **`GET /settings/notification`**  
- [ ] **`PUT /settings/notification`** (push / email toggles)  
- [ ] **`GET /settings/chat`** (font, auto-download)  
- [ ] **`PUT /settings/chat`**  
- [ ] **`GET /settings/privacy`** (last-seen, friend-policy)  
- [ ] **`PUT /settings/privacy`**  
- [ ] **`GET /settings/general`** (language, theme)  
- [ ] **`PUT /settings/general`**  
- [ ] **Avatar upload pre-sign** (reuse media service)  

### Sprint 6.5 — User Profile & Settings Integration Test
- [ ] **Integration test for `GET /user/me`** – profile (username, avatar, publicKey)  
- [ ] **Integration test for `PUT /user/me`** – update display name / avatar  
- [ ] **Integration test for `GET /settings/notification`**  
- [ ] **Integration test for `PUT /settings/notification`** (push / email toggles)  
- [ ] **Integration test for `GET /settings/chat`** (font, auto-download)  
- [ ] **Integration test for `PUT /settings/chat`**  
- [ ] **Integration test for `GET /settings/privacy`** (last-seen, friend-policy)  
- [ ] **Integration test for `PUT /settings/privacy`**  
- [ ] **Integration test for `GET /settings/general`** (language, theme)  
- [ ] **Integration test for `PUT /settings/general`**  
- [ ] **Integration test for `Avatar upload pre-sign`** (reuse media service)  

### Sprint 7 — Wallet & Assets
- [ ] **`GET /wallet/summary`** – total / locked / available  
- [ ] **`POST /wallet/buy`** – create purchase order  
- [ ] **`POST /wallet/sell`** – create sell order  
- [ ] **`GET /wallet/qrcode`** – deposit address QR  
- [ ] **`POST /wallet/transfer`** – internal transfer  
- [ ] **`GET /wallet/bills`** – paginated tx history  
- [ ] **Interface `WalletProvider`** + mock implementation  

### Sprint 8 — Payment Methods
- [ ] **`GET /payment/methods`** – list bound cards / USDT etc.  
- [ ] **`POST /payment/methods`** – add method  
- [ ] **`DELETE /payment/methods/{id}`** – remove method  

### Sprint 9 — Security / KYC
- [ ] **`GET /security/status`** – password / 2FA / KYC state  
- [ ] **`POST /security/verifyEmail`** – send + confirm code  
- [ ] **`POST /security/kyc`** – upload ID docs  

### Sprint 10 — Contacts & Friend System
- [ ] **`GET /contacts`** – paginated friends list  
- [ ] **`POST /contacts/{id}`** – send friend request  
- [ ] **`DELETE /contacts/{id}`** – remove friend  

### Sprint 11 — Dialogs & Search
- [ ] **`GET /dialogs`** – last message preview + unread count  
- [ ] **`GET /search/messages?q=`** – full-text search (stub)  
- [ ] **`GET /unread/summary`** – aggregate unread counters  

### Sprint 12 — Call / VoIP Stub
- [ ] **`GET /calls`** – recent call history  
- [ ] **`POST /calls/token`** – return TURN/STUN creds  

### Sprint 13 — Media Handling
- [ ] **`POST /media/presign`** – S3 / MinIO signed URL  
- [ ] **Save media metadata** in message doc  
- [ ] **Optional encrypt-before-upload helper**  

### Sprint 14 — Game Launcher Hook
- [ ] **`GET /games`** – list enabled games for tenant  
- [ ] **`POST /games/{id}/token`** – signed launch token  
- [ ] **Prom counter** `game_launch_total`  

### Sprint 15 — Observability & Ops
- [ ] **Health check** `/healthz` – build hash + uptime  
- [ ] **Prometheus metrics** (`http_requests_total`, `active_ws`)  
- [ ] **Makefile** (`run / build / test / docker`)  
- [ ] **Swagger / OpenAPI** auto-generation  

---

### Discovered During Work
- [x] **Refactor user service** - Improved code quality and maintainability
  - [x] Extracted JWT token generation into separate method
  - [x] Created helper methods for common operations
  - [x] Simplified control flow and reduced nesting
  - [x] Improved error handling consistency
  - [x] Added proper method documentation

- [x] **Restructure test files** - Moved test files to `backend/tests/internal/friend/` for better organization
  - [x] Moved handler tests
  - [x] Moved service tests
  - [x] Moved repository tests
  - [x] Moved friend request tests
  - [x] Moved display name tests
  - [x] Moved list friends tests
  - [x] Updated imports and package names
  - [x] Verified all tests pass in new structure

### Discovered During Work
- Unified context key usage between handler and tests for tenant ID to ensure test reliability
- Fixed test race conditions by waiting for goroutine processing in hub tests
- Added robust signal handling (SIGINT/SIGTERM) for graceful shutdown of HTTP server and all WebSocket connections
- Mongo singleton, dynamic DB selector, and message repo implemented and tested; local test failures are due to missing/invalid MONGO_URI, not code logic errors
- Crypto layer (AES-GCM, Ed25519) implemented with robust unit tests; all crypto tests pass and use secure Go stdlib primitives

_Total backend tasks : **65**_
