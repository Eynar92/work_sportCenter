const productsData = [
    {
      "id": 1,
      "name": "Campera Deportiva con Capucha",
      "quantity": 15,
      "category": "Camperas",
      "sizes": ["S", "M", "L", "XL"],
      "description": "Campera deportiva con capucha para entrenamientos al aire libre. Fabricada con material transpirable y resistente al agua.",
      "price": 45.99,
      "image": "https://media.istockphoto.com/id/1342093309/es/foto/una-joven-urbana-con-chaqueta-amarilla-contra-el-cielo-azul-1.webp?b=1&s=170667a&w=0&k=20&c=RBrIGlYKM_7e8VS9kqtRbCYASfV6pY76NAo-YpI1apU="
    },
    {
      "id": 2,
      "name": "Pantalón Deportivo Corte Ajustado",
      "quantity": 20,
      "category": "Pantalones",
      "sizes": ["S", "M", "L", "XL"],
      "description": "Pantalón deportivo con corte ajustado para máxima comodidad durante tus entrenamientos. Bolsillos laterales y cintura elástica.",
      "price": 32.99,
      "image": "https://plus.unsplash.com/premium_photo-1661371211816-53a23e0013d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    {
      "id": 3,
      "name": "Polera Deportiva de Manga Corta",
      "quantity": 30,
      "category": "Poleras",
      "sizes": ["S", "M", "L", "XL"],
      "description": "Polera deportiva de manga corta con tecnología de absorción de humedad. Ideal para actividades intensas.",
      "price": 19.99,
      "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
    },
    {
      "id": 4,
      "name": "Gorra Deportiva Transpirable",
      "quantity": 25,
      "category": "Gorras",
      "sizes": ["Única"],
      "description": "Gorra deportiva con paneles de malla para una mayor transpirabilidad. Ajuste trasero ajustable y visera curvada.",
      "price": 15.99,
      "image": "https://images.unsplash.com/photo-1530398257477-3e1b0b0ed605?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1942&q=80"
    },
    {
      "id": 5,
      "name": "Camiseta Térmica de Compresión",
      "quantity": 18,
      "category": "Camisetas",
      "sizes": ["S", "M", "L", "XL"],
      "description": "Camiseta térmica de compresión para mantener el calor durante el entrenamiento en climas fríos. Diseño sin costuras para mayor comodidad.",
      "price": 29.99,
      "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
    },
    {
      "id": 6,
      "name": "Pantalón Deportivo de Yoga",
      "quantity": 22,
      "category": "Pantalones",
      "sizes": ["S", "M", "L", "XL"],
      "description": "Pantalón deportivo de yoga con cintura alta y tejido elástico. Perfecto para actividades de bajo impacto y relajación.",
      "price": 27.99,
      "image": "https://images.unsplash.com/photo-1579454563399-9da67b065830?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80"
    },
    {
      "id": 7,
      "name": "Chaqueta Cortaviento Reflectante",
      "quantity": 12,
      "category": "Chaqueta",
      "sizes": ["S", "M", "L", "XL"],
      "description": "Chaqueta deportiva cortaviento con detalles reflectantes para correr de noche. Cierre frontal completo y bolsillos laterales.",
      "price": 54.99,
      "image": "https://media.istockphoto.com/id/1184395374/es/foto/sonriendo-senior-man-ciclismo-en-country-road.webp?b=1&s=170667a&w=0&k=20&c=DMrgFBPLTBosjQbxQ4t39KizBKWXSNXr5_J1cRKsZis="
    },
    {
      "id": 8,
      "name": "Short Deportivo de Entrenamiento",
      "quantity": 28,
      "category": "Shorts",
      "sizes": ["S", "M", "L", "XL"],
      "description": "Short deportivo de entrenamiento con tela ligera y transpirable. Cintura elástica con cordón ajustable.",
      "price": 22.99,
      "image": "https://media.istockphoto.com/id/1463785097/es/foto/pantalones-cortos-negros-ligeros-de-verano-vista-frontal.webp?b=1&s=170667a&w=0&k=20&c=6rgRAlfs1ZxWW7RufVqANz3vStHuAInKtKsJaeAzARg="
    },
    {
      "id": 9,
      "name": "Top Deportivo de Soporte Alto",
      "quantity": 15,
      "category": "Tops",
      "sizes": ["S", "M", "L", "XL"],
      "description": "Top deportivo de soporte alto con tirantes cruzados en la espalda. Diseño sin costuras para mayor comodidad durante el ejercicio.",
      "price": 36.99,
      "image": "https://plus.unsplash.com/premium_photo-1683147873388-bae5a0951e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      "id": 10,
      "name": "Gorra de Béisbol Clásica",
      "quantity": 35,
      "category": "Gorras",
      "sizes": ["Única"],
      "description": "Gorra de béisbol clásica con logo bordado. Ajuste trasero de hebilla para un ajuste personalizado.",
      "price": 12.99,
      "image": "https://media.istockphoto.com/id/1174867107/es/foto/primer-plano-de-un-jugador-de-b%C3%A9isbol-hispano-sonriente-mirando-hacia-otro-lado.webp?b=1&s=170667a&w=0&k=20&c=mIwT-Vae02Rrk2oYafTUR19aQAf9WJkJgQptbUqDt28="
    }
  ];
export default productsData;