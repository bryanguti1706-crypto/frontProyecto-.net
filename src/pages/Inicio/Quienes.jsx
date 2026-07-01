import MainLayout from '../../layouts/MainLayout'
function QuienesSomos() {
    return (
        <MainLayout>
        
            <header className="quienes-hero">
                <div className="quienes-hero-text">
                    <h1>Un refugio de amor, cuidado y confianza</h1>

                    <p>
                        Cuidamos a cada mascota como parte de nuestra familia, ofreciendo un
                        espacio seguro, responsable y lleno de cariño.
                    </p>
                </div>
            </header>

            <section className="quienes-presentacion">
                <h2>¿Quiénes somos?</h2>

                <p>
                    En La Guardería de Salem somos una plataforma dedicada al bienestar de
                    las mascotas. Nacimos con el propósito de ayudar a las personas que
                    necesitan un lugar confiable para dejar a sus animales, además de
                    facilitar procesos de adopción responsables y seguros.
                </p>

                <p>
                    Creemos que cada mascota merece atención, respeto y amor. Por eso
                    buscamos crear una experiencia cercana, organizada y accesible, donde
                    los clientes puedan agendar servicios de cuidado, registrar sus
                    mascotas y encontrar nuevos compañeros para adoptar.
                </p>
            </section>

            <section className="quienes-valores">
                <div className="valor-card rosado">
                    <i className="bi bi-heart-fill"></i>

                    <h3>Amor animal</h3>

                    <p>
                        Cada mascota recibe cariño, paciencia y atención según sus
                        necesidades.
                    </p>
                </div>

                <div className="valor-card azul-claro">
                    <i className="bi bi-shield-check"></i>

                    <h3>Seguridad</h3>

                    <p>
                        Buscamos que cada proceso de cuidado y adopción sea confiable y
                        organizado.
                    </p>
                </div>

                <div className="valor-card verde-claro">
                    <i className="bi bi-house-heart"></i>

                    <h3>Bienestar</h3>

                    <p>
                        Promovemos espacios tranquilos donde las mascotas se sientan
                        protegidas.
                    </p>
                </div>
            </section>

            <section className="mision-vision">
                <div className="mv-card">
                    <h2>Misión</h2>

                    <p>
                        Brindar un servicio digital accesible y confiable que permita
                        agendar citas para el cuidado de mascotas, gestionar procesos de
                        adopción y ofrecer un espacio seguro para dar mascotas en adopción.
                    </p>
                </div>

                <div className="mv-card">
                    <h2>Visión</h2>

                    <p>
                        Ser una plataforma líder enfocada en el cuidado y bienestar de las
                        mascotas, promoviendo la tenencia responsable y el amor por los
                        animales.
                    </p>
                </div>
            </section>

            <footer>
                <p>© 2026 La Guardería de Salem</p>
            </footer>
        </MainLayout>
    );
};

export default QuienesSomos;