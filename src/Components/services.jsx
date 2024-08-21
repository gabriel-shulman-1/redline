import logo1 from "../assets/REDLINE PNG BN 09.png"
export const Services = () =>{
    return (
        <main id="services">
        <h2 className="rubik-h2">Nuestros servicios</h2>
        <div className="ntdiv">
            <div className="tx">
                <h3 className="rubik-h3">A que nos dedicamos</h3>
                <p className="rubik-p">
                    En RedLine Internet, somos más que un simple proveedor de internet; somos el puente que conecta hogares, oficinas y negocios con el mundo. Ofrecemos soluciones de conectividad robustas y de alta velocidad, diseñadas para satisfacer las necesidades de cada cliente, desde familias que disfrutan del entretenimiento en línea hasta profesionales que trabajan de manera remota. Nuestro compromiso es proporcionar un servicio confiable, con atención personalizada y soporte técnico disponible 24/7, para que estés siempre conectado cuando más lo necesitas.    
                </p>
                <p className="rubik-p">
                    Entendemos que cada cliente es único, por eso ofrecemos planes flexibles y escalables que se adaptan a empresas de todos los tamaños, desde pequeñas startups hasta grandes corporaciones. Nuestros servicios permiten a las empresas gestionar sus operaciones sin interrupciones, facilitando videoconferencias, transmisión de datos y la colaboración en tiempo real. Con RedLine Internet, no solo obtienes un proveedor de internet, sino un socio tecnológico que impulsa tu éxito en un mundo cada vez más digital.
                </p>
            </div>
            <div className="phCont">
                <img className="ph" src={logo1} alt=""/>
            </div> 
        </div>
        
        <div className="ntdiv">
            <div className="tx">
                <h3 className="rubik-h3">Hogares</h3>
            </div>
        </div>
        
        <div className="ntdiv">
            <div className="tx">
                <h3 className="rubik-h3">Home Ofice</h3>
            </div>
        </div>
    
        <div className="ntdiv">
            <div className="tx">
                <h3 className="rubik-h3">Entretenimiento y vigilancia</h3>
            </div>
        </div>
        
        <div className="ntdiv">
            <div className="tx">
                <h3 className="rubik-h3">Empresas</h3>
            </div>
        </div> 
</main>
    )
}