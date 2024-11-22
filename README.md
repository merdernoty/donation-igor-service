# Donation Service

🚀 **Donation Service** is a microservice-based backend application designed for managing donations. Built with NestJS and gRPC, it offers a scalable and maintainable architecture for processing donations securely and efficiently.

## 🌟 Features

- 🏦 **Secure Donation Management:** Handles donations with robust validation and security.
- 🎁 **Auto Donation Allocation:** Allocates donations based on predefined rules and priorities.
- ⚡ **gRPC Integration:** High-performance communication between microservices.
- 🔒 **Role-Based Access Control (RBAC):** Ensures secure access to critical functionalities.
- 📜 **Comprehensive Logging and Monitoring:** Uses tools like Sentry and Prometheus for monitoring and debugging.

---

## 📂 Project Structure

```plaintext
donation-service/
├── apps/
│   ├── auth-service/            # Microservice for authentication
│   ├── donation-service/        # Microservice for handling donations
│   ├── user-service/            # Microservice for user management
│   ├── notification-service/    # Microservice for sending notifications
│   └── payment-service/         # Microservice for handling payments
├── gateway/                     # Microservice for handling
├── proto/                       # gRPC protocol definition files
├── libs/                        # Shared libraries (e.g., DTOs, utilities)
├── .env                         # Environment variables
├── README.md                    # Project documentation
└── package.json                 # Dependencies and scripts
