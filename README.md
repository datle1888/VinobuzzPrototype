# Vinobuzz Prototype (React Native CLI, TypeScript)

Minimal React Native prototype for a take-home exercise demonstrating by Danny Le:

- **Chatbox** (floating FAB + overlay chat with mock messages)
- **Product Detail** (swipeable gallery, loading state, sticky CTA, expandable section)

## Features

### 1) Chatbox (FAB + Overlay)

- Floating chat FAB visible across screens
- Minimized ⇄ Expanded chat overlay states
- Mock chat messages (bot + user)
- Typing indicator simulation
- Quick reply chips
- Product recommendation message with **“View product”** action
- Chat action navigates to Product Detail screen

### 2) Product Detail Screen

- Fake loading skeleton before content render
- Swipeable image gallery (`FlatList` + paging)
- Product content stack (name, price, description)
- Expandable tasting notes section
- Sticky **Add to Cart** CTA bar

### 3) Navigation & Connectivity

- React Navigation stack: `Home -> ProductDetail`
- Chat overlay can navigate into Product Detail
- Deep link support for product route:
  - `vinobuzz:///product/123` (iOS simulator tested)
- Mock offline banner with a Home screen toggle (“Simulate offline”)

---

## Tech Stack

- React Native CLI (bare RN)
- TypeScript
- React Navigation (native stack)
- Mock local data (no API)

---

## Run Instructions

### Prerequisites

- Node.js (LTS recommended) (Node version >= 22)
- npm/yarn
- Xcode + iOS Simulator (recommended) or Android Studio/Android Emulator
- CocoaPods

### Install

```bash
yarn/npm install
cd ios && pod install && cd ..
```

npm start

# in another terminal

npm run ios or yarn ios

# Deep Link Testing (iOS Simulator)

on Terminal run when the app is closed: xcrun simctl openurl booted "vinobuzz:///product/123"

# Assumptions

Mock data is sufficient (no backend/API).
Offline state is simulated with a local toggle instead of real network detection (NetInfo) to keep the prototype deterministic and easy to demo.
Chat is overlay-style and globally mounted to stay visible across screens.
