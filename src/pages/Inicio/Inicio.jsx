import MainLayout from '../../layouts/MainLayout'
import pinpollo from '../../assets/images/pinpollo.png'

function Inicio() {
  return (
    <MainLayout container={false}>
      <div className="banner-pinpollo">
        <img
          className="pinpollo-img"
          src={pinpollo}
          alt="Pinpollo"
        />

        <div className="banner-overlay"></div>

        <div className="banner-text">
          <h2>
            <p>El mejor lugar para cuidar</p>
            <p>a tus mascotas</p>
          </h2>
        </div>
      </div>

      <section id="quienes" className="descripcion">
        <h2>¿Quiénes somos?</h2>

        <p>
          En La Guardería de Salem ofrecemos un espacio seguro, cómodo y lleno
          de cariño para tus mascotas. Nuestro objetivo es brindar tranquilidad
          a los dueños mientras sus mascotas reciben atención, cuidado y compañía.
        </p>
      </section>

      <section className="razones">
        <h2>¿Por qué elegirnos?</h2>

        <div className="razones-grid">
          <div className="razon">
            <i className="bi bi-house icono"></i>
            <h3>Alojamiento</h3>
            <p>Habitaciones cómodas y adecuadas para cada tipo de mascota.</p>
          </div>

          <div className="razon">
            <i className="bi bi-telephone icono"></i>
            <h3>Comunicación</h3>
            <p>Mantenemos contacto con los dueños durante la estadía.</p>
          </div>

          <div className="razon">
            <i className="bi bi-shield-check icono"></i>
            <h3>Seguridad</h3>
            <p>Cuidamos a cada mascota con responsabilidad y atención.</p>
          </div>

          <div className="razon">
            <i className="bi bi-controller icono"></i>
            <h3>Diversión</h3>
            <p>Espacios pensados para que las mascotas estén activas y felices.</p>
          </div>

          <div className="razon">
            <i className="bi bi-heart icono"></i>
            <h3>Cariño</h3>
            <p>Tratamos a cada mascota como parte de nuestra familia.</p>
          </div>
        </div>
      </section>

      <section className="contacto">
        <div className="info-contacto">
          <h3>La Guardería de Salem</h3>

          <p>
            <strong>3FWR+JHG, C. 4A, Limón, Siquirres</strong>
          </p>

          <p>
            <a
              href="https://wa.me/50689326916"
              target="_blank"
              className="contact-link"
            >
              <i className="bi bi-telephone"></i>
              +506 8932-6916
            </a>
          </p>

          <p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=Bryan72701214@gmail.com"
              target="_blank"
              className="contact-link"
            >
              <i className="bi bi-envelope"></i>
              Bryan72701214@gmail.com
            </a>
          </p>

          <p>
            <i className="bi bi-clock"></i>
            Lunes a domingo de 8:00 a.m. a 6:00 p.m.
          </p>
        </div>

        <div className="mapa">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1651.5322903121594!2d-83.5082481400864!3d10.096799570758524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa7338e09fb4341%3A0xdecb0e352939e6c3!2sRobert&#39;s%20barberia!5e0!3m2!1ses-419!2scr!4v1777701652502!5m2!1ses-419!2scr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <footer>
        <p>© 2026 La Guardería de Salem</p>
      </footer>
    </MainLayout>
  )
}

export default Inicio