
import Card from './Card';
import MenuLateral from './MenuLaterar';
function PanelControl() {
    let envios = [
        {
            origen: 'medellin',
            destino: 'Bogota',
            id: '123455'
        },
        {
            origen: 'Casanare',
            destino: 'Bogota',
            id: '125455'
        },
        {
            origen: 'medellin',
            destino: 'Barranquilla',
            id: '173455'
        },
    ]
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