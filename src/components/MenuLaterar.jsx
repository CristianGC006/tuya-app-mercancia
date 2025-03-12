import imglogo from '../assets/UsuarioIcono.png';
export default function MenuLateral(){
    return(
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
    )
}