# Plan de Implementación de Base de Datos - Atérmicos Celina

Para pasar de un almacenamiento local (`localStorage`) a una base de datos real que permita compartir información entre dispositivos y asegurar los datos, recomendamos **Supabase**.

## 1. Por qué Supabase?
- **PostgreSQL**: Base de datos robusta y relacional.
- **Autenticación**: Fácil de agregar login para administradores.
- **Realtime**: Los cambios se ven reflejadamente en todos los dispositivos.
- **SDK para JavaScript/Next.js**: Muy fácil de integrar.

## 2. Pasos para la Migración

### A. Configurar Supabase
1. Crear un proyecto en [supabase.com](https://supabase.com).
2. Crear las tablas principales:
    - `quotes`: Para guardar el historial (`id`, `client_name`, `total`, `config`, etc.).
    - `products`: Para el catálogo de precios, stock y colores.
    - `company_info`: Para los datos de la empresa.

### B. Instalar Dependencias
```bash
npm install @supabase/supabase-js
```

### C. Crear Cliente de Base de Datos
Crear `src/lib/supabase.ts`:
```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

### D. Reemplazar Zustand Persist por API de Supabase
En `adminStore.ts` y `quoteStore.ts`, en lugar de usar `persist`, las acciones deberían llamar a funciones `async` que hagan `FETCH`, `INSERT`, `UPDATE` o `DELETE` en Supabase.

### E. Seguridad (RLS)
Configurar reglas de seguridad (**Row Level Security**) para que solo los usuarios autenticados puedan modificar los precios o ver el historial completo.

---

## 3. Beneficios inmediatos
- **Persistencia real**: Si borras el caché del navegador, los datos siguen ahí.
- **Multi-usuario**: Diferentes vendedores pueden cargar presupuestos y el administrador verlos en tiempo real.
- **Escalabilidad**: Puedes agregar luego un sistema de facturación o gestión de pedidos sobre la misma base.
