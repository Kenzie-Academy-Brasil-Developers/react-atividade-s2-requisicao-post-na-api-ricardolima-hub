import { Alert, AlertTitle } from "@material-ui/core";

const Display = ({authenticated}) => {
    
    return(
        <div>
            {authenticated ?
                (<Alert variant="filled" severity="success">
                    Requisição completa!
                </Alert>) :
                (<Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    Usuário e senha não <strong>encontrados!</strong>
                </Alert>)
            }
        </div>
    )
}

export default Display