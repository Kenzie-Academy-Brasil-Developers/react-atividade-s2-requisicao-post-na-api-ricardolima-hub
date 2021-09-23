import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, TextField } from "@material-ui/core";
import axios from "axios";

const LoginForm = ({ setAuthenticated, setShowDisplay }) => {

    const schema = yup.object().shape({
        username: yup.string().required("Campo Obrigatório"),
        password: yup.string().required("Campo Obrigatório"),
    });

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver : yupResolver(schema)
    })

    const handleForm = (data) => {
        axios
            .post("https://kenzieshop.herokuapp.com/sessions/", data)
            .then((response) => {
                setAuthenticated(true)
                setShowDisplay(true)
            })
            .catch((e) => {
                setAuthenticated(false)
                setShowDisplay(true)
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit(handleForm)}>
                <div>
                    <TextField
                        label="User Name"
                        margin="dense"
                        variant="outlined"
                        size="small"
                        color="secondary"
                        {...register("username")}
                        error={!!errors.username}
                        helperText={errors.username?.message}
                    />
                </div>
                <div>
                    <TextField
                        label="Password"
                        margin="dense"
                        variant="outlined"
                        size="small"
                        color="secondary"
                        {...register("password")}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                </div>
                <div>
                    <Button type="submit" variant="outlined" color="secondary" margin="dense">Login</Button>
                </div>
            </form>
        </>
    )
}

export default LoginForm;