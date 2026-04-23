# Mocks API - Pre Entrega Proyecto Final de Juan Cruz Quiroga

## 📌 Descripción

Este proyecto implementa un módulo de mocking para generar usuarios y mascotas, siguiendo una arquitectura en capas (router, controller, service, dao).

Permite generar datos fake y simular inserciones en una base de datos.

---

## 🧱 Arquitectura

```
app → routes → controllers → services → dao
```

---

## 📡 Endpoints

### 🔹 Mocking

* **GET /api/mocks/mockingusers**
  Genera 50 usuarios mock.

* **GET /api/mocks/mockingpets**
  Genera mascotas mock.

---

### 🔹 Generación e inserción

* **POST /api/mocks/generateData**

Body ejemplo:

```json
{
  "users": 10,
  "pets": 5
}
```

---

### 🔹 Verificación

* **GET /api/mocks/users**
  Lista usuarios insertados.

* **GET /api/mocks/pets**
  Lista mascotas insertadas.

---

## ⚙️ Características

* Password encriptada con bcrypt (`coder123`)
* Roles dinámicos (`user` / `admin`)
* Estructura escalable tipo backend real
* DAO en memoria (preparado para migrar a MongoDB)

---
