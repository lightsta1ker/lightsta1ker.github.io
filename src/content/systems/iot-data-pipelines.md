---
title: "IoT Data Pipelines"
description: "Modernized legacy IoT infrastructure using EKS, EMQX, and RabbitMQ. Built scalable pipelines to handle real-time sensor data ingestion and processing for metro rail systems."
icon: "📡"
stats: ["Real-time", "High Throughput", "Scalable"]
publishDate: 2024-08-20
---

# Taming the Data River: Real-Time Ingestion at Scale

Imagine a city's heartbeat—millions of pulses every second. That was our challenge with the Chennai Metro. Every train, every sensor, every track switch was screaming data, and our legacy infrastructure was drowning in the noise.

We didn't just need a bigger bucket; we needed a **Data River**.

## The Concept: Decouple and Conquer

The old system was a monolith. If the ingestion layer choked, the processing layer starved. If the database locked up, the sensors stopped reporting. It was a house of cards.

We tore it down and rebuilt it with a philosophy of **radical decoupling**.



## The Three Stages of Flow

### 1. The Floodgates (Ingestion)
We used **EMQX** on Kubernetes as our front door. It's built to handle millions of concurrent connections without breaking a sweat. It doesn't process data; it just catches it. It's the catcher's mitt.

### 2. The Reservoir (Buffering)
Data is bursty. Trains arrive at stations, sensors wake up simultaneously. To handle these tsunamis, we introduced **RabbitMQ** as a shock absorber. It holds the flood, allowing our processing workers to drink from the firehose at their own pace.

### 3. The Refinery (Processing)
Stateless microservices consume messages from the queue, enrich them with context (e.g., "Train 102 is at Station 5"), and write them to **TimescaleDB**. This is where raw noise becomes actionable intelligence.

## Why It Works

This architecture is **elastic**.
- **Morning Rush?** The ingestion layer scales out automatically.
- **Network Outage?** The buffer fills up but doesn't crash.
- **Database Maintenance?** The queue holds the data until the DB is back online.

We turned a fragile, monolithic system into a living, breathing organism that adapts to the pulse of the city.
