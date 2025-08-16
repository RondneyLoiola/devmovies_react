import { ButtonRed, ButtonWhite } from "./styles"
function Button({ children, red, ...props }) { // o children é usado para receber diferentes conteúdos
    // ex: 2 botões, vão ter a mesma função, mas com o conteúdo diferente
    //<Button>Assistir Agora</Button>
    //<Button>Assistir Trailer</Button>
    //o props é para o Button buscar todas as informações restantes do botão, a exemplo do onClick
    return (
        <>
            {red ? (<ButtonRed {...props}>{children}</ButtonRed>) : <ButtonWhite {...props}>{children}</ButtonWhite>}
        </>
    )
}

export default Button