import { useState } from 'react'

const QueHacemos = () => {
  const [isHovering, setIsHovering] = useState(true)
  const [active, setActive] = useState(true)

  const [isHovering2, setIsHovering2] = useState(false)
  const [active2, setActive2] = useState(false)

  const [isHovering3, setIsHovering3] = useState(false)
  const [active3, setActive3] = useState(false)

  const handleMouseOver = () => {
    setIsHovering(true)
    setActive(true)
    setIsHovering2(false)
    setActive2(false)
    setIsHovering3(false)
    setActive3(false)
  }
  const handleMouseOver2 = () => {
    setIsHovering2(true)
    setActive2(true)
    setActive(false)
    setIsHovering(false)
    setIsHovering3(false)
    setActive3(false)
  }

  const handleMouseOver3 = () => {
    setIsHovering3(true)
    setActive3(true)

    setIsHovering2(false)
    setActive2(false)

    setIsHovering(false)
    setActive(false)
  }

  //   const handleMouseOut = () => {
  //     setIsHovering(false)
  //   }

  return (
    <div>
      <div>
        <div className=" d-flex mx-5 m-2">
          <div
            onMouseOver={handleMouseOver}
            //  onMouseOut={handleMouseOut}
            style={{ color: active ? 'blue' : 'black' }}
            className="mx-1"
          >
            ¿Qué hacemos?
          </div>
          <div
            onMouseOver={handleMouseOver2}
            //  onMouseOut={handleMouseOut}
            style={{ color: active2 ? 'blue' : 'black' }}
            className="mx-1"
          >
            ¿Cómo lo hacemos?
          </div>
          <div
            onMouseOver={handleMouseOver3}
            //  onMouseOut={handleMouseOut}
            style={{ color: active3 ? 'blue' : 'black' }}
            className="mx-1"
          >
            Un poco de historia..
          </div>
        </div>

        {isHovering && (
          <div className="headerQue">
            <br />
            <h2 className="m-3">
              News Sensei es un brief inteligente gratuito, conciso, dinámico y
              completo.
            </h2>
            <h6 className="mx-3 blueText ">
              News Sensei te ahorra tiempo, dinero y esfuerzo al enviarte un
              resumen inteligente con la información noticiosa más relevante
              todas las mañanas.
            </h6>
            <h6 className="mx-3">
              La mayoría de los CEO´s de grandes corporaciones, funcionarios de
              alto nivel, y altos mandos del gobierno, contratan empresas de
              comunicación que les producen un “Resumen de Medios”. Lo anterior,
              en la medida en que resulta poco conveniente para los tomadores de
              decisión pasar toda la mañana analizando una gran cantidad de
              información, desperdiciando tiempo valioso. Sin embargo, esta
              información no necesariamente está procesada de manera correcta,
              en la mayoría de los casos, sólo es una copia de las primeras
              páginas de los periódicos nacionales. News Sensei no sólo resume y
              jerarquiza la información, sino que la analiza y provee escenarios
              sobre los “trends” internacionales y nacionales más relevantes. No
              únicamente lo hace sobre noticias, sino que también informa qué
              dicen las personalidades, periodistas e intelectuales más
              importantes de México y el mundo en unas cuantas líneas y sin que
              tengas que pasar toda la mañana leyendo multitud de columnas,
              periódicos y revistas o portales web, ahorrando tiempo y dinero.
              News Sensei democratiza los servicios corporativos tradicionales
              que implican costos, además, ofrece un significativo ”insight”
              sobre lo que sucede y sus implicaciones a futuro, a través de un
              modelo inteligente e innovador que permite obtener las noticias
              con diversos escenarios para identificar posibles implicaciones
              políticas, económicas y financieras, así como “trends” mediáticos.
              News Sensei está destinado a todas aquellas personas que quieren
              estar un paso adelante de los demás, y que están interesados en
              entender el mundo que los rodea mediante análisis coyuntural, pero
              conciso, de manera rápida y profunda incluyendo “futurología”, que
              permite hacer pronósticos políticos, económicos y tecnológicos.
            </h6>
          </div>
        )}

        {isHovering2 && (
          <div className="headerQue">
            <br />
            <h2 className="m-3">¿Cómo lo hacemos?</h2>
            <h5 className="m-3">
              En News Sensei sabemos que la información es poder. Por eso,
              tomamos nota de todos los sucesos relevantes, nacionales e
              internacionales; asimismo revisamos diversas publicaciones de
              interés alrededor del mundo. Lo anterior, para elaborar un brief
              que tenga todo lo que necesita saber un “tomador de decisiones” de
              alto nivel. ¡Recíbelo en tu correo electrónico!
            </h5>
            <h5 className="m-3">
              <strong>Síntesis y Jerarquización</strong>
            </h5>
            <h5 className="m-3">
              Después de leer y analizar un gran cúmulo de información, se
              sintetiza para evitar repeticiones, y también se jerarquiza. De
              esta manera, el lector comienza con lo más relevante a nivel
              internacional, para después abordar lo nacional, local y temas
              específicos de importancia.
            </h5>
            <h5 className="m-3">
              <strong>Análisis coyuntural</strong>
            </h5>
            <h5 className="m-3">
              En News Sensei analizamos la correlación de fuerzas, estudiamos
              las relaciones de poder y las estrategias geopolíticas y
              financieras en tiempo real; lo anterior, con miras a desentrañar
              las tendencias objetivamente posibles en los distintos escenarios
              políticos y económicos de cada noticia. Por lo tanto, el lector no
              solo estará mejor informado que la persona promedio, sino que
              tendrá una ventaja adicional al tener información procesada y
              depurada por nuestros expertos.
            </h5>
            <h5 className="m-3">
              <strong>Inteligencia</strong>
            </h5>
            <h5 className="m-3">
              A diferencia de un medio de comunicación tradicional, donde se
              transmite información “cruda”, en News Sensei se recopila, procesa
              y cruza entre muchas fuentes. Se analiza también lo que dicen los
              principales líderes de opinión, intelectuales, figuras públicas y
              expertos sobre el tema en cuestión. Así, el lector tendrá “el
              cuadro completo”, en vez de tener solo una parte del rompecabezas.
            </h5>
            <h5 className="m-3">
              <strong>Futurología</strong>
            </h5>
            <h5 className="m-3">
              El poder de la información solo podrá aplicarse tangiblemente si
              podemos anticipar y entender el trasfondo de los sucesos
              políticos, económicos y financieros; y de esta manera identificar
              los desafíos que están por venir, hacer pronósticos e identificar
              “trends”. Este último concepto cobra especial relevancia cuando
              hablamos de tecnología e innovación, por lo que a través de News
              Sensei, el lector conocerá, de primera mano, qué empresas estarán
              cambiando el mundo y obteniendo ganancias récord en los mercados
              bursátiles.
            </h5>
          </div>
        )}

        {isHovering3 && (
          <div className="headerQue">
            <br />
            <h2 className="m-3">President’s Daily Bulletin.</h2>
            <h5 className="m-3">
              El brief nació como un ejercicio diario de inteligencia para el
              Presidente de Estados Unidos, Harry S. Truman, en 1946. En ese
              año, comenzó la “Guerra Fría” entre ese país y la Unión Soviética.
              En ese entorno tan delicado, tener información concisa todas las
              mañanas resultó vital y salvó millones de vidas, muy probablemente
              contribuyendo a evitar una guerra nuclear. Inicialmente se le
              identificó con las siglas PDB, que significan “President´s Daily
              Bulletin”, y consistía en un resumen de información y análisis de
              alto nivel sobre cuestiones de interés nacional e internacional. A
              lo largo de los años se popularizó, evolucionó y se compartió con
              más funcionarios para satisfacer las necesidades cambiantes del
              mundo globalizado. Lo anterior comenzó a implementarse en diversos
              sectores de la iniciativa privada, con la intención de que los
              “decision makers” tengan una visión rápida y concisa de lo que
              sucede, pero a la vez completa, profunda y con una pluralidad de
              fuentes de información.
            </h5>
            <h5 className="m-3 blueText">
              ¡Comienza tu día como un CEO! News Sensei te permite ahorrar
              tiempo y recursos para iniciar el día con información clave.
            </h5>
          </div>
        )}
      </div>
    </div>
  )
}

export default QueHacemos
