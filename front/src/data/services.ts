import type { Service } from '../types/service'

export const services: Service[] = [
  {
    id: 'automatizacion',
    title: 'Automatización de procesos empresariales',
    description:
      'Analizamos los procesos operativos de su empresa para identificar tareas repetitivas o ineficientes y transformarlas en sistemas automatizados que optimicen la operación del negocio.',
    icon: '⚙️',
    features: [
      'Análisis de procesos operativos',
      'Eliminación de tareas repetitivas',
      'Reducción de errores manuales',
      'Flujos de trabajo automatizados',
    ],
  },
  {
    id: 'software-personalizado',
    title: 'Desarrollo de software personalizado',
    description:
      'Diseñamos y desarrollamos soluciones tecnológicas adaptadas a las necesidades específicas de cada empresa, evitando el uso de sistemas genéricos que no se ajustan a la realidad de su operación.',
    icon: '💻',
    features: [
      'Software a medida',
      'Adaptado a su operación real',
      'Escalable y mantenible',
      'Integración con sistemas existentes',
    ],
  },
  {
    id: 'modernizacion',
    title: 'Modernización tecnológica',
    description:
      'Ayudamos a las empresas a actualizar sus herramientas y métodos de trabajo mediante soluciones digitales que mejoran la gestión de información y la eficiencia operativa.',
    icon: '🚀',
    features: [
      'Actualización de sistemas obsoletos',
      'Migración de datos',
      'Digitalización de procesos',
      'Mejora de la gestión de información',
    ],
  },
  {
    id: 'optimizacion',
    title: 'Optimización de procesos',
    description:
      'Analizamos los flujos de trabajo dentro de la empresa para identificar oportunidades de mejora que permitan reducir tiempos, minimizar errores y aumentar la productividad.',
    icon: '📈',
    features: [
      'Mapeo y análisis de flujos de trabajo',
      'Reducción de tiempos operativos',
      'Minimización de errores',
      'Aumento de productividad',
    ],
  },
]
