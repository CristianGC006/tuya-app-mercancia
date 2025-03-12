import { envios } from '../services/database';
import Card from '../components/Card';
import MenuLateral from '../components/MenuLaterar';
function PanelControl() {
    return (
        <section className="panel-control">
            <MenuLateral/>
            <section />
            <div className="panel-control-contenido">
                {
                    envios.map((envio) => {
                        return <Card info={envio} />
                    })
                }
            </div>
        </section>
    )

}
export default PanelControl;