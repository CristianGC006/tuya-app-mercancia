import imglogo from './assets/UsuarioIcono.png';
import Card from './Card';
function PanelControl(){
    return(
    <><section className="panel-control">
            <aside className="panel-control-aside">
                <div>
                    <img src={imglogo} alt="Logo" />
                </div>
                <nav>
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                </nav>
            </aside>
            <section />
            <div className="panel-control-contenido">
                <Card />
                <Card />
                <Card />
            </div>
        </section>
       
        </>
    )
}
export default PanelControl;