# MongoDB Schema Design (Multi-tenant)

## Collections

### tenants
- _id: string (brandId)
- name: string

### users
- _id: string
- tenantId: string
- name: string
- publicKey: string (ed25519)
- friends: [userId]

### personalChats
- _id: string
- tenantId: string
- members: [userId]
- aesKeyEncrypted: { userId: encryptedAesKey }
- messages: [Message]

### groupChats
- _id: string
- tenantId: string
- name: string
- members: [userId]
- aesKeyEncrypted: { userId: encryptedAesKey }
- messages: [Message]

### keys
- _id: string (brandId)
- aesMasterKey: string (encrypted)
- createdAt: datetime

### Message (embedded)
- _id: string
- senderId: string
- content: string (AES-GCM encrypted)
- mediaUrl: string (optional)
- timestamp: datetime

## Indexes
- All collections indexed by tenantId
- users.name, tenants.name unique

## Key Storage
- User keypair: ed25519, only publicKey stored
- Chat AES key: Encrypted by each member's publicKey, stored in aesKeyEncrypted
- Brand-level AES master key: stored in keys
